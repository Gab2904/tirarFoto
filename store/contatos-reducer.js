import { ADD_CONTATO } from "./contatos-actions";
import Contato from "../modelo/Contato";
const estadoInicial={
    contatos:[]
};

export default(estado = estadoInicial, action)=>{
    switch (action.type) {
        case ADD_CONTATO:
            const c = new Contato(new Date().toString(), action.dadosContato.nomeContato, 
            action.dadosContato.numeroContato, action.dadosContato.imagem);
            console.log(JSON.stringify(c))
            return{
                contatos: estado.contatos.concat(c)
            };
        default:
            console.log('aqui'+JSON.stringify(action))
            return estado;
    }
}