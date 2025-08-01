// Crear flores flotantes
function createFlowers() {
    const flowers = ['💜', '🌸', '🌺', '🌼', '🌷', '🏵️'];
    const container = document.querySelector('body');
    
    for (let i = 0; i < 100; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = Math.random() * 100 + 'vh';
        flower.style.animationDuration = 5 + Math.random() * 10 + 's';
        flower.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(flower);
    }
}

// Crear corazones que caen
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '💜';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = 5 + Math.random() * 10 + 's';
        heartsContainer.appendChild(heart);
        
        // Eliminar corazones después de que caigan
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }, 300);
}

// Mostrar carta al hacer clic en el botón
document.getElementById('openBtn').addEventListener('click', function() {
    const letterContainer = document.getElementById('letterContainer');
    const btn = this;
    
    if (letterContainer.classList.contains('show-letter')) {
        letterContainer.classList.remove('show-letter');
        setTimeout(() => {
            letterContainer.style.display = 'none';
        }, 800);
        btn.textContent = 'Abre Tu Cartita 💜';
    } else {
        letterContainer.style.display = 'block';
        setTimeout(() => {
            letterContainer.classList.add('show-letter');
            // Scroll al inicio cuando se abre
            letterContainer.scrollTop = 0;
        }, 10);
        btn.textContent = 'Cierra Tu Cartita 💜';
        
        // Efecto de confeti
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = Math.random() > 0.5 ? '💜' : '🌸';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = 2 + Math.random() * 3 + 's';
                document.getElementById('hearts').appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 5000);
            }, i * 100);
        }
    }
});

// Inicializar efectos
window.onload = function() {
    createFlowers();
    createHearts();
    
    // Precargar imagen
    const img = new Image();
    img.src = 'mochis.png';
};