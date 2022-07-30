import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  FlatList  
} from 'react-native';
import { TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import Tarefa from './src/Tarefa';

export default function App() {
  //const [nome, setNome] = useState('Cliente');
  const [tarefa, setTarefa] = useState('');
  const [ list , setList ] = useState([
    /* 
    {
      key: '1',
      item: 'Comprar bisnaga'
     },
     {
      key: '2',
      item: 'Comprar doritos'
     },
     {
      key: '3',
      item: 'Comprar Cigarro'
     } */
  ]);
  //<Text>App React Native! Hello World /o/</Text>

  /*
  function handlerMudarNome() {
    setNome("Novo nome!!");
  } */

  function handlerAdd() {
    
    if(tarefa === '') {
      return;
    }

    const dados = {
      key: Date.now(),
      name: tarefa
    }
    
    //Esquema para add mais valores dentro da lista
    //macete com spread operator javascript
    setList(oldArray => [dados, ...oldArray]);

    setTarefa('');
  }

  function handleDelete(tarefaDeletada) {
   console.log("Tarefa deletada: " + tarefaDeletada);
   let filtroItem = list.filter((tarefa) => {
     return (tarefa.name !== tarefaDeletada);
   });

   setList(filtroItem);
  
  }

  /*

  <Text style={styles.fontSizeText32px}>HELLO</Text>
       <Text style={[styles.fontBoldText,styles.fontSizeText24px]}>WORLD!</Text>
       <Text style={{color:'#fff',padding: '16px'}}>/o/</Text> 
 
        <View style={styles.container}>
      <View style={styles.containerRow}>
       <Text style={styles.fontSizeText32px}>HELLO </Text>
       <Text style={[styles.fontBoldText,styles.fontSizeText32px]}>{nome}</Text>
      </View>
      <TouchableOpacity style={[styles.buttonCustom]} onPress={handlerMudarNome}>
        <Text style={styles.fontBoldText}>
          Mudar Nome
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
 
       */

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text> 

      <View style={styles.containerInput}>
        <TextInput 
          placeholder="Digite sua tarefa..."
          style={styles.input}
          value={tarefa}
          onChangeText={ (text) => setTarefa(text)}
        />

        <TouchableOpacity style={styles.buttonAdd} onPress={handlerAdd}>
          <FontAwesome name="plus" size={20} color='#FFF' /> 
        </TouchableOpacity> 
      </View>
      <FlatList 
       data={list}
       keyExtractor={(item) => item.key}
       renderItem={ ({item}) => <Tarefa data={item} functionCustom={() => handleDelete(item.name)} /> }
       style={styles.list}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  /*
  container: {
    //Pega a tela total do usuario o flex:1
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, */
  container: {
    flex: 1,
    //backgroundColor: '#1E90FF',
    backgroundColor: '#22272e',
    paddingTop: 28,
    //alignItems: 'center',  
    //justifyContent: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFF',
    marginTop: '5%',
    paddingStart: '5%',
    marginBottom: 12
  },
  //9:19
  containerColumn: {
    //flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'start',  
    border: '1px solid #fff'
  },
  containerRow: {
    //flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1E90FF',
    alignItems: 'flex-start',
    justifyContent: 'space-around'  
  },
  fontBoldText: {
    fontWeight: 'bold'
  },
  fontSizeText32px: {
    fontSize: '32px'
  },
  fontSizeText24px: {
    fontSize: '24px'
  },
  buttonCustom: {
    backgroundColor: 'purple',
    height:40,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerInput: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  input: {
    width: '75%',
    backgroundColor: '#FBFBFB',
    height: 44,
    borderRadius: 6,
    paddingHorizontal: 14,
  },
  buttonAdd: {
    width: '15%',
    height: 44,
    marginLeft: 8,
    backgroundColor: '#73f7ff',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '6px'
  },
  list: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingStart: '4%',
    paddingEnd: '4%',
    paddingTop: '2%',
  }
});


