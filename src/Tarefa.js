import React from "react";
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

import { FontAwesome } from  '@expo/vector-icons';

export default function Tarefa({data, functionCustom}) {
    return(
        <View style={style.container}>
          <TouchableOpacity style={{marginRight:'16px'}} onPress={functionCustom}>
           <FontAwesome 
            name="trash"
            size={26}
            color='#00000'
            /> 
          </TouchableOpacity> 
          <Text>{data.name}</Text>   
        </View>
    )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(196,196,196,0.20)',
    marginTop: '8px',
    padding: '14px',
    borderRadius: '6px',
    flexDirection:'row',
    alignContent:"flex-start",
    alignItems:'center'
  }
});