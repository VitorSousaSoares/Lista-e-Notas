import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ModalCor from './ModalCor';
import { AntDesign } from '@expo/vector-icons';
import ModalMenu from './ModalMenu';

export default function App(props) {

    if (props.Tipo === "simples") { 
      return (
        <View style={styles.container}>
          <Text style={styles.TXT}>{props.Titulo}</Text>
       </View>
      );
    }
    else if (props.Tipo ==="ADDNotas") {
      return (
        <View style={styles.containerADDNotas}>
          <Text style={styles.TXT}>{props.Titulo}</Text>
          <ModalCor
            CorNota={props.CorNota}
            setCorNota={props.setCorNota}
          />
       </View>
      );
    }
    else if (props.Tipo ==="VerNotas") {
      return (
        <View style={styles.containerADDNotas}>
          <Text style={styles.TXT}>{props.Titulo}</Text>
          <TouchableOpacity style={styles.BTNEdit} onPress={()=>props.setPagina("EDITNotas")}>
            <AntDesign name="edit" size={28} color="#fff" />
          </TouchableOpacity>
       </View>
      );
    }
    else if (props.Tipo ==="LISTAS") {
      return (
        <View style={styles.containerADDNotas}>
          <TouchableOpacity style={styles.BTNEdit} onPress={()=>props.setPagina("Notas")}>
            <AntDesign name="form" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.TXT}>{props.Titulo}</Text>
          <TouchableOpacity style={styles.BTNEdit} onPress={()=>props.setPagina("Home")}>
            <AntDesign name="home" size={28} color="#fff" />
          </TouchableOpacity>
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
        backgroundColor:"rgb(34,124,157)",
        alignItems:"center",
        padding:8,
    },
    containerADDNotas:{
        backgroundColor:"rgb(34,124,157)",
        justifyContent:"space-between",
        padding:8,
        flexDirection:"row"
    },
    TXT:{
        fontSize:25,
        color:"#fff"
    },
    BTNEdit:{
      padding:5
    }

});