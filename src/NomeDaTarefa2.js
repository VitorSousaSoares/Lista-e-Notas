import { StyleSheet, Text, TouchableOpacity, View, Modal, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';


export default function App(props) {
    const [modal,setModal] = useState(false)
    const [Nome,setNome] = useState ("")


    const Nomear = async ()=> {
        if (Nome ==="") {
            Alert.alert("Nome","O nome deve ser preenchido")
        }else{
            props.setNomeTarefa(Nome);
            
            try{
                const salvarNome = JSON.stringify(Nome)
                await AsyncStorage.setItem('@NomeTarefa2',salvarNome)
                
            }catch(e){
                
            }
            props.setPagina("Tarefas2")
        }
    }

    const delet = async ()=> {
 
        try{
            const salvarNome = JSON.stringify("Tarefa")
            await AsyncStorage.setItem('@NomeTarefa2',salvarNome)
            
        }catch(e){
            
        }
 
        try{
            const salvarNome = JSON.stringify("")
            await AsyncStorage.setItem('@Tarefa2',salvarNome)
            
        }catch(e){
            
        }
        props.setTarefa("");
        props.setNomeTarefa("Tarefa");
        props.setPagina("Listas");
        
    }
    
    if (props.Comp === "Tarefa") {
        return(
            <View style={styles.container}>
                <Modal
                    visible={modal}
                    animationType="fade"
                    transparent={true}
                >
                    
                    <View style={styles.modal}>
                        <TouchableOpacity style={styles.Fechar} onPress={()=>setModal(false)}>
                            <Text>X</Text>
                        </TouchableOpacity>
                        <Text style={styles.txtModal}>Digite o nome da tarefa:</Text>
                        <TextInput
                            placeholder='Nome'
                            onChangeText={(text)=>setNome(text)}
                            style={styles.TXTImp}
                        />
                        <TouchableOpacity
                            onPress={()=>Nomear()}
                            style={styles.BTNCriar}
                        >
                            <Text>CRIAR</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                
                <TouchableOpacity
                    style={styles.BTN}
                    onPress={()=>setModal(true)}
                >
                    <Text style={styles.BTNTXT}>{props.Comp}</Text>
                    <AntDesign name="tool" size={28} color="black" />
                </TouchableOpacity>
            
            </View>
        )
    }else{
        return(
            <View style={styles.container}>
                <Modal
                    visible={modal}
                    animationType="fade"
                    transparent={true}
                >
                  <View style={styles.modal}>
                        <TouchableOpacity style={styles.Fechar} onPress={()=>setModal(false)}>
                            <Text>X</Text>
                        </TouchableOpacity>
                        <Text style={styles.txtModal}>Digite o nome da lista:</Text>
                        <TextInput
                            placeholder='Nome'
                            onChangeText={(text)=>setNome(text)}
                            style={styles.TXTImp}
                        />
                        <TouchableOpacity
                            
                            style={styles.BTNCriar}
                        >
                            <Text>RENOMEAR</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <View style={styles.BTN}>
                    <TouchableOpacity onPress={()=>props.setPagina("Tarefas2")} >
                        <Text style={styles.BTNTXT}>{props.Comp }</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>delet()}>
                        <AntDesign name="delete" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            
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
        width:'84%',
        height:200,
        marginTop:'40%',
        padding:25,
        alignSelf:"center"
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
    Fechar:{
        backgroundColor:"red",
        width:30,
        height:30,
        borderRadius:15,
        alignItems:"center",
        paddingTop:4,
        position:"absolute",
        right:-15,
        top:-15,
        elevation:3
    },
    BTN:{
        flexDirection:"row",
        backgroundColor:"rgb(255,195,119)",
        padding:8,
        width:250,
        justifyContent:"space-between"
    },
    BTNTXT:{
        fontSize:18
    },
    TXTImp:{
        backgroundColor:"rgba(255,255,255,0.5)",
        padding:8
    },
    BTNCriar:{
        backgroundColor:"rgb(255,195,119)",
        marginTop:12,
        padding:8,
        alignItems:"center"
    }
})