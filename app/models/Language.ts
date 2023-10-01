import { Timestamp } from "firebase/firestore"

interface Language {
  uid?: string
  langs: Lang[]
  createdAt: Timestamp
}

type Lang = {
  code: string
  text: string
}

export default Language
