// Regist Title
export interface VocabInfo {
  title?: string;
  chapter?: string;
}

// Regist Value
export interface RegistValue {
  title?: string;
  chapter?: string;
  wordArr: AddToList[];
}

interface AddToList {
  en: string | undefined;
  ko: string | undefined;
  id?: string;
}

// Regist Context
export interface RegistContextType {
  registValue: RegistValue;
  setRegistValue: Dispatch<SetStateAction<RegistValue>>;
}

export interface DBDatas {
  title: string;
  chapter: string;
  words_en: Words[];
  words_ko: Words[];
  correct: number;
  wrong: number;
}

interface Words {
  id: string;
  name: string;
  color: string;
}

export interface NoteData {
  en: string;
  ko: string;
}

export interface TestNoteData {
  en?: string | undefined;
  ko?: string | undefined;
}

// Signup Birth
export interface BirthType {
  year: number;
  month: string;
  date: number;
}
