import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App(props) {


    return (
        <View style={styles.container}>
            <View>
                <Text>Titulo da nota</Text>
                <TextInput
                    multiline={false}
                    autoFocus={false}
                    onChangeText={(text)=>props.setTituloNota(text)}
                >
                    <Text>{props.TituloNota}</Text>
                </TextInput>  
            </View>
            <View>
                <Text>Conteudo da nota:</Text> 
                <TextInput
                    multiline={true}
                    autoFocus={false}
                    onChangeText={(text)=>props.setConteudoNota(text)}
                >
                    <Text>{props.ConteudoNota}</Text>    
                </TextInput>              
            </View>
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