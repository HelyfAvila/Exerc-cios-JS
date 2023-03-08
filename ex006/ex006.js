function Calcular(){
    let num1 = document.getElementById('txtnum1');
    let num2 = document.getElementById('txtnum2');
    let op = document.getElementById('op');
    let res = document.getElementById('res');

    if(num1.value.length == 0 || num2.value.length == 0 || op.value.length == 0){
        alert(`[ERRO] Para funcionar por favor digite corretamente `)
        num1.value = ""
        num2.value = ""
        op.value = ""
        return;
    }else{
       let numero1 = Number(num1.value);
       let numero2 = Number(num2.value);
       let calculo = ''
       let calculo2 = ''
       res.innerHTML = ''
       if(op.value === "a" || op.value === "A"){ //o elemento op é um objeto do DOM e, portanto,você deve comparar 
        //  seu valor com as strings desejadas usando a propriedade value. 
        calculo = (numero1 ** numero2); //realiza o cálculo de elevação
        res.innerHTML += `O resultado desse cálculo é ${calculo}`  
       }else if(op.value === "b" || op.value === "B"){
            calculo = Math.sqrt(numero1); //realiza cálculo de raiz quadrada
            calculo2 = Math.sqrt(numero2);
            res.innerHTML += `Os resultados desse cálculos são: <br>${calculo.toFixed(2)} e ${calculo2.toFixed(2)}`
        }else if(op.value === "c" || op.value === "C"){
            calculo = Math.cbrt(numero1); //realiza cálculo de raiz cúbica
            calculo2 = Math.cbrt(numero2);
            res.innerHTML += `Os resultados desses cálculos são: <br> ${calculo.toFixed(2)} e ${calculo2.toFixed(2)} `
        }
    }
}