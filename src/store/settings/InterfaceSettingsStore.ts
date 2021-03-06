import {
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import { ModuleTitles } from '../ModuleTitles';

export enum Languages {
  en = 'en',
  ru = 'ru',
}

export enum Themes {
  light = 'light',
  dark = 'dark',
  black = 'black',
}

const availableLanguages: Languages[] = [
  Languages.en,
  Languages.ru,
];

const availableThemes: Themes[] = [
  Themes.light,
  Themes.dark,
  Themes.black,
];

@Module({
  namespaced: true,
  name: ModuleTitles.InterfaceSettings,
  preserveState: true,
})
export class InterfaceSettingsStore extends VuexModule {
  language: Languages = Languages.en;

  theme: Themes = Themes.light;

  get availableThemes() {
    return availableThemes;
  }

  get availableLanguages() {
    return availableLanguages;
  }

  @Mutation
  setTheme(theme: Themes) {
    if (this.theme !== theme) {
      this.theme = theme;
    }
  }

  @Mutation
  setLanguage(language: Languages) {
    if (this.language !== language) {
      this.language = language;
    }
  }
}
