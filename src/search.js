import React, { Component } from 'react';
import { Image,View,StyleSheet,SafeAreaView,ScrollView,TextInput} from 'react-native';
import { Container, Header,Tab,Tabs,TabHeading, Content,Input, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
import WebView from 'react-native-webview';
import './global_conteudos.js'
import Item from './conteudo';


export default class SearchBar extends Component {


  state = {
    search: '',
  };


  filterList(list) {
    return list.filter(
      (listItem) =>
        listItem.hasTag
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) 
    );
  }

  render() {

      return(
        
         <View style={styles.container}>
        <TextInput
        placeholder="Pesquise o vídeo por #"
          onChangeText={(search) => this.setState({search})}
          style={styles.searchBar}
        />
        <ScrollView>
        {this.filterList(global.conteudos).map((listItem, index) => (
          <Item key={index}
           hora={listItem.hora} 
           titulo={listItem.titulo} 
           urlVideo={listItem.urlVideo}
           urlIcon={listItem.urlIcon} 
           hasTag={listItem.hasTag} />

        ))}
        </ScrollView>
        </View>
      
           )  
        }


    
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    
    height: '100%',
  },
  searchBar: {
    fontSize: 20,
    margin: 10,
    width: '100%',
    height: 50,
    backgroundColor: 'white',
  }
});
