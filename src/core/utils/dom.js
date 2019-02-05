import { set as setLang } from '../lang';

export function displayAppContent(show, lang) {
  const content = document.getElementById('app-content');

  const displayValue = show ? 'flex' : 'none';

  content.style.display = displayValue;

  setLang(lang);
}
