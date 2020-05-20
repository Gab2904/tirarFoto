import React from 'react';
import { StyleSheet, FlatList, Platform} from 'react-native';
import ContatoItem from '../components/ContatoItem';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho';
import {useSelector} from 'react-redux';

const TelaComeco =(props)=>{
  const contatos = useSelector(estado=>estado.contatos.contatos);

  return ( 
    <FlatList
      data={contatos}
      keyExtractor={contato => contato.id}
      renderItem={contato =>
        <ContatoItem
          idContato={contato.item.id}
          nomeContato={contato.item.nome}
          numeroContato={contato.item.numero}
          onSelect={()=>{
            props.navigation.navigate('Contato', 
            {nomeDoContato: contato.item.nome, idContato: contato.id})
          }}
          imagem={contato.item.imagemURI}
        />
      }
    />
  )
}

TelaComeco.navigationOptions = dadosNav =>{
  return{
    headerTitle:'Lista de contatos',
    headerRight:
      <HeaderButtons
        HeaderButtonComponent={BotaoCabecalho}>
        <Item
          title="add"
          iconName={Platform.OS === 'android'?'md-add':'ios-add'}
          onPress={()=>{dadosNav.navigation.navigate("NovoContato")}}
        /> 
      </HeaderButtons>
  }
}

const estilos = StyleSheet.create({

});

export default TelaComeco;