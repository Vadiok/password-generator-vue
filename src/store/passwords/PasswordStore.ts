import {
  VuexModule,
  Module,
  Mutation,
  getModule,
} from 'vuex-module-decorators';
import store from '@/store';

@Module({
  store,
  dynamic: true,
  namespaced: true,
  name: 'Password',
})
export class PasswordStore extends VuexModule {
  passwordUpdated = 0;

  @Mutation
  updatePassword() {
    this.passwordUpdated += 1;
  }
}

export const passwordModule = getModule(PasswordStore);
