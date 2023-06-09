import { createContext } from "react";
import { Store } from "../types/store.type";

const defaultStore: Store = {
  isAuth: [false, () => {}],
  user: ["", () => {}],
};
const StoreContext = createContext<Store>(defaultStore);

export default StoreContext;
