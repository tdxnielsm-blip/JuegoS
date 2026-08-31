// --- BANCO DE PREGUNTAS (40 PREGUNTAS SENA TRIMESTRES 1 Y 2) ---
const bancoDePreguntas = [
    // --- LÓGICA Y ALGORITMIA ---
    { q: "¿Cuál es la función del operador módulo (%) en programación?", o: ["Calcular un porcentaje", "Obtener el residuo de una división entera", "Dividir dos números decimales", "Elevar un número a una potencia"], a: 1 },
    { q: "En algoritmia, ¿cuándo se utiliza la estructura repetitiva 'mientras' (while)?", o: ["Cuando se conoce exactamente el número de repeticiones", "Cuando no se conoce con certeza la cantidad de iteraciones", "Únicamente cuando se trabajan arreglos numéricos", "Nunca, funciona exactamente igual al bucle for"], a: 1 },
    { q: "¿Qué resultado devuelve la expresión lógica: (5 > 2) && (4 < 1)?", o: ["verdadero (true)", "falso (false)", "null", "undefined"], a: 1 },
    { q: "En la mayoría de lenguajes de programación, ¿cuál es el índice inicial de un arreglo (array)?", o: ["1", "-1", "0", "Depende del tamaño"], a: 2 },
    { q: "¿Cómo se define formalmente un algoritmo?", o: ["Un programa compilado en código máquina", "Una secuencia finita, precisa y ordenada de pasos para resolver un problema", "Un diagrama exclusivo de bases de datos", "Un error de sintaxis"], a: 1 },
    { q: "¿Cuál es el propósito fundamental de realizar una prueba de escritorio a un algoritmo?", o: ["Traducir código a HTML", "Verificar la lógica y el flujo de variables manualmente antes de codificar", "Diseñar la interfaz de usuario", "Optimizar el uso de la memoria RAM"], a: 1 },
    { q: "¿Qué caracteriza a una constante respecto a una variable?", o: ["Su valor cambia en cada iteración", "Su valor asignado no se puede modificar durante la ejecución del programa", "Solo almacena cadenas de texto", "Ocupa el doble de memoria"], a: 1 },
    { q: "¿Qué estructura condicional es ideal para evaluar múltiples casos de una misma variable?", o: ["if-else", "switch / según", "while", "for-each"], a: 1 },
    { q: "¿Qué tipo de dato primitivo almacena un valor de verdad (verdadero o falso)?", o: ["String", "Integer", "Boolean", "Float"], a: 2 },
    { q: "En programación modular, ¿qué es un parámetro dentro de una función?", o: ["El valor de retorno", "Una variable de entrada que la función recibe para procesar", "El nombre asignado a la función", "Un error de compilación"], a: 1 },

    // --- HTML5 Y MAQUETACIÓN WEB ---
    { q: "¿Qué etiqueta semántica de HTML5 representa la sección de navegación principal?", o: ["<navigation>", "<nav>", "<menu>", "<header>"], a: 1 },
    { q: "¿Qué atributo es obligatorio en la etiqueta <img> para garantizar la accesibilidad web?", o: ["title", "src", "alt", "description"], a: 2 },
    { q: "¿Qué etiqueta HTML se utiliza para definir hipervínculos o enlaces?", o: ["<link>", "<a>", "<href>", "<url>"], a: 1 },
    { q: "¿Cuál es la diferencia entre <input type='checkbox'> y <input type='radio'>?", o: ["Checkbox permite selección múltiple; Radio permite seleccionar solo una opción de un grupo", "Radio permite múltiples selecciones; Checkbox solo una", "Ambos funcionan exactamente igual", "Radio solo sirve para enviar el formulario"], a: 0 },
    { q: "¿Qué etiqueta HTML se utiliza para estructurar celdas de encabezado en una tabla?", o: ["<td>", "<tr>", "<th>", "<thead_cell>"], a: 2 },
    { q: "¿Cómo se enlaza correctamente un archivo JavaScript externo a un documento HTML?", o: ["<script href='script.js'></script>", "<script src='script.js'></script>", "<link rel='javascript' href='script.js'>", "<js src='script.js'></js>"], a: 1 },
    { q: "¿Qué etiqueta semántica HTML5 representa un artículo o contenido independiente?", o: ["<section>", "<div>", "<article>", "<aside>"], a: 2 },
    { q: "¿Cómo se vincula una hoja de estilos CSS externa en el documento HTML?", o: ["<style src='estilos.css'>", "<link rel='stylesheet' href='estilos.css'>", "<css href='estilos.css'>", "<script src='estilos.css'></script>"], a: 1 },

    // --- REQUISITOS E HISTORIAS DE USUARIO ---
    { q: "¿Cuál de los siguientes es un ejemplo de Requisito No Funcional?", o: ["El sistema debe permitir registrar usuarios", "El sistema debe procesar las peticiones en menos de 2 segundos", "El usuario puede descargar reportes en PDF", "El administrador puede eliminar registros"], a: 1 },
    { q: "¿Cuál es la estructura estándar de una Historia de Usuario?", o: ["Como [Rol], quiero [Acción], para [Beneficio]", "Si [Condición], entonces [Resultado], porque [Razón]", "Entrada -> Proceso -> Salida", "Actor -> Caso de Uso -> Sistema"], a: 0 },
    { q: "En historias de usuario, ¿qué establecen los Criterios de Aceptación?", o: ["Que la funcionalidad fue codificada en el backend", "Las condiciones específicas que deben cumplirse para dar la historia por completada", "La aprobación de colores del diseño", "Que el código no requiere pruebas"], a: 1 },
    { q: "En un Diagrama de Casos de Uso UML, ¿qué indica la relación <<include>>?", o: ["Una funcionalidad condicional u opcional", "Una funcionalidad obligatoria que el caso de uso base siempre debe ejecutar", "Una herencia entre actores", "Conexión a la base de datos"], a: 1 },
    { q: "En un Diagrama de Casos de Uso, ¿qué representa la relación <<extend>>?", o: ["Una funcionalidad obligatoria y continua", "Una funcionalidad opcional que amplía la conducta del caso base según una condición", "Una conexión física de red", "La eliminación de un caso de uso"], a: 1 },
    { q: "¿Qué representa un 'Actor' en un Diagrama de Casos de Uso?", o: ["Únicamente un empleado de la organización", "Cualquier entidad externa (persona o sistema) que interactúa con el software", "Una clase en el código fuente", "El servidor donde reside la aplicación"], a: 1 },
    { q: "¿Qué técnica de elicitación requiere observar al usuario directamente en su entorno de trabajo real?", o: ["Encuestas", "Observación directa", "Lluvia de ideas", "Prototipado"], a: 1 },
    { q: "¿Qué estándar internacional se utiliza comúnmente para la Especificación de Requisitos de Software (ERS)?", o: ["ISO 9001", "IEEE 830", "ISO 27001", "IEEE 754"], a: 1 },

    // --- DIAGRAMAS DE CLASES Y POO ---
    { q: "En un Diagrama de Clases UML, ¿qué símbolo representa la visibilidad PRIVADA?", o: ["+", "-", "#", "~"], a: 1 },
    { q: "En un Diagrama de Clases UML, ¿qué símbolo representa la visibilidad PÚBLICA?", o: ["-", "#", "+", "*"], a: 2 },
    { q: "¿Qué pilar de la POO oculta la complejidad interna exponiendo datos solo mediante métodos especificos?", o: ["Herencia", "Encapsulamiento", "Polimorfismo", "Abstracción"], a: 1 },
    { q: "¿Qué pilar de la POO permite a una clase hija reutilizar atributos y métodos de una clase padre?", o: ["Herencia", "Polimorfismo", "Encapsulamiento", "Instanciación"], a: 0 },
    { q: "¿Cuál es la diferencia conceptual entre Agregación y Composición en UML?", o: ["Son términos idénticos", "En Composición la clase hija no existe sin la clase padre; en Agregación sí puede existir independientemente", "Agregación es privada y Composición es pública", "La composición solo aplica a bases de datos"], a: 1 },
    { q: "En Programación Orientada a Objetos, ¿qué es una 'Instancia'?", o: ["La plantilla estructural de la clase", "Un objeto concreto creado a partir de una clase", "Un archivo de texto plano", "Una variable exclusivamente numérica"], a: 1 },
    { q: "En un Diagrama de Clases, ¿qué indica la multiplicidad '1..*'?", o: ["De cero a uno", "Exactamente uno", "De uno a muchos", "De cero a muchos"], a: 2 },
    { q: "En UML, ¿qué símbolo representa la visibilidad PROTEGIDA?", o: ["#", "+", "-", "~"], a: 0 },

    // --- BASES DE DATOS RELACIONALES ---
    { q: "En bases de datos relacionales, ¿cuál es el propósito de la Clave Primaria (Primary Key)?", o: ["Permitir registros duplicados", "Identificar de forma única cada registro en una tabla", "Encriptar la base de datos", "Almacenar datos de tipo texto largo"], a: 1 },
    { q: "¿Qué función cumple la Clave Foránea (Foreign Key) en un modelo relacional?", o: ["Identificar de forma única la fila actual", "Vincular una tabla con la clave primaria de otra para garantizar la integridad referencial", "Acelerar la velocidad del procesador", "Sustituir la necesidad de consultas SQL"], a: 1 },
    { q: "Para cumplir con la Primera Forma Normal (1FN), los valores almacenados en cada columna deben ser:", o: ["Atómicos (indivisibles)", "Claves foráneas obligatorias", "Formatos JSON", "Nulos"], a: 0 },
    { q: "¿Cómo se resuelve una relación de Muchos a Muchos (N:M) en la fase de modelo relacional?", o: ["Se elimina una de las entidades", "Se crea una tabla intermedia que almacena las claves primarias de ambas tablas como FKs", "Se fusionan las tablas en una sola", "Se convierte en una relación 1:1"], a: 1 },
    { q: "¿A qué categoría del lenguaje SQL pertenecen los comandos CREATE, ALTER y DROP?", o: ["DDL (Data Definition Language)", "DML (Data Manipulation Language)", "DCL (Data Control Language)", "TCL (Transaction Control Language)"], a: 0 },
    { q: "¿A qué categoría del lenguaje SQL pertenecen los comandos SELECT, INSERT, UPDATE y DELETE?", o: ["DDL (Data Definition Language)", "DML (Data Manipulation Language)", "DCL (Data Control Language)", "TCL (Transaction Control Language)"], a: 1 }
];

// --- LÓGICA DEL MINIJUEGO (SALA DE PELIGRO) ---

const levels = [
    { n: "CENTINELA MK-I", hp: 300, dmg: [20, 35] },
    { n: "MASTER MOLD", hp: 500, dmg: [35, 50] },
    { n: "OMEGA SENTINEL", hp: 700, dmg: [45, 65] },
    { n: "NIMROD", hp: 1000, dmg: [60, 90] }
];

const MAX_HP = 300;
let p = { hp: MAX_HP, def: false, combo: 0 };
let lvl = 0; let boss = null; let turn = true; let askedQuestions = []; let currentQuestion = null;

function updateUI() {
    document.getElementById('p-hp').style.width = `${Math.max(0, p.hp/MAX_HP)*100}%`;
    document.getElementById('e-hp').style.width = `${Math.max(0, boss.hp/boss.mhp)*100}%`;
    document.getElementById('combo-txt').innerText = p.combo > 1 ? `COMBO x${p.combo}` : `NIVEL ${lvl + 1}`;
}

function setBtns(active) { document.querySelectorAll('.controls .btn').forEach(b => b.disabled = !active); }

function cameraFx(type) {
    const c = document.getElementById('cam');
    c.classList.add(type);
    setTimeout(() => c.classList.remove(type), type === 'shake' ? 400 : 800);
}

function createComicText(text, targetId) {
    const el = document.getElementById(targetId);
    const rect = el.getBoundingClientRect();
    const txt = document.createElement('div');
    txt.className = 'comic-text';
    txt.innerText = text;
    txt.style.left = `${rect.left + rect.width/2 - 60}px`;
    txt.style.top = `${rect.top + rect.height/2 - 60}px`;
    document.body.appendChild(txt);
    setTimeout(() => txt.remove(), 600);
}

function initLevel() {
    if(lvl >= levels.length) {
        alert("¡SALA DE PELIGRO COMPLETADA CON ÉXITO ABSOLUTO!");
        location.reload(); return;
    }
    boss = JSON.parse(JSON.stringify(levels[lvl])); boss.mhp = boss.hp;
    document.getElementById('e-name').innerText = boss.n;
    p.hp = MAX_HP; p.combo = 0; turn = true;
    updateUI(); setBtns(true);
}

function action(type) {
    if(!turn) return;
    turn = false; setBtns(false);
    
    if(type === 'def') {
        p.def = true; p.combo = 0; updateUI();
        setTimeout(bossTurn, 500);
    } 
    else if (type === 'atk') {
        p.def = false;
        const p1 = document.getElementById('p1');
        p1.classList.add('atk-slash');
        
        setTimeout(() => {
            cameraFx('shake');
            createComicText("¡SLASH!", 'p2');
            
            let dmg = 25 + (p.combo * 6);
            boss.hp -= dmg; p.combo++;
            
            document.getElementById('p2').classList.add('hit');
            updateUI();

            setTimeout(() => {
                p1.classList.remove('atk-slash');
                document.getElementById('p2').classList.remove('hit');
                setTimeout(checkState, 400);
            }, 400);
        }, 120);
    }
}

function bossTurn() {
    cameraFx('shake');
    createComicText("¡KRAK!", 'p1');
    
    let d = Math.floor(Math.random() * (boss.dmg[1] - boss.dmg[0])) + boss.dmg[0];
    if(p.def) d = Math.floor(d * 0.2); 
    
    p.hp -= d;
    document.getElementById('p1').classList.add('hit');
    updateUI();

    setTimeout(() => {
        document.getElementById('p1').classList.remove('hit');
        setTimeout(() => { turn = true; checkState(); }, 400);
    }, 300);
}

function checkState() {
    if(boss.hp <= 0) {
        setTimeout(() => { lvl++; initLevel(); }, 1000);
    } else if (p.hp <= 0) {
        alert("SISTEMA CRÍTICO. HAS SIDO DERROTADO.");
        location.reload();
    } else {
        if(!turn) setTimeout(bossTurn, 500);
        else setBtns(true);
    }
}

function openTrivia() {
    if(!turn) return;
    
    let pDisp = bancoDePreguntas.filter(pq => !askedQuestions.includes(pq.q));
    if(pDisp.length === 0) {
        askedQuestions = []; pDisp = bancoDePreguntas;
    }

    const rIdx = Math.floor(Math.random() * pDisp.length);
    currentQuestion = pDisp[rIdx];
    askedQuestions.push(currentQuestion.q);

    document.getElementById('m-q').innerText = currentQuestion.q;
    const b = document.getElementById('m-opts'); b.innerHTML = '';
    
    currentQuestion.o.forEach((op, i) => {
        const btn = document.createElement('button');
        btn.className = 'opt'; btn.innerText = op;
        btn.onclick = () => solveTrivia(i);
        b.appendChild(btn);
    });
    
    document.getElementById('modal').classList.add('active');
}

function solveTrivia(sel) {
    document.getElementById('modal').classList.remove('active');
    turn = false; setBtns(false); p.def = false;

    if(sel === currentQuestion.a) {
        cameraFx('zoom-in');
        document.body.style.filter = "saturate(3) contrast(1.4)";
        
        setTimeout(() => {
            document.getElementById('p1').classList.add('atk-slash');
            cameraFx('shake');
            createComicText("¡MEGA TAJO!", 'p2');
            
            boss.hp -= 160; p.combo += 3;
            document.getElementById('p2').classList.add('hit');
            updateUI();
            
            setTimeout(() => {
                document.body.style.filter = "none";
                document.getElementById('p1').classList.remove('atk-slash');
                document.getElementById('p2').classList.remove('hit');
                setTimeout(checkState, 600);
            }, 500);
        }, 400);
    } else {
        p.hp -= 40; p.combo = 0;
        cameraFx('shake'); 
        createComicText("¡ERROR!", 'p1');
        document.getElementById('p1').classList.add('hit');
        updateUI();
        
        setTimeout(() => {
            document.getElementById('p1').classList.remove('hit');
            setTimeout(bossTurn, 500);
        }, 500);
    }
}

// --- SECUENCIA DE INICIO (FIGHTING GAME INTRO) ---

window.addEventListener('DOMContentLoaded', () => {
    // Deshabilita los botones del panel inferior al cargar
    setBtns(false);
    
    const startBtn = document.getElementById('start-btn');
    if(startBtn) {
        startBtn.addEventListener('click', startGameIntro);
    }
});

function startGameIntro() {
    document.getElementById('intro-screen').classList.add('hidden');
    
    const announcer = document.getElementById('fight-announcer');
    if(announcer) {
        announcer.classList.remove('hidden');
        announcer.innerText = "READY?";
        announcer.classList.add('show');
        
        setTimeout(() => {
            announcer.classList.remove('show');
            // Reflow para reiniciar la animación
            void announcer.offsetWidth;
            
            announcer.innerText = "FIGHT!";
            announcer.style.color = "var(--x-red)";
            announcer.style.textShadow = "15px 15px 0 var(--x-yellow)";
            announcer.classList.add('show');
            
            setTimeout(() => {
                announcer.classList.remove('show');
                announcer.classList.add('hidden');
                initLevel(); 
            }, 1200);
            
        }, 1500);
    } else {
        initLevel();
    }
}
