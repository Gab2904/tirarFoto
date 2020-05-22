import React, {useEffect} from 'react';
import { StyleSheet, FlatList, Platform} from 'react-native';
import ContatoItem from '../components/ContatoItem';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho';
import {useSelector, useDispatch} from 'react-redux';
import * as contatosActions from '../store/contatos-actions';

const TelaComeco =(props)=>{
  const contatos = useSelector(estado=>estado.contatos.contatos);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(contatosActions.listarContatos())
  },[dispatch]);

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
    headerTitle:'Todos os Contatos',
    headerRight:
      <HeaderButtons
        HeaderButtonComponent={BotaoCabecalho}>
        <Item
          title="Adicionar"
          iconName={Platform.OS === 'android'?'md-add':'ios-add'}
          onPress={()=>{dadosNav.navigation.navigate("NovoContato")}}
        /> 
      </HeaderButtons>
  }
}

const estilos = StyleSheet.create({

});

export default TelaComeco;