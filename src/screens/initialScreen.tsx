import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from "../constants/colors";

export default function InitialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.topImage}
          source={require("../../assets/logo.png")}
        />
      </View>
      <View style = {styles.contentBlock}>
        <Text style = {styles.heading}>Учим английский легко с flash cards</Text>
        <Text style = {styles.description}>Изучайте слова по карточкам, выбирая удобные для вас уровни</Text>
        <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('WordCard')}>
        <MaterialCommunityIcons name="lightning-bolt" size={27} color={colors.black} />
          <Text style = {styles.buttonText}>Начать</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 26,
    paddingVertical: 40,
    gap: 48,
    backgroundColor: colors.black
  },
  topImage: {
    width: 370, height: 370
  },
  contentBlock: {
    gap:30
  },
  heading: {
    fontFamily: 'Poppins-Medium', fontSize: 36, color: colors.white, textAlign: 'center'
  },
  description: {fontFamily: 'Poppins-Regular', fontSize: 20, color: colors.darkGray, textAlign: 'center'},
  button: {
    marginTop: 13, borderRadius: 12, gap: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 13, backgroundColor: '#F1CC06' 
  },
  buttonText: {
    color: colors.black, fontFamily: 'Poppins-SemiBold', fontSize: 16,
  }
});
