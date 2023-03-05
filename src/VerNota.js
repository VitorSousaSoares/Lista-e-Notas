import { StyleSheet, Text, View } from 'react-native';

export default function App(props) {


    return (
        <View style={styles.container}>
            <Text>{props.ConteudoNota}</Text>
        </View>
    ); 
    
}

const styles = StyleSheet.create({
    
    /*Cores de referencia
    Fundo: 254,249,239
    Top: 34,124,157
    BTN GERAL: 255,203,119
    BTN Sim: 34,124,157
    BTN Nao: 254,109,115
    */
    container:{
        padding:10,
        marginBottom:5,
    },
    TXT:{
        fontSize:25,
    }
  

});