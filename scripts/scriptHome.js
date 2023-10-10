class Roupas{
    Produto
    Preco
    Img
    constructor(produto,preco,img){
        this.Produto = produto
        this.Preco = preco
        this.Img = img
    }
}
class Items{
    Produto
    Preco
    Quantidade
    constructor(produto,preco,quantidade){
        this.Produto = produto
        this.Preco = preco
        this.Quantidade = quantidade
    }
}
shirt1 = new Roupas('Camiseta Slim Preta', 120, ["../imagens/camiseta-3.jpg","../imagens/camiseta-1.jpg","../imagens/camiseta-preta.jpg","../imagens/camiseta-2.jpg"]);
shirt2 = new Roupas('Jaqueta Jeans',  230, ["../imagens/jaqueta-jeans-3.jpg","../imagens/jaqueta-jeans.jpg","../imagens/jaqueta-jeans-1.jpg","../imagens/jaqueta-jeans-4.jpg"]);
shirt3 = new Roupas('Camiseta Manga Longa Branca',  160,["../imagens/camisa-manga-longa.jpg","../imagens/camiseta-manga-longa-2.jpeg","../imagens/camiseta-manga-longa-3.jpg","../imagens/camiseta-manga-longa-4.jpg"]);
shirt4 = new Roupas('Moletom Preto',  200,["../imagens/moletom-preto.jpg","../imagens/moletom-preto-2.jpg","../imagens/moletom-preto-3.jpg","../imagens/moletom-preto-4.jpg"]);
let arrayRoupas = [shirt1,shirt2,shirt3,shirt4]
function salvarRoupas(numero){
 
    window.localStorage.setItem('produto', arrayRoupas[numero].Produto);
    window.localStorage.setItem('preco', arrayRoupas[numero].Preco);
    window.localStorage.setItem('imagem', JSON.stringify(arrayRoupas[numero].Img));
    window.location.href = "comprar.html";
    
}



 
function nomeProduto(){
    document.getElementById('roupa').textContent = window.localStorage.getItem('produto')
    document.getElementById('valor').textContent = window.localStorage.getItem('preco')
    let imagens = JSON.parse(window.localStorage.getItem("imagem"))
    for (let i = 1;i <= 4;i++){
        let imgElement = document.getElementById(`img${i}`)
        imgElement.style.backgroundImage = `url(${imagens[i - 1]})`
        imgElement.style.backgroundSize = 'cover'
        imgElement.style.backgroundPosition = 'center'
        imgElement.style.boxShadow = '0px  3px 4px 4px rgba(0, 0, 0, 0.093)'
        imgElement.addEventListener("mouseover",function(){
            imgElement.style.transitionDuration = '0.5s'
            imgElement.style.boxShadow = '0px  2px 5px 5px rgba(0, 0, 0, 0.371)'
            imgElement.style.borderRadius = '10px'
            imgElement.style.cursor = 'pointer'
        })
        imgElement.addEventListener("mouseout",function(){
            imgElement.style.transitionDuration = '0.5s'
            imgElement.style.boxShadow = '0px  3px 4px 4px rgba(0, 0, 0, 0.093)'
            imgElement.style.borderRadius = '0px'
            imgElement.style.cursor = 'default'
        })
    }
    

}
function inverterImg(id){
    let imagens = JSON.parse(window.localStorage.getItem("imagem"))
    let temp = imagens[0]
    imagens[0] = imagens[id]
    imagens[id] = temp
    window.localStorage.setItem("imagem", JSON.stringify(imagens))
    nomeProduto()
}
function somar(){
    let quantidade = document.getElementById('iquantidade').value 
    let price = quantidade * window.localStorage.getItem("preco")
    let arrayProduto = [quantidade,window.localStorage.getItem('produto'),price]
    let arrayCarrinho = [arrayProduto]
    window.localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho))
    window.alert(`${quantidade} un de ${window.localStorage.getItem('produto')} adicionados ao carrinho!`)
    console.log(price)  
    
}
function abrirMenu(){
    let navbar = document.getElementById('navbar')
    if(navbar.style.display == 'none'){
        navbar.style.display = 'block'
        
    }else{
        navbar.style.display = 'none'
    }
}
