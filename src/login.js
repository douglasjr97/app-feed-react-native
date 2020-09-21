
import React,{Component} from 'react';
import {View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet,StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';
import './global_conteudos.js'
const Stack = createStackNavigator();





export default function Home({navigation}){

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="black"/>
    
    

    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.containerLogo}>
        <Image
        style={{width:230,height:230}}
          source={require('./assets/logo.png')}
        />
        
      </View>
      
      <View style={styles.container}>
     
        <TextInput
        style={styles.input} 
          placeholder="Nome"
          autoCorrect={false}
          
         
        />

      <TextInput 
          style={styles.input} 
          placeholder="Senha"
          
          autoCorrect={false}
         
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText} onPress={() => 
            
       {

        
            navigation.navigate('Feed');
          
        }}
        >Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.btnText}>Criar conta gratuita</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
    
    </>
  );

  
}  
    



const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  containerLogo:{
    flex: 1,
  
    
    alignItems: 'center',
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit:{
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  submitText:{
    color: '#FFF',
    fontSize:18
  },
  btnRegister:{
    marginTop: 10,
  },
  btnText:{
    color: '#FFF'
  },
  title:{
    color: 'white',
    paddingRight:238,
    paddingBottom:20,
    fontSize: 30,
    fontWeight: 'bold'
}
});

