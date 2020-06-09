import {
  VuexModule,
  Module,
  Mutation,
  getModule,
} from 'vuex-module-decorators';
import { ModuleTitles } from '@/store/ModuleTitles';

@Module({
  namespaced: true,
  name: ModuleTitles.Password,
  preserveState: false,
})
export class PasswordStore extends VuexModule {
  passwordUpdated = 0;

  @Mutation
  updatePassword() {
    this.passwordUpdated += 1;
  }
}

export const passwordModule = getModule(PasswordStore);
