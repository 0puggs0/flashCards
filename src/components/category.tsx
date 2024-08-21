import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { colors } from "../constants/colors";
import { Keys, Storage } from "../utils/storage";
import { useFocusEffect } from "@react-navigation/native";

interface Props {
  level: Keys;
  cost: string;
  percent: string;
  color: string;
  isSelected: boolean;
  onSelect: () => void;
}

const complexityObj = {
  A1: 0,
  A2: 1,
  B1: 2,
  B2: 3,
  C1: 4,
  C2: 5,
};

interface ComplexityItem {
  complexity: number;
  count: number;
}
export default function Category(props: Props) {
  const [percent, setPercent] = useState(0);
  const [complexityTotal, setComplexityTotal] = useState<Array<ComplexityItem>>(
    []
  );
  const level = props.level;
  useFocusEffect(() => {
    (async () => {
      const progress = await Storage.get(props.level);
      if (progress) {
        const jsonProgress = JSON.parse(progress);
        setPercent(jsonProgress?.length || "0");
      }
      const response = await fetch(
        "https://api.rosggram.ru/complexityTotal"
      ).then((data) => data.json());

      setComplexityTotal(response.message);
    })();
  });
  const styles = createStyles(props);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.onSelect()}
        disabled={complexityTotal?.[complexityObj[level]]?.count == undefined}
      >
        <View style={styles.card}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <Text style={styles.levelText}>{props.level}</Text>
            <Text style={styles.costText}>{props.cost}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <Text style={styles.percent}>
              {complexityTotal?.[complexityObj[level]]?.count !== undefined
                ? Math.floor(
                    (percent / complexityTotal?.[complexityObj[level]]?.count) *
                      100
                  ) + "%"
                : "нет слов"}
            </Text>
            <Checkbox
              color={props.isSelected ? colors.borderColor : colors.borderColor}
              value={props.isSelected}
              onValueChange={props.onSelect}
              disabled={
                complexityTotal?.[complexityObj[level]]?.count == undefined
              }
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (props: Props) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.black,
    },
    card: {
      width: "100%",
      backgroundColor: colors.cardBlack,
      flexDirection: "row",
      padding: 14,
      justifyContent: "space-between",
      marginBottom: 12,
      borderRadius: 16,
    },
    levelText: {
      overflow: "hidden",
      borderRadius: 10,
      width: 43,
      textAlign: "center",
      fontFamily: "Poppins-SemiBold",
      fontSize: 17,
      color: colors.white,
      paddingLeft: 9,
      paddingRight: 9,
      backgroundColor: props.color,
    },
    costText: {
      textAlign: "center",
      fontFamily: "Poppins-Regular",
      fontSize: 19,
      color: colors.white,
    },
    percent: {
      textAlign: "center",
      fontFamily: "Poppins-Regular",
      fontSize: 19,
      color: "rgba(255, 255, 255, 0.3)",
    },
  });
