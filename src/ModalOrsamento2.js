import { StyleSheet, Text, TouchableOpacity, View, Modal, TextInput } from 'react-native';
import { useState } from 'react';


export default function App(props) {
    const [modal,setModal] = useState(false)

    if (props.Orasamento ==="") {
        return(
            <View >
                <Modal
                    visible={modal}
                    animationType="fade"
                    transparent={true}
                >
                    
                    <View style={styles.modal}>
                        <Text style={styles.txtModal}>Digite o orçamento</Text>
                        <TextInput
                            style={styles.TXTImput}
                            autoFocus={true}
                            onChangeText={(text)=>props.setOrsamento(text)}
                            placeholder='Valor...'
                        />
                        <TouchableOpacity 
                            style={styles.BTN}
                            onPress={()=>setModal(false)}
                        >
                            <Text>CONCLUIR</Text>
                        </TouchableOpacity>
                    </View>

                </Modal>
                <TouchableOpacity
                    style={styles.BTNORSAMENTO}
                    onPress={()=>setModal(true)}
                >
                    <Text>Adicionar o orçamento</Text>
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
                        <Text style={styles.txtModal}>Digite o orçamento</Text>
                        <TextInput
                            style={styles.TXTImput}
                            autoFocus={true}
                            onChangeText={(text)=>props.setOrsamento(text)}
                        >
                            <Text>{props.Orasamento}</Text>
                        </TextInput>
                        <TouchableOpacity 
                            style={styles.BTN}
                            onPress={()=>setModal(false)}
                        >
                            <Text>CONCLUIR</Text>
                        </TouchableOpacity>
                    </View>

                </Modal>
                <TouchableOpacity
                    onPress={()=>setModal(true)}
                >
                    <Text style={styles.BTNORSAMENTO2}>Orçamento disponivel: R$: {props.Orasamento}</Text>
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
        height:200,
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
    TXTImput:{
        backgroundColor: "rgba(255,255,255,0.7)",
        padding:8
    },
    BTN:{
        marginTop:20,
        backgroundColor: "rgb(255,195,119)",
        padding:8,
        alignItems:"center"
    },
    BTNORSAMENTO:{
        backgroundColor: "rgba(254,109,115,0.5)",   
        padding:8,
        alignItems:"center"
    },
    BTNORSAMENTO2:{
        alignSelf:"center",
        paddingLeft:8,
        paddingRight:8,
        paddingTop:8
    }
})