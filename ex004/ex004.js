function Calcular(){
    let num1 = document.getElementById('txtnum1');
    let num2 = document.getElementById('txtnum2');
    let res = document.getElementById('res');

    if(num1.value.length == 0 || num2.value.length == 0){
        alert(`[ERRO] Digite um número ! `)

    }else{
        let numero1 = Number(num1.value);
        let numero2 = Number(num2.value);
        res.innerHTML = ''
        if(numero1 > numero2){
            res.innerHTML += `O maior número é ${numero1}`
        }else{
            res.innerHTML += `O maior número é ${numero2}`
            if(numero1 === numero2){
                res.innerHTML = `Os números são iguais!`
            }
        }
    }
}