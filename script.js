// Animación de aparición de las cards al hacer scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animar las barras de habilidades cuando la card sea visible
            const skills = entry.target.querySelectorAll('.skill');
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    skill.classList.add('animate');
                }, index * 150);
            });
        }
    });
}, observerOptions);

// Observar todas las cards con clase 'reveal'
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card.reveal');
    cards.forEach(card => {
        cardObserver.observe(card);
    });
});

// Efecto parallax suave en el header
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
        header.style.opacity = 1 - scrolled / 800;
    }
});

// Animación de partículas flotantes
document.addEventListener('DOMContentLoaded', () => {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        // Posiciones aleatorias
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDelay = Math.random() * 5;
        const randomDuration = 8 + Math.random() * 7;
        
        particle.style.left = randomX + '%';
        particle.style.top = randomY + '%';
        particle.style.animationDelay = randomDelay + 's';
        particle.style.animationDuration = randomDuration + 's';
    });
});

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Ocultar scroll indicator al hacer scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollIndicator) {
        if (scrollTop > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    }
    
    lastScrollTop = scrollTop;
});

// Efecto de cursor personalizado (opcional - para navegadores de escritorio)
if (window.matchMedia("(min-width: 1024px)").matches) {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(0, 245, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease, border-color 0.2s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Cambiar cursor en elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.8)';
            cursor.style.borderColor = 'rgba(255, 0, 128, 0.8)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = 'rgba(0, 245, 255, 0.5)';
        });
    });
}

// Animación de escritura para el título (efecto typewriter)
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        title.style.opacity = '1';
        
        let index = 0;
        const typeWriter = () => {
            if (index < text.length) {
                title.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 150);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
});

// Performance: Reducir animaciones si el usuario prefiere menos movimiento
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(element => {
        element.style.animation = 'none';
        element.style.transition = 'none';
    });
}

// Log de bienvenida en consola (opcional - para desarrolladores curiosos)
console.log('%c¡Hola! 👋', 'font-size: 24px; font-weight: bold; color: #00f5ff;');
console.log('%cGracias por visitar mi portafolio', 'font-size: 14px; color: #ff0080;');
console.log('%c¿Interesado en trabajar juntos? ¡Contáctame!', 'font-size: 12px; color: #ffd700;');
