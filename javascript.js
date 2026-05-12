document.addEventListener('DOMContentLoaded', function() {
    const btnDoar = document.getElementById('btn-doe');

    if (btnDoar) {
        btnDoar.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o link de tentar navegar
            
            const numero = "551124053877"; 
            const mensagem = encodeURIComponent("Oi! Estava olhando o site e gostaria de saber como posso doar para o projeto. ❤️");
            const urlWhatsApp = `https://wa.me/${numero}?text=${mensagem}`;
            
            // Abre o WhatsApp em uma nova aba
            window.open(urlWhatsApp, '_blank');
        });
    }
});