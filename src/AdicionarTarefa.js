import { StyleSheet, Text, TextInput, View,Platform, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function App(props) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(Platform.OS === 'android')
        setShow(false);
        setDate(currentDate);

        if (mode ==="date") {
            
            let temDate = new Date(currentDate);
            let fDate = temDate.getDate()+"/"+(temDate.getMonth()+1)+"/"+temDate.getFullYear();
            let dia = fDate.toString();
            props.setDiaTarefa(fDate)
        }else{
            let temDate = new Date(currentDate);
            let fTime =  temDate.getHours()+":" + temDate.getMinutes();
            let hora = fTime.toString();
            props.setHoraTarefa(fTime)

        }
    };
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    

    return (
        <View style={styles.container}>
            <View style={styles.BOX}>
                <Text>Item:</Text>
                <TextInput
                    style={styles.BOXImput}
                    placeholder='Item...'
                    multiline={false}
                    autoFocus={true}
                    onChangeText={(text)=>props.setItemTarefa(text)}
                />  
            </View>
            <View style={styles.BOX}>
                <Text>Local:</Text>
                <TextInput
                    style={styles.BOXImput}
                    placeholder='Local...'
                    multiline={false}
                    autoFocus={false}
                    onChangeText={(text)=>props.setLocalTarefa(text)}
                />  
            </View>
            <View style={styles.BOXDH}>
                    <TouchableOpacity
                        onPress={()=> showMode("date")}
                        style={styles.DataHora}
                    >
                        <Text><AntDesign name="calendar" size={24} color="black" style={styles.DataHoraTXT}/></Text>
                        <Text style={styles.DataHoraTXT}>{props.DiaTarefa}</Text>
                    </TouchableOpacity>
        
                    <TouchableOpacity
                        style={styles.DataHora}
                        onPress={()=> showMode("time")}
                    >
                        <AntDesign name="clockcircleo" size={24} color="black" style={styles.DataHoraTXT}/>
                        <Text style={styles.DataHoraTXT}>{props.HoraTarefa}</Text>
                    </TouchableOpacity>
                {
                    show && (
                        <DateTimePicker
                        testID='dateTimePicker'
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />
                    )
                }
            </View>
      
            <View style={styles.BOXSel}>
                <Text style={styles.TXTBOXPIC}>Tarefa concluida:</Text>
                <View style={styles.BOXPIC}>
                    <Picker
                        selectedValue={props.ConcluirTarefa}
                        onValueChange={(itemValue, itemIndex) =>
                        props.setConcluirTarefa(itemValue)
                        
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
    },
    BOXDH:{
        flexDirection:"row",
        marginBottom:12,
        justifyContent:"space-between"
    },
    DataHora:{
        backgroundColor:"rgba(255,203,119,0.3)",
        width:"48%",
        alignItems:"center",
        borderRadius:10,
        paddingBottom:8,
        paddingTop:8
    },
    DataHoraTXT:{
        padding:2,
    }
});