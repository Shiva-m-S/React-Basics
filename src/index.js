import React from "react";
import ReactDOM from "react-dom/client";
import Car from "./class-component";
import {Car2} from "./function-component";
import {Garage} from './function-component'
import Unmount from './unmount.js'
import List from './list.js'
import MyForm from './form.js'
import DropDown from './dropdown.js'
import './App.css'
import styles from './style.module.css'
import './sass.scss';
import CarState from './hooks/usestate.js'
import Counter from './hooks/useeffect.js'
import Component1 from './hooks/usecontext.js'
import App from './hooks/useref.js'
import Todos from './hooks/usereducer.js'
import Callback from './hooks/usecallback.js'
import Memo from './hooks/usememo.js'
import Fetch from'./hooks/useFetchCustom.js'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1 className={styles.bigblue}>Learning React</h1>
     <Unmount />
    <Car color='red'/>
    <Car2 color="red" model="sport" speed="high-speed" />
    <Garage />
    <DropDown/> 
    <List />
    <MyForm />
    <CarState/>
    <Counter/>
    <Component1/>
    <App/>
    <Todos/>
    <Callback/>
    <Memo/>
    <Fetch/>
    </>
);