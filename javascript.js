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

document.addEventListener('DOMContentLoaded', function(){
    const botoesAdotar = document.querySelectorAll(".btn-adotar-pet");

    botoesAdotar.forEach(botao=>{
        botao.addEventListener('click', function(event){
            event.preventDefault();

            const nomePet =this.getAttribute('data-pet');
            const numeroLarTemporario = this.getAttribute('data-phone');

            const mensagem = encodeURIComponent(` Oi! Vi o(a) ${nomePet} no site MieAU e gostaria de saber como posso adotar!`);
            const urlWhatsApp = `https://wa.me/${numeroLarTemporario}?text=${mensagem}`;

            window.open(urlWhatsApp, 'blank');
        });    
    });
});


document.addEventListener('DOMcontent loaded', function(){
    const botaoEnviar =document.querySelectorAll(".submit");
    botao.addEventListener('click'), function(event){
        event.prevevntDefault();

        const nome=getElementById('nome');
        if nome <= 3;
        elif nome =(" ");
        addEventListener("Preencha com nome valido")
        else=
    }
}