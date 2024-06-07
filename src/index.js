import React from "react";
import ReactDOM from "react-dom/client";
import Car from "./class-component";
import {Car2} from "./function-component";
import {Garage} from './function-component'
import Unmount from './unmount.js'
import List from './list.js'
import MyForm from './form.js'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Unmount />
    <Car color='red'/>
    <Car2 color="red" model="sport" speed="high-speed" />
    <Garage />
    <List />
    <MyForm />
    </>
);