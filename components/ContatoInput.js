import React,{useState} from 'react';
import {View,TextInput, Button, StyleSheet} from 'react-native';


const ContatoInput = (props)=>{
  const[nome, setNome]=useState('');
  const[numero, setNumero]=useState('');
  //captura o texto digitado
  const capturaNome=(nome)=>{
    setNome(nome)
  };
  const capturaNumero=(numero)=>{
    setNumero(numero)
  };
    return(
        <View style={styles.contatosView}>

          <TextInput placeholder="Nome"style={styles.contatosInputText} onChangeText={capturaNome} value={nome}/>
          <TextInput placeholder="Número"style={styles.contatosInputText} keyboardType="number-pad" maxLength={10}onChangeText={capturaNumero} value={numero}/>
          <Button title=""
            
            onPress={()=>props.onAdicionarContato(nome, numero)} />
        </View>
    );
}
const styles = StyleSheet.create({

});

export default ContatoInput;