const connection = require("../config/db");

async function cadastrarArte(request, response) {
    const query = 'INSERT INTO perfil(id_usuario, imagem) values (?,?);';

    const params = Array(
        request.body.id_usuario,
        request.file.filename
    )

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            response
                .status(201)
                .json({
                    success: false,
                    message: "Sem Sucesso!",
                    data: results
                })
        }
    })
}

async function listarArtes(request, response) {
    const query = 'SELECT * FROM perfil WHERE id_usuario = ?;';

    const params = Array(request.params.id);

    connection.query(query, params, (err, results) => {
        console.log(results)
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Sem Sucesso",
                    data: results
                })
        }
    })
}

module.exports = {
    cadastrarArte,
    listarArtes
}