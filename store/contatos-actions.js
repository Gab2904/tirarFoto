export const ADD_CONTATO = 'ADD_CONTATO';

export const addContato = (nomeContato, numeroContato, imagem) =>{
    return{
        type:ADD_CONTATO, dadosContato: {nomeContato: nomeContato, numeroContato: numeroContato, imagem:imagem}
    }
}