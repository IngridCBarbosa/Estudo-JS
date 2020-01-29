const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

Array.prototype.meuForeach =  function(callBack){
    for(let i = 0; i < this.length; i++){
        callBack(this[i], i,this)
    }
}

aprovados.meuForeach(function(nome,indice){
    console.log((indice+1)+") " +nome)
})
