import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('contatos.db');



export const init = () =>{
    const promise = new Promise((resolve, reject) =>{

        db.transaction((tx )=>{
            tx.executeSql(
    
                'CREATE TABLE IF NOT EXISTS tb_contatos (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, imagemUri TEXT NOT NULL, numero INTEGER);',
                [],
                (_, resultado) => {resolve(resultado)},
                (_, err) => {reject()}
    
            );
        });

    });
     return promise;
}


export const inserirContato = (nomeContato, imagemUri, numero) => {

    const promise = new Promise((resolve, reject) =>{

        db.transaction((tx )=>{
            tx.executeSql(
    
                'INSERT INTO tb_contatos(nome, imagemUri, numero) VALUES (?,?,?)',
                [nomeContato, imagemUri, numero],
                (_, resultado) => {resolve(resultado)},
                (_, err) => {reject(err)}
    
            );
        });

    });
     return promise;

}

export const buscarContatos = () => {

    const promise = new Promise((resolve, reject) =>{

        db.transaction((tx )=>{
            tx.executeSql(
    
                'SELECT * FROM tb_contatos',
                [],
                (_, resultado) => {resolve(resultado)},
                (_, err) => {reject(err)}
    
            );
        });

    });
     return promise;


}