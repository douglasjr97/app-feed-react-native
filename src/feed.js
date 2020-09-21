import React, { Component } from 'react';
import { Image,View,StyleSheet,SafeAreaView,ScrollView} from 'react-native';
import { Container, Header,Tab,Tabs,TabHeading, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
import WebView from 'react-native-webview';
import Item from './conteudo';
import './global_conteudos.js'

export default class CardImageExample extends Component {



  render() {
    return (
     
      <>
      <ScrollView style={{flex: 1,height:400,backgroundColor:'black'}}>
        {global.conteudos.map(conteudo=>(
            <Item 
            hora={conteudo.hora} 
            titulo={conteudo.titulo} 
            urlVideo={conteudo.urlVideo}
            urlIcon={conteudo.urlIcon} 
            hasTag={conteudo.hasTag} />
 
        ))}
     
     
            
      </ScrollView>
      
      </>
   
    );
  }
}




