import React from 'react';
import ContatosNavigator from './Router/ContatosNavigator';
import { createStore,  combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import contatosReducer from './store/contatos-reducer';
import {init} from './Helpers/db';

init()
    .then((resultado) =>{
      console.log("Deu certo a criação da base" + JSON.stringify(resultado));
    })
    .catch((err) =>{
      console.log("Falhou a criação da base: ", JSON.stringify(err));
    })

const rootReducer = combineReducers({
  contatos:contatosReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {  
  
  return(
    <Provider store={store}>
      <ContatosNavigator/>
    </Provider>
  );
}