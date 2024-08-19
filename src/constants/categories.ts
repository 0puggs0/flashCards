import { Keys } from "../utils/storage";

interface CategoryItem {
  level: Keys;
  cost: string;
  persent: string;
  color: string;
}

interface Categories {
  category: Array<CategoryItem>;
}

export const categories: Categories = {
  category: [
    {
      level: "A1",
      cost: "1 - 100 слов",
      persent: "80%",
      color: "#04826B",
    },
    {
      level: "A2",
      cost: "101 - 1k слов",
      persent: "44%",
      color: "#4B7C0C",
    },
    {
      level: "B1",
      cost: "1k - 2k слов",
      persent: "27%",
      color: "#A48C0E",
    },
    {
      level: "B2",
      cost: "2k - 3k слов",
      persent: "9%",
      color: "#A44D0E",
    },
    {
      level: "C1",
      cost: "3k - 4k слов",
      persent: "",
      color: "#DC401D",
    },
    {
      level: "C2",
      cost: "4k - 5k слов",
      persent: "",
      color: "#DC1D62",
    },
  ],
};
