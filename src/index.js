// import React from 'react';
import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './HomePage';


const prolink=()=>{
    let allpro=[];
    for(let i = 0; i < 20; i++){
        allpro.push(<tr>
            <td><App name={"pro"+i} link="https://www.google.com.tw/"/></td>
            <td><App name={"test"+i} link="https://www.google.com.tw/"/></td>
        </tr>)
    }
    return allpro
}

const tmp=()=>{
    return(
        <div>
      <div className="navbar">
          <ul>
              <li><App name="XXOJ" link="https://www.google.com.tw/"/></li>
              <li><App name="題目區" link="https://www.google.com.tw/"/></li>
          </ul>
      </div>
      <div class="search">
          <input className="search-bar" type="text" name="search" id="search" placeholder="輸入名稱"></input>
          <button className="search-btn"> search</button>
      </div>
      <div class="problem">
          <table>
              <tr>
                  <th> id </th>
                  <th> problem </th>
              </tr>
              {prolink()}
          </table>
      </div>
    </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <HomePage></HomePage>
    </div>

    , document.getElementById('root')
);

reportWebVitals();
