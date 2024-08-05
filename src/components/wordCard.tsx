import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '../constants/colors';

interface Props {
    level: string,
    word: string,
    transcription: string,
    translatedWord: string
}

export const WordCard = (props: Props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-110}
      style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style = {{flex: 1, justifyContent: 'center'}}>
      <View style = {{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginBottom: 24}}>
      <TouchableOpacity style = {{padding: 10, backgroundColor: colors.semiBlack, borderRadius: 10}}>
      <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <Text style = {{fontFamily: 'Poppins-SemiBold',fontSize: 24,color: 'white', flex: 1, textAlign: 'center'}}>Учим новые слова</Text></View>
    <View style = {styles.container}>
      <View style = {{position: 'relative', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {{ color: colors.gray,fontFamily: 'Poppins-Regular', textAlign: 'center', fontSize: 18}}>А1 уровень</Text>
        <Text style = {{color: colors.white,position: 'absolute', right: 0,fontSize: 25,fontFamily: 'Poppins-Regular'}}>00:15</Text>
      </View>
      <View style = {{gap: 50,alignItems: 'center', justifyContent: 'center'}}>
        <View style = {{gap: 10,flexDirection: 'row',alignItems: 'center', justifyContent: 'center'}}>
          <Text style = {{fontFamily: 'Poppins-Medium',fontSize: 40,textAlign: 'center', color: colors.white}}>{props.word}</Text>
          <TouchableOpacity>
            <AntDesign name="sound" size={26} color={colors.white} />
            </TouchableOpacity>
          </View>
        
        <Text style = {{color: colors.gray,width: '100%',fontFamily: 'Poppins-Regular',overflow: 'hidden',fontSize: 23, paddingVertical: 56,paddingHorizontal: 25,textAlign: 'center', borderRadius: 20, borderColor: colors.borderColor, borderWidth: 1,backgroundColor: colors.ligthBlack}}>I love my mother</Text>
        <TextInput placeholder = {'Введите слово'} style = {{color: colors.gray,width: '100%',borderColor: colors.borderColor, borderWidth: 1,fontSize: 24, fontFamily: 'Poppins-Medium',height: 70, borderRadius: 16, padding: 15, backgroundColor: colors.ligthBlack, textAlign: 'center'}}>
          
        </TextInput>
      </View>
      <View>
        <View style= {{marginTop: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <TouchableOpacity>
            <Text style = {{ borderColor: colors.borderColor, borderWidth: 1,color: colors.white, width: 150,textAlign: 'center', overflow: 'hidden',paddingVertical: 26, paddingHorizontal: 16, backgroundColor: colors.ligthBlack, fontSize: 20, borderRadius: 16}}>Пропустить</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style = {{ borderColor: colors.borderColor, borderWidth: 1,color: colors.white, width: 150,textAlign: 'center',overflow: 'hidden',paddingVertical: 26, paddingHorizontal: 16, backgroundColor: colors.ligthBlack, fontSize: 20, borderRadius: 16}}>Проверить</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
    container: {
        width: 362,
        height: 680,
        backgroundColor: 'rgba(27, 29, 37, 1)',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'space-between'
        
        
        
    },
    wordLevel: {

    }
})