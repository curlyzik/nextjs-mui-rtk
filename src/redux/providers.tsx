"use client";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { store } from "./store";

persistStore(store); // persists the store

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};
