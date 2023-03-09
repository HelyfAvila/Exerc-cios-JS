function Calcular(){
    let nota1 = document.getElementById('notaum');
    let nota2 = document.getElementById('notadois');
    let res = document.getElementById('res');

    if(nota1.value.length == 0 || nota2.value.length == 0){
        alert(`[ERRO] Digite um número!`)
        nota1.value = ''
        nota2.value = ''
        return;
    }else{
        let notaa1 = Number(nota1.value);
        let notaa2 = Number(nota2.value);
        let media = (notaa1 + notaa2) / 2
        res.innerHTML = `<br>A média das notas é igual a ${media}`
        if (media > 0 &&  media <= 3){
            res.innerHTML += `<br>Ou seja, REPROVADO!`
        }else if(media > 3 && media <= 7) {
            res.innerHTML += `<br>Ou seja, terá que fazer exame!`
        }else if(media > 7 && media <= 10){
            res.innerHTML += `<br>Ou seja, APROVADO, PARABÉNS!`
        }
    }
}