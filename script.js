// Generador de lluvia de pétalos suaves
function createPetals() {
    const container = document.getElementById('petals-container');
    const petalCount = 22;

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        const size = Math.random() * 14 + 12;
        petal.style.width = `${size}px`;
        petal.style.height = `${size * 1.5}px`;
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDuration = `${Math.random() * 8 + 6}s`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(petal);
    }
}

// Lógica para abrir/cerrar carta
let envelopeOpen = false;
function toggleEnvelope() {
    const closedState = document.getElementById('envelope-closed-state');
    const openState = document.getElementById('envelope-open-state');
    const card = document.getElementById('envelope-card');

    if (!envelopeOpen) {
        closedState.classList.add('hidden');
        openState.classList.remove('hidden');
        card.classList.remove('cursor-pointer');
        triggerConfettiSoft();
        envelopeOpen = true;
    }
}

// Desplegar bendición
function revealWish(element, message) {
    const display = document.getElementById('wish-display');
    display.innerText = `✨ "${message}"`;
    display.classList.remove('hidden');
    
    element.classList.add('ring-4', 'ring-goldMain');
    setTimeout(() => {
        element.classList.remove('ring-4', 'ring-goldMain');
    }, 1200);
}

// Control de Música
const audio = document.getElementById('bg-audio');
const musicIcon = document.getElementById('music-icon');
const musicText = document.getElementById('music-text');
const audioPlayIcon = document.getElementById('audio-play-icon');
let isPlaying = false;

function toggleAudio() {
    if (isPlaying) {
        audio.pause();
        musicIcon.className = "fas fa-music text-goldMain";
        musicText.innerText = "Música de Fondo";
        audioPlayIcon.className = "fas fa-play ml-1 text-xl";
        isPlaying = false;
    } else {
        audio.play().then(() => {
            musicIcon.className = "fas fa-pause text-roseDust";
            musicText.innerText = "Pausar Música";
            audioPlayIcon.className = "fas fa-pause text-xl";
            isPlaying = true;
        }).catch(() => {
            console.log("Auto-play prevenido por el navegador.");
        });
    }
}

// Celebración con Confeti Dorado y Rosa
function triggerCelebration() {
    confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#E4A0A7', '#9E3A4B', '#F7E7A9']
    });
}

function triggerConfettiSoft() {
    confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#E4A0A7', '#9E3A4B']
    });
}

// Inicializar al cargar la página
window.onload = function() {
    createPetals();
};