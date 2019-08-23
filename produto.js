window.onload = function(){
    console.warn("OLAA MUNDO AAAA")

    let meuForm = $("#formProduto")

    console.log(meuForm)

    meuForm.on("submit", function(event) {
        event.preventDefault()
        console.log("clicou")
        prepararBotao()
    })

    function preparaBotao() {
    let botao = $("btnSalvar")
    let ladda = Ladda.create(botao[0])
    ladda.start()
    }

    function clicou() {
        preparaBotao()
    }
}