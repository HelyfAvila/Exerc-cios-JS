function Calcular(){
    let txtsal = document.getElementById('txtsal');
    let res = document.getElementById('res');
    res.innerHTML = ''
    if(txtsal.value.length == 0){
        alert(`[ERRO] Digite um valor para podermos calcular!`)
        txtsal.value = ""
        return;
    }else{
        let salario = Number(txtsal.value);
        let calculo = ''
        if(salario <= 300){
            calculo = (salario * 35/100) + salario
            res.innerHTML += `<strong>Seu novo salário é igual ${calculo}</strong>`
        }else if(salario > 300){
            calculo = (salario * 15/100) + salario
            res.innerHTML += `<strong>Seu novo salário é igual a ${calculo}</strong>`
        }
    }
}