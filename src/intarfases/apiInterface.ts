export interface apiItem {
  russian: string;
  english: string;
  russian_sentence: string;
  english_sentence: string;
  complexity: number;
}
export interface apiInterface {
  message: apiItem[];
}
