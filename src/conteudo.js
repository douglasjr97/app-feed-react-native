import React, {Component} from 'react';
import {View, TextInput, StyleSheet,ScrollView} from 'react-native';
import { Container, Header,Tab,Tabs,TabHeading, Content,Input, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import WebView from 'react-native-webview';


class Conteudo extends Component {
  render() {
    return (
     
    <>
      <Card style={styles.cardStyle} >
        <WebView
          style={ { height:300} }
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{uri: this.props.urlVideo}}

        />

        <CardItem style={styles.cardItemStyle}>
        
        <Thumbnail source={{uri: this.props.urlIcon}} />
        <Body style={styles.bodyCard}>

          <Text style={styles.TextCard}>{this.props.titulo}</Text>
          <Text note>{this.props.hasTag}</Text>

        </Body>
      
        <Right><Text style={styles.TextCard}>{this.props.hora} atrás</Text></Right>
        
        </CardItem>
      </Card>

    </> 
    );
  }
}

const styles = StyleSheet.create({

    cardStyle: {
      backgroundColor: 'black',
    },
    cardItemStyle: {
        backgroundColor: 'black',
      },
    bodyCard:{
        paddingLeft:10,
        paddingRight:80
    },
    TextCard:{
        color:'white'
    }
  });
  
export default Conteudo;