import { defaultLang, get as getLang } from '../lang';
import fr from './fr'
import en from './en'

const trads = {
  fr,
  en
}

export default function getForComponent(component) {
  return trads[getLang()][component] || trads[defaultLang][component]
}
