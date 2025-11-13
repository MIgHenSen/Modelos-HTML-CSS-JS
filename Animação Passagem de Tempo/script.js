document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('container');
            const fadeOverlay = document.getElementById('fade-overlay');
            const particlesContainer = document.querySelector('.particles');

            // Gerar partículas de fundo
            function createParticles() {
                for (let i = 0; i < 30; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('particle');
                    const size = Math.random() * 10 + 5; // Tamanho entre 5px e 15px
                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;

                    const xStart = Math.random() * 100 + 'vw';
                    const yStart = Math.random() * 100 + 'vh';
                    const xEnd = Math.random() * 100 + 'vw';
                    const yEnd = Math.random() * 100 + 'vh';

                    particle.style.setProperty('--x-start', xStart);
                    particle.style.setProperty('--y-start', yStart);
                    particle.style.setProperty('--x-end', xEnd);
                    particle.style.setProperty('--y-end', yEnd);
                    particle.style.animationDelay = `${Math.random() * -15}s`; // Atrasos negativos para ciclos variados
                    
                    particlesContainer.appendChild(particle);
                }
            }
            createParticles();

            // Duração total da animação da linha de progresso
            const lineAnimationDuration = 5000; // 5 segundos

            // Atraso para o fade-out final (opcional)
            setTimeout(() => {
                fadeOverlay.classList.add('fade-out-animation');
                // Opcional: redirecionar ou mostrar mais conteúdo após o fade-out
                // setTimeout(() => {
                //     window.location.href = 'proxima_pagina.html';
                // }, 1000); // Espera o fade-out terminar para redirecionar
            }, lineAnimationDuration + 1500); // 1.5s depois que a linha termina
        });