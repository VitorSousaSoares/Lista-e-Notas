import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import ModalConcluido from './ModalConcluido';

export default function App(props) {

  const removeData = async (id) => {
    let newNota = props.Tarefa.filter(function(val){
      return val.id != id;
    });
    props.setTarefa(newNota);

    try {
      const salvarNota = JSON.stringify(newNota)
      await AsyncStorage.setItem('@Tarefa2', salvarNota)
    } catch (e) {
      // saving error
    }
  }

  if (props.Tarefa == "") {
    return (
      <View style={styles.container}>
        <Text style={styles.TXT}>Não ha tarefa</Text>
      </View>
    );
  }else{
      return (
          <View style={styles.container}>
            <FlatList
              data={props.Tarefa}
              renderItem={({item})=>
                <View style={styles.BOX}>
                    <View style={styles.BOXView}>
                      <TouchableOpacity>
                        <ModalConcluido
                          id={item.id}
                          item={item.Item}
                          local={item.Local}
                          Concluir={item.Concluir}
                          Hora={item.Hora}
                          Dia={item.Dia}
                          Tarefa={props.Tarefa}
                          setTarefa={props.setTarefa}
                        />
                      </TouchableOpacity>
                    <View style={styles.BOXView3}>
                        <Text style={styles.TXT}>{item.Item}</Text>
                      <TouchableOpacity onPress={()=>removeData(item.id)}>
                        <AntDesign name="delete" size={35} color="black" /> 
                      </TouchableOpacity>  
                    </View>
                  </View>
                  <View style={styles.BOXView2}>                  
                    <Text>Dia: {item.Dia}</Text>
                    <Text>Hora: {item.Hora}</Text>
                  </View>
                </View>

              }
          />
          </View>
        ); 
  }
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
      margin:5,
      width:"95%",
      alignSelf:"center",
    },
    BOX:{
      margin:5,
      backgroundColor:"rgb(255,203,119)",
    },
    BOXView:{
      flexDirection:"row",
      paddingTop:8,
      paddingLeft:8,
      paddingRight:8,
      flex:1,
    },
    BOXView3:{
      flexDirection:"row",
      flex:1,
      justifyContent:"space-between",
    },
    BOXView2:{
      flexDirection:"row",
      flex:1,
      justifyContent:"space-between",
      paddingTop:8,
      paddingBottom:8,
      paddingLeft:20,
      paddingRight:20
    },
    TXT:{
      marginLeft:12,
      fontSize:24,
      textAlign:"center",
    },


});