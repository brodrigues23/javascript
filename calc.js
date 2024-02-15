function calcular(tipo, valor){
    if(tipo === 'açao'){
        if(valor === 'c'){
            document.getElementById('resultado').value = ''
        }
        if(valor === '+' || valor=== '-' || valor=== '*' || valor=== '/' || valor=== '.'){
            document.getElementById('resultado').value += valor
        }
        else if(valor === '='){
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        }


    }else if(tipo === 'valor') {
        document.getElementById('resultado').value += valor
    
    }
}        
document.addEventListener("keydown", function(event){
    console.log(event)
    if (event.key === '0' || event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5' || event.key === '6' || event.key === '7' || event.key === '8' || event.key === '9' || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '.'){
        var teclado_input = event.key
        document.getElementById('resultado').value += teclado_input
    } else if(event.key === 'Enter'){
        var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
    } else if(event.key === 'Backspace'){
        document.getElementById('resultado').value = ''
    }
})