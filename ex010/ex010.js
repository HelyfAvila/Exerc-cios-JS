function Calcular(){
    let txtprec = document.getElementById('txtprec');
    let res = document.getElementById('res');
    res.innerHTML = ''
    if(txtprec.value.length == 0){
        alert(`[ERRO] Por favor, digite um número !`)
    }else{
        let preco = Number(txtprec.value);
        let distri = ''
        let impost = ''
        let precoat = ''
        if(preco <= 12000){
            distri = (preco * 5/100);
            precoat = (preco + distri)
            res.innerHTML += `<strong>A única taxa inclusa ao seu veículo para compra é a do distribuidor que é um valor de R$${distri} e o preço atualizado será R$${precoat}. Nesse caso, é isento impostos.</strong> `
        }else if(preco > 12000 && preco <= 25000){
            distri = (preco * 10/100);
            impost = (preco * 15/100);
            precoat = (preco + distri + impost)
            res.innerHTML += `<strong>As taxas que serão cobradas são as de distribuidor com valor R$${distri} e o imposto de R$${impost}, totalizando um valor total de compra do veículo de R$${precoat}</strong>`
        }else if (preco > 25000){
            distri = (preco * 15/100);
            impost = (preco * 20/100);
            precoat = (preco + distri + impost);
            res.innerHTML += `<strong>As taxas que serão cobradas são as de distribuidor com valor R$${distri} e o imposto de R$${impost}, totalizando um valor total de compra do veículo de R$${precoat}</strong>`
        }
    }
}