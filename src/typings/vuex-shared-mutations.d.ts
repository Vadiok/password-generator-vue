declare module 'vuex-shared-mutations' {
  interface Mutation {
    type?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload: any;
  }

  interface Options {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    predicate?: string[]|((mutation: Mutation, state?: any) => boolean);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export default function createMutationsSharer(options?: Options): (store: any) => void;
}
