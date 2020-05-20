import React, { useState } from 'react';
import{Text, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';
import Cartao from '../components/Cartao';


const ContatoItem =(props) =>{
    const[usuarioConfirmou, setUsuarioConfirmou] = useState(false);

    const confirmarEscolha=()=>{
        setUsuarioConfirmou(true);
    }
    const cancelarEscolha=()=>{
        setUsuarioConfirmou(false)
    }

    let confirmacaoText;

    if (usuarioConfirmou)
        confirmacaoText= 
        <Cartao>
            <Text>Realmente deseja excluir o contato?</Text>
            <Button
                title="sim"
                //onPress={props.onDelete.bind(this,props.chave)}
            />
            <Button
                title="não"
                onPress={cancelarEscolha}
            />
        </Cartao>
   
    return(
        <TouchableOpacity onPress={props.onSelect} onLongPress={confirmarEscolha} style={estilos.contatoItem}> 
            <Image
                style={estilos.imagem} 
                source={{uri:props.imagem}}
            />
            <Cartao estilos={estilos.itemNaLista}>
                <Text style={estilos.nomeContato}>Nome: {props.nomeContato}</Text>
                <Text style={estilos.numero}>Telefone: {props.numeroContato}</Text>
                <Text style={estilos.numero}>id: {props.idContato}</Text>
                {confirmacaoText}
            </Cartao>
        </TouchableOpacity> 
    );
}
const estilos = StyleSheet.create({
    contatoItem: {
        flexDirection: 'row',
        borderBottomColor: '#228b22',
        borderBottomWidth: 5,
        paddingVertical: 35,
        paddingHorizontal: 30,
        alignItems: 'center'
    },
    itemNaLista:{
        marginLeft: 30,
        width: 255,
        justifyContent: 'center',
       
    },
    imagem: {
        width: 80,
        height: 80,
        backgroundColor: '#228b22',
        borderWidth: 10
    },
    
    numero: {
        color: 'white',
        fontSize: 15
    }
});
export default ContatoItem;