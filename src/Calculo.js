import { StyleSheet, Text, View } from 'react-native';
import Orasamento from './ModalOrsamento';

export default function App(props) {
    

    function total(val) {
        if (props.Compras != "") {            
            let total = props.Compras.filter(function(val){
                return val.Carinho != "0";
            }); 
            
            if (val ==="total") {
                
                if (total =="") {
                    return(
                        <Text>0</Text>
                        )
                    }else{
                        let som = total.reduce( function( prevVal, elem ) {
                            return prevVal + elem.Total;
                        }, 0 );
                        const t = parseFloat((som).toFixed(2))
                        return(
                            <Text>{t}</Text>
                            )
                }
            }else{
                if (total =="") {
                    return(
                        <Text>0</Text>
                        )
                    }else{
                        let som = total.reduce( function( prevVal, elem ) {
                            return prevVal + elem.Total;
                        }, 0 );
                        var r = parseFloat(((props.Orasament)-(som)).toFixed(2));
                        return(
                            <Text>{r}</Text>
                    )
                }
            }
        }else{
            return(
                <Text>0</Text>
            )
        }   
    }

    return (
        <View style={styles.container}>
            <View>
                <Orasamento
                    setOrsamento={props.setOrsamento}
                    Orasamento={props.Orasament}
                />
            </View>
            <View style={styles.resultado}>
                <Text>
                    Total: R$ {total("total")}
                </Text>
                <Text>
                    Resto: R$ {total("resto")}
                </Text>
            </View>
        </View>
    ); 
    
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
        padding:10,
        marginLeft:10,
        marginRight:10,
        marginBottom:5,
        backgroundColor:"rgba(255,203,119,0.3)"
    },
    TXT:{
        fontSize:25,
    },
    resultado:{
        paddingTop:10,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:10,
        paddingRight:10,
    }
  

});