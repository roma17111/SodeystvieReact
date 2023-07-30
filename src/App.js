import React from "react";
import './App.css';
import {Route,Routes} from "react-router-dom";
import {Test} from "./Test";
import {Hello} from "./Hello";
import {Layout} from "./components/Layout";


function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path= "/" element={<Hello/>}/>
                <Route path= "/test" element={<Test/>}/>
            </Route>
        </Routes>
    </>

  );
}

export default App;
