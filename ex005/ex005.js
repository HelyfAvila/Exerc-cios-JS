function Calcular(){ //Feito por Helyf Avila
    let num1 = document.getElementById('txtnum1');
    let num2 = document.getElementById('txtnum2');
    let op = document.getElementById('txtop');
    let res = document.getElementById('res');
    
    
    if(num1.value.length == 0 || num2.value.length ==0 || op.value.length == 0 ){
        alert(`[ERRO] Digite um valor válido por favor!`) 
        return;
    
    }else{
        let numero1 = Number(num1.value);
        let numero2 = Number(num2.value);
        let opc = Number(op.value);
        let calculo = ''
        res.innerHTML = ''
        if(opc == "1"){
            calculo = (numero1 + numero2) / 2
            res.innerHTML += `O resultado do cálculo é igual a ${calculo}` 
        }else if(opc == "2"){
            if(numero1 > numero2){
                calculo = (numero1 - numero2)
                res.innerHTML += `O resultado do cálculo é igual a ${calculo}`
            }else{
                calculo = (numero2 - numero1)
                res.innerHTML += `O resultado do cálculo é igual a ${calculo}`
            }
        }else if(opc == "3"){
            calculo = (numero1 * numero2)
            res.innerHTML += `O resultado do cálculo é igual a ${calculo}`
        
        }else if(opc == "4"){
            if(numero2 != "0"){
                calculo = (numero1 / numero2);
                res.innerHTML += `O cálculo é igual a ${calculo}`
            }else{
                alert(`Não é possível calcular pois o 2° número deve ser maior que 0`)
            }
        }
    } 

    
}