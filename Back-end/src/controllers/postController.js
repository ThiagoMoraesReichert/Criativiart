const connection = require("../config/db");



async function store(request, response) {
    const query = 'INSERT INTO posts(user_id, descricao) VALUES(?, ?);';
    console.log(request.body)

    const params = Array(
        request.body.idUsuario,
        request.body.descricao,
    );

    connection.query(query, params, (err, results) => {
        if(results) {
            response
             .status(201)
             .json({
                success: true,
                message: "Post cadastrado com sucesso!",
                data: results
             })
        } else {
            response
             .status(201)
             .json({
                success: false,
                message: "Falha ao cadastrar post.",
                data: results,
                query: err.sql,
                sqlMessage: err.sqlMessage

             })
        }
    })
}

module.exports = { store }