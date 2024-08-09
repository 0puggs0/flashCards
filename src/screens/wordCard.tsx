import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../constants/colors";
import { Props } from "../intarfases/screensInterface";
import { SCREEN_HEIGTH, SCREEN_WIDTH } from "../constants/sizes";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getCards } from "../store/cardsSlice";
import { useTimer } from "../hooks/useTimer";

interface ValueProps {
  level: string;
  word: string;
  transcription: string;
  translatedWord: string;
}

export const WordCard = ({ navigation }: Props, props: ValueProps) => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  const { cards, cardsLoading } = useAppSelector((state) => state.cards);

  const [inputValue, setInputValue] = useState("");
  const randomIndex = Math.floor(Math.random() * 100) + 1
  const {timer, intervalId, reset} = useTimer()
  const [numOfData, setNumOfData] = useState(
    randomIndex
  );


  const persentWord = () => {
    let count = 0
    for(let i = 0;inputValue.length > cards.message?.[numOfData].russian.length ? i<inputValue.length : i<cards.message?.[numOfData].russian.length; i++){
        if(inputValue.charAt(i) === cards.message?.[numOfData].russian
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .normalize("NFC").charAt(i)){
            count++
        }
    }
    if((count/cards.message?.[numOfData].russian.length)*100 >= 50){
        return `Верно!, ${cards.message?.[numOfData].russian}`
    } else{
        return `Неверно, ${cards.message?.[numOfData].russian}`
    }
    
}


  useEffect(() => {
    dispatch(getCards());
  }, []);

  const handleExit = () => {
    setShowModal(true);
    clearInterval(intervalId);
  };

  const skipWord = async () => {
    setShowModal(false);
    reset()
    await new Promise(res => setTimeout(() => { res(true) }, 400))
    setNumOfData(randomIndex)
    setInputValue("");
  }

  const handleConfirmExit = async () => {
    setShowModal(false);

    navigation.navigate("Category");
  };

  const handleCancelExit = async () => {
    setShowModal(false);
    reset()
    await new Promise(res => setTimeout(() => { res(true) }, 400))
    setNumOfData(randomIndex)
    setInputValue("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-110}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: colors.black,
            alignItems: "center",
          }}
        >
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.navigate("Category")}
            >
              <Ionicons name="chevron-back" size={24} color={colors.white} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Учим новые слова</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.topBlock}>
              <Text style={styles.textLevel}>А1 уровень</Text>
              <Text style={styles.textTime}>{timer}</Text>
            </View>
            <View style={styles.centerBlock}>
              <View style={styles.mainWordContainer}>
                <Text style={styles.mainWord}>
                  {cards?.message?.[numOfData].english}
                </Text>
                <TouchableOpacity>
                  <AntDesign name="sound" size={26} color={colors.white} />
                </TouchableOpacity>
              </View>

              <Text style={styles.sentence}>{cards?.message?.[numOfData].english_sentence}</Text>
              <TextInput
                placeholder={"Введите слово"}
                style={styles.textInput}
                onChangeText={(value) => setInputValue(value)}
                value={inputValue}
              ></TextInput>
            </View>
            <View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={skipWord}>
                  <Text style={styles.button}>Пропустить</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleExit}>
                  <Text style={styles.button}>Проверить</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={showModal} animationType="fade" transparent={true}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableWithoutFeedback
            style={{ flex: 1, width: "100%" }}
            onPress={handleCancelExit}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.4)",
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 26,
              }}
            >
              <TouchableWithoutFeedback onPress={() => ""}>
                <View style={styles.modalView}>
                  <View style={styles.modalTextContainer}>
                    <Text style={styles.modalText}>
                      {persentWord()}
                    </Text>
                  </View>
                  <Text
                    style={{
                      width: "100%",
                      fontFamily: "Poppins-Regular",
                      fontSize: 30,
                      color: colors.white,
                      marginBottom: 10,
                      borderBottomWidth: 1,
                      borderColor: "white",
                      textAlign: "center",
                    }}
                  >
                    {timer}
                  </Text>
                  <View style={styles.modalButtonsContainer}>
                    <TouchableOpacity onPress={handleConfirmExit}>
                      <Text style={styles.modalButton}>Выйти</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCancelExit}>
                      <Text style={styles.modalButton}>Далее</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH - 40,
    height: SCREEN_HEIGTH - 200,
    backgroundColor: "rgba(27, 29, 37, 1)",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "space-between",
  },
  button: {
    borderColor: colors.borderColor,
    borderWidth: 1,
    color: colors.white,
    width: 150,
    textAlign: "center",
    overflow: "hidden",
    paddingVertical: 26,
    paddingHorizontal: 16,
    backgroundColor: colors.ligthBlack,
    fontSize: 20,
    borderRadius: 16,
  },
  buttonContainer: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    color: colors.gray,
    width: "100%",
    borderColor: colors.borderColor,
    borderWidth: 1,
    fontSize: 24,
    fontFamily: "Poppins-Medium",
    height: 70,
    borderRadius: 16,
    padding: 15,
    backgroundColor: colors.ligthBlack,
    textAlign: "center",
  },
  sentence: {
    color: colors.gray,
    width: "100%",
    fontFamily: "Poppins-Regular",
    overflow: "hidden",
    fontSize: 23,
    paddingVertical: 56,
    paddingHorizontal: 25,
    textAlign: "center",
    borderRadius: 20,
    borderColor: colors.borderColor,
    borderWidth: 1,
    backgroundColor: colors.ligthBlack,
  },
  mainWord: {
    fontFamily: "Poppins-Medium",
    fontSize: 40,
    textAlign: "center",
    color: colors.white,
  },
  mainWordContainer: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  centerBlock: {
    gap: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textTime: {
    color: colors.white,
    position: "absolute",
    right: 0,
    fontSize: 25,
    fontFamily: "Poppins-Regular",
  },
  textLevel: {
    color: colors.gray,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    fontSize: 18,
  },
  topBlock: {
    position: "relative",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 24,
    color: "white",
    flex: 1,
    textAlign: "center",
  },
  backButton: {
    padding: 10,
    backgroundColor: colors.semiBlack,
    borderRadius: 10,
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  modalButton: {
    textAlign: "center",
    width: 116,
    padding: 18,
    overflow: "hidden",
    borderRadius: 16,
    borderColor: colors.borderColor,
    borderWidth: 1,
    color: "white",
    fontFamily: "Poppins-Medium",
    fontSize: 20,
  },
  modalText: {
    fontSize: 33,
    fontFamily: "Poppins-Regular",
    color: colors.white,
    textAlign: "center",
    width: "100%",
  },

  modalTextContainer: {
    width: 500,
    alignItems: "center",
    marginBottom: 10,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    paddingBottom: 15,
  },

  modalView: {
    overflow: "hidden",
    backgroundColor: "#22252E",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    borderColor: colors.borderColor,
    borderWidth: 1,
    width: "100%",
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
});
