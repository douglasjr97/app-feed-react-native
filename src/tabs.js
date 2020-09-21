import React, { Component } from 'react';
import { Container, Header, Content,Footer,FooterTab,Button,Tab, Tabs, TabHeading, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import Tab1 from './feed';
import Tab2 from './search';
import Tab3 from './sobre';

export default class TabsPage extends Component {
  render() {
    return (
        <Container >
          
           
          <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
              <Tab heading={ 
                  
              <TabHeading style={{backgroundColor:'black'}}><Icon name="home" color="white"/><Text>Início</Text></TabHeading>
            
              } >
                  <Tab1 />
              </Tab>
             <Tab heading={ <TabHeading style={{backgroundColor:'black'}}><Icon name="search" color="white"/><Text>Pesquisar</Text></TabHeading>}  textStyle={{color:'white'}} tabStyle={{backgroundColor:'black'}} activeTabStyle={{backgroundColor:'black'}}>
                  <Tab2 />
            </Tab>

            <Tab heading={ <TabHeading style={{backgroundColor:'black'}}><Icon name="user" color="white"/><Text>Sobre</Text></TabHeading>}  textStyle={{color:'white'}} tabStyle={{backgroundColor:'black'}} activeTabStyle={{backgroundColor:'black'}}>
                  <Tab3 />
            </Tab>
          </Tabs>
        
      </Container>
    );
  }
}