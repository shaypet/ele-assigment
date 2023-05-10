export type Store = {
  isAuth: [boolean, (c: boolean) => void];
  user: [string, (c: string) => void];
};
