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

            window.open(urlWhatsApp, '_blank');
        });    
    });
});

   
let index = 0;
    const trilho = document.querySelector('.container-pets');
    const btnProximo = document.querySelector('.btn-proximo');
    const btnAnterior = document.querySelector('.btn-anterior');
    const totalPets= 10;

    if(btnProximo){
btnProximo.addEventListener('click', function() {
    if (index >= totalPets -1){
        index=0;
    }else{
    index++;
    } 
    trilho.style.transform = `translateX(${-index * 350}px)`; 
});
}
    if(btnAnterior){
btnAnterior.addEventListener('click', function() {
    if (index <= 0){
        index=totalPets-1;
        }else{
    index--;}
     trilho.style.transform = `translateX(${-index * 350}px)`;    
});
    }