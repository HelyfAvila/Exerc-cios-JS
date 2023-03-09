function Calcular(){ //Feito Por Helyf Avila
    let notaum = document.getElementById('nota1');
    let notadois = document.getElementById('nota2');
    let notatres = document.getElementById('nota3');
    let notaquatro = document.getElementById('nota4');
    let res = document.getElementById('res');


    if(notaum.value.length == 0 || notadois.value.length == 0 || notatres.value.length == 0  || notaquatro.value.length == 0 ){
        alert(`[ERRO] é necessário digitar um número! `)
        notaum.value = ''
        notadois.value = ''
        notatres.value = ''
        notaquatro.value = ''
        return;
    }else{
        let notaa1 = Number(notaum.value); 
        let notaa2 = Number(nota2.value);
        let notaa3 = Number(notatres.value);
        let notaa4 = Number(notaquatro.value);
        let media = (notaa1 + notaa2 + notaa3 + notaa4) / 4
        res.innerHTML = ` A média desse aluno é ${media.toFixed(2)}`        
        if(media >= 7){
            res.innerHTML += `<br>Ou seja, APROVADO! `
        }else{
            res.innerHTML += `<br>Ou seja, REPROVADO!`
        }
        
    }
}
