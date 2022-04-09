import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './index.css';
import App from './App';
import { render } from "react-dom"
// Pages
import Introduction from './Route/Pages/ui_ux';
import Figma from "./Route/Pages/figma"
import HTML from "./Route/Pages/html"
import CSS from "./Route/Pages/css"
import Botsi from "./Route/Pages/boostrap"
import Js from "./Route/Pages/javascript"
import Clean from "./Route/Pages/clean"



const rootElement = document.getElementById("root")
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/Introduction' element={<Introduction/>}/>
      <Route path='/Figma' element={<Figma/>}/>
      <Route path='/HTML' element={<HTML/>}/>
      <Route path='/CSS' element={<CSS/>}/>
      <Route path='/Bootstrap' element={<Botsi/>}/>
      <Route path='/Js' element={<Js/>}/>
      <Route path='/Clean' element={<Clean/>}/>
      <Route path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>Page kosong</p>
        </main>
      }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
