export const ADD_CONTATO = 'ADD_CONTATO';
export const LISTA_CONTATOS = 'LISTA_CONTATOS';
import * as FileSystem from 'expo-file-system';
import {inserirContato, buscarContatos} from '../Helpers/db';


export const  listarContatos = () =>{
    return async dispatch =>{
        try {

            const resultadoDB = await buscarContatos();
            dispatch ({type: LISTA_CONTATOS, contatos: resultadoDB.rows._array});
            
        } catch (err) {
            console.log(err);
            throw err;
            
        }
    }
}

export const addContato = (nomeContato, numeroContato, imagem) =>{

    return async dispatch =>{

        const nomeArquivo = imagem.split('/').pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
        try {
            await FileSystem.moveAsync({
                from: imagem,
                to: novoPath
            });
            const resultadoBD = await inserirContato(
                nomeContato,
                novoPath,
                'Gabriel',
                971379307
            );

            console.log(JSON.stringify(resultadoBD));
            dispatch ({
                type: ADD_CONTATO, dadosContato: {id: resultadoBD.insertId, nomeContato: nomeContato, numeroContato: numeroContato, imagem:imagem}
            })
            
        } catch (err) {
            console.log(err);
            throw err;
            
        }
       
    }
    
}


