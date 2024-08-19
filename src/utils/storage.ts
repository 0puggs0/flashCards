import AsyncStorage from "@react-native-async-storage/async-storage";
export type Keys = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export class Storage {
  static async get(name: Keys) {
    return await AsyncStorage.getItem(name);
  }
  static async set(name: Keys, value: string) {
    return await AsyncStorage.setItem(name, value);
  }
  static async clearAll() {
    return await AsyncStorage.clear();
  }
}
