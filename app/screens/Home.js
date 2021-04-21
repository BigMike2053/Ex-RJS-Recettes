import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default Home = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text style={styles.titleText}>Bonjour</Text>
            <Button title ="Ajoutez une recette"
            onPress={()=> navigation.navigate("Details")
            } />
        </View>
    )
}
const styles = StyleSheet.create({
    titleText: {
        fontSize: 50,
        fontWeight: "bold"
    }
});