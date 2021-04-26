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
            <View style={styles.container}>
                <View style={styles.alignStyle}>
                    <Icon name="apple" size={34} color="green"/>
                    <Text style={styles.IngStyle}>Ingrédients :</Text>
                </View>
                    <Text>{route.params.Ingrédients}</Text>
                <View style={styles.alignStyle}>
                    <Icon name="spoon" size={34} color="grey"/>
                    <Text style={styles.DesStyle}>Description :</Text>
                </View>
                <Text>{route.params.Description}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    ViewStyle:{
        backgroundColor: "#f0faff"
    },

    container:{
        padding: 15,
    },

    CatStyle:{
        fontSize: 35,
        fontWeight:"bold",
        color: "#003c62",
        textAlign:"center",
    },

    NomStyle:{
        textAlign:"center",
        justifyContent:"center",
        width:325,
        fontSize: 20,
        backgroundColor:"#003c62",
        color:"#ededed",
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        padding: 20,
    },

    IngStyle:{
        fontSize:20,
        fontWeight:"bold",
        padding: 15,

    },

    DesStyle:{
        fontSize:20,
        fontWeight:"bold",
        padding:15,
    },

    ImageStyle:{
        width: 400,
        height: 200,
    },

    alignStyle:{
        display:'flex',
        flexDirection:'row',
        alignItems:"center",
        paddingTop: 10,
    },
})