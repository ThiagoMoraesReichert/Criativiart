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

async function nomePosts(request, response) {
    const query = 'SELECT usuarios.nome FROM usuarios JOIN posts ON usuarios.id = posts.user_id WHERE usuarios.id = 2;';


    const params = Array(
        request.params.nome
        // imagem
        //descrição post
    );

    connection.query(query, params, (err, results) => {
        console.log(results)
        if(results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "OK",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "OK",
                    data: results
                })
        }
    })
}

async function listPosts(request, response) {
    const query = 'SELECT usuarios.nome, posts.* FROM usuarios JOIN (SELECT * FROM posts GROUP BY posts.id ORDER BY posts.id DESC) AS posts ON usuarios.id = posts.user_id;';

    connection.query(query, (err, results) => {        
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Lista de posts.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    })
}


module.exports = { store, nomePosts, listPosts }