/*
    0 - Obter usuário
    1 - obter numero de telefone de um usuario a partir do seu id
    2 - Obter o endereço do usuario pelo id
*/


function obterUsuario(callback) {
    setTimeout(function() {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            telefone: '31333333333',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'vinte e um',
            numero: 0
        })
    }, 2000)
}

function resolverUsuario(erro, usuario){
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error , usuario) {
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
})

// const telefone = obterUsuario(usuarioidUsuario.id)


// console.log('telefone', telefone)