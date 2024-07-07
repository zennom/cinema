const fs = require('fs');
let catalogo = require('./database/catalogo.json')

//console.log(catalogo)

function adicionarFilme(codigo, titulo, duracao, atores, ano, cartaz) {
    catalogo.push({
        codigo: codigo,
        titulo: titulo,
        duracao: duracao,
        atores: atores,
        anoDeLancamento: ano,
        emCartaz: cartaz
    })
    const json = JSON.stringify(catalogo);
    fs.writeFileSync('./database/catalogo.json' , json);
}

function buscarFilme(codigo) {
    let response = 'Não Encontrado'
    for (let i = 0; i < catalogo.length; i++) {
        if (catalogo[i].codigo == codigo) {
            response = `Filme: ${catalogo[i].titulo}\nDuração: ${catalogo[i].duracao} horas\nAtores:  ${catalogo[i].atores}\nLançamento:  ${catalogo[i].anoDeLancamento}\nEstá em cartaz? ${catalogo[i].emCartaz}  \n`
        }
    }
    return response
}


function alterarStatusEmCartaz(codigo) {
    for (let i = 0; i < catalogo.length; i++) {
        catalogo[i].codigo == codigo ? catalogo[i].emCartaz = !catalogo[i].emCartaz : 0
    }
    const json = JSON.stringify(catalogo);
    fs.writeFileSync('./database/catalogo.json' , json);
}