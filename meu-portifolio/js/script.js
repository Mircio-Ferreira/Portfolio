document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Alterar Fundo';
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', function() {
        if (document.body.style.backgroundColor === 'black') {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        } else {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }
    });
});
