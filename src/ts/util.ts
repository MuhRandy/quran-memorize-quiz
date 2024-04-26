import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
import { surahProps } from "./type";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

async function getSurah(getDataHandler: (data: surahProps) => void) {
  try {
    const response = await fetch("http://api.alquran.cloud/v1/surah");
    try {
      const { data } = await response.json();

      getDataHandler(data);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}

export { cn, getSurah };
