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
  en: string;
  ko?: string;
}
