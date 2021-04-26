import React, { useEffect, useState } from "react";
import { StyleSheet, Button, TextInput, View, Text, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


export default FormRecette = () => {
    const navigation = useNavigation();

    const [recettes, setRecettes] = useState([

        { Nom: "Anguille en matelote", Lien: "https://cdn.radiofrance.fr/s3/cruiser-production/2018/06/45ad801b-d92a-4d9b-ab26-0b87ca52d854/1280x680_maite_et_la_cuisine_des_mousquetaires_gettyimages-113421135.jpg", Catégorie: "Plat principal", Ingrédients: "1 anguille", Description: "Maïté ORDONEZ, aidée de Micheline BANZET, prépare une recette à base d'anguille : une anguille en matelote.", id: "691" },

        { Nom: "Gerboulade d'escargôts", Lien: "https://s1.dmcdn.net/v/Mnx8O1QBxcx7ET-c8/x1080", Catégorie: "Plat principal", Ingrédients: "10 escargots", Description: "Père Ducrasse, prépare une bonne gerboulade, comme faisait son grand-père, à base d'escargôts.", id: "945" }
    ]);

    const [nomRecettes, setNomRecettes] = useState('');
    const [urlRecettes, setUrlRecettes] = useState('');
    const [ingRecettes, setIngRecettes] = useState('');
    const [catRecettes, setCatRecettes] = useState('');
    const [desRecettes, setDesRecettes] = useState('');

    const saveRecette = async () => {
        let addRecette = [...recettes];
        addRecette = [...recettes, { id: recettes.length, Nom: nomRecettes, Lien: urlRecettes, Catégorie: catRecettes, Ingrédients: ingRecettes, Description: desRecettes }];
        console.log(addRecette);
        setRecettes(addRecette);
        await AsyncStorage.setItem('@recettes', JSON.stringify(addRecette));
        console.log(recettes);
        setNomRecettes('');
    };

    useEffect(() => {
        loadDataFromAsyncStorage();
    }, []);

    const loadDataFromAsyncStorage = async () => {
        const localStorageDatas = await AsyncStorage.getItem('@recettes');
        return localStorageDatas != null
            ? setRecettes(JSON.parse(localStorageDatas))
            : null;
    };

    return (
        <ScrollView style={styles.BGCView}>
            <View>
                <View>
                    <Text style={styles.title1}>Ajoutez une recette</Text>
                    <Text style={styles.title2}>Nom de la recette</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setNomRecettes}
                        value={nomRecettes}
                    />

                    <Text style={styles.title2}>URL de l'image</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setUrlRecettes}
                        value={urlRecettes}
                    />

                    <Text style={styles.title2}>Catégorie</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setCatRecettes}
                        value={catRecettes}
                    />

                    <Text style={styles.title2}>Ingrédients</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        onChangeText={setIngRecettes}
                        value={ingRecettes}
                    />

                    <Text style={styles.title2}>Description</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        onChangeText={setDesRecettes}
                        value={desRecettes}
                    />

                    <Button title="Valider" color="#003c62"
                        accessibilityLabel="Ajouter une recette"
                        onPress={() => { saveRecette(); navigation.navigate("Recettes")}} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#d6e7f0',
        height: 92
    },
    BGCView: {
        backgroundColor: '#f0faff'
    },
    title1: {
        color: '#003c62',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 15
    },
    title2: {
        color: '#003c62',
        fontWeight: 'bold',
        fontSize: 25
    },
})

