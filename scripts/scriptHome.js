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
        if(array.length > 0){
            array[id].Quantidade += quantidade
            window.localStorage.setItem('array', JSON.stringify(array))
        }
    }else{
        arrayRoupas[id].Quantidade += quantidade
        window.localStorage.setItem('array',JSON.stringify(arrayRoupas))
    }
   
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
function excluirCarrinho(id){
    let arrayProdutos = JSON.parse(window.localStorage.getItem('array'))
    arrayProdutos.splice(id,1)
    window.localStorage.setItem('array', JSON.stringify(arrayProdutos))
    exibirCarrinho()
}

function exibirCarrinho(){
    let carrinhoDiv = document.getElementById('carrinho')
    carrinhoDiv.innerHTML = ''
    carrinhoDiv.style.display = 'flex'
    carrinhoDiv.style.flexDirection = 'column'
    carrinhoDiv.style.alignItems ='center'
    carrinhoDiv.style.gap = '10vh'
    let width = window.innerWidth
    let total = 0
    let arrayProdutos = JSON.parse(window.localStorage.getItem('array')) || []
    let vazio = true
    for (let i = 0; i < arrayProdutos.length; i++){
        
        let produto = arrayProdutos[i]
        let valor = produto.Quantidade * produto.Preco
        total+= valor
        if(produto.Quantidade > 0){
            vazio = false
            let text = document.createElement('p');
            text.style.display = 'flex';
            text.style.justifyContent = 'space-between';
            if(width <= 750){
                text.style.flexDirection = 'column'
                text.style.gap = '2vh'
            }
            text.style.width = '80%'; 
            text.style.fontSize = '1.5em';
            /*let remove = document.createElement('button')
            remove.innerHTML = 'remover'
            remove.onclick = function() {
                excluirCarrinho(produto.Id)
            }*/
            

            let qtd = document.createElement('span');
            qtd.innerText = `${produto.Quantidade}x`;
            
            let nome = document.createElement('span');
            nome.innerText = produto.Produto;

            let preco = document.createElement('span');
            preco.innerText = `R$${valor}`;

            //text.appendChild(remove)
            text.appendChild(qtd);
            text.appendChild(nome);
            text.appendChild(preco);

            carrinhoDiv.appendChild(text);
            let totalDiv = document.getElementById('total')
            totalDiv.innerHTML = `Total a Pagar: R$${total}`
            totalDiv.style.fontSize = '1.5em'

        }
        
    }
    if(vazio){
        carrinhoDiv.innerHTML = 'Carrinho Vazio'
        carrinhoDiv.style.fontSize = '1.5em'
    }
}



