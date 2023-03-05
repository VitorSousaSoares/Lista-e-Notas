import { StatusBar } from 'expo-status-bar';
import { useState, useEffect} from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './src/Styles';
import Titulo from './src/Titulo';
import RodaPe from './src/RodaPe';
import VerNotas from './src/VerNotas';
import AdicionarNotas from './src/AdicionarNotas';
import EDITNota from './src/EDITNota';
import VerNota from './src/VerNota';
import NomeDaListaSimples from './src/NomeDaListaSimples';
import NomeDaListaSimples2 from './src/NomeDaListaSimples2';
import NomeDaLista from './src/NomeDaLista';
import NomeDaLista2 from './src/NomeDaLista2';
import NomeDaTarefa from './src/NomeDaTarefa';
import NomeDaTarefa2 from './src/NomeDaTarefa2';
import VerListaSimples from './src/VerListaSimples';
import VerLista from './src/VerLista';
import VerLista2 from './src/VerLista2';
import VerTarefa from './src/VerTarefa';
import VerTarefa2 from './src/VerTarefa2';
import AdicionarLista from './src/AdicionarLista';
import AdicionarLista2 from './src/AdicionarLista2';
import AdicionarTarefa from './src/AdicionarTarefa';
import Calculo from './src/Calculo';
import Calculo2 from './src/Calculo2';
import EDITLista from './src/EDITLista';
import EDITLista2 from './src/EDITLista2';

export default function App() {
  const [Pagina,setPagina] = useState("Home");

  const [Ver,setVer]= useState("");

  const [Nota,setNota] = useState("");
  const [TituloNota,setTituloNota] = useState("");
  const [ConteudoNota,setConteudoNota] = useState("");
  const [CorNota,setCorNota] = useState("rgb(255,203,119)");
  const [IdNota,setIdNota] = useState ("");

  const [Compras,setCompras] = useState("");
  const [NomeLista,setNomeLista] = useState("Compras");
  const [IdCompras,setIdCompras] = useState("");
  const [ItemCompras,setItemCompras] = useState("");
  const [LocalCompras,setLocalCompras] = useState("");
  const [ValorCompras,setValorCompras] = useState("");
  const [QuantidadeCompras,setQuantidadeCompras] = useState("");
  const [CarinhoCompras,setCarinhoCompras] = useState("0");
  const [Orasament,setOrsamento] = useState("");

  const [Compras2,setCompras2] = useState("");
  const [NomeLista2,setNomeLista2] = useState("Compras");
  const [IdCompras2,setIdCompras2] = useState("");
  const [ItemCompras2,setItemCompras2] = useState("");
  const [LocalCompras2,setLocalCompras2] = useState("");
  const [ValorCompras2,setValorCompras2] = useState("");
  const [QuantidadeCompras2,setQuantidadeCompras2] = useState("");
  const [CarinhoCompras2,setCarinhoCompras2] = useState("0");
  const [Orasament2,setOrsamento2] = useState("");

  const [Tarefa,setTarefa] = useState("");
  const [NomeTarefa,setNomeTarefa] = useState("Tarefa");
  const [ItemTarefa,setItemTarefa] = useState("");
  const [LocalTarefa,setLocalTarefa] = useState("");
  const [ConcluirTarefa,setConcluirTarefa] = useState("0");
  const [HoraTarefa,setHoraTarefa] = useState("");
  const [DiaTarefa,setDiaTarefa] = useState("");

  const [Tarefa2,setTarefa2] = useState("");
  const [NomeTarefa2,setNomeTarefa2] = useState("Tarefa");
  const [ItemTarefa2,setItemTarefa2] = useState("");
  const [LocalTarefa2,setLocalTarefa2] = useState("");
  const [ConcluirTarefa2,setConcluirTarefa2] = useState("0");
  const [HoraTarefa2,setHoraTarefa2] = useState("");
  const [DiaTarefa2,setDiaTarefa2] = useState("");

  const [ListaSimples,setListaSimples] = useState("");
  const [NomeListaSimples,setNomeListaSimples] = useState("check");
  const [ItemListaSimples,setItemListaSimples] = useState("");
  
  const [ListaSimples2,setListaSimples2] = useState("");
  const [NomeListaSimples2,setNomeListaSimples2] = useState("check");
  const [ItemListaSimples2,setItemListaSimples2] = useState("");
  

  const getNota = async () => {
    try {
      const caregarNota = await AsyncStorage.getItem('@Nota')
      return caregarNota != null ? setNota(JSON.parse(caregarNota)) : null;
      
    } catch(e) {
    }
  }
  const getNomeLista = async () => {
    try {
      const caregarCompras = await AsyncStorage.getItem('@NomeLista')
      return caregarCompras != null ? setNomeLista(JSON.parse(caregarCompras)) : null;
      
    } catch(e) {
    }
  }
  const getLista = async () => {
    try {
      const caregarCompras = await AsyncStorage.getItem('@Lista')
      return caregarCompras != null ? setCompras(JSON.parse(caregarCompras)) : null;
      
    } catch(e) {
    }
  }
  const getNomeLista2 = async () => {
    try {
      const caregarCompras = await AsyncStorage.getItem('@NomeLista2')
      return caregarCompras != null ? setNomeLista2(JSON.parse(caregarCompras)) : null;
      
    } catch(e) {
    }
  }
  const getLista2 = async () => {
    try {
      const caregarCompras = await AsyncStorage.getItem('@Lista2')
      return caregarCompras != null ? setCompras2(JSON.parse(caregarCompras)) : null;
      
    } catch(e) {
    }
  }
  const getNomeTarefa = async () => {
    try {
      const caregarCompras = await AsyncStorage.getItem('@NomeTarefa')
      return caregarCompras != null ? setNomeTarefa(JSON.parse(caregarCompras)) : null;
      
    } catch(e) {
    }
  }
  const getTarefa = async () => {
    try {
      const caregarCompras = await AsyncStorage.getItem('@Tarefa')
      return caregarCompras != null ? setTarefa(JSON.parse(caregarCompras)) : null;
      
    } catch(e) {
    }
  }
  const getNomeTarefa2 = async () => {
    try {
      const caregarCompras = await AsyncStorage.getItem('@NomeTarefa2')
      return caregarCompras != null ? setNomeTarefa2(JSON.parse(caregarCompras)) : null;
      
    } catch(e) {
    }
  }
  const getTarefa2 = async () => {
    try {
      const caregarCompras = await AsyncStorage.getItem('@Tarefa2')
      return caregarCompras != null ? setTarefa2(JSON.parse(caregarCompras)) : null;
      
    } catch(e) {
    }
  }
  const getNomeListaSimples = async () => {
    try {
      const caregarCompras = await AsyncStorage.getItem('@NomeListaSimples')
      return caregarCompras != null ? setNomeListaSimples(JSON.parse(caregarCompras)) : null;
      
    } catch(e) {
    }
  }
  const getListaSimples = async () => {
    try {
      const caregarCompras = await AsyncStorage.getItem('@ListaSimples')
      return caregarCompras != null ? setListaSimples(JSON.parse(caregarCompras)) : null;
      
    } catch(e) {
    }
  }
  const getNomeListaSimples2 = async () => {
    try {
      const caregarCompras = await AsyncStorage.getItem('@NomeListaSimples2')
      return caregarCompras != null ? setNomeListaSimples2(JSON.parse(caregarCompras)) : null;
      
    } catch(e) {
    }
  }
  const getListaSimples2 = async () => {
    try {
      const caregarCompras = await AsyncStorage.getItem('@ListaSimples2')
      return caregarCompras != null ? setListaSimples2(JSON.parse(caregarCompras)) : null;
      
    } catch(e) {
    }
  }
  useEffect(()=>{
    {getNota()}
    {getNomeLista()}
    {getLista()}
    {getNomeLista2()}
    {getLista2()}
    {getNomeTarefa()}
    {getTarefa()}
    {getNomeTarefa2()}
    {getTarefa2()}
    {getNomeListaSimples()}
    {getListaSimples()}
    {getNomeListaSimples2()}
    {getListaSimples2()}

  },[])
  

  //ok
  if (Pagina === "Home") {
    return (
      <View style={styles.container}>

        <Titulo Titulo ="HOME" Tipo = "simples"/>
        
        <Image style={styles.IMG} source={require("./src/T1.png")}/>
        
        <View style={styles.BTN}>
        
          <TouchableOpacity style={styles.BTNAcao} onPress={()=>setPagina("Notas")}>
            <AntDesign name="form" size={24} color="black" />
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.BTNAcao} onPress={()=>setPagina("Listas")}>
            <AntDesign name="profile" size={24} color="black" />
          </TouchableOpacity>
        
        </View>
        
        <TouchableOpacity style={styles.BTNInfo} onPress={()=>setPagina("Informacao")}>
          <AntDesign name="exclamationcircle" size={30} color="black" style={styles.TXTInfo}/>
        </TouchableOpacity>
        
        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "Informacao") {
    return (
      <View style={styles.container}>
        <Titulo Titulo ="INFORMAÇÕES" Tipo = "simples"/>
        <Image style={styles.IMGInfo} source={require("./assets/splash.png")}/>
        <Text style={styles.TXTPaginaInfo}>
          Projeto de Listas e bloco de notas feita por Vitor de Sousa
        </Text>
        <TouchableOpacity 
          onPress={()=>setPagina("Home")}  
        >
            <AntDesign name="home" size={50} color="black" style={styles.TXTPaginaInfo}/>
        </TouchableOpacity>
        
        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "Notas") {
    return (
      <View style={styles.container}>
        <Titulo Titulo ="NOTAS" Tipo = "simples"/>

        <VerNotas
          Nota={Nota}
          setCorNota={setCorNota}
          setTituloNota={setTituloNota}
          setConteudoNota={setConteudoNota}
          setNota={setNota}
          setPagina={setPagina}
          setIdNota={setIdNota}
        />

        <View style={styles.RodaPe}>
        <RodaPe
          Tipo="3Nota"
          setPagina={setPagina}  
        />
        </View>
        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "ADDNotas") {
    return (
      <View style={styles.container}>
        <Titulo 
          Titulo ="ADICIONAR NOTA" 
          Tipo = "ADDNotas"
          CorNota={CorNota}
          setCorNota={setCorNota}
        />

        <ScrollView>
          < AdicionarNotas
            setTituloNota={setTituloNota}
            setConteudoNota={setConteudoNota}
          />
        </ScrollView>
        <View style={styles.RodaPe}>
        <RodaPe
          Tipo="1"
          setPagina={setPagina}
          setTituloNota={setTituloNota}
          setConteudoNota={setConteudoNota}
          setCorNota={setCorNota} 
          setNota={setNota} 
          Nota={Nota}
          TituloNota={TituloNota}
          ConteudoNota={ConteudoNota}
          CorNota={CorNota}
        />
        </View>
        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "VerNota") {
    return (
      <View style={styles.container}>
        <Titulo 
          Titulo ={TituloNota} 
          Tipo = "VerNotas"
          CorNota={CorNota}
          setCorNota={setCorNota}
          setPagina={setPagina}
        />

        <ScrollView>
          < VerNota
            ConteudoNota={ConteudoNota}
          />
        </ScrollView>
        <View style={styles.RodaPe}>
        <RodaPe
          Tipo="1voltarDEnotas"
          setPagina={setPagina}
          setTituloNota={setTituloNota}
          setConteudoNota={setConteudoNota}
          setCorNota={setCorNota} 
          setNota={setNota}
          setIdNota={setIdNota}
          Nota={Nota}
          TituloNota={TituloNota}
          ConteudoNota={ConteudoNota}
          CorNota={CorNota}
        />
        </View>
        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "EDITNotas") {
    return (
      <View style={styles.container}>
        <Titulo 
          Titulo ="EDITAR NOTA" 
          Tipo = "ADDNotas"
          CorNota={CorNota}
          setCorNota={setCorNota}
        />

        <ScrollView>
          < EDITNota
            setTituloNota={setTituloNota}
            setConteudoNota={setConteudoNota}
            TituloNota={TituloNota}
            ConteudoNota={ConteudoNota}
          />
        </ScrollView>
        <View style={styles.RodaPe}>
        <RodaPe
          Tipo="1EN"
          setPagina={setPagina}
          setTituloNota={setTituloNota}
          setConteudoNota={setConteudoNota}
          setCorNota={setCorNota} 
          setNota={setNota} 
          setIdNota={setIdNota}
          Nota={Nota}
          TituloNota={TituloNota}
          ConteudoNota={ConteudoNota}
          CorNota={CorNota}
          IdNota={IdNota}
        />
        </View>
        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "Listas") {
    return (
      <View style={styles.container}>
        <Titulo 
          Titulo ="LISTAS" 
          Tipo = "LISTAS"
          setPagina = {setPagina}
        />
        <View style={styles.containerModal}>
          <View style={styles.BOXLista}>
            <NomeDaLista
              setNomeLista={setNomeLista}
              setPagina={setPagina}
              setCompras={setCompras}
              Comp={NomeLista}
              setOrsamento={setOrsamento}
              />
          </View>
          <View style={styles.BOXLista}>
            <NomeDaLista2
              setNomeLista={setNomeLista2}
              setPagina={setPagina}
              setCompras={setCompras2}
              Comp={NomeLista2}
              setOrsamento={setOrsamento2}
            />
          </View>
          <View style={styles.BOXLista}>
            <NomeDaTarefa
              setNomeTarefa={setNomeTarefa}
              setPagina={setPagina}
              setTarefa={setTarefa}
              Comp={NomeTarefa}
            />
          </View>
          <View style={styles.BOXLista}>
            <NomeDaTarefa2
              setNomeTarefa={setNomeTarefa2}
              setPagina={setPagina}
              setTarefa={setTarefa2}
              Comp={NomeTarefa2}
            />
          </View>
          <View style={styles.BOXLista}>
            <NomeDaListaSimples
              setNomeListaSimples={setNomeListaSimples}
              setPagina={setPagina}
              setListaSimples={setListaSimples}
              Comp={NomeListaSimples}
            />
          </View>
          <View style={styles.BOXLista}>
            <NomeDaListaSimples2
              setNomeListaSimples={setNomeListaSimples2}
              setPagina={setPagina}
              setListaSimples={setListaSimples2}
              Comp={NomeListaSimples2}
            />
          </View>
        </View>

        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "Compras") {
    return (
      <View style={styles.container}>
        <Titulo 
          Titulo = {NomeLista}
          Tipo = "simples"
        />
        <View style={styles.containerModal}>
          <VerLista
            Compras={Compras}
            Ver={Ver}
            setVer={setVer}
            setCompras={setCompras}
            setIdCompras={setIdCompras}
            setItemCompras={setItemCompras}
            setLocalCompras={setLocalCompras}
            setValorCompras={setValorCompras}
            setQuantidadeCompras={setQuantidadeCompras}
            setCarinhoCompras={setCarinhoCompras}
            setPagina={setPagina}

          />
        </View >
        <View style={styles.BOXCalulo}>
          <Calculo
            Compras={Compras}
            Orasament={Orasament}
            setOrsamento={setOrsamento}
          />
        </View>
        <View style={styles.RodaPe}>
        <RodaPe
          Tipo="3Lista"
          setPagina={setPagina}
        />
        </View>
        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "Compras2") {
    return (
      <View style={styles.container}>
        <Titulo 
          Titulo = {NomeLista2}
          Tipo = "simples"
        />
        <View style={styles.containerModal}>
          <VerLista2
            Compras={Compras2}
            setCompras={setCompras2}
            setIdCompras={setIdCompras2}
            setItemCompras={setItemCompras2}
            setLocalCompras={setLocalCompras2}
            setValorCompras={setValorCompras2}
            setQuantidadeCompras={setQuantidadeCompras2}
            setCarinhoCompras={setCarinhoCompras2}
            setPagina={setPagina}
          />
        </View >
        <View style={styles.BOXCalulo}>
          <Calculo2
            Compras={Compras2}
            Orasament={Orasament2}
            setOrsamento={setOrsamento2}
          />
        </View>
        <View style={styles.RodaPe}>
        <RodaPe
          Tipo="3Lista2"
          setPagina={setPagina}
        />
        </View>
        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "Tarefas") {
    return (
      <View style={styles.container}>
        <Titulo 
          Titulo = {NomeTarefa}
          Tipo = "simples"
        />
        <View style={styles.containerModal}>
          <VerTarefa
            Tarefa={Tarefa}
            setTarefa={setTarefa}
            setNomeTarefa={setNomeTarefa}
            setItemTarefa={setItemTarefa}
            setLocalTarefa={setLocalTarefa}
            setConcluirTarefa={setConcluirTarefa}
            setHoraTarefa={setHoraTarefa}
            setDiaTarefa={setDiaTarefa}
            setPagina={setPagina}
          />
        </View >
        <View style={styles.RodaPe}>
        <RodaPe
          Tipo="3Tarefa"
          setPagina={setPagina}
        />
        </View>
        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "Tarefas2") {
    return (
      <View style={styles.container}>
        <Titulo 
          Titulo = {NomeTarefa2}
          Tipo = "simples"
        />
        <View style={styles.containerModal}>
          <VerTarefa2
            Tarefa={Tarefa2}
            setTarefa={setTarefa2}
            setNomeTarefa={setNomeTarefa2}
            setItemTarefa={setItemTarefa2}
            // setIdTarefa={setIdTarefa}
            setLocalTarefa={setLocalTarefa2}
            setConcluirTarefa={setConcluirTarefa2}
            setHoraTarefa={setHoraTarefa2}
            setDiaTarefa={setDiaTarefa2}
            setPagina={setPagina}
          />
        </View >
        <View style={styles.RodaPe}>
        <RodaPe
          Tipo="3Tarefa2"
          setPagina={setPagina}
        />
        </View>
        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "ListaSimples") {
    return (
      <View style={styles.container}>
        <Titulo 
          Titulo = {NomeListaSimples}
          Tipo = "simples"
        />
        <View style={styles.containerModal}>
          <VerListaSimples
            ListaSimples={ListaSimples}
            ItemListaSimples={ItemListaSimples}
            setListaSimples={setListaSimples}
            setItemListaSimples={setItemListaSimples}
            setPagina={setPagina}
          />
        </View >
        <View style={styles.RodaPe}>
        <RodaPe
          Tipo="3ListaSimples"
          ListaSimples={ListaSimples}
          ItemListaSimples={ItemListaSimples}
          setPagina={setPagina}
          setListaSimples={setListaSimples}
          setItemListaSimples={setItemListaSimples}
        />
        </View>
        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "ListaSimples2") {
    return (
      <View style={styles.container}>
        <Titulo 
          Titulo = {NomeListaSimples2}
          Tipo = "simples"
        />
        <View style={styles.containerModal}>
          <VerListaSimples
            ListaSimples={ListaSimples2}
            ItemListaSimples={ItemListaSimples2}
            setListaSimples={setListaSimples2}
            setItemListaSimples={setItemListaSimples2}
            setPagina={setPagina}
          />
        </View >
        <View style={styles.RodaPe}>
        <RodaPe
          Tipo="3ListaSimples2"
          ListaSimples={ListaSimples2}
          ItemListaSimples={ItemListaSimples2}
          setPagina={setPagina}
          setListaSimples={setListaSimples2}
          setItemListaSimples={setItemListaSimples2}
        />
        </View>
        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "ADDCompras") {
    return (
      <View style={styles.container}>
        <Titulo 
          Titulo ="ADICIONAR ITEM" 
          Tipo = "simples"
        />

        <ScrollView>
          < AdicionarLista
            setCompras={setCompras} 
            setItemCompras={setItemCompras}
            setLocalCompras={setLocalCompras}
            setValorCompras={setValorCompras}
            setQuantidadeCompras={setQuantidadeCompras}
            setCarinhoCompras={setCarinhoCompras}
            CarinhoCompras={CarinhoCompras}
            Compras={Compras}
          />
        </ScrollView>

        <View style={styles.RodaPe}>
        <RodaPe
          Tipo="CriarLista"
          setPagina={setPagina}
          setCompras={setCompras} 
          setItemCompras={setItemCompras}
          setLocalCompras={setLocalCompras}
          setValorCompras={setValorCompras}
          setQuantidadeCompras={setQuantidadeCompras}
          setCarinhoCompras={setCarinhoCompras}
          CarinhoCompras={CarinhoCompras}
          Compras={Compras}
          ItemCompras={ItemCompras}
          LocalCompras={LocalCompras}
          ValorCompras={ValorCompras}
          QuantidadeCompras={QuantidadeCompras}
        />
        </View>
        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "ADDTarefa") {
    return (
      <View style={styles.container}>
        <Titulo 
          Titulo ="ADICIONAR TAREFA" 
          Tipo = "simples"
        />

        <ScrollView>
          < AdicionarTarefa
            setItemTarefa={setItemTarefa}
            setLocalTarefa={setLocalTarefa}
            setConcluirTarefa={setConcluirTarefa}
            setHoraTarefa={setHoraTarefa}
            setDiaTarefa={setDiaTarefa}
            ConcluirTarefa={ConcluirTarefa}
            HoraTarefa={HoraTarefa}
            DiaTarefa={DiaTarefa}
          />
        </ScrollView>

        <View style={styles.RodaPe}>
        <RodaPe
          Tipo="CriarTarefa"
          setPagina={setPagina}
          setTarefa={setTarefa} 
          setItemTarefa={setItemTarefa}
          setLocalTarefa={setLocalTarefa}
          setConcluirTarefa={setConcluirTarefa}
          setHoraTarefa={setHoraTarefa}
          setDiaTarefa={setDiaTarefa}
          Tarefa={Tarefa} 
          ItemTarefa={ItemTarefa}
          LocalTarefa={LocalTarefa}
          ConcluirTarefa={ConcluirTarefa}
          HoraTarefa={HoraTarefa}
          DiaTarefa={DiaTarefa}

        />
        </View>
        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "ADDTarefa2") {
    return (
      <View style={styles.container}>
        <Titulo 
          Titulo ="ADICIONAR TAREFA" 
          Tipo = "simples"
        />

        <ScrollView>
          < AdicionarTarefa
            setItemTarefa={setItemTarefa2}
            setLocalTarefa={setLocalTarefa2}
            setConcluirTarefa={setConcluirTarefa2}
            setHoraTarefa={setHoraTarefa2}
            setDiaTarefa={setDiaTarefa2}
            ConcluirTarefa={ConcluirTarefa2}
            HoraTarefa={HoraTarefa2}
            DiaTarefa={DiaTarefa2}
          />
        </ScrollView>

        <View style={styles.RodaPe}>
        <RodaPe
          Tipo="CriarTarefa2"
          setPagina={setPagina}
          setTarefa={setTarefa2} 
          setItemTarefa={setItemTarefa2}
          setLocalTarefa={setLocalTarefa2}
          setConcluirTarefa={setConcluirTarefa2}
          setHoraTarefa={setHoraTarefa2}
          setDiaTarefa={setDiaTarefa2}
          Tarefa={Tarefa2} 
          ItemTarefa={ItemTarefa2}
          LocalTarefa={LocalTarefa2}
          ConcluirTarefa={ConcluirTarefa2}
          HoraTarefa={HoraTarefa2}
          DiaTarefa={DiaTarefa2}

        />
        </View>
        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "ADDCompras2") {
    return (
      <View style={styles.container}>
        <Titulo 
          Titulo ="ADICIONAR ITEM" 
          Tipo = "simples"
        />
        <ScrollView>
          < AdicionarLista2
            setCompras={setCompras2} 
            setItemCompras={setItemCompras2}
            setLocalCompras={setLocalCompras2}
            setValorCompras={setValorCompras2}
            setQuantidadeCompras={setQuantidadeCompras2}
            setCarinhoCompras={setCarinhoCompras2}
            CarinhoCompras={CarinhoCompras2}
            Compras={Compras2}
          />
        </ScrollView>

        <View style={styles.RodaPe}>
        <RodaPe
          Tipo="CriarLista2"
          setPagina={setPagina}
          setCompras={setCompras2} 
          setItemCompras={setItemCompras2}
          setLocalCompras={setLocalCompras2}
          setValorCompras={setValorCompras2}
          setQuantidadeCompras={setQuantidadeCompras2}
          setCarinhoCompras={setCarinhoCompras2}
          CarinhoCompras={CarinhoCompras2}
          Compras={Compras2}
          ItemCompras={ItemCompras2}
          LocalCompras={LocalCompras2}
          ValorCompras={ValorCompras2}
          QuantidadeCompras={QuantidadeCompras2}
        />
        </View>
        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "EDITCompras") {
    return (
      <View style={styles.container}>
        <Titulo 
          Titulo ={ItemCompras}
          Tipo = "simples"
        />

        <ScrollView>
          < EDITLista
            setCompras={setCompras} 
            setItemCompras={setItemCompras}
            setLocalCompras={setLocalCompras}
            setValorCompras={setValorCompras}
            setQuantidadeCompras={setQuantidadeCompras}
            setCarinhoCompras={setCarinhoCompras}
            CarinhoCompras={CarinhoCompras}
            Compras={Compras}
            ItemCompras={ItemCompras}
            LocalCompras={LocalCompras}
            QuantidadeCompras={QuantidadeCompras}
            ValorCompras={ValorCompras}
          />
        </ScrollView>

        <View style={styles.RodaPe}>
        <RodaPe
          Tipo="EditarLista"
          setPagina={setPagina}
          setCompras={setCompras} 
          setItemCompras={setItemCompras}
          setLocalCompras={setLocalCompras}
          setValorCompras={setValorCompras}
          setQuantidadeCompras={setQuantidadeCompras}
          setCarinhoCompras={setCarinhoCompras}
          IdCompras={IdCompras}
          CarinhoCompras={CarinhoCompras}
          Compras={Compras}
          ItemCompras={ItemCompras}
          LocalCompras={LocalCompras}
          ValorCompras={ValorCompras}
          QuantidadeCompras={QuantidadeCompras}
        />
        </View>
        <StatusBar hidden />
      </View>
    );
  }
  //ok
  else if (Pagina === "EDITCompras2") {
    return (
      <View style={styles.container}>
        <Titulo 
          Titulo ={ItemCompras2}
          Tipo = "simples"
        />

        <ScrollView>
          < EDITLista2
            setCompras={setCompras2} 
            setItemCompras={setItemCompras2}
            setLocalCompras={setLocalCompras2}
            setValorCompras={setValorCompras2}
            setQuantidadeCompras={setQuantidadeCompras2}
            setCarinhoCompras={setCarinhoCompras2}
            CarinhoCompras={CarinhoCompras2}
            Compras={Compras2}
            ItemCompras={ItemCompras2}
            LocalCompras={LocalCompras2}
            QuantidadeCompras={QuantidadeCompras2}
            ValorCompras={ValorCompras2}
          />
        </ScrollView>

        <View style={styles.RodaPe}>
        <RodaPe
          Tipo="EditarLista2"
          setPagina={setPagina}
          setCompras={setCompras2} 
          setItemCompras={setItemCompras2}
          setLocalCompras={setLocalCompras2}
          setValorCompras={setValorCompras2}
          setQuantidadeCompras={setQuantidadeCompras2}
          setCarinhoCompras={setCarinhoCompras2}
          IdCompras={IdCompras2}
          CarinhoCompras={CarinhoCompras2}
          Compras={Compras2}
          ItemCompras={ItemCompras2}
          LocalCompras={LocalCompras2}
          ValorCompras={ValorCompras2}
          QuantidadeCompras={QuantidadeCompras2}
        />
        </View>
        <StatusBar hidden />
      </View>
    );
  }
  else{
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={setPagina("Home")}
        >
          <Text>Voltar</Text>
        </TouchableOpacity>
        <StatusBar hidden />
      </View>
    );
  }
}


