import React from "react";
import Routes from "./routes";
import axios from "axios";
import "../src/assets/scss/index.css";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
axios.defaults.headers = {
  'Authorization': 'Bearer ' + localStorage.getItem("TOKEN"),
};



const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
