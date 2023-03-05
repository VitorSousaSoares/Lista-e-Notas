import { Modal, StyleSheet, Text,SafeAreaView, TouchableOpacity, View, Alert,Animated,Easing } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {useState } from 'react';

export default function App(props) {
    const [mod,setmod] = useState(false)
    const todos = () => {
        Alert.alert("te","gf")
        setmod(false)
    }

    return(
        <View >
            <TouchableOpacity onPress={()=>setmod(true)}>
                <AntDesign name="plus" size={26} color="#fff" />
            </TouchableOpacity>
                <Modal transparent visible={mod}>
                    <View style={styles.conteiner}>
                        <TouchableOpacity
                            onPress={()=>todos()}
                            style={styles.TXT}
                        >
                            <Text> ALL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.TXT}
                        >
                            <AntDesign name="checkcircleo" size={24} color="black"/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.TXT}
                        >
                            <Text style={styles.ciculo}> </Text>
                        </TouchableOpacity>
                    </View>
                
                </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        position:"absolute",
        right:10,
        top:30,
        padding:5
    },
    TXT:{
        width:40,
        height:40,
        marginBottom:5,
        backgroundColor:"rgb(254,109,115)",
        borderRadius:40/2,
        justifyContent:"center",
        alignItems:"center",
    },
    ciculo:{
        borderWidth:2,
        borderColor:"#000",
        width:25,
        height:25,
        borderRadius:15
    }
})