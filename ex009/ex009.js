function Calcular(){
    let txtsald = document.getElementById('txtsald');
    let res = document.getElementById('res');
    res.innerHTML = ''
    if(txtsald.value.length == 0){
        alert(`[ERRO] Digite um valor, por gentileza!`)
    }else{
        let saldom = Number(txtsald.value);
        let saldcred = ''
        if(saldom <= 200){
            saldcred = (saldom * 10/100)
            res.innerHTML += `<strong>O valor do saldo médio é R$${saldom} e o valor do crédito é igual a R$${saldcred}</strong>`
        }else if(saldom > 200 && saldom <= 300){
            saldcred = (saldom * 20/100)
            res.innerHTML += `<strong>O valor do saldo médio é R$${saldom} e o valor do crédito é igual a R$${saldcred}</strong>`
        }else if(saldom > 300 && saldom <= 400){
            saldcred = (saldom * 25/100)
            res.innerHTML += `<strong>O valor do saldo médio é R$${saldom} e o valor do crédito é igual a R$${saldcred}</strong>`
        }else if (saldom > 400){
            saldcred = (saldom * 30/100)
            res.innerHTML += `<strong>O valor do saldo médio é R$${saldom} e o valor do crédito é igual a R$${saldcred}</strong>`
        }
    }
}