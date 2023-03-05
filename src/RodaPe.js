import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalListaSimoles from './ModalListaSimples';
import ModalListaSimoles2 from './ModalListaSimples2';


export default function App(props) {
 
        const criarNota = async ()=> {
            if (props.TituloNota ==="") {
                Alert.alert("Titulo","O titulo deve ser preenchido")
            }else{

                let id = 0;
                if (props.Nota.length>0){
                    id=props.Nota[props.Nota.length-1].id+1;
                }
                
                let newNota = {id:id,Titulo:props.TituloNota,Conteudo:props.ConteudoNota,Cor:props.CorNota};
                props.setNota([...props.Nota,newNota]);
                
                try{
                    const salvarNota = JSON.stringify([...props.Nota,newNota])
                    await AsyncStorage.setItem('@Nota',salvarNota)
                }catch(e){
                    
                }
                props.setTituloNota("")
                props.setConteudoNota("")
                props.setCorNota("rgb(255,203,119)")
                props.setPagina("Notas")
            }
    }

    const criarCompra = async ()=> {
        if (props.ItemCompras ==="") {
            Alert.alert("Item","O item deve ser preenchido")
        }else{

            let id = 0;
            if (props.Compras.length>0){
                id=props.Compras[props.Compras.length-1].id+1;
            }
            
            let newNota = {id:id,Item:props.ItemCompras,Local:props.LocalCompras,Quantidade:props.QuantidadeCompras,Valor:props.ValorCompras,Carinho:props.CarinhoCompras,Total:parseFloat(((props.QuantidadeCompras)*(props.ValorCompras)).toFixed(2))};
            props.setCompras([...props.Compras,newNota]);
            
            try{
                const salvarNota = JSON.stringify([...props.Compras,newNota])
                await AsyncStorage.setItem('@Lista',salvarNota)
            }catch(e){
                
            }
            props.setItemCompras("")
            props.setLocalCompras("")
            props.setCarinhoCompras("0")
            props.setQuantidadeCompras("")
            props.setValorCompras("")
            props.setPagina("Compras") 
        }
    }

    const criarCompra2 = async ()=> {
        if (props.ItemCompras ==="") {
            Alert.alert("Item","O item deve ser preenchido")
        }else{

            let id = 0;
            if (props.Compras.length>0){
                id=props.Compras[props.Compras.length-1].id+1;
            }
            
            let newNota = {id:id,Item:props.ItemCompras,Local:props.LocalCompras,Quantidade:props.QuantidadeCompras,Valor:props.ValorCompras,Carinho:props.CarinhoCompras,Total:parseFloat(((props.QuantidadeCompras)*(props.ValorCompras)).toFixed(2))};
            props.setCompras([...props.Compras,newNota]);
            
            try{
                const salvarNota = JSON.stringify([...props.Compras,newNota])
                await AsyncStorage.setItem('@Lista2',salvarNota)
            }catch(e){
                
            }
            props.setItemCompras("")
            props.setLocalCompras("")
            props.setCarinhoCompras("0")
            props.setQuantidadeCompras("")
            props.setValorCompras("")
            props.setPagina("Compras2") 
        }
    }

    const criarTarefa = async ()=> {
        if (props.ItemTarefa ==="" ) {
            Alert.alert("Nome","O nome deve ser preenchido")
        }
        else{

            let id = 0;
            if (props.Tarefa.length>0){
                id=props.Tarefa[props.Tarefa.length-1].id+1;
            }
            
            let newNota = {id:id,Item:props.ItemTarefa,Local:props.LocalTarefa,Dia:props.DiaTarefa,Hora:props.HoraTarefa,Concluir:props.ConcluirTarefa};
            props.setTarefa([...props.Tarefa,newNota]);
            
            try{
                const salvarNota = JSON.stringify([...props.Tarefa,newNota])
                await AsyncStorage.setItem('@Tarefa',salvarNota)
            }catch(e){
                
            }

            props.setItemTarefa("")
            props.setLocalTarefa("")
            props.setConcluirTarefa("0")
            props.setDiaTarefa("")
            props.setHoraTarefa("")
            props.setPagina("Tarefas") 
        }

    }

    const CriarTarefa2 = async ()=> {
        if (props.ItemTarefa ==="" ) {
            Alert.alert("Nome","O nome deve ser preenchido")
        }
        else{

            let id = 0;
            if (props.Tarefa.length>0){
                id=props.Tarefa[props.Tarefa.length-1].id+1;
            }
            
            let newNota = {id:id,Item:props.ItemTarefa,Local:props.LocalTarefa,Dia:props.DiaTarefa,Hora:props.HoraTarefa,Concluir:props.ConcluirTarefa};
            props.setTarefa([...props.Tarefa,newNota]);
            
            try{
                const salvarNota = JSON.stringify([...props.Tarefa,newNota])
                await AsyncStorage.setItem('@Tarefa2',salvarNota)
            }catch(e){
                
            }

            props.setItemTarefa("")
            props.setLocalTarefa("")
            props.setConcluirTarefa("0")
            props.setDiaTarefa("")
            props.setHoraTarefa("")
            props.setPagina("Tarefas2") 
        }

    }



    const EditNota = async ()=>{
        let newNota = props.Nota.filter(function(val){
            return val.id != props.IdNota;
          });
      
          let id = 0;
          if (props.Nota.length>0){
              id=props.Nota[props.Nota.length-1].id+1;
          }
  
          let neNota = {id:id,Titulo:props.TituloNota,Conteudo:props.ConteudoNota,Cor:props.CorNota};
          props.setNota([...newNota,neNota]);
  
          try{
              const salvarNota = JSON.stringify([...newNota,neNota])
              await AsyncStorage.setItem('@Nota',salvarNota)
          }catch(e){
  
          }
  
          props.setTituloNota("")
          props.setConteudoNota("")
          props.setCorNota("rgb(255,203,119)")
          props.setIdNota("")
          props.setPagina("Notas")
    }

    const EditLista = async ()=>{
        let newNota = props.Compras.filter(function(val){
            return val.id != props.IdCompras;
          });
      
          let id = 0;
          if (props.Compras.length>0){
              id=props.Compras[props.Compras.length-1].id+1;
          }
  
          let neNota = {id:id,Item:props.ItemCompras,Local:props.LocalCompras,Quantidade:props.QuantidadeCompras,Valor:props.ValorCompras,Carinho:props.CarinhoCompras,Total:parseFloat(((props.QuantidadeCompras)*(props.ValorCompras)).toFixed(2))};
          props.setCompras([...newNota,neNota]);
  
          try{
              const salvarNota = JSON.stringify([...newNota,neNota])
              await AsyncStorage.setItem('@Lista',salvarNota)
          }catch(e){
  
          }
          props.setLocalCompras("");
          props.setItemCompras("")
          props.setValorCompras("")
          props.setQuantidadeCompras("")
          props.setCarinhoCompras("0")
          props.setPagina("Compras")
    }
    const EditLista2 = async ()=>{
        let newNota = props.Compras.filter(function(val){
            return val.id != props.IdCompras;
          });
      
          let id = 0;
          if (props.Compras.length>0){
              id=props.Compras[props.Compras.length-1].id+1;
          }
  
          let neNota = {id:id,Item:props.ItemCompras,Local:props.LocalCompras,Quantidade:props.QuantidadeCompras,Valor:props.ValorCompras,Carinho:props.CarinhoCompras,Total:parseFloat(((props.QuantidadeCompras)*(props.ValorCompras)).toFixed(2))};
          props.setCompras([...newNota,neNota]);
  
          try{
              const salvarNota = JSON.stringify([...newNota,neNota])
              await AsyncStorage.setItem('@Lista2',salvarNota)
          }catch(e){
  
          }
          props.setLocalCompras("");
          props.setItemCompras("")
          props.setValorCompras("")
          props.setQuantidadeCompras("")
          props.setCarinhoCompras("0")
          props.setPagina("Compras2")
    }

    function Voltar(val) {
        props.setTituloNota("")
        props.setConteudoNota("")
        props.setCorNota("rgb(255,203,119)")
        props.setIdNota("")
        props.setPagina(val)
    }
    function Listas(val) {
        props.setTituloNota("")
        props.setConteudoNota("")
        props.setCorNota("rgb(255,203,119)")
        props.setIdNota("")
        props.setPagina(val)
    }

    if (props.Tipo === "3Nota") {
      return (
        <View>
            <TouchableOpacity style={styles.BTN} onPress={()=>props.setPagina("ADDNotas")}>
                <Text style={styles.BTNTxt}>+</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>props.setPagina("Home")}>
                    <AntDesign name="arrowleft" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.setPagina("Listas")}>
                    <AntDesign name="profile" size={28} color="black" />
                </TouchableOpacity> 
            </View>
       </View>
      );
    }else if (props.Tipo === "3Lista") {
      return (
        <View>
            <TouchableOpacity style={styles.BTN} onPress={()=>props.setPagina("ADDCompras")}>
                <Text style={styles.BTNTxt}>+</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>props.setPagina("Listas")}>
                    <AntDesign name="arrowleft" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.setPagina("Notas")}>
                    <AntDesign name="form" size={28} color="black" />
                </TouchableOpacity> 
            </View>
       </View>
      );
    }else if (props.Tipo === "3Lista2") {
      return (
        <View>
            <TouchableOpacity style={styles.BTN} onPress={()=>props.setPagina("ADDCompras2")}>
                <Text style={styles.BTNTxt}>+</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>props.setPagina("Listas")}>
                    <AntDesign name="arrowleft" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.setPagina("Notas")}>
                    <AntDesign name="form" size={28} color="black" />
                </TouchableOpacity> 
            </View>
       </View>
      );
    }else if (props.Tipo === "3Tarefa") {
      return (
        <View>
            <TouchableOpacity style={styles.BTN} onPress={()=>props.setPagina("ADDTarefa")}>
                <Text style={styles.BTNTxt}>+</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>props.setPagina("Listas")}>
                    <AntDesign name="arrowleft" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.setPagina("Notas")}>
                    <AntDesign name="form" size={28} color="black" />
                </TouchableOpacity> 
            </View>
       </View>
      );
    }else if (props.Tipo === "3Tarefa2") {
      return (
        <View>
            <TouchableOpacity style={styles.BTN} onPress={()=>props.setPagina("ADDTarefa2")}>
                <Text style={styles.BTNTxt}>+</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>props.setPagina("Listas")}>
                    <AntDesign name="arrowleft" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.setPagina("Notas")}>
                    <AntDesign name="form" size={28} color="black" />
                </TouchableOpacity> 
            </View>
       </View>
      );
    }else if (props.Tipo === "3ListaSimples") {
      return (
        <View>
            <TouchableOpacity style={styles.BTN}>
                <ModalListaSimoles
                    style={styles.BTN}
                    ListaSimples={props.ListaSimples}
                    ItemListaSimples={props.ItemListaSimples}
                    setListaSimples={props.setListaSimples}
                    setItemListaSimples={props.setItemListaSimples}
                />
            </TouchableOpacity>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>props.setPagina("Listas")}>
                    <AntDesign name="arrowleft" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.setPagina("Notas")}>
                    <AntDesign name="form" size={28} color="black" />
                </TouchableOpacity> 
            </View>
       </View>
      );
    }else if (props.Tipo === "3ListaSimples2") {
      return (
        <View>
            <TouchableOpacity style={styles.BTN}>
                <ModalListaSimoles2
                    style={styles.BTN}
                    ListaSimples={props.ListaSimples}
                    ItemListaSimples={props.ItemListaSimples}
                    setListaSimples={props.setListaSimples}
                    setItemListaSimples={props.setItemListaSimples}
                />
            </TouchableOpacity>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>props.setPagina("Listas")}>
                    <AntDesign name="arrowleft" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.setPagina("Notas")}>
                    <AntDesign name="form" size={28} color="black" />
                </TouchableOpacity> 
            </View>
       </View>
      );
    }else if (props.Tipo === "1") {
        return (
            <View>
                <TouchableOpacity style={styles.BTNCocluir} onPress={()=>criarNota()}>
                    <Text style={styles.BTNConcluirTXT}>CONCLUIR</Text>
                </TouchableOpacity> 
           </View>
          );
    }else if (props.Tipo === "CriarLista") {
        return (
            <View>
                <TouchableOpacity style={styles.BTNCocluir} onPress={()=>criarCompra()}>
                    <Text style={styles.BTNConcluirTXT}>CONCLUIR</Text>
                </TouchableOpacity> 
           </View>
          );
    }else if (props.Tipo === "CriarTarefa") {
        return (
            <View>
                <TouchableOpacity style={styles.BTNCocluir} onPress={()=>criarTarefa()}>
                    <Text style={styles.BTNConcluirTXT}>CONCLUIR</Text>
                </TouchableOpacity> 
           </View>
          );
    }else if (props.Tipo === "CriarTarefa2") {
        return (
            <View>
                <TouchableOpacity style={styles.BTNCocluir} onPress={()=>CriarTarefa2()}>
                    <Text style={styles.BTNConcluirTXT}>CONCLUIR</Text>
                </TouchableOpacity> 
           </View>
          );
    }else if (props.Tipo === "1EN") {
        return (
            <View>
                <TouchableOpacity style={styles.BTNCocluir} onPress={()=>EditNota()}>
                    <Text style={styles.BTNConcluirTXT}>CONCLUIR</Text>
                </TouchableOpacity> 
           </View>
          );
    }else if (props.Tipo === "EditarLista") {
        return (
            <View>
                <TouchableOpacity style={styles.BTNCocluir} onPress={()=>EditLista()}>
                    <Text style={styles.BTNConcluirTXT}>CONCLUIR</Text>
                </TouchableOpacity> 
           </View>
          );
    }else if (props.Tipo === "CriarLista2") {
        return (
            <View>
                <TouchableOpacity style={styles.BTNCocluir} onPress={()=>criarCompra2()}>
                    <Text style={styles.BTNConcluirTXT}>CONCLUIR</Text>
                </TouchableOpacity> 
           </View>
          );
    }else if (props.Tipo === "1EN") {
        return (
            <View>
                <TouchableOpacity style={styles.BTNCocluir} onPress={()=>EditNota()}>
                    <Text style={styles.BTNConcluirTXT}>CONCLUIR</Text>
                </TouchableOpacity> 
           </View>
          );
    }else if (props.Tipo === "EditarLista") {
        return (
            <View>
                <TouchableOpacity style={styles.BTNCocluir} onPress={()=>EditLista()}>
                    <Text style={styles.BTNConcluirTXT}>CONCLUIR</Text>
                </TouchableOpacity> 
           </View>
          );
    }else if (props.Tipo === "EditarLista2") {
        return (
            <View>
                <TouchableOpacity style={styles.BTNCocluir} onPress={()=>EditLista2()}>
                    <Text style={styles.BTNConcluirTXT}>CONCLUIR</Text>
                </TouchableOpacity> 
           </View>
          );
    }else if (props.Tipo === "1voltar") {
        return (
            <View>
            <TouchableOpacity style={styles.BTNHome} onPress={()=>props.setPagina("Home")}>
                <AntDesign name="home" size={35} color="black" style={styles.BTNTxtHome}/>
            </TouchableOpacity>
            <View style={styles.container}>
                <TouchableOpacity >
                    <AntDesign name="profile" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.setPagina("Notas")}>
                    <AntDesign name="form" size={24} color="black" />
                </TouchableOpacity> 
            </View>
       </View>
          );
    }else if (props.Tipo === "1voltarDEnotas") {
        return (
            <View>
            <TouchableOpacity style={styles.BTNHome} onPress={()=>Voltar("Home")}>
                <AntDesign name="home" size={35} color="black" style={styles.BTNTxtHome}/>
            </TouchableOpacity>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=> Listas("Listas")}>
                    <AntDesign name="profile" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Voltar("Notas")}>
                    <AntDesign name="form" size={24} color="black" />
                </TouchableOpacity> 
            </View>
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
        backgroundColor:"rgb(255,203,119)",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingRight:25,
        paddingLeft:25,
        paddingBottom:8,
        paddingTop:8
    },
    BTN:{
        width:56,
        height:56,
        zIndex:2,
        position:"absolute",
        bottom:0,
        alignSelf:"center",
        backgroundColor:"rgb(255,203,119)",
        borderColor:"rgb(254,249,239)",
        borderWidth:3,
        borderRadius:28,
        elevation:4
    },
    BTNHome:{
        width:56,
        height:56,
        zIndex:2,
        position:"absolute",
        bottom:0,
        alignSelf:"center",
        backgroundColor:"rgb(255,203,119)",
        borderColor:"rgb(254,249,239)",
        borderWidth:3,
        borderRadius:28,
        elevation:4
    },
    BTNTxt:{
        textAlign:"center",
        fontSize:25,
        paddingTop:5,
    },
    BTNTxtHome:{
        textAlign:"center",
        paddingTop:5
    },
    BTNCocluir:{
        backgroundColor:"rgb(255,203,119)",
        alignItems:"center",
        padding:8
    },
    BTNConcluirTXT:{
        fontSize:20
    }
});