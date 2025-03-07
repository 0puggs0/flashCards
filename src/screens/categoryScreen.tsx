import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/colors";
import { categories } from "../constants/categories";
import Category from "../components/category";
import { Props } from "../intarfases/screensInterface";
import { SCREEN_WIDTH } from "../constants/sizes";
import { Keys } from "../utils/storage";

export default function CategoryScreen({ navigation }: Props) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const onSelect = (level: Keys) => {
    if (selectedCategories.includes(level)) {
      setSelectedCategories((prev) => prev.filter((item) => item !== level));
    } else {
      setSelectedCategories((prev) => [...prev, level]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Poppins-SemiBold",
            color: colors.white,
            fontSize: 24,
            width: SCREEN_WIDTH - 32,
            marginBottom: 24,
          }}
        >
          Выберите категорию сложности
        </Text>
        <View>
          {categories.category.map((item) => {
            return (
              <Category
                key={item.level}
                level={item.level}
                cost={item.cost}
                percent={item.persent}
                color={item.color}
                isSelected={selectedCategories.includes(item.level)}
                onSelect={() => onSelect(item.level)}
              ></Category>
            );
          })}
          <Text style={styles.description}>
            5000 слов охватывают 97% английского языка
          </Text>
        </View>
      </View>
      <TouchableOpacity
        disabled={!selectedCategories.length}
        style={
          !selectedCategories.length
            ? styles.disabledContinueButton
            : styles.activeContinueButton
        }
        onPress={() => {
          navigation.navigate("WordCard", { selectedCategories });
        }}
      >
        <Text style={styles.continueButtonText}>Продолжить</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingVertical: 70,
    alignItems: "center",
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },
  content: {
    marginBottom: 24,
    alignItems: "center",
  },
  cards: {},
  description: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.5)",
  },
  disabledContinueButton: {
    width: "100%",
    padding: 17,
    backgroundColor: "rgba(241, 204, 6, 0.3)",
    borderRadius: 12,
  },
  activeContinueButton: {
    width: "100%",
    padding: 17,
    backgroundColor: "rgba(241, 204, 6, 1)",
    borderRadius: 12,
  },
  continueButtonText: {
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
});
