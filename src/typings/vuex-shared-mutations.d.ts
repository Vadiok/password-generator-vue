declare module 'vuex-shared-mutations' {
  interface IOptions {
    predicate?: string[]|((mutation: { type?: string; payload: any }, state?: any) => boolean);
  }

  export default function createMutationsSharer(options?: IOptions): any;
}
