const num = [1,2,3,4,5,6,7,8,9,10]

for(x in num){
    if(x == 5){
        break
    }
    console.log('x:'+num[x])

}

for(y in num){
    if( y == 5){
        continue
    }
    console.log("y:"+y+'= '+num[y])
}

// não utilizar isso em lugar nenhum, pois lembram o goto
externo: for(a in num){
    for(b in num){
        if(a == 2 && b == 3)break externo
            console.log('Par:'+a+','+b)
    }
}

console.log('Fim!')