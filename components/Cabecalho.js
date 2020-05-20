import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Cabecalho =(props)=>{
    return(
        <View style>
            <Text style>{props.titulo}</Text>
        </View>
    );
}
const estilos = StyleSheet.create({
   
});
export default Cabecalho;