const $container = document.querySelector('.container')
const $btnCalcularS = document.querySelector('.btn')
const $btnCalcularR = document.querySelector('.btn2')
const $btnCalcularM = document.querySelector('.btn3')
$container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn')) {
        const $cajaDivS = document.querySelector('.operationBoxS')
        const $suma1 = document.getElementById('suma1').value
        const $suma2 = document.getElementById('suma2').value
        const suma = () => {
            let operationS = parseInt($suma1) + parseInt($suma2)
            $cajaDivS.innerHTML += `Resultado: ${operationS}`
            $cajaDivS.style.fontSize = '16px'
         }   
         e.preventDefault()
         suma(); 
     }
     if(e.target.classList.contains('btn2')) {
         const $resta1 = document.getElementById('resta1').value
         const $resta2 = document.getElementById('resta2').value
         const resta = () => {
             const $cajaDivR = document.querySelector('.operationBoxR')
             let operationR = parseInt($resta1) - parseInt($resta2)
             $cajaDivR.innerHTML += `Resultado: ${operationR}`
             $cajaDivR.style.fontSize = '16px'
         }
         e.preventDefault()
         resta();
     }
     if(e.target.classList.contains('btn3')) {
         const $multi1 = document.getElementById('Multi1').value
         const $multi2 = document.getElementById('Multi2').value
         const Multiplicacion = () => {
             const $cajaDivM = document.querySelector('.operationBoxM')
             let operationM = parseInt($multi1) * parseInt($multi2);
             $cajaDivM.innerHTML = `Resultado: ${operationM}`
             $cajaDivM.style.fontSize = '16px'
         }
         e.preventDefault()
         Multiplicacion();
     }
     if(e.target.classList.contains('btn4')) {
         const $divi2 = document.getElementById('Divi2').value
         const $divi1 = document.getElementById('Divi1').value
         const dividir = () => {
             const $cajaDivD = document.querySelector('.operationBoxD')
             let operationD = parseInt($divi1) / parseInt($divi2)
             $cajaDivD.innerHTML = `Resultado: ${parseInt(operationD)}`                                    
             $cajaDivD.style.fontSize = '16px'
         }
         e.preventDefault()
         dividir();
     }
 });
 