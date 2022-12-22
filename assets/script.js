//Declaração da variaveis
var textArea = document.getElementById('my-textarea');
var result = document.getElementById('resultado');
var time = document.getElementById('time');
var caracter = document.getElementById('caracter');
var line = document.getElementById('line');
var size = document.getElementById('bytes');




// valida o codigo e marca o tempo

function validar() {
    var content = textArea.value
    try {
        const p1 = performance.now()
        eval(content);
        const p2 = performance.now()
        result.innerHTML = 'Code valid';
        time.innerHTML = `${p2 - p1}ms`;
    } catch (error) {
        result.innerHTML = 'Code invalid: ' + error;
    }
}

//registra e mostra dos dados

function contador() {

    let text = textArea.value;
    caracter.innerHTML = text.length;
    line.innerHTML = text.split(/\n/).length; // variacao para contar palavras text.split(/\s+/).length
    const code = text;
    const encodedCode = encodeURI(code);
    const codeSize = encodedCode.length;
    size.innerHTML = `${codeSize} Bytes`;

}





