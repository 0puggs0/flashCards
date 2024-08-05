import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    level: string,
    word: string,
    transcription: string,
    translatedWord: string
}

export const WordCard = (props: Props) => {

  const data = require('../data/result.json')
  const url = '123'
  async function fetchWords(){
    try{
      await fetch('https://api.rosggram.ru/add-cards/1', {
        method: 'POST',
        body: data,
      })
    } 
    catch(e){
      console.error('Ошибка при отправке слов', e)
    }
    
  }
  return (
    <View style = {styles.container}>
      <Text onPress={fetchWords} style = {styles.wordLevel}>{props.level}</Text> 
      <Text>{props.word}</Text>
      <Text>{props.transcription}</Text>
      <Text>{props.translatedWord}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        width: 342,
        height: 680,
        backgroundColor: 'rgba(27, 29, 37, 1)',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    wordLevel: {

    }
})