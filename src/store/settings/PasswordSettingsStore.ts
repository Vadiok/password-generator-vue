import {
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import { ModuleTitles } from '../ModuleTitles';

const defaults = {
  passwordLength: 8,
  useLowercase: true,
  useCapital: false,
  useNumbers: true,
  useSpecial: false,
};

const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const capital: string = lowercase.toUpperCase();
const numbers = '0123456789';
const special = '.,!?:;+-*=~()[]{}`"\'_\\|/@#$%^&';

const passwordLengthMin = 1;
const passwordLengthMax = 256;

@Module({
  namespaced: true,
  name: ModuleTitles.PasswordSettings,
  preserveState: true,
})
export class PasswordSettingsStore extends VuexModule {
  passwordLength: number = defaults.passwordLength;

  useLowercase = defaults.useLowercase;

  useCapital = defaults.useCapital;

  useNumbers = defaults.useNumbers;

  useSpecial = defaults.useSpecial;

  get symbols(): string {
    const result: string[] = [];
    if (this.useLowercase) {
      result.push(lowercase);
    }
    if (this.useCapital) {
      result.push(capital);
    }
    if (this.useNumbers) {
      result.push(numbers);
    }
    if (this.useSpecial) {
      result.push(special);
    }
    return result.join('');
  }

  @Mutation
  resetToDefaults() {
    this.passwordLength = defaults.passwordLength;
    this.useLowercase = defaults.useLowercase;
    this.useCapital = defaults.useCapital;
    this.useNumbers = defaults.useNumbers;
    this.useSpecial = defaults.useSpecial;
  }

  @Mutation
  setPasswordLength(newLength: number|string) {
    let newLengthNumeric = +newLength;
    if (Number.isNaN(newLengthNumeric)) {
      return;
    }
    if (newLengthNumeric < passwordLengthMin) {
      newLengthNumeric = passwordLengthMin;
    }
    if (newLengthNumeric > passwordLengthMax) {
      newLengthNumeric = passwordLengthMax;
    }
    if (this.passwordLength !== newLengthNumeric) {
      this.passwordLength = newLengthNumeric;
    }
  }

  @Mutation
  setUseLowercase(value: boolean) {
    if (this.useLowercase !== value) {
      this.useLowercase = value;
    }
  }

  @Mutation
  setUseCapital(value: boolean) {
    if (this.useCapital !== value) {
      this.useCapital = value;
    }
  }

  @Mutation
  setUseNumbers(value: boolean) {
    if (this.useNumbers !== value) {
      this.useNumbers = value;
    }
  }

  @Mutation
  setUseSpecial(value: boolean) {
    if (this.useSpecial !== value) {
      this.useSpecial = value;
    }
  }
}
