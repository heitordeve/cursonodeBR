/*
    0 - Obter usuário
    1 - obter numero de telefone de um usuario a partir do seu id
    2 - Obter o endereço do usuario pelo id
*/
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)



function obterUsuario() {

    return new Promise(function resolvePromisse(resolve, reject) {
        setTimeout(function () {

            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })

}

function obterTelefone(idUsuario) {

    return new Promise(function resolverPromisse(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '31333333333',
                ddd: 11
            })
        }, 2000)
    })


}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'vinte e um',
            numero: 0
        })
    }, 2000)
}
main()
async function main(){
    try {
        console.time(`medida-promise`)
        const usuario = await obterUsuario()
        //const telefone = await obterTelefone(usuario.id)
        //const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]


        console.log(`
            Nome: ${usuario.nome}
            Endereco: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
        `)

    } catch (error) {
        console.error('DEU RUIM', error)
    }
    console.timeEnd(`medida-promise`)
}

/*const usuarioPromise = obterUsuario()
usuarioPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(result){
            return {
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id
                },
                telefone: result
            }
        })
    })
    .then(function (resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco
        .then(function resolverEnderecoTelefone(result){
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function (resultado) {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)
    })
    .catch(function (error) {
        console.error('DEU RUIM: ', error)
    })*/

/*obterUsuario(function resolverUsuario(error , usuario) {
    if(error){
        console.error('Deu ruim em USUARIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if(error1){
            console.error('Deu ruim em TELEFONE', error)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if(error2){
                console.error('Deu ruim em ENDEREÇO', error)
                return;
            }
            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${endereco.rua}, Número: ${endereco.numero}, ,
                Telefone: (${telefone.ddd}) ${telefone.telefone}
                `)
        })
    })
})*/

// const telefone = obterUsuario(usuarioidUsuario.id)


// console.log('telefone', telefone)