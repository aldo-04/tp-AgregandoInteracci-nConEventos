window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let input = document.querySelector('#titulo');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener("mouseover",()=>{
        titulo.style.color ="red"
    })
    let estadoSecreto
    input.addEventListener("keypress",e=>{
        switch (true) {
                case e.key == "s":
                 estadoSecreto = 1
                 break;
                case estadoSecreto == 1:
                    e.key == "e" ? estadoSecreto = 2 : estadoSecreto = 0
                    break;
                case estadoSecreto == 2 :
                    e.key == "c" ? estadoSecreto = 3 : estadoSecreto = 0
                    break;
                case estadoSecreto == 3 :
                    e.key == "r" ? estadoSecreto = 4 : estadoSecreto = 0
                    break;
                case estadoSecreto == 4 :
                    e.key == "e" ? estadoSecreto = 5 : estadoSecreto = 0
                    break;
                case estadoSecreto == 5 :
                    e.key == "t" ? estadoSecreto = 6 : estadoSecreto = 0
                    break;
                case estadoSecreto == 6 :
                    e.key == "o" ? alert("SECRETO MAGICOOOOOO") : estadoSecreto = 0
                break;
        default:
            estadoSecreto = 0
            break;
    }
    })
    
}