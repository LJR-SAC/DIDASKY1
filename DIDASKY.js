import { callOpenRouter } from './IA.js';

const MATERIAS = {
    fisica: {
        nombre: 'Física',
        icono: '⚗️',
        color: '#c9932a',
        temas: [
            {
                id: 'mru',
                nombre: 'MRU',
                desc: 'Movimiento Rectilíneo Uniforme',
                emoji: '🚗',
                diagnosticos: [
                    { texto: "Un auto viaja a velocidad constante de 80 km/h durante 2.5 horas. ¿Qué distancia recorre?", respuesta: 200 },
                    { texto: "Un ciclista recorre 45 km en 1.5 horas. ¿Cuál es su velocidad promedio en km/h?", respuesta: 30 },
                    { texto: "Un tren recorre 360 km en 6 horas a velocidad constante. ¿Cuál es su velocidad?", respuesta: 60 },
                    { texto: "Un corredor mantiene una velocidad de 12 m/s durante 25 segundos. ¿Qué distancia corre?", respuesta: 300 },
                    { texto: "Un barco viaja a 20 km/h y recorre 100 km. ¿Cuánto tiempo tarda?", respuesta: 5 },
                    { texto: "Dos móviles se acercan: uno a 15 km/h y otro a 25 km/h. Si están separados 80 km, ¿en cuántas horas se encuentran?", respuesta: 2 },
                    { texto: "Un avión viaja a 900 km/h durante 3 horas. ¿Qué distancia recorre?", respuesta: 2700 },
                    { texto: "Una persona camina a 1.5 m/s durante 120 segundos. ¿Cuántos metros recorre?", respuesta: 180 },
                    { texto: "Un vehículo recorre 150 km a una velocidad constante de 50 km/h. ¿Cuánto tiempo invierte?", respuesta: 3 },
                    { texto: "Dos corredores se alejan: uno a 8 m/s y otro a 6 m/s. ¿Cuál es su velocidad de separación en m/s?", respuesta: 14 }
                ],
                fallbacks: [
                    { nivel: 1, texto: "Un automóvil viaja a 60 km/h durante 2 horas. ¿Qué distancia recorre?", respuesta: 120 },
                    { nivel: 2, texto: "Un ciclista recorre 45 km en 1.5 horas. ¿Cuál es su velocidad en km/h?", respuesta: 30 },
                    { nivel: 3, texto: "Un autobús recorre 18 km a velocidad constante en 24 minutos. ¿Cuál es la velocidad en km/h?", respuesta: 45 },
                    { nivel: 4, texto: "Dos ciudades están separadas 150 km. Un auto viaja a 75 km/h desde la primera ciudad. ¿Cuánto tiempo tarda en llegar?", respuesta: 2 },
                    { nivel: 5, texto: "Dos ciclistas salen simultáneamente de dos pueblos separados 42 km. Uno va a 18 km/h y el otro a 24 km/h en dirección opuesta. ¿Cuánto tiempo tardan en encontrarse?", respuesta: 1 },
                    { nivel: 6, texto: "Un tren que viaja a 90 km/h se encuentra 15 km detrás de otro que viaja a 54 km/h en la misma dirección. ¿En cuántas horas lo alcanzará?", respuesta: 0.5 },
                    { nivel: 7, texto: "Un corredor mantiene 5.2 m/s constantes. Otro sale 25 segundos después a 6.8 m/s desde el mismo punto. ¿Cuántos segundos tarda el segundo en alcanzar al primero?", respuesta: 90 },
                    { nivel: 8, texto: "Un mensajero sale a las 9:00 AM a 60 km/h hacia una sucursal a 75 km. Otro sale 30 minutos después a 75 km/h. ¿A qué hora alcanza al primero? (Responde en decimales: 10.5 = 10:30)", respuesta: 10.5 },
                    { nivel: 9, texto: "Tres puntos A, B, C están alineados. La distancia AB es 240 m y BC es 360 m. Un auto pasa por A a 20 m/s hacia C. ¿Cuánto tiempo total tarda en ir de A a C?", respuesta: 30 },
                    { nivel: 10, texto: "Un auto pasa un poste kilométrico. 8 segundos después pasa el siguiente poste, 240 metros más adelante. ¿Cuál es su velocidad en km/h?", respuesta: 108 }
                ]
            },
            {
                id: 'mruv',
                nombre: 'MRUV',
                desc: 'Movimiento Rectilíneo Uniformemente Variado',
                emoji: '⚡',
                diagnosticos:[
                    { texto: "Un auto parte del reposo y acelera a 4 m/s² durante 5 segundos. ¿Cuál es su velocidad final?", respuesta: 20 },
                    { texto: "Un objeto viaja a 10 m/s y acelera a 2 m/s² durante 6 segundos. ¿Qué velocidad alcanza?", respuesta: 22 },
                    { texto: "Una bicicleta acelera de 5 m/s a 15 m/s en 4 segundos. ¿Cuál es su aceleración?", respuesta: 2.5 },
                    { texto: "Un auto que viaja a 20 m/s desacelera a -3 m/s² durante 4 segundos. ¿Cuál es su velocidad final?", respuesta: 8 },
                    { texto: "Un objeto parte del reposo con aceleración de 6 m/s² durante 3 segundos. ¿Qué distancia recorre?", respuesta: 27 },
                    { texto: "Un vehículo acelera de 0 a 30 m/s en 10 segundos. ¿Cuál es su aceleración?", respuesta: 3 },
                    { texto: "Un móvil viaja a 8 m/s y acelera a 1.5 m/s² durante 8 segundos. ¿Cuál es su velocidad final?", respuesta: 20 },
                    { texto: "Una pelota parte del reposo y recorre 50 m en 5 segundos. ¿Cuál es su aceleración?", respuesta: 4 },
                    { texto: "Un auto desacelera de 25 m/s a 5 m/s en 4 segundos. ¿Cuál es su desaceleración?", respuesta: 5 },
                    { texto: "Un objeto acelera a 2 m/s² desde el reposo durante 7 segundos. ¿Qué distancia recorre?", respuesta: 49 }
                    ],
                fallbacks: [
                    { nivel: 1, texto: "Un auto acelera uniformemente desde el reposo con a = 2 m/s². ¿Qué velocidad alcanza en 5 segundos?", respuesta: 10 },
                    { nivel: 2, texto: "Un cuerpo parte del reposo y después de 4 segundos recorre 32 metros. ¿Cuál es su aceleración?", respuesta: 4 },
                    { nivel: 3, texto: "Un automóvil sale del reposo y acelera uniformemente a 4 m/s² durante 5 segundos. ¿Qué distancia recorre?", respuesta: 50 },
                    { nivel: 4, texto: "Un auto viaja a 20 m/s y frena uniformemente, deteniéndose en 10 segundos. ¿Cuál es su aceleración (magnitud)?", respuesta: 2 },
                    { nivel: 5, texto: "Un tren que viaja a 30 m/s ve una señal y frena uniformemente, parándose en 225 metros. ¿Cuál es su aceleración?", respuesta: 2 },
                    { nivel: 6, texto: "Un objeto parte del reposo y acelera uniformemente. Después de 120 metros su velocidad es 24 m/s. ¿Cuánto tiempo tardó?", respuesta: 10 },
                    { nivel: 7, texto: "Un vehículo acelera uniformemente desde 10 m/s a 30 m/s en 4 segundos. ¿Qué distancia recorre en ese intervalo?", respuesta: 80 },
                    { nivel: 8, texto: "Un conductor viaja a 25 m/s y frena con a = -5.5 m/s². Si un obstáculo está a 80 m, ¿logra detenerse a tiempo? (1=sí, 0=no)", respuesta: 1 },
                    { nivel: 9, texto: "En t=3s la velocidad es 12 m/s. En t=8s la velocidad es 27 m/s. Si el movimiento es uniformemente acelerado, ¿cuál es la velocidad inicial?", respuesta: 3 },
                    { nivel: 10, texto: "Un auto acelera uniformemente desde reposo. En los primeros 10 segundos recorre 100 metros. ¿Cuál es su velocidad al final de esos 10 segundos?", respuesta: 20 }
                ]
            },
            {
                id: 'caida-libre',
                nombre: 'Caída Libre',
                desc: 'Movimiento Vertical Uniformemente Acelerado',
                emoji: '🍎',
                diagnosticos: [
                    { texto: "Se deja caer una piedra desde una altura. Tarda 4 segundos en llegar al suelo. ¿Desde qué altura se lanzó? (g = 10 m/s²)", respuesta: 80 },
                    { texto: "Una pelota se deja caer y alcanza una velocidad de 30 m/s. ¿Cuánto tiempo tardó en caer? (g = 10 m/s²)", respuesta: 3 },
                    { texto: "Un objeto cae durante 5 segundos. ¿Qué velocidad alcanza? (g = 10 m/s²)", respuesta: 50 },
                    { texto: "Se deja caer una moneda desde una altura de 45 metros. ¿Cuánto tiempo tarda en caer? (g = 10 m/s²)", respuesta: 3 },
                    { texto: "Una piedra se lanza hacia abajo con velocidad inicial de 10 m/s y cae durante 2 segundos. ¿Qué velocidad alcanza? (g = 10 m/s²)", respuesta: 30 },
                    { texto: "Un objeto cae desde 20 metros de altura. ¿Cuál es su velocidad al tocar el suelo? (g = 10 m/s²)", respuesta: 20 },
                    { texto: "Se deja caer un objeto que alcanza 80 m/s. ¿Desde qué altura cayó? (g = 10 m/s²)", respuesta: 320 },
                    { texto: "Una pelota cae durante 6 segundos. ¿Qué distancia recorre? (g = 10 m/s²)", respuesta: 180 },
                    { texto: "Un objeto se lanza hacia abajo con 5 m/s desde una altura de 30 metros. ¿Cuánto tiempo tarda en caer? (g = 10 m/s²)", respuesta: 2 },
                    { texto: "Se deja caer una roca que alcanza 40 m/s. ¿Cuántos segundos tardó en caer? (g = 10 m/s²)", respuesta: 4 }
                ],
                fallbacks: [
                    { nivel: 1, texto: "Se deja caer una piedra desde una altura de 45 metros. ¿Cuánto tiempo tarda en llegar al suelo? (g=10 m/s²)", respuesta: 3 },
                    { nivel: 2, texto: "Una piedra cae libremente durante 2 segundos. ¿Con qué velocidad llega al suelo? (g=10 m/s²)", respuesta: 20 },
                    { nivel: 3, texto: "Desde una azotea se deja caer una piedra que tarda 3.5 segundos en llegar al suelo. ¿A qué altura está la azotea? (g=9.8 m/s²)", respuesta: 60.025 },
                    { nivel: 4, texto: "Se lanza una pelota hacia arriba con 20 m/s desde el piso. ¿Después de cuántos segundos regresa al piso? (g=10 m/s²)", respuesta: 4 },
                    { nivel: 5, texto: "Una pelota se lanza verticalmente hacia arriba con 22 m/s desde un techo de 45 metros. ¿Con qué velocidad impacta el suelo? (g=10 m/s²)", respuesta: 32 },
                    { nivel: 6, texto: "Un objeto se lanza hacia arriba con velocidad inicial desconocida. Alcanza 80 metros. ¿Cuál fue la velocidad inicial? (g=10 m/s²)", respuesta: 40 },
                    { nivel: 7, texto: "Desde un puente se deja caer una piedra. 2 segundos después se lanza otra hacia abajo con 18 m/s. ¿Quién llega primero y por cuántos segundos? (g=10)", respuesta: 0.6 },
                    { nivel: 8, texto: "Una pelota pasa un punto a 25 metros de altura con velocidad 15 m/s hacia arriba. ¿Cuál fue su velocidad inicial? (g=10 m/s²)", respuesta: 25 },
                    { nivel: 9, texto: "Un globo sube con velocidad constante de 5 m/s. A los 50 metros se suelta un objeto. ¿Cuánto tiempo tarda en caer al piso? (g=10 m/s²)", respuesta: 3.3 },
                    { nivel: 10, texto: "Se lanzan dos objetos desde el piso con g=10. Uno hacia arriba a 30 m/s, otro hacia arriba a 20 m/s, el segundo 1 segundo después. ¿En qué momento se encuentran?", respuesta: 5 }
                ]
            },
            {
                id: 'fuerzas-newton',
                nombre: 'Leyes de Newton',
                desc: 'Fuerza, Masa y Aceleración',
                emoji: '💪',
                diagnosticos: [
                    { texto: "¿Cuál es la fuerza necesaria para acelerar una masa de 5 kg a 4 m/s²?", respuesta: 20 },
                    { texto: "Un objeto de 2 kg es empujado con una fuerza de 16 N. ¿Cuál es su aceleración?", respuesta: 8 },
                    { texto: "¿Qué masa tiene un objeto si una fuerza de 12 N produce una aceleración de 3 m/s²?", respuesta: 4 },
                    { texto: "Una fuerza de 30 N actúa sobre una masa de 6 kg. ¿Cuál es la aceleración resultante?", respuesta: 5 },
                    { texto: "Un objeto de 10 kg experimenta una aceleración de 2 m/s². ¿Cuál es la fuerza aplicada?", respuesta: 20 },
                    { texto: "¿Qué aceleración experimenta un objeto de 8 kg si se le aplica una fuerza de 24 N?", respuesta: 3 },
                    { texto: "Una fuerza de 50 N acelera una masa desconocida a 10 m/s². ¿Cuál es su masa?", respuesta: 5 },
                    { texto: "Un objeto de 3 kg es empujado con una fuerza de 27 N. ¿Cuál es su aceleración?", respuesta: 9 },
                    { texto: "¿Qué fuerza se necesita para acelerar 7 kg a una velocidad de 6 m/s²?", respuesta: 42 },
                    { texto: "Una masa de 12 kg experimenta una fuerza de 36 N. ¿Cuál es su aceleración?", respuesta: 3 }
                ],
                fallbacks: [
                    { nivel: 2, texto: "¿Cuál es la fuerza necesaria para acelerar una masa de 5 kg a 3 m/s²?", respuesta: 15 },
                    { nivel: 3, texto: "Una fuerza de 40 N actúa sobre un objeto de 8 kg. ¿Cuál es su aceleración?", respuesta: 5 },
                    { nivel: 4, texto: "Un objeto de 12 kg se arrastra sobre una superficie con una fuerza de 60 N. ¿Cuál es su aceleración?", respuesta: 5 },
                    { nivel: 5, texto: "Dos fuerzas de 30 N y 40 N actúan sobre un objeto de 10 kg en la misma dirección. ¿Cuál es la aceleración?", respuesta: 7 },
                    { nivel: 6, texto: "Un bloque de 5 kg cuelga de una cuerda. ¿Cuál es la tensión si sube con aceleración de 2 m/s²? (g=10)", respuesta: 60 },
                    { nivel: 7, texto: "Dos bloques de 2 kg y 3 kg están conectados. Se aplica una fuerza de 15 N al sistema. ¿Cuál es la aceleración? (sin rozamiento)", respuesta: 3 },
                    { nivel: 8, texto: "Un auto de 1000 kg acelera a 2 m/s². ¿Cuál es la fuerza neta aplicada?", respuesta: 2000 },
                    { nivel: 9, texto: "Dos fuerzas perpendiculares de 12 N y 16 N actúan sobre un objeto de 4 kg. ¿Cuál es la aceleración resultante?", respuesta: 5 },
                    { nivel: 10, texto: "Un objeto de 6 kg está en una superficie inclinada 30°. ¿Cuál es la componente de peso paralela al plano? (g=10)", respuesta: 30 }
                ]
            },
            {
                id: 'trabajo-energia',
                nombre: 'Trabajo y Energía',
                desc: 'Trabajo, Energía Cinética y Potencial',
                emoji: '⚙️',
                diagnosticos: [
                    { texto: "Se realiza un trabajo de 300 J al desplazar un objeto 6 metros. ¿Cuál fue la fuerza aplicada?", respuesta: 50 },
                    { texto: "Un objeto de 4 kg se mueve a 5 m/s. ¿Cuál es su energía cinética?", respuesta: 50 },
                    { texto: "Se aplica una fuerza de 20 N para desplazar un objeto 8 metros. ¿Cuál es el trabajo realizado?", respuesta: 160 },
                    { texto: "Un objeto de 2 kg se mueve a 6 m/s. ¿Cuál es su energía cinética?", respuesta: 36 },
                    { texto: "Se realiza un trabajo de 240 J con una fuerza de 30 N. ¿Qué distancia se desplazó?", respuesta: 8 },
                    { texto: "Un cuerpo de 5 kg cae desde una altura de 10 metros. ¿Cuál es su energía potencial? (g = 10 m/s²)", respuesta: 500 },
                    { texto: "Se aplica una fuerza de 15 N para desplazar un objeto 12 metros. ¿Cuál es el trabajo?", respuesta: 180 },
                    { texto: "Un objeto de 6 kg se mueve a 4 m/s. ¿Cuál es su energía cinética?", respuesta: 48 },
                    { texto: "Se realiza un trabajo de 400 J desplazando un objeto con una fuerza de 50 N. ¿Cuál es la distancia?", respuesta: 8 },
                    { texto: "Un cuerpo de 3 kg está a una altura de 20 metros. ¿Cuál es su energía potencial? (g = 10 m/s²)", respuesta: 600 }
                ],
                fallbacks: [
                    { nivel: 3, texto: "Se aplica una fuerza de 50 N en la dirección del movimiento para desplazar un objeto 10 metros. ¿Cuál es el trabajo realizado?", respuesta: 500 },
                    { nivel: 4, texto: "Un objeto de 4 kg se mueve a 6 m/s. ¿Cuál es su energía cinética?", respuesta: 72 },
                    { nivel: 5, texto: "Un objeto de 2 kg se eleva 5 metros. ¿Cuál es su energía potencial? (g=10 m/s²)", respuesta: 100 },
                    { nivel: 6, texto: "Una fuerza de 80 N hace un trabajo de 400 J. ¿Qué distancia se recorre?", respuesta: 5 },
                    { nivel: 7, texto: "Un auto de 1500 kg acelera de 0 a 20 m/s. ¿Cuál es el cambio en su energía cinética?", respuesta: 300000 },
                    { nivel: 8, texto: "Se lanza un objeto de 1 kg hacia arriba a 10 m/s. ¿Cuál es su energía mecánica total? (g=10)", respuesta: 50 },
                    { nivel: 9, texto: "Un objeto cae desde 20 metros. ¿Con qué velocidad llega al suelo si no hay resistencia? (g=10)", respuesta: 20 },
                    { nivel: 10, texto: "Una rampa sin fricción tiene altura 10 m. Si un bloque baja desde reposo, ¿cuál es su velocidad al final? (g=10)", respuesta: 14.14 }
                ]
            }
        ]
    },
    matematicas: {
        nombre: 'Matemáticas',
        icono: '📐',
        color: '#2d5a9b',
        temas: [
            {
                id: 'ecuaciones-lineales',
                nombre: 'Ecuaciones Lineales',
                desc: 'Ecuaciones de primer grado',
                emoji: '➕',
                fallbacks: [
                    { nivel: 1, texto: "Resuelve: 2x = 10. ¿Cuál es x?", respuesta: 5 },
                    { nivel: 2, texto: "Resuelve: 3x + 5 = 14. ¿Cuál es x?", respuesta: 3 },
                    { nivel: 3, texto: "Resuelve: 2x - 8 = 12. ¿Cuál es x?", respuesta: 10 },
                    { nivel: 4, texto: "Resuelve: 5x + 3 = 2x + 12. ¿Cuál es x?", respuesta: 3 },
                    { nivel: 5, texto: "Resuelve: 4(x - 2) = 20. ¿Cuál es x?", respuesta: 7 },
                    { nivel: 6, texto: "Resuelve: 3x - 5 = x + 15. ¿Cuál es x?", respuesta: 10 },
                    { nivel: 7, texto: "Resuelve: 2(3x + 1) = 5x + 8. ¿Cuál es x?", respuesta: 2 },
                    { nivel: 8, texto: "Resuelve: (2x + 4)/3 = 6. ¿Cuál es x?", respuesta: 7 },
                    { nivel: 9, texto: "Resuelve: 3(x - 2) + 2 = 5(x + 1) - 10. ¿Cuál es x?", respuesta: 0.5 },
                    { nivel: 10, texto: "Resuelve: (3x - 5)/2 = (x + 1)/3. ¿Cuál es x?", respuesta: 2.6 }
                ]
            },
            {
                id: 'pitagoras',
                nombre: 'Teorema de Pitágoras',
                desc: 'Triángulos rectángulos',
                emoji: '📏',
                fallbacks: [
                    { nivel: 2, texto: "Un triángulo rectángulo tiene catetos 3 y 4. ¿Cuál es la hipotenusa?", respuesta: 5 },
                    { nivel: 3, texto: "Un triángulo rectángulo tiene catetos 5 y 12. ¿Cuál es la hipotenusa?", respuesta: 13 },
                    { nivel: 4, texto: "Una escalera de 10 metros se apoya en una pared, llegando a 8 metros de altura. ¿A qué distancia está la base?", respuesta: 6 },
                    { nivel: 5, texto: "Un triángulo rectángulo tiene hipotenusa 25 e hipotenusa 15. ¿Cuál es el otro cateto?", respuesta: 20 },
                    { nivel: 6, texto: "Una diagonal de un rectángulo mide 13 cm. Si un lado mide 5 cm, ¿cuál es el otro lado?", respuesta: 12 },
                    { nivel: 7, texto: "Un triángulo rectángulo tiene catetos de 9 y 12 cm. ¿Cuál es la hipotenusa?", respuesta: 15 },
                    { nivel: 8, texto: "La hipotenusa es 17 y un cateto es 8. ¿Cuál es el otro cateto?", respuesta: 15 },
                    { nivel: 9, texto: "Un cuadrado tiene lado 7. ¿Cuál es la longitud de su diagonal?", respuesta: 9.9 },
                    { nivel: 10, texto: "En un triángulo rectángulo, la altura sobre la hipotenusa divide esta en segmentos de 4 y 9. ¿Cuál es la hipotenusa?", respuesta: 13 }
                ]
            },
            {
                id: 'porcentajes',
                nombre: 'Porcentajes',
                desc: 'Cálculos porcentuales',
                emoji: '📊',
                fallbacks: [
                    { nivel: 1, texto: "¿Cuál es el 10% de 50?", respuesta: 5 },
                    { nivel: 2, texto: "¿Cuál es el 25% de 80?", respuesta: 20 },
                    { nivel: 3, texto: "Si 40 es el 20% de un número, ¿cuál es ese número?", respuesta: 200 },
                    { nivel: 4, texto: "Un producto cuesta $100 y tiene un descuento del 15%. ¿Cuál es el precio final?", respuesta: 85 },
                    { nivel: 5, texto: "Un precio sube de $50 a $65. ¿Cuál es el porcentaje de aumento?", respuesta: 30 },
                    { nivel: 6, texto: "Un artículo costaba $200 y ahora cuesta $140. ¿Cuál fue el porcentaje de rebaja?", respuesta: 30 },
                    { nivel: 7, texto: "Un inversión de $1000 crece un 5% anual durante 2 años. ¿Cuál es el valor final?", respuesta: 1102.5 },
                    { nivel: 8, texto: "De 250 estudiantes, 45% pasó un examen. ¿Cuántos estudiantes pasaron?", respuesta: 112.5 },
                    { nivel: 9, texto: "Un precio original es desconocido. Después de un 20% de descuento, cuesta $80. ¿Cuál era el precio original?", respuesta: 100 },
                    { nivel: 10, texto: "Un salario sube 8%, luego baja 5%. Si el salario final es $2280, ¿cuál era el salario inicial?", respuesta: 2222.22 }
                ]
            }
        ]
    }
};

const DIAGNOSTICO = {
    titulo: "Resuelve rápido: Un auto viaja 120 km en 2 horas. ¿Cuál es su velocidad?",
    respuesta: 60,
    tiempo: 60
};

let materiaActual = 'fisica';
let temaActual = null;
let ejercicioActual = null;
let nivelUsuario = 5.0;
let erroresCorregidos = parseInt(localStorage.getItem('didasky_score')) || 0;
let diagnosticoRealizado = localStorage.getItem('didasky_diag') === 'true';
let timerInterval = null;
let diagTimer = null;
let diagnosticoActual = null;

function $(id) { return document.getElementById(id); }

function mostrarPantalla(id) {
    ['inicioScreen', 'mapaScreen', 'ejercicioScreen', 'diagnosticoScreen', 'diagnosticoTemaScreen'].forEach(p => {
        const el = $(p);
        if (el) {
            el.classList.remove('activa');
            el.classList.add('oculta');
        }
    });
    const target = $(id);
    if (target) {
        target.classList.remove('oculta');
        target.classList.add('activa');
    }
}

function actualizarScoreUI() {
    ['scoreTop', 'scoreEjercicio'].forEach(id => {
        const el = $(id);
        if (el) el.textContent = erroresCorregidos;
    });
    const nb = $('nivelBadgeMapa');
    if (nb) nb.textContent = nivelUsuario.toFixed(1);
    const na = $('nivelActual');
    if (na) na.textContent = nivelUsuario.toFixed(1);
    const barra = $('progresoBarra');
    if (barra) barra.style.width = `${(nivelUsuario / 10) * 100}%`;
    localStorage.setItem('didasky_score', erroresCorregidos);
    localStorage.setItem('didasky_nivel', nivelUsuario);
}

function construirMapa() {
    const contenedor = $('rutaVertical');
    if (!contenedor) return;
    contenedor.innerHTML = '';
    const materia = MATERIAS[materiaActual];
    materia.temas.forEach((tema, idx) => {
        const lado = idx % 2 === 0 ? 'izq' : 'der';
        const item = document.createElement('div');
        item.className = `nodo-item ${lado}`;
        item.dataset.temaId = tema.id;
        const btnNodo = document.createElement('button');
        btnNodo.className = 'nodo-btn';
        btnNodo.dataset.idx = idx;
        btnNodo.title = tema.nombre;
        btnNodo.innerHTML = `<span>${tema.emoji}</span><span class="nodo-label-btn">${tema.nombre}</span>`;
        const lineaH = document.createElement('div');
        lineaH.className = 'nodo-linea-h';
        const card = document.createElement('div');
        card.className = 'nodo-card';
        card.innerHTML = `<h3>${tema.emoji} ${tema.nombre}</h3><p>${tema.desc}</p>`;
        if (lado === 'izq') {
            item.appendChild(btnNodo);
            item.appendChild(lineaH);
            item.appendChild(card);
        } else {
            item.appendChild(card);
            item.appendChild(lineaH);
            item.appendChild(btnNodo);
        }
        item.addEventListener('click', () => abrirPopup(tema));
        contenedor.appendChild(item);
    });
    contenedor.querySelectorAll('.nodo-item').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity .5s, transform .5s';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 + i * 100);
    });
}

function abrirPopup(tema) {
    temaActual = tema;
    $('popupIcono').textContent = tema.emoji;
    $('popupNombre').textContent = tema.nombre;
    $('popupDesc').textContent = tema.desc;
    $('nodoPopup').classList.remove('oculta');
    $('popupOverlay').classList.remove('oculta');
}

function cerrarPopup() {
    $('nodoPopup').classList.add('oculta');
    $('popupOverlay').classList.add('oculta');
}

function iniciarDiagnosticoTema() {
    if (!temaActual) return;
    cerrarPopup();
    mostrarPantalla('diagnosticoTemaScreen');
    $('diagTemaNombre').textContent = temaActual.nombre;
    $('diagTemaDesc').textContent = temaActual.desc;
    const diagnosticos = temaActual.diagnosticos || [];
    if (diagnosticos.length === 0) {
        // Si no tiene diagnósticos (por si acaso), usar un fallback simple
        diagnosticoActual = {
            texto: "Calcula: 5 + 3 * 2 = ?",
            respuesta: 11
        };
    } else {
        const seleccionado = diagnosticos[Math.floor(Math.random() * diagnosticos.length)];
        diagnosticoActual = {
            texto: seleccionado.texto,
            respuesta: seleccionado.respuesta
        };
    }
    $('diagTemaEnunciado').innerHTML = `<p>${diagnosticoActual.texto}</p>`;
    const input = $('diagTemaInput');
    input.value = '';
    input.disabled = false;
    $('diagTemaComprobar').disabled = false;
    $('diagTemaRetro').innerHTML = '';
    let tiempo = 60;
    const timerEl = $('diagTemaTimer');
    if (diagTimer) clearInterval(diagTimer);
    diagTimer = setInterval(() => {
        tiempo--;
        timerEl.textContent = tiempo;
        if (tiempo <= 0) {
            clearInterval(diagTimer);
            finalizarDiagnosticoTema(false);
        }
    }, 1000);
}

function finalizarDiagnosticoTema(exito) {
    if (diagTimer) clearInterval(diagTimer);
    const input = $('diagTemaInput');
    const retro = $('diagTemaRetro');
    input.disabled = true;
    $('diagTemaComprobar').disabled = true;
    if (exito) {
        nivelUsuario = 5.0;
        retro.innerHTML = `<div class="retro-correcto"><strong>¡Bien hecho!</strong><br>Estás en un buen nivel para este tema.</div>`;
    } else {
        const userVal = parseFloat(input.value.replace(',', '.'));
        const correcta = diagnosticoActual.respuesta;
        const diferencia = Math.abs(userVal - correcta);
        if (diferencia <= 3) {
            nivelUsuario = 2.5;
            retro.innerHTML = `<div class="retro-incorrecto"><strong>Casi...</strong><br>Empezaremos en nivel medio-bajo.</div>`;
        } else {
            nivelUsuario = 0.5;
            retro.innerHTML = `<div class="retro-incorrecto"><strong>Empecemos desde lo básico.</strong><br>Vamos a reforzar los fundamentos.</div>`;
        }
    }
    actualizarScoreUI();
    setTimeout(() => {
        mostrarPantalla('ejercicioScreen');
        const titulo = $('topbarTemaTitulo');
        if (titulo) titulo.textContent = `${temaActual.emoji} ${temaActual.nombre}`;
        cargarEjercicio();
    }, 2000);
}

async function cargarEjercicio() {
    if (!temaActual) return;
    const enunciadoEl = $('enunciadoEjercicio');
    const inputEl = $('respuestaEjercicio');
    const retroEl = $('retroalimentacion');
    const btnEl = $('comprobarEjercicio');
    enunciadoEl.innerHTML = `<div class="cargando-msg">🧭 Generando reto nivel ${nivelUsuario.toFixed(1)}...</div>`;
    inputEl.value = '';
    inputEl.disabled = false;
    retroEl.innerHTML = '';
    if (btnEl) btnEl.disabled = false;
    try {
        const prompt = `
Eres un generador de ejercicios para Didasky.
Materia: ${MATERIAS[materiaActual].nombre}
Tema: ${temaActual.nombre} — ${temaActual.desc}
Nivel: ${nivelUsuario.toFixed(1)} / 10

Genera UN ejercicio numérico ORIGINAL, largo y contextualizado.
Responde ÚNICAMENTE en este formato:

Enunciado: [problema completo con bastante texto]
Respuesta: [solo el número]
`;
        const res = await callOpenRouter(prompt);
        const matchE = res.match(/Enunciado:\s*([\s\S]+?)(?=Respuesta:)/i);
        const matchR = res.match(/Respuesta:\s*([\d.,\-]+)/i);
        if (matchE && matchR) {
            const respNum = parseFloat(matchR[1].replace(',', '.'));
            if (!isNaN(respNum)) {
                ejercicioActual = {
                    texto: matchE[1].trim(),
                    respuesta: respNum
                };
                enunciadoEl.innerHTML = `<p>${ejercicioActual.texto}</p>`;
                return;
            }
        }
    } catch (e) {
        console.warn('IA falló, usando fallback:', e.message);
    }
    const fallbacks = temaActual.fallbacks || [];
    let candidatos = fallbacks.filter(f => Math.abs(f.nivel - Math.round(nivelUsuario)) <= 2);
    if (candidatos.length === 0) candidatos = fallbacks;
    const seleccionado = candidatos[Math.floor(Math.random() * candidatos.length)];
    ejercicioActual = { texto: seleccionado.texto, respuesta: seleccionado.respuesta };
    enunciadoEl.innerHTML = `<p>${ejercicioActual.texto}</p>`;
}

function comprobarRespuesta() {
    const inputEl = $('respuestaEjercicio');
    const retroEl = $('retroalimentacion');
    const btnEl = $('comprobarEjercicio');
    const userVal = parseFloat(inputEl.value.replace(',', '.'));
    if (isNaN(userVal)) {
        retroEl.innerHTML = `<div class="retro-warning">⚠️ Ingresa un número válido.</div>`;
        return;
    }
    if (!ejercicioActual) return;
    const correcta = ejercicioActual.respuesta;
    const margen = Math.max(Math.abs(correcta * 0.10), 0.01);
    const esCorrecto = Math.abs(userVal - correcta) <= margen;
    if (esCorrecto) {
        erroresCorregidos++;
        nivelUsuario = Math.min(10, nivelUsuario + 0.5);
        retroEl.innerHTML = `<div class="retro-correcto"><strong>🎉 ¡Correcto!</strong><br>Muy bien navegante.</div>`;
        inputEl.disabled = true;
        if (btnEl) btnEl.disabled = true;
        setTimeout(cargarEjercicio, 2200);
    } else {
        nivelUsuario = Math.max(1, nivelUsuario - 0.3);
        // Mostrar botón de análisis de error (aprendizaje activo)
        retroEl.innerHTML = `
            <div class="retro-incorrecto">
                <strong>❌ No es correcto</strong><br>
                Tu respuesta: <strong>${userVal}</strong><br><br>
                <button id="pedirPistaError" class="btn-pista" style="margin-top: 12px; width:100%;">
                    🤖 Analizar mi error
                </button>
            </div>`;
        actualizarScoreUI();
        // Configurar evento del botón una vez que exista en el DOM
        setTimeout(() => {
            const btn = document.getElementById('pedirPistaError');
            if (btn) {
                btn.addEventListener('click', () => {
                    const chatBox = $('daskyChatBox');
                    const fab = $('daskyToggle');
                    if (chatBox) chatBox.classList.remove('oculta');
                    if (fab) fab.classList.add('oculta');
                    if (typeof window.enviarMensaje === 'function') {
                        window.enviarMensaje(`Analiza mi error en este ejercicio:
Ejercicio: ${ejercicioActual.texto}
Mi respuesta: ${userVal}
Respuesta correcta: ${correcta}

Por favor:
1. Explica brevemente qué tipo de error pude haber cometido (sin dar la respuesta directa).
2. Genera un ejercicio nuevo, similar al original pero enfocado en corregir ese error.
3. Dame solo el nuevo ejercicio, sin resolverlo.`);
                    }
                });
            }
        }, 100);
    }
    actualizarScoreUI();
}

function setupDasky() {
    const chatBox = $('daskyChatBox');
    const fab = $('daskyToggle');
    const closeBtn = $('daskyClose');
    const enviarBtn = $('daskyEnviar');
    const inputEl = $('daskyInput');
    const mensajesEl = $('daskyMessages');
    const toggle = () => {
        const visible = !chatBox.classList.contains('oculta');
        chatBox.classList.toggle('oculta');
        fab.classList.toggle('oculta', visible);
    };
    if (fab) fab.addEventListener('click', toggle);
    if (closeBtn) closeBtn.addEventListener('click', toggle);
    async function enviarMensaje(texto) {
        window.enviarMensaje = enviarMensaje;
        if (!texto.trim()) return;
        const msgU = document.createElement('div');
        msgU.className = 'msg-user';
        msgU.textContent = texto;
        mensajesEl.appendChild(msgU);
        const spinner = document.createElement('div');
        spinner.className = 'msg-cargando';
        spinner.textContent = '🧭 Pensando...';
        mensajesEl.appendChild(spinner);
        mensajesEl.scrollTop = mensajesEl.scrollHeight;
        const contexto = ejercicioActual
            ? `Materia: ${MATERIAS[materiaActual].nombre}. Tema: ${temaActual?.nombre}. Ejercicio: "${ejercicioActual.texto}".`
            : `Materia: ${MATERIAS[materiaActual].nombre}.`;
        const prompt = `Eres Dasky. El estudiante pregunta: "${texto}". Contexto: ${contexto}. Da SOLO una pista corta, máximo 2 oraciones. NO des la respuesta directa.`;
        try {
            const respuesta = await callOpenRouter(prompt);
            spinner.remove();
            const msgD = document.createElement('div');
            msgD.className = 'msg-dasky';
            msgD.innerHTML = `<strong>Dasky:</strong><br>${respuesta}`;
            mensajesEl.appendChild(msgD);
        } catch {
            spinner.remove();
            const msgD = document.createElement('div');
            msgD.className = 'msg-dasky';
            msgD.innerHTML = `<strong>Dasky:</strong><br>Revisa bien las variables y la fórmula base del tema.`;
            mensajesEl.appendChild(msgD);
        }
        mensajesEl.scrollTop = mensajesEl.scrollHeight;
    }
    if (enviarBtn) {
        enviarBtn.addEventListener('click', () => {
            const txt = inputEl.value.trim();
            if (txt) { enviarMensaje(txt); inputEl.value = ''; }
        });
    }
    if (inputEl) {
        inputEl.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                const txt = inputEl.value.trim();
                if (txt) { enviarMensaje(txt); inputEl.value = ''; }
            }
        });
    }
    const btnPista = $('ayudaDasky');
    if (btnPista) {
        btnPista.addEventListener('click', () => {
            chatBox.classList.remove('oculta');
            fab.classList.add('oculta');
            const pistaTxt = temaActual ? `Dame una pista para ${temaActual.nombre}.` : 'Dame una pista.';
            enviarMensaje(pistaTxt);
        });
    }
}

function realizarDiagnostico() {
    mostrarPantalla('diagnosticoScreen');
    $('diagProblema').textContent = DIAGNOSTICO.titulo;
    let tiempoRestante = DIAGNOSTICO.tiempo;
    const timerBar = $('timerBar');
    const timerText = $('timerText');
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        tiempoRestante--;
        if (timerText) timerText.textContent = tiempoRestante;
        if (timerBar) timerBar.style.width = `${(tiempoRestante / DIAGNOSTICO.tiempo) * 100}%`;
        if (tiempoRestante <= 0) {
            clearInterval(timerInterval);
            finalizarDiagnostico(false);
        }
    }, 1000);
}

function finalizarDiagnostico(resolvio) {
    if (timerInterval) clearInterval(timerInterval);
    const inputEl = $('diagRespuesta');
    const resultadoEl = $('diagResultado');
    const enviarBtn = $('diagEnviar');
    inputEl.disabled = true;
    if (enviarBtn) enviarBtn.disabled = true;
    let mensaje = '';
    if (resolvio) {
        const userVal = parseFloat(inputEl.value.replace(',', '.'));
        const margen = 3;
        if (Math.abs(userVal - DIAGNOSTICO.respuesta) <= margen) {
            nivelUsuario = 6;
            mensaje = '✅ ¡Muy bien! Comenzaremos con nivel intermedio.';
        } else {
            nivelUsuario = 4;
            mensaje = '⚠️ Respuesta cercana. Comenzaremos con nivel adaptado.';
        }
    } else {
        nivelUsuario = 3;
        mensaje = '⏱️ Tiempo agotado. Comenzaremos con nivel más básico.';
    }
    resultadoEl.innerHTML = `<p>${mensaje}</p>`;
    resultadoEl.classList.remove('oculta');
    diagnosticoRealizado = true;
    localStorage.setItem('didasky_diag', 'true');
    localStorage.setItem('didasky_nivel', nivelUsuario);
    setTimeout(() => {
        mostrarPantalla('mapaScreen');
        actualizarTopbarMateria();
        construirMapa();
        const fab = $('daskyToggle');
        if (fab) fab.classList.remove('oculta');
    }, 2000);
}

function actualizarTopbarMateria() {
    const materia = MATERIAS[materiaActual];
    const badge = $('topbarMateriaBadge');
    if (badge) badge.textContent = `${materia.icono} ${materia.nombre}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const savedNivel = parseFloat(localStorage.getItem('didasky_nivel'));
    if (!isNaN(savedNivel)) nivelUsuario = savedNivel;
    actualizarScoreUI();

    document.querySelectorAll('.materia-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.materia-btn').forEach(b => b.classList.remove('activa-materia'));
            btn.classList.add('activa-materia');
            materiaActual = btn.dataset.materia;
        });
    });

    const btnEmpezar = $('btnEmpezar');
    if (btnEmpezar) {
        btnEmpezar.addEventListener('click', () => {
            if (!diagnosticoRealizado) {
                realizarDiagnostico();
            } else {
                mostrarPantalla('mapaScreen');
                actualizarTopbarMateria();
                construirMapa();
                const fab = $('daskyToggle');
                if (fab) fab.classList.remove('oculta');
            }
        });
    }

    const diagEnviar = $('diagEnviar');
    if (diagEnviar) {
        diagEnviar.addEventListener('click', () => {
            const inputEl = $('diagRespuesta');
            if (inputEl.value.trim()) {
                finalizarDiagnostico(true);
            }
        });
    }

    const diagInputGlobal = $('diagRespuesta');
    if (diagInputGlobal) {
        diagInputGlobal.addEventListener('keydown', e => {
            if (e.key === 'Enter' && !$('diagEnviar').disabled) {
                finalizarDiagnostico(true);
            }
        });
    }

    const btnCambiar = $('btnCambiarMateria');
    if (btnCambiar) {
        btnCambiar.addEventListener('click', () => {
            mostrarPantalla('inicioScreen');
            const fab = $('daskyToggle');
            if (fab) fab.classList.add('oculta');
            const chat = $('daskyChatBox');
            if (chat) chat.classList.add('oculta');
        });
    }

    const popupEntrar = $('popupEntrar');
    if (popupEntrar) {
        popupEntrar.addEventListener('click', () => {
            if (!temaActual) return;
            iniciarDiagnosticoTema();
        });
    }

    const popupCerrar = $('popupCerrar');
    const popupOverlay = $('popupOverlay');
    if (popupCerrar) popupCerrar.addEventListener('click', cerrarPopup);
    if (popupOverlay) popupOverlay.addEventListener('click', cerrarPopup);

    const btnVolver = $('btnVolverMapa');
    if (btnVolver) {
        btnVolver.addEventListener('click', () => {
            mostrarPantalla('mapaScreen');
        });
    }

    const btnComprobar = $('comprobarEjercicio');
    if (btnComprobar) {
        btnComprobar.addEventListener('click', comprobarRespuesta);
    }

    const inputResp = $('respuestaEjercicio');
    if (inputResp) {
        inputResp.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                comprobarRespuesta();
            }
        });
    }

    const btnSaltar = $('saltarEjercicio');
    if (btnSaltar) {
        btnSaltar.addEventListener('click', () => {
            nivelUsuario = Math.max(1, nivelUsuario - 0.2);
            actualizarScoreUI();
            cargarEjercicio();
        });
    }

    const diagTemaComprobar = $('diagTemaComprobar');
    if (diagTemaComprobar) {
        diagTemaComprobar.addEventListener('click', () => {
            const input = $('diagTemaInput');
            const userVal = parseFloat(input.value.replace(',', '.'));
            if (isNaN(userVal)) {
                $('diagTemaRetro').innerHTML = `<div class="retro-warning">⚠️ Ingresa un número válido.</div>`;
                return;
            }
            const correcta = diagnosticoActual.respuesta;
            const margen = 4;
            const esCorrecto = Math.abs(userVal - correcta) <= margen;
            finalizarDiagnosticoTema(esCorrecto);
        });
    }

    const diagInputTema = $('diagTemaInput');
    if (diagInputTema) {
        diagInputTema.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                const btn = $('diagTemaComprobar');
                if (btn) btn.click();
            }
        });
    }

    setupDasky();
});