import { StyleSheet } from "react-native";

/*Cores de referencia
Fundo: 254,249,239
Top: 34,124,157
BTN GERAL: 255,203,119
BTN Sim: 34,124,157
BTN Nao: 254,109,115
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(254,249,239)',
    },
    IMG:{
        width:350,
        height:350,
        alignSelf:"center",
        marginTop:30
    },
    IMGInfo:{
        width:200,
        height:200,
        alignSelf:"center",
        marginTop:30
    },
    BTN:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:30,
        paddingRight:30,
    },
    BTNAcao:{
        backgroundColor:"rgb(255,203,119)",
        width:100,
        alignItems:"center",
        padding:5,
        borderRadius:15,
        elevation:3
    },
    BTNInfo:{
        width:"12%",
        position:"absolute",
        right:0,
        bottom:0,
        marginBottom:5
    },
    TXTInfo:{
        padding:3,
    },
    TXTPaginaInfo:{
        marginTop:15,
        width:"65%",
        alignSelf:"center",
        textAlign:"center",
    },
    RodaPe:{
        position:"absolute",
        bottom:0,
        width:"100%",
    },
    containerModal:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    BOXCalulo:{
        marginBottom:50
    },
    BOXLista:{
        marginBottom:20
    },
});

export default styles;