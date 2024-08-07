import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity  } from "react-native";
import Checkbox from 'expo-checkbox';
import { colors } from "../constants/colors";

interface Props{
    level: string,
    cost: string,
    percent: string,
    color: string,
    isSelected: boolean,
    onSelect: () => void
}
export default function Category(props: Props) {
    const styles = createStyles(props);
  return (
    <View style = {styles.container}>
        <TouchableOpacity onPress = {() => props.onSelect()}>
        <View style = {styles.card}>
      <View style = {{flexDirection: 'row', alignItems: 'center', gap: 12}}>
        <Text style = {styles.levelText}>{props.level}</Text>
        <Text style = {styles.costText}>{props.cost}</Text>
      </View>
        <View style = {{flexDirection: 'row', alignItems: 'center', gap: 12}}>
            <Text style = {styles.percent}>{props.percent}</Text>
            <Checkbox
                value={props.isSelected}
                onValueChange={props.onSelect}
            />
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (props: Props) =>  StyleSheet.create({
    container: {
        
        backgroundColor: colors.black,

    },
    card: {
        width: '100%',
        backgroundColor: colors.cardBlack,
        flexDirection: 'row', 
        padding: 14,
        justifyContent: 'space-between',
        marginBottom: 12,
        borderRadius: 16
    },
    levelText: {
        overflow: 'hidden',
        borderRadius: 10,
        width: 43,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17,
        color: colors.white,
        paddingLeft: 9,
        paddingRight: 9,
        backgroundColor: props.color
    },
    costText: {
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        fontSize: 19,
        color: colors.white,
    },
    percent: {
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        fontSize: 19,
        color: 'rgba(255, 255, 255, 0.3)'
    }
})