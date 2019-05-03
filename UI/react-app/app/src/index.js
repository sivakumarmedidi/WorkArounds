import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import ReactDOM from "react-dom";
import AppComponent from "./AppComponent";

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
    <AppComponent></AppComponent>
</Provider>, document.getElementById("root"));

