import  React  from "react";
import { View, Text, Image,StyleSheet, StatusBar} from "react-native";

export default function App() {
    return (
        <>
       
    <View style={styles.contaier}>
    <Image
    style={styles.image}
          source={require('./assets/douglas.jpg')}
        />
    <Text style={styles.title}>Criador por Douglas Falcão</Text>
    <Text style={styles.title}>2020</Text>
    </View>
    </>
    );
}

const styles = StyleSheet.create({
    contaier: {
        flex: 1,
        backgroundColor: 'black',
        
        alignItems: 'center'
    },

    title:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    image:{
        borderRadius:200,
        marginTop:40,
        width:300,
        height:300
    }
});