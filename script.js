const cartaDiv = document.querySelector('.carta');
        const modal = document.getElementById('meu-modal');

        cartaDiv.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        function fecharModal() {
            modal.style.display = 'none';
        }