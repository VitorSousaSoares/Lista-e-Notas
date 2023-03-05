import { StyleSheet, Text, TouchableOpacity, View, Modal, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';


export default function App(props) {
    const [modal,setModal] = useState(false)
    const [ItemLista,setItemLista] = useState("")

  
    const Adicionar = async ()=>{
    
        let id = 0;
        if (props.ListaSimples.length>0){
            id=props.ListaSimples[props.ListaSimples.length-1].id+1;
        }

        let neNota = {id:id,Item:ItemLista};
        props.setListaSimples([...props.ListaSimples,neNota]);

        try{
            const salvarNota = JSON.stringify([...props.ListaSimples,neNota])
            await AsyncStorage.setItem('@ListaSimples2',salvarNota)
        }catch(e){

        }
        setModal(false)
     
        
    }

    // ListaSimples={props.ListaSimples}
    // ItemListaSimples={props.ItemListaSimples}
    // setListaSimples={props.setListaSimples}
    // setItemListaSimples={props.setItemListaSimples}
    
        return(
            <View >
                <Modal
                    visible={modal}
                    animationType="fade"
                    transparent={true}
                >
                    
                    <View style={styles.modal}>
                        <TouchableOpacity 
                            style={styles.BNTFechar}
                            onPress={()=>setModal(false)}
                        >
                            <Text style={styles.TXTFechar}>X</Text>
                        </TouchableOpacity>
                        <Text style={styles.txtModal}>Nome do Item:</Text>                        
                        <TextInput
                            placeholder='Nome...'
                            autoFocus={true}
                            style={styles.Ipnt}
                            onChangeText={(text)=> setItemLista(text)}
                        />
                        <TouchableOpacity 
                            style={styles.BTN}
                            onPress={()=>Adicionar()}    
                        >
                            <Text>ADICIONAR</Text>
                        </TouchableOpacity>

                    </View>
                </Modal>
                <TouchableOpacity
                    onPress={()=>setModal(true)}
                >
                    <Text style={styles.TXTBTN}>+</Text>
                </TouchableOpacity>
            </View>
        )
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
        backgroundColor: "rgba(50,50,50,0.99)",
        width:'85%',
        height:175,
        marginLeft:'8%',
        marginTop:'40%',
        padding:20,
    },
    txtModal:{
        textAlign:"center",
        marginBottom:10,
        fontSize:18,
        color:"#fff"
    },
    BTN:{
        marginTop:15,
        backgroundColor:"rgb(255,195,119)",
        padding:8,
        alignItems:"center",
    },
    TXTBTN:{
        fontSize:30,
        height:"100%",
        textAlignVertical:"center",
        textAlign:"center"
    },
    Ipnt:{
        width:"100%",
        backgroundColor:"rgba(254,249,239,0.5)",
        padding:5
    },
    BNTFechar:{
        position:"absolute",
        top:-13,
        right:-13,
        backgroundColor:"red",
        width:26,
        height:26,
        borderRadius:13
    },
    TXTFechar:{
        textAlign:"center",
        paddingTop:2
    }
})