import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import ModalCarinho from './ModalCarinho';

export default function App(props) {

  const removeData = async (id) => {
    let newNota = props.Compras.filter(function(val){
      return val.id != id;
    });
    props.setCompras(newNota);

    try {
      const salvarNota = JSON.stringify(newNota)
      await AsyncStorage.setItem('@Lista2', salvarNota)
    } catch (e) {
      // saving error
    }
  }

  function editarNota(id,Item,Local,Valor,Quantidade,Carinho){

    props.setIdCompras(id);
    props.setLocalCompras(Local);
    props.setItemCompras(Item)
    props.setValorCompras(Valor)
    props.setQuantidadeCompras(Quantidade)
    props.setCarinhoCompras(Carinho)
    props.setPagina("EDITCompras2")
  }

  if (props.Compras == "") {
    return (
      <View style={styles.container}>
        <Text style={styles.TXT}>Não ha itens na lista</Text>
      </View>
    );
  }else{
      return (
          <View style={styles.container}>
            <FlatList
              data={props.Compras}
              renderItem={({item})=>
                <View style={styles.BOX}>
                  <View style={styles.BOXView}>
                    <TouchableOpacity
                      onPress={()=>editarNota(item.id,item.Item,item.Local,item.Valor,item.Quantidade,item.Carinho)}
                    >
                      <Text style={styles.TXT}>{item.Item}</Text>
                      <Text>{item.Local}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>removeData(item.id)}>
                      <AntDesign name="delete" size={35} color="black" /> 
                    </TouchableOpacity>  
                  </View>
                  <View style={styles.BOXView2}>
                    <TouchableOpacity>
                      <ModalCarinho
                        id={item.id}
                        item={item.Item}
                        local={item.Local}
                        valor={item.Valor}
                        quantidade={item.Quantidade}
                        carinho={item.Carinho}
                        Compras={props.Compras}
                        setCompras={props.setCompras}
                      />
                    </TouchableOpacity>
                  <View style={styles.BOXView}>
                    <Text>Valor: R$ {item.Valor}</Text>
                    <Text>Quantidade: {item.Quantidade}</Text>
                  </View>
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
      padding:8,
      flex:1,
      justifyContent:"space-between"
    },
    BOXView2:{
      flexDirection:"row",
      flex:1,
      justifyContent:"space-between",
      paddingLeft:8
    },
    TXT:{
      fontSize:24,
      textAlign:"center"
    },


});