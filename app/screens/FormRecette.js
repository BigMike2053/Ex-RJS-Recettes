import React, { useEffect, useState } from "react";
import { StyleSheet, Button, TextInput, View, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';

export default function FormRecette({ addReview }) {

    const [recettes, SetRecettes] = useState([]);
    const [nomRecettes, SetNomRecettes] = useState("");
    const [lienRecettes, SetLienRecettes] = useState("");
    const [ingRecettes, SetIngRecettes] = useState("");
    const [catRecettes, SetCatRecettes] = useState("");
    const [desRecettes, SetDesRecettes] = useState("");


    const saveRecette = async () => {
        let addRecette = [...recettes];
        addRecette = [...recettes, { id: recettes.length, Nom: nomRecettes, Lien: lienRecettes, Catégorie: catRecettes, Ingrédients: ingRecettes, Description: desRecettes }];
        SetRecettes(addRecette);
        await AsyncStorage.setItem('@recettes', JSON.stringify(addRecette));
        SetNomRecettes('');
    };

    useEffect(() => {
        restoreDataFromAsyncStorage();
    }, []);

    const restoreDataFromAsyncStorage = async () => {
        const locatStorageDatas = await AsyncStorage.getItem('@recettes');
        return localStorageDatas != null
            ? SetRecettes(JSON.parse(localStorageDatas))
            : null;
    };

    return (
        <ScrollView style={styles.BGCView}>
            <View>
                <Formik
                    initialValues={{ Nom: '', Lien: '', Catégorie: '', Ingrédients: '', Description: '' }}
                    onSubmit={(values) => {
                        addReview(values)
                    }}
                >
                    {(props) => (
                        <View>
                            <Text style={styles.title1}>Ajoutez une recette</Text>
                            <Text style={styles.title2}>Nom de la recette</Text>
                            <TextInput
                                style={styles.input}
                                placeholder=''
                                onChangeText={props.handleChange('Nom')}
                                value={props.values.Nom}
                            />

                            <Text style={styles.title2}>Lien de l'image</Text>
                            <TextInput
                                style={styles.input}
                                placeholder=''
                                onChangeText={props.handleChange('Lien')}
                                value={props.values.Lien}
                            />

                            <Text style={styles.title2}>Catégorie</Text>
                            <TextInput
                                style={styles.input}
                                placeholder=''
                                onChangeText={props.handleChange('Catégorie')}
                                value={props.values.Catégorie}
                            />

                            <Text style={styles.title2}>Ingrédients</Text>
                            <TextInput
                                multiline
                                style={styles.input}
                                placeholder=''
                                onChangeText={props.handleChange('Ingrédients')}
                                value={props.values.Ingrédients}
                            />

                            <Text style={styles.title2}>Description</Text>
                            <TextInput
                                multiline
                                style={styles.input}
                                placeholder=''
                                onChangeText={props.handleChange('Description')}
                                value={props.values.Descrption}
                            />

                            <Button title="Valider" color="#003c62" 
                                onPress={props.handleSubmit} />
                        </View>
                    )}
                </Formik>
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

