export const defaultLang = 'fr';

let appLang = defaultLang; // default lang is fr

export function set(lang) {
  appLang = lang
}

export function get() {
  return appLang
}
