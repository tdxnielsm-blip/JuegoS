// --- BANCO DE PREGUNTAS (40 PREGUNTAS: LICENCIAMIENTO DE SOFTWARE) ---
const bancoDePreguntas = [
    { q: "¿Qué significan las siglas EULA en el contexto de software?", o: ["Enterprise User License Access", "End-User License Agreement (Acuerdo de Licencia de Usuario Final)", "Electronic Utility License App", "Encrypted User Local Access"], a: 1 },
    { q: "¿Cuál es la principal diferencia entre 'Freeware' y 'Software Libre'?", o: ["El Freeware siempre tiene virus", "El Freeware es gratuito pero no permite acceder ni modificar su código fuente", "El Software Libre siempre cuesta dinero", "No hay diferencia, son exactamente lo mismo"], a: 1 },
    { q: "¿Qué tipo de licencia es el 'Shareware'?", o: ["Software de prueba que se ofrece gratis por un tiempo o con funciones limitadas", "Software de código abierto para compartir libremente", "Software que pertenece al dominio público", "Un virus disfrazado de juego"], a: 0 },
    { q: "¿Qué característica define al Software Privativo (Propietario)?", o: ["Que solo se puede usar en empresas privadas", "Que su código fuente está cerrado y restringe su modificación y redistribución", "Que es gratuito para todos", "Que obliga a liberar cualquier modificación al público"], a: 1 },
    { q: "¿Qué es el 'Copyleft'?", o: ["Un error de compilación que borra los derechos de autor", "Una práctica legal que usa los derechos de autor para garantizar que el software y sus derivados sean siempre libres", "El derecho exclusivo a copiar un software y venderlo caro", "Una licencia exclusiva de Microsoft"], a: 1 },
    { q: "¿Cuál de las siguientes es una licencia de software libre fuertemente restrictiva (Copyleft)?", o: ["Licencia MIT", "Licencia Apache", "Licencia GNU GPL (General Public License)", "EULA Comercial"], a: 2 },
    { q: "¿Qué característica principal tiene la Licencia MIT?", o: ["Es muy permisiva, permite uso comercial e cerrar el código derivado sin liberar los cambios", "Obliga a que todo el software derivado sea de código abierto", "Prohíbe estrictamente el uso comercial", "Solo se puede usar en universidades"], a: 0 },
    { q: "Si un software está en el 'Dominio Público', significa que:", o: ["Es un software pirata", "Solo lo puede usar el gobierno", "Sus derechos patrimoniales han expirado o sido renunciados, y cualquiera puede usarlo sin restricciones", "Es gratuito pero no se puede modificar"], a: 2 },
    { q: "¿Qué tipo de licencia se liga físicamente al hardware original donde se instaló y no se puede transferir a otro PC?", o: ["Retail", "OEM (Original Equipment Manufacturer)", "SaaS", "Open Source"], a: 1 },
    { q: "¿Qué modelo de distribución representa 'SaaS' (Software as a Service)?", o: ["Comprar un CD-ROM e instalarlo", "Descargar el código fuente y compilarlo", "Pagar una suscripción para usar el software alojado en la nube sin instalarlo localmente", "Un software que solo funciona con hardware libre"], a: 2 },
    { q: "¿Qué es el 'Abandonware'?", o: ["Software que desinstalas de tu PC", "Software malicioso que secuestra datos", "Software que ya no es comercializado ni recibe soporte por parte de su creador original", "Un tipo de licencia Creative Commons"], a: 2 },
    { q: "¿Qué significa que una licencia sea 'Open Source' (Código Abierto)?", o: ["Que la aplicación no tiene contraseña de seguridad", "Que el código fuente es accesible para ser estudiado, modificado y distribuido", "Que cualquiera puede robar los datos del usuario", "Que el software siempre debe ser 100% gratuito"], a: 1 },
    { q: "Las licencias Creative Commons (CC) se utilizan principalmente para:", o: ["Bases de datos SQL de uso restringido", "Patentar hardware tecnológico", "Obras creativas, documentos y recursos multimedia, estandarizando los permisos de uso", "Vender sistemas operativos"], a: 2 },
    { q: "¿Qué es el 'Adware'?", o: ["Software de edición de video avanzado", "Software gratuito que incluye publicidad obligatoria para monetizar su uso", "Una licencia gubernamental de bases de datos", "Un antivirus de código abierto"], a: 1 },
    { q: "¿Qué prohíbe explícitamente una licencia comercial típica?", o: ["Instalar el software", "Contactar a soporte técnico", "La ingeniería inversa, copia no autorizada y redistribución", "Actualizar el sistema operativo"], a: 2 },
    { q: "¿Qué organización es famosa por redactar las licencias GPL y defender el software libre?", o: ["Microsoft Corporation", "La Free Software Foundation (FSF) fundada por Richard Stallman", "La IEEE", "La W3C"], a: 1 },
    { q: "¿Qué diferencia a una licencia Retail de una OEM?", o: ["La Retail permite transferir el software a un nuevo ordenador si se desinstala del anterior", "La Retail es más barata", "La Retail no tiene manual de usuario", "La Retail caduca a los 30 días"], a: 0 },
    { q: "¿Qué es la 'Piratería de Software'?", o: ["Navegar en la deep web", "El uso, copia o distribución no autorizada de software protegido por derechos de autor", "Comprar software de segunda mano legalmente", "Usar licencias MIT en proyectos comerciales"], a: 1 },
    { q: "En licenciamiento, ¿qué son los 'Derechos Morales' de un autor?", o: ["El derecho a cobrar dinero por las ventas", "El derecho irrenunciable a ser reconocido como el creador de la obra y a proteger su integridad", "El derecho a instalar el software en 5 equipos", "El permiso para saltar el EULA"], a: 1 },
    { q: "¿Cuál es una característica distintiva de la Licencia Apache 2.0 respecto a otras licencias permisivas?", o: ["Que prohíbe su uso en servidores", "Que es obligatoria para páginas web", "Que incluye una concesión expresa y protección sobre patentes de software", "Que cobra un porcentaje de las ganancias del usuario"], a: 2 },
    { q: "¿Qué significa el acrónimo 'FOSS'?", o: ["Fast Output System Software", "Free and Open Source Software (Software Libre y de Código Abierto)", "Federal Office of Secure Systems", "Financial Open Source Service"], a: 1 },
    { q: "¿En qué consiste una licencia 'Flotante' (o Concurrente)?", o: ["Solo se puede instalar en barcos o aviones", "El software se instala en múltiples PCs, pero un servidor central limita la cantidad de usuarios que lo usan simultáneamente", "La licencia cambia de precio todos los meses", "Una licencia temporal de 30 días"], a: 1 },
    { q: "¿Qué es el Licenciamiento Dual (Dual Licensing)?", o: ["Instalar el software en un PC y una Mac al mismo tiempo", "Ofrecer el mismo software bajo dos licencias distintas (ej: una Open Source gratuita y otra Comercial de pago)", "Tener que comprar la licencia dos veces", "Licencias que duran exactamente dos años"], a: 1 },
    { q: "¿Qué es una Licencia Perpetua?", o: ["Una suscripción que no se puede cancelar jamás", "Pagas una sola vez por el derecho a usar una versión específica del software para siempre", "Un software que nunca se actualiza", "Un contrato que se renueva automáticamente cada mes"], a: 1 },
    { q: "¿Qué función cumple el DRM (Digital Rights Management) en el software?", o: ["Acelerar la velocidad de descarga", "Tecnología diseñada para controlar el acceso, evitar copias no autorizadas y hacer cumplir las reglas de licenciamiento", "Mejorar la interfaz gráfica del usuario", "Eliminar virus del sistema operativo"], a: 1 },
    { q: "¿Para qué está diseñada específicamente la licencia AGPL (Affero GPL)?", o: ["Para software instalado exclusivamente en discos locales", "Para obligar a quienes ofrecen el software libre como un servicio web (SaaS) a liberar también sus modificaciones", "Para licenciar hardware físico", "Para privatizar código abierto"], a: 1 },
    { q: "La licencia CC0 (Creative Commons Zero) equivale funcionalmente a:", o: ["Una licencia OEM", "Dedicar la obra al Dominio Público, renunciando a todos los derechos de autor posibles", "Prohibir el uso comercial de la obra", "Una patente internacional"], a: 1 },
    { q: "¿Qué es una licencia por volumen (Volume Licensing)?", o: ["Una licencia cuyo precio depende de cuántos GB pesa el software", "Una única clave de licencia que permite a una empresa instalar el software en decenas o cientos de equipos simultáneamente", "Una licencia para software de edición de audio", "Software que solo permite almacenar mucha información"], a: 1 },
    { q: "¿Qué significa que el código fuente sea 'Source-Available' pero NO 'Open Source'?", o: ["Que el código está escrito a mano", "Que puedes ver el código fuente, pero la licencia restringe cosas clave como el uso comercial o la redistribución", "Que es obligatorio donar dinero al autor", "Que el código no compila y requiere arreglos"], a: 1 },
    { q: "¿Qué es una CAL (Client Access License) en entornos de red?", o: ["Un permiso de administrador para borrar la base de datos", "Una licencia que permite a un equipo o usuario cliente conectarse legalmente a los servicios de un software de servidor", "Un antivirus de red local", "El protocolo de conexión de internet"], a: 1 },
    { q: "¿Qué diferencia a la Licencia BSD de la GPL?", o: ["BSD es de pago y GPL es gratuita", "BSD es permisiva (puedes cerrar el código derivado), mientras que GPL exige que los derivados sigan siendo libres", "BSD es solo para juegos y GPL para sistemas", "GPL permite cerrar el código y BSD no"], a: 1 },
    { q: "¿Qué es una Cláusula de Auditoría en un contrato comercial de software?", o: ["El permiso del usuario para hackear el software", "Una condición que permite al desarrollador revisar los sistemas del cliente para asegurar que no exceden los límites de la licencia", "Un test de rendimiento", "La obligación de enviar reportes de errores (bugs)"], a: 1 },
    { q: "Según la FSF, la 'Libertad 0' del software libre permite:", o: ["Ejecutar el programa con cualquier propósito, sin restricciones", "Modificar el código fuente", "Redistribuir el programa", "Cobrar dinero por el software"], a: 0 },
    { q: "¿Qué es el modelo 'Freemium' de licenciamiento?", o: ["Pagar un premium para obtener software libre", "El software base se ofrece gratis de forma permanente, pero las características avanzadas o 'Premium' requieren pago", "Software pirata de alta calidad", "Un seguro de mantenimiento para el software"], a: 1 },
    { q: "¿Por qué la mayoría de los acuerdos EULA incluyen un 'Disclaimer of Warranty' (Exención de Garantía)?", o: ["Porque el software nunca tiene errores", "Para liberar al creador de responsabilidades legales por daños, pérdida de datos o fallos provocados por el uso del software", "Para garantizar la devolución del dinero", "Para obligar al usuario a usar antivirus"], a: 1 },
    { q: "¿En qué consiste una licencia ligada a nodo (Node-locked)?", o: ["Se puede instalar en cualquier PC en la red mundial", "La licencia está atada a un identificador único del hardware (como la dirección MAC) y solo funcionará en esa máquina", "Es una licencia para servidores de la NASA", "Permite que cualquier persona en la red la use"], a: 1 },
    { q: "¿Qué motivó la creación de la GPL versión 3 (GPLv3)?", o: ["Hacer el software más rápido", "Cerrar lagunas legales de la v2 relacionadas con patentes de software, DRM y la 'Tivoización' (hardware que bloquea software modificado)", "Prohibir que el software libre se use en Windows", "Cobrar por el uso del pingüino de Linux"], a: 1 },
    { q: "¿Qué sucede cuando un EULA estipula licenciamiento 'Per-Core' (por núcleo)?", o: ["El software funciona mejor en procesadores antiguos", "El costo de la licencia de servidor aumenta dependiendo de cuántos núcleos físicos o virtuales tenga el procesador donde se instale", "Solo permite ejecutar un proceso a la vez", "Es exclusivo de Apple"], a: 1 },
    { q: "¿Qué significa 'hacer un Fork' (bifurcación) de un proyecto Open Source?", o: ["Borrar el repositorio de GitHub", "Tomar una copia del código fuente y comenzar a desarrollarlo de manera paralela e independiente al proyecto original", "Traducir el programa a otro idioma", "Hackear el servidor del creador"], a: 1 },
    { q: "¿Qué implica el modelo 'Pay-per-use' (Pago por uso) en servicios en la nube?", o: ["Pagar una tarifa fija al mes sin importar cuánto lo uses", "No se paga por la propiedad del software, sino por la cantidad exacta de recursos consumidos (ej. tiempo de procesamiento o peticiones web)", "Solo pagar cuando el software se daña", "Una licencia vitalicia gratuita"], a: 1 }
];

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
        alert("¡JUEGO COMPLETADO! ERES UN MUTANTE NIVEL OMEGA EN LICENCIAMIENTO.");
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
        alert("GAME OVER. CONTINUAR? [9... 8...]");
        location.reload();
    } else {
        if(!turn) setTimeout(bossTurn, 500);
        else setBtns(true);
    }
}

function openTrivia() {
    if(!turn) return;
    
    let pDisp = bancoDePreguntas.filter(pq => !askedQuestions.includes(pq.q));
    if(pDisp.length === 0) { askedQuestions = []; pDisp = bancoDePreguntas; }

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

// --- SECUENCIA DE INICIO (STREET FIGHTER VIBES) ---
window.addEventListener('DOMContentLoaded', () => {
    setBtns(false);
    const startBtn = document.getElementById('start-btn');
    if(startBtn) {
        startBtn.addEventListener('click', startGameIntro);
    }
});

function startGameIntro() {
    // 1. Ocultar pantalla VS
    const introScreen = document.getElementById('intro-screen');
    introScreen.style.opacity = '0';
    setTimeout(() => { introScreen.style.display = 'none'; }, 300);
    
    // 2. Animar el anunciador tipo Arcade
    const announcer = document.getElementById('fight-announcer');
    
    setTimeout(() => {
        announcer.classList.remove('hidden');
        announcer.innerText = `NIVEL 1`;
        announcer.className = 'sf-announcer slide-in';
        
        setTimeout(() => {
            // Desliza hacia afuera
            announcer.className = 'sf-announcer slide-out';
            
            setTimeout(() => {
                // FIGHT! EXPLOSIVO en el centro
                announcer.innerText = "FIGHT!";
                announcer.className = 'sf-announcer fight-pop';
                cameraFx('shake'); // Temblor de cámara
                
                setTimeout(() => {
                    announcer.className = 'sf-announcer hidden';
                    initLevel(); 
                }, 1000);
                
            }, 300);
        }, 1200);
    }, 500);
}
