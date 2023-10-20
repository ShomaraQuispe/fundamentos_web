let nome = document.getElementById('nome') //elemento pelo valor do id=""
let email = document.getElementById('email')
let assunto = document.querySelector('#assunto')//.assunto -> class | #assunto -> id

//11 === "11"
function verificarCampos() {
    //verificação dos campos se estão vazios
    if (nome.value == "" || email.value == "" || assunto.value == "") {
        alert("o campo é obrigatório")
    } else {
        alert("Sucesso ao enviar os dados")
    }
}