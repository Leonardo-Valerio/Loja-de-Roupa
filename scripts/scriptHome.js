 
function salvarCamisetaSlimPreta(){
    window.localStorage.setItem('produto','Camiseta Slim Preta')
    window.localStorage.setItem('preco','R$120')
    window.location.href = "comprar.html"
} 
function salvarCamisetaTectelPreta(){
    window.localStorage.setItem('produto','Camiseta Tectel Preta')
    window.localStorage.setItem('preco','R$110')
    window.location.href = "comprar.html"
} 
function salvarCamisetaMangaLonga(){
    window.localStorage.setItem('produto','Camiseta Manga Longa Branca')
    window.localStorage.setItem('preco','R$160')
    window.location.href = "comprar.html"
} 
function salvarMoletomPreto(){
    window.localStorage.setItem('produto','Moletom Preto')
    window.localStorage.setItem('preco','R$200')
    window.location.href = "comprar.html"
} 
 
function nomeProduto(){
    document.getElementById('roupa').textContent = window.localStorage.getItem('produto')
    document.getElementById('valor').textContent = window.localStorage.getItem('preco')
}