function Calcular(){ //Feito por Helyf Avila
    let txtsal = document.getElementById('txtsal');
    let res = document.getElementById('res');
    res.innerHTML = ""
    

    if(txtsal.value.length == 0){
        alert(`[ERRO] Necessário que seja digitado valor para calcular !`)
        txtsal.value = ""
        return;
    }else{
        let salario = Number(txtsal.value);
        let salat = '';
        if(salario < 500){
            salat = (salario * 30/100) + salario
            res.innerHTML += `<strong>Seu salário será atualizado para ${salat.toFixed(2)}</strong>`
        }else{
            res.innerHTML += `<strong>Seu salário infelizmente não será atualizado no momento!</strong>`
        }
    }
}