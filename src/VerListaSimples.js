import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import Chech from './Chech';

export default function App(props) {

  const removeData = async (id) => {
    let newNota = props.ListaSimples.filter(function(val){
      return val.id != id;
    });
    props.setListaSimples(newNota);

    try {
      const salvarNota = JSON.stringify(newNota)
      await AsyncStorage.setItem('@ListaSimples', salvarNota)
    } catch (e) {
      // saving error
    }
  }

  if (props.ListaSimples == "") {
    return (
      <View style={styles.container}>
        <Text style={styles.TXT2}>Não hà itens</Text>
      </View>
    );
  }else{
      return (
          <View style={styles.container}>
            <FlatList
              data={props.ListaSimples}
              renderItem={({item})=>
              <View style={styles.BOX}>
                  <Chech/>
                  <View style={styles.BOXView}>
                    <Text style={styles.TXT}>{item.Item}</Text>

                    <TouchableOpacity onPress={()=>removeData(item.id)}>
                      <AntDesign name="delete" size={24} color="black" /> 
                    </TouchableOpacity>  
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
      width:"90%",
      alignSelf:"center",
    },
    BOX:{
      margin:5,
      flexDirection:"row",
      backgroundColor:"rgb(255,203,119)",
    },
    BOXView:{
      flexDirection:"row",
      padding:8,
      flex:1,
      justifyContent:"space-between"
    },
    TXT:{
      fontSize:18,
    },
    TXT2:{
      fontSize:18,
      textAlign:"center"
    },

});