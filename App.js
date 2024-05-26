import React from "react";
import { RootNavigation } from "./src/Navigation";
import { Provider } from "react-redux";
import config from "./src/config";
import { PersistGate } from "redux-persist/lib/integration/react";
import { AppLoader } from "./src/Component";
export default function App() {
  return (
    <Provider store={config.store}>
      <PersistGate loading={null} persistor={config.persistor}>
        <RootNavigation />
        <AppLoader/>
      </PersistGate>
    </Provider>
  );
}
