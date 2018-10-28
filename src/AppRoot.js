import React from "react";

import { Provider } from "redux-bundler-react";
import getStore from "./bundles";
import App from "./components/App";

export default () => (
    <Provider store={getStore()}>
        <App />
    </Provider>
);