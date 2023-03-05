import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App(props) {


    return (
        <View style={styles.container}>
            <View style={styles.BOX}>
                <Text>Titulo da nota</Text>
                <TextInput
                    placeholder='Titulo:'
                    multiline={false}
                    autoFocus={true}
                    onChangeText={(text)=>props.setTituloNota(text)}
                />  
            </View>
            <View>
                <Text>Conteudo da nota:</Text> 
                <TextInput
                    placeholder='Nota:'
                    multiline={true}
                    autoFocus={false}
                    onChangeText={(text)=>props.setConteudoNota(text)}
                />              
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
    },
    BOX:{
        marginBottom:10
    }
});