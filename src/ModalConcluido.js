import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';


export default function App(props) {
    const [modal,setModal] = useState(false)

  
    const EditarLista = async (sel)=>{
        if (sel ==="SIM") {
            let newNota = props.Tarefa.filter(function(val){
                return val.id != props.id;
              });
          
              let id = 0;
              if (props.Tarefa.length>0){
                  id=props.Tarefa[props.Tarefa.length-1].id+1;
              }
      
              let neNota = {id:id,Item:props.item,Local:props.local,Dia:props.Dia,Hora:props.Hora,Concluir:"1"};
              props.setTarefa([...newNota,neNota]);
      
              try{
                  const salvarNota = JSON.stringify([...newNota,neNota])
                  await AsyncStorage.setItem('@Tarefa',salvarNota)
              }catch(e){
      
              }
              setModal(false)
     
        }else{
            let newNota = props.Tarefa.filter(function(val){
                return val.id != props.id;
              });
          
              let id = 0;
              if (props.Tarefa.length>0){
                  id=props.Tarefa[props.Tarefa.length-1].id+1;
              }
      
              let neNota = {id:id,Item:props.item,Local:props.local,Dia:props.Dia,Hora:props.Hora,Concluir:"0"};
              props.setTarefa([...newNota,neNota]);
      
              try{
                  const salvarNota = JSON.stringify([...newNota,neNota])
                  await AsyncStorage.setItem('@Tarefa',salvarNota)
              }catch(e){
      
              }
              setModal(false)
        }
    }

    if (props.Concluir === "0") {
        return(
            <View >
                <Modal
                    visible={modal}
                    animationType="fade"
                    transparent={true}
                >
                    
                    <View style={styles.modal}>
                        <Text style={styles.txtModal}>CONCLUIDO?</Text>
                        <View style={styles.BTN}>
                            <TouchableOpacity 
                                style={styles.BTNS}
                                onPress={()=>EditarLista("SIM")}
                            >
                                <Text>SIM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.BTNN}
                                onPress={()=>EditarLista("NAO")}
                            >
                                <Text>N??O</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity
                    style={{
                        width: 30,
                        height:30,
                        borderColor:"#000",
                        borderWidth:2,
                      }}
                    onPress={()=>setModal(true)}
                >
                </TouchableOpacity>
            </View>
        )
    }else{
        return(
            <View >
                <Modal
                    visible={modal}
                    animationType="fade"
                    transparent={true}
                >
                    
                    <View style={styles.modal}>
                    <Text style={styles.txtModal}>CONCLUIDO?</Text>
                        <View style={styles.BTN}>
                            <TouchableOpacity 
                                style={styles.BTNS}
                                onPress={()=>EditarLista("SIM")}
                            >
                                <Text>SIM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.BTNN}
                                onPress={()=>EditarLista("NAO")}
                            >
                                <Text>N??O</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity
                    style={{
                        width: 30,
                        height:30,
                        borderColor:"#000",
                        borderWidth:2,
                      }}
                    onPress={()=>setModal(true)}
                >
                    <AntDesign name="check" size={24} color="red" />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
        /*
    Cores:
    Titulo: 22,83,104
    BNT SIM: 23,195,178
    BNT NAO: 254,109,115
    BUTTOM: 255,195,119
    CENTRO: 254,249,239
    */

    modal:{
        backgroundColor: "rgba(50,50,50,0.9)",
        width:'90%',
        height:150,
        marginLeft:'5%',
        marginTop:'40%',
        padding:25,
    },
    txtModal:{
        textAlign:"center",
        marginBottom:10,
        fontSize:18,
        color:"#fff"
    },
    BOX:{
        flexDirection:"row"
    },
    BTN:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:12,
    },
    BTNS:{
        borderRadius:8,
        alignItems:"center",
        width:"40%",
        padding:8,
        backgroundColor:"rgb(23,195,178)"
    },
    BTNN:{
        borderRadius:8,
        alignItems:"center",
        width:"40%",
        padding:8,
        backgroundColor:"rgb(254,109,115)"
    }
})