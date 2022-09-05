const txtOp1 = document.getElementById("op1")
const txtCalculador = document.getElementById("calculador")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click' , calcular)

function calcular(){
    console.log("aprestaste el boton calcular")
    const calculador = txtCalculador.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if ((calculador == "+" || calculador == "-" || calculador == "*" || calculador == "/") && !isNaN (op1) && !isNaN (op2)) {
        let resultado;
        switch (calculador){
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op1
                break;
            case "/":
                resultado = op1 / op2
                break;
        }


        pResultado.innerText = "=" + resultado

    } else {
        pResultado.innerText = "Calculo imposible"
    }
}