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

const formulario = document.getElementById('seu-id-do-formulario');

if (formulario) {
    formulario.addEventListener('submit', function(event) { 
        
        event.preventDefault(); 

       
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('tel').value;
        const email = document.getElementById('email').value;

        const regexNome = /^[A-ZÀ-ÿ][a-zA-ZÀ-ÿ']+(?:\s+(?:[a-zà-ÿ']+|[A-ZÀ-ÿ][a-zA-ZÀ-ÿ']+)+)+$/;
        const regexTelefone = /^\([1-9]{2}\) (?:9)?[0-9]{4}-[0-9]{4}$/;
        const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        if (regexNome.test(nome)) {
            if (regexTelefone.test(telefone)) {
                if (regexEmail.test(email)) {
                    
                    alert("Formulário Enviado com Sucesso!");
                    formulario.submit(); 

                } else {
                    alert("Digite um E-mail Valido");
                }
            } else {
                alert("Digite um telefone Valido (xx) 9xxxx-xxxx!!! ");
            }
        } else {
            alert("Digite um nome completo valido ex(Bruno Silva) !!! ");
        }

    }); 
}

    