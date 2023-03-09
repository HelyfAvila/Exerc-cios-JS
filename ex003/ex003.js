function Calcular(){
    let num1 = document.getElementById('txtnum1');
    let num2 = document.getElementById('txtnum2');
    let res = document.getElementById('res');

    if(num1.value.length == 0 || num2.value.length ==0){
        alert(`[ERRO] Impossível calcular, digite um número!`)
        num1.value = ''
        num2.value = ''
        return;
    }else{
        let numero1 = Number(num1.value);
        let numero2 = Number(num2.value);
        res.innerHTML = '' 
        if(numero1 > numero2){
            res.innerHTML += `O menor número é ${numero2}`
        }else{
            res.innerHTML += `O menor número é ${numero1}`
            if(numero1 === numero2){
                res.innerHTML = `São números iguais!`
            }
        }
    }
}