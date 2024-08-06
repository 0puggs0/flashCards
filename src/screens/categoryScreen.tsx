import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { categories } from "../constants/categories";
import Category from "../components/category";
import { Props } from "../intarfases/screensInterface";



export default function CategoryScreen({ navigation }:Props) {
  return (
    <View style = {styles.container}>
      <View style = {styles.content}>
        <Text style = {{textAlign: 'center', fontFamily: 'Poppins-SemiBold', color: colors.white, fontSize: 24, width: 326, marginBottom: 24}}>Выберите категорию сложности</Text>
      
      <View>
       {categories.category.map((item,index) => {
        return (
            <Category key={index} level={item.level} cost={item.cost} percent={item.persent} color={item.color}>
            </Category>
        )
       })}
       <Text style = {styles.description}>5000 слов охватывают 97% английского языка</Text>
      </View>
      </View>
      <TouchableOpacity style = {styles.continueButton} onPress={() => navigation.navigate('WordCard')}>
        <Text style = {styles.continueButtonText}>Продолжить</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        paddingVertical: 70,
        alignItems: 'center',
        paddingHorizontal: 24,
        justifyContent: 'space-between'
    },
    content: {
        marginBottom: 24,
        alignItems: 'center'
    },
    cards: {
        
    },
    description: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.5)'
    },
    continueButton: {
        width: '100%',
        padding: 17,
        backgroundColor: 'rgba(241, 204, 6, 0.3)',
        borderRadius: 12
    },
    continueButtonText: {
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16
    }
});
