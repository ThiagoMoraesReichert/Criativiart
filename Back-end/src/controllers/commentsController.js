const connection = require('../config/db');

async function commentsByPostId(request, response) {

    const query = 
    "SELECT usuarios.nome, comments.id, comments.descricao, usuarios.id FROM comments, usuarios WHERE comments.post_id = ? and comments.usuarios_id = usuarios.id;";

    const params = Array(
        request.params.post_id
    );
    
    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Lista de comentarios.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a ação. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    })
}


async function storeComment(request, response) {    
    const params = Array(
        request.body.descricao,
        request.body.usuarios_id,        
        request.body.post_id
    );


    const query = 'INSERT INTO comments(descricao,usuarios_id,post_id) values(?,?,?);';

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: `Sucesso! Comentário cadastrado.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a ação. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }        
    })
}

module.exports = {
    commentsByPostId,
    storeComment
}