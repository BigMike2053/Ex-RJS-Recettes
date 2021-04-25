import color from 'color';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Details({ route, navigation }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Icon name="trash" size={24} color="#255a7b" />,
        });
    }, [navigation]);

    return (
        <View style={styles.ViewStyle}>
            <Text style={styles.CatStyle}>{route.params.Catégorie}</Text>
            <Image source={{ uri: route.params.Lien }}
                style={styles.ImageStyle}/>
            <Text style={styles.NomStyle}>{route.params.Nom}</Text>
            <Text style={styles.IngStyle}>Ingrédients : {route.params.Ingrédients}</Text>
            <Text style={styles.DesStyle}>Description : {route.params.Description}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    ViewStyle:{
        backgroundColor: "#f0faff"
    },

    CatStyle:{
        fontSize: 40,
        padding: 10,
        color: "#003c62"
    },

    NomStyle:{
        fontSize: 30,
        backgroundColor:"#003c62",
        color:"#ededed",
        padding: 15
    },

    IngStyle:{
        fontSize:20,
        padding: 15,
    },

    DesStyle:{
        padding: 15
    },

    ImageStyle:{
        width: 400,
        height: 200,
    }
})