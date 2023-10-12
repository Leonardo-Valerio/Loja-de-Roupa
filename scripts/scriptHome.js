class Roupas{
    Produto
    Preco
    Img
    Quantidade
    Id
    constructor(produto,preco,img,id){
        this.Produto = produto
        this.Preco = preco
        this.Img = img
        this.Quantidade = 0
        this.Id = id
    }
}

shirt1 = new Roupas('Camiseta Slim Preta', 120, ["../imagens/camiseta-3.jpg","../imagens/camiseta-1.jpg","../imagens/camiseta-preta.jpg","../imagens/camiseta-2.jpg"], 0);
shirt2 = new Roupas('Jaqueta Jeans',  230, ["../imagens/jaqueta-jeans-3.jpg","../imagens/jaqueta-jeans.jpg","../imagens/jaqueta-jeans-1.jpg","../imagens/jaqueta-jeans-4.jpg"], 1);
shirt3 = new Roupas('Camiseta Manga Longa Branca',  160,["../imagens/camisa-manga-longa.jpg","../imagens/camiseta-manga-longa-2.jpeg","../imagens/camiseta-manga-longa-3.jpg","../imagens/camiseta-manga-longa-4.jpg"], 2);
shirt4 = new Roupas('Moletom Preto',  200,["../imagens/moletom-preto.jpg","../imagens/moletom-preto-2.jpg","../imagens/moletom-preto-3.jpg","../imagens/moletom-preto-4.jpg"], 3);
let arrayRoupas = [shirt1,shirt2,shirt3,shirt4]
function salvarRoupas(numero){
 
    window.localStorage.setItem('produto', arrayRoupas[numero].Produto);
    window.localStorage.setItem('preco', arrayRoupas[numero].Preco);
    window.localStorage.setItem('imagem', JSON.stringify(arrayRoupas[numero].Img));
    window.localStorage.setItem('Id', arrayRoupas[numero].Id);
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
    let quantidade = Number(document.getElementById('iquantidade').value) 
    let array = JSON.parse(window.localStorage.getItem('array'))
    let id = window.localStorage.getItem('Id')
    if (array != null){
        array[id].Quantidade += quantidade
        window.localStorage.setItem('array', JSON.stringify(array))
    }else{
        arrayRoupas[id].Quantidade += quantidade
        window.localStorage.setItem('array',JSON.stringify(arrayRoupas))
    }
    let price = quantidade * window.localStorage.getItem("preco")
    window.alert(`${quantidade} un de ${window.localStorage.getItem('produto')} adicionados ao carrinho!`)
 
    
}
function abrirMenu(){
    let navbar = document.getElementById('navbar')
    if(navbar.style.display == 'none'){
        navbar.style.display = 'block'
        
    }else{
        navbar.style.display = 'none'
    }
}

function exibirCarrinho(){
    let carrinho = document.getElementById('carrinho')
    let box = document.createElement('div')
    let array = window.localStorage.getItem('array')
    let id = window.localStorage.getItem('Id')
    array[window.localStorage.getItem('Id')].Quantidade
    box.innerHTML = `${window.localStorage.getItem('produto')}, ${window.localStorage.getItem('preco')}, ${array[id].Quantidade}`
    carrinho.appendChild(box)
}
function exibirCarrinhoo() {
    let carrinhoDiv = document.getElementById('carrinho');
    
    // Limpa o conteúdo do carrinho antes de exibir os novos itens
    carrinhoDiv.innerHTML = '';
    
    let arrayProdutos = JSON.parse(window.localStorage.getItem('array')) || [];
    
    // Itera sobre cada produto no carrinho e exibe no DOM
    arrayProdutos.forEach(produto => {
        let box = document.createElement('div');
        box.innerHTML = `${produto.Produto}, ${produto.Preco}, ${produto.Quantidade}`;
        carrinhoDiv.appendChild(box);
    });
}