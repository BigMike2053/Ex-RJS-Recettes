import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, FlatList, TouchableOpacity, View, Modal } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import FormRecette from './FormRecette';
import AsyncStorage from "@react-native-async-storage/async-storage";




export default function Home({ navigation }) {

    const [modalOpen, setmodalOpen] = useState(false);
    const [reviews, setReviews] = useState([

        { Nom: "Anguille en matelote", Lien: "https://cdn.radiofrance.fr/s3/cruiser-production/2018/06/45ad801b-d92a-4d9b-ab26-0b87ca52d854/1280x680_maite_et_la_cuisine_des_mousquetaires_gettyimages-113421135.jpg", Catégorie: "Plat principal", Ingrédients: "1 anguille", Description: "Maïté ORDONEZ, aidée de Micheline BANZET, prépare une recette à base d'anguille : une anguille en matelote.", id: "1" },

        { Nom: "Gerboulade d'escargôts", Lien: "https://s1.dmcdn.net/v/Mnx8O1QBxcx7ET-c8/x1080", Catégorie: "Plat principal", Ingrédients: "10 escargots", Description: "Père Ducrasse, prépare une bonne gerboulade, comme faisait son grand-père, à base d'escargôts.", id: "2" }
    ])

    useEffect(() => {
        loadDataFromAsyncStorage();
    }, [reviews]);

    const loadDataFromAsyncStorage = async () => {
        const localStorageDatas = await AsyncStorage.getItem('@recettes');
        return localStorageDatas != null
            ? setReviews(JSON.parse(localStorageDatas))
            : null;
    };

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return ([review, ...currentReviews]
            )});
        setmodalOpen(false);
    };


return (
    <View style={styles.container}>
        <Modal visible={modalOpen}>
            <View style={StyleSheet.modalContent}>
                <Icon
                    name="close"
                    size={25}
                    color="#003d63"
                    onPress={() => setmodalOpen(false)}
                />
                <FormRecette addReview={addReview} />
            </View>
        </Modal>

        <Icon
            name="plus-circle"
            size={25}
            color="#003d63"
            onPress={() => setmodalOpen(true)}
        />

        <View style={styles.ViewStyle}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.ItemStyle}
                    >
                        <Image source={{ uri: item.Lien }}
                            style={styles.ImgStyle} />
                        <Text style={styles.CatégorieStyle}>{item.Catégorie}</Text>
                        <Text style={styles.TitleStyle}>{item.Nom}</Text>
                        <Icon style={styles.IconStyle}
                            name="eye"
                            size={25}
                            color="#92afbe"
                            onPress={() => navigation.navigate('Details', item)}
                        />
                    </TouchableOpacity>
                )}
                // suhfuoshugosdhgodf
            />
        </View>
    </View>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    ItemStyle: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: '#003c62',
        marginBottom: 12,
        borderRadius: 10,
        width: 390,
        height: 100,
    },

    TitleStyle: {
        color: 'white',
        fontSize: 15,
        fontWeight: "bold",
        paddingRight: 20
    },

    ImgStyle: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: 100,
        height: 100,
    },

    CatégorieStyle: {
        alignSelf: "flex-start",
        backgroundColor: "#f0faff",
        fontSize: 10,
        fontWeight:"bold",
    },

    IconStyle: {
        paddingRight: 10,
    }
})