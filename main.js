document.addEventListener("DOMContentLoaded", () => {
    // Formulário de Receita
    const formReceita = document.getElementById("form-receita");
    formReceita.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nomeReceita").value;
        const tempoPreparo = document.getElementById("tempoPreparo").value;
        const modoPreparo = document.getElementById("modoPreparo").value;
        const descricao = document.getElementById("descricao").value;

        fetch("http://localhost:3031/receita/" + nome + "/" + tempoPreparo + "/" + modoPreparo + "/" + descricao, {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => {
            alert(data.resposta);
        })
        .catch(error => console.error("Erro ao cadastrar receita:", error));
    });

    // Formulário de Ingrediente
    const formIngrediente = document.getElementById("form-ingrediente");
    formIngrediente.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nomeIngrediente").value;
        const quantidade = document.getElementById("quantidade").value;
        const unidadeMedida = document.getElementById("unidadeMedida").value;

        fetch("http://localhost:3031/ingredientes/" + nome + "/" + quantidade + "/" + unidadeMedida, {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => {
            alert(data.resposta);
        })
        .catch(error => console.error("Erro ao cadastrar ingrediente:", error));
    });

    // Formulário de Usuário
    const formUsuario = document.getElementById("form-usuario");
    formUsuario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nomeUsuario").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        fetch("http://localhost:3031/usuario/" + nome + "/" + email + "/" + senha, {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => {
            alert(data.resposta);
        })
        .catch(error => console.error("Erro ao cadastrar usuário:", error));
    });

    // Edição de Receita
    const formEditarReceita = document.getElementById("form-editar-receita");
    formEditarReceita.addEventListener("submit", function (e) {
        e.preventDefault();

        const id = document.getElementById("idReceita").value;
        const nome = document.getElementById("nomeReceitaEditar").value;
        const tempoPreparo = document.getElementById("tempoPreparoEditar").value;
        const modoPreparo = document.getElementById("modoPreparoEditar").value;
        const descricao = document.getElementById("descricaoEditar").value;

        fetch("http://localhost:3031/editar_receita/" + id + "/" + nome + "/" + tempoPreparo + "/" + modoPreparo + "/" + descricao, {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => {
            alert(data.mensagem);
        })
        .catch(error => console.error("Erro ao editar receita:", error));
    });

    // Edição de Ingrediente
    const formEditarIngrediente = document.getElementById("form-editar-ingrediente");
    formEditarIngrediente.addEventListener("submit", function (e) {
        e.preventDefault();

        const id = document.getElementById("idIngrediente").value;
        const nome = document.getElementById("nomeIngredienteEditar").value;
        const quantidade = document.getElementById("quantidadeEditar").value;
        const unidadeMedida = document.getElementById("unidadeMedidaEditar").value;

        fetch("http://localhost:3031/editar_ingredientes/" + id + "/" + nome + "/" + quantidade + "/" + unidadeMedida, {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => {
            alert(data.mensagem);
        })
        .catch(error => console.error("Erro ao editar ingrediente:", error));
    });

    // Edição de Usuário
    const formEditarUsuario = document.getElementById("form-editar-usuario");
    formEditarUsuario.addEventListener("submit", function (e) {
        e.preventDefault();

        const id = document.getElementById("idUsuario").value;
        const nome = document.getElementById("nomeUsuarioEditar").value;
        const email = document.getElementById("emailEditar").value;
        const senha = document.getElementById("senhaEditar").value;

        fetch("http://localhost:3031/editar_usuario/" + id + "/" + nome + "/" + email + "/" + senha, {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => {
            alert(data.mensagem);
        })
        .catch(error => console.error("Erro ao editar usuário:", error));
    });
});

document.addEventListener("DOMContentLoaded", () => {

    // Deletar Receita
    const formDeletarReceita = document.getElementById("form-deletar-receita");
    formDeletarReceita.addEventListener("submit", function (e) {
        e.preventDefault();

        const id = document.getElementById("idReceitaDeletar").value;

        fetch("http://localhost:3031/deletar_receita/" + id, {
            method: "GET",  // A API está usando método GET para delete, mas idealmente seria um DELETE
        })
        .then(response => response.json())
        .then(data => {
            alert(data.mensagem);
        })
        .catch(error => console.error("Erro ao deletar receita:", error));
    });

    // Deletar Ingrediente
    const formDeletarIngrediente = document.getElementById("form-deletar-ingrediente");
    formDeletarIngrediente.addEventListener("submit", function (e) {
        e.preventDefault();

        const id = document.getElementById("idIngredienteDeletar").value;

        fetch("http://localhost:3031/deletar_ingredientes/" + id, {
            method: "GET",  // A API está usando método GET para delete, mas idealmente seria um DELETE
        })
        .then(response => response.json())
        .then(data => {
            alert(data.mensagem);
        })
        .catch(error => console.error("Erro ao deletar ingrediente:", error));
    });

    // Deletar Usuário
    const formDeletarUsuario = document.getElementById("form-deletar-usuario");
    formDeletarUsuario.addEventListener("submit", function (e) {
        e.preventDefault();

        const id = document.getElementById("idUsuarioDeletar").value;

        fetch("http://localhost:3031/deletar_usuario/" + id, {
            method: "GET",  // A API está usando método GET para delete, mas idealmente seria um DELETE
        })
        .then(response => response.json())
        .then(data => {
            alert(data.mensagem);
        })
        .catch(error => console.error("Erro ao deletar usuário:", error));
    });

});

