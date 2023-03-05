import { StyleSheet, Text, TextInput, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function App(props) {

    
    return (
        <View style={styles.container}>
            <View style={styles.BOX}>
                <Text>Local:</Text>
                <TextInput
                    style={styles.BOXImput}
                    placeholder='Local...'
                    multiline={false}
                    autoFocus={false}
                    onChangeText={(text)=>props.setLocalCompras(text)}
                >
                    <Text>{props.LocalCompras}</Text>
                </TextInput>  
            </View>
            <View style={styles.BOX}>
                <Text>Valor:</Text>
                <TextInput
                    style={styles.BOXImput}
                    placeholder='Valor...'
                    multiline={false}
                    autoFocus={false}
                    onChangeText={(text)=>props.setValorCompras(text)}
                >
                    <Text>{props.ValorCompras}</Text>
                </TextInput>  
            </View>
            <View style={styles.BOX}>
                <Text>Quantidade</Text>
                <TextInput
                    style={styles.BOXImput}
                    placeholder='Quantidade...'
                    multiline={false}
                    autoFocus={false}
                    onChangeText={(text)=>props.setQuantidadeCompras(text)}
                >
                    <Text>{props.QuantidadeCompras}</Text>
                </TextInput>  
            </View >
            <View style={styles.BOXSel}>
                <Text style={styles.TXTBOXPIC}>Adicionar ao Carinha:</Text>
                <View style={styles.BOXPIC}>
                    <Picker
                        selectedValue={props.CarinhoCompras}
                        onValueChange={(itemValue, itemIndex) =>
                        props.setCarinhoCompras(itemValue)
                        
                    }>
                        <Picker.Item label="NÃO" value="0" style={styles.TXTPIC}/>
                        <Picker.Item label="SIM" value="1" style={styles.TXTPIC}/>
                    </Picker>
                </View>
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
        padding:5,
        marginBottom:5,
    },
    TXT:{
        fontSize:25,
    },
    BOX:{
        padding:8,
        backgroundColor:"rgba(255,203,119,0.3)",
        borderRadius:10,
        marginBottom:12
    },
    BOXImput:{
        backgroundColor:"rgba(254,249,239,0.2)",
        padding:5
    },
    BOXSel:{
        borderRadius:10,
        backgroundColor:"rgba(255,203,119,0.3)",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    BOXPIC:{
        width:120
    },
    TXTPIC:{
        fontSize:14
    },
    TXTBOXPIC:{
        textAlignVertical:"center",
        paddingLeft:8
    }
});