import React from 'react';
import{View,StyleSheet} from 'react-native';
import Cores from '../Cores/Cores';
import Medidas from '../Medidas/Medidas'

const Cartao= (props)=>{
    return(
        <View style={{...estilos.cartao,...props.estilos}}>
            {props.children}
        </View>
    );
};

const estilos =StyleSheet.create({
    cartao:{
        shadowColor:Cores.shadowCartao,
        backgroundColor:Cores.backCartao,
        padding:Medidas.cartaoPadding,
        borderRadius:Medidas.cartaoBorder
    }
});
export default Cartao;