import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './components/state/store'

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

// 리액트 라우터랑 리덕스 툴킷 함께 사용
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode >
  </Provider >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// react-bootstrap과 bootstrap도 다운받았던것 같다
// react-router 관련도 다운받았던것 같다

// npm i redux
// npm i react-redux
// npm install @reduxjs/toolkit // 상태관리


// 만약 쿠키로 저장시 - 구현해보고 아래에서 가감하기
// 쿠키 관리 모듈(npm install react-cookie)을 다운받거나, 장고에서 쿠키에 저장하라는 응답을 쏴주면 된다
// 그리고 fetch에서 headers 설정의 Authorization을 설정하면 요청마다 일일히 access를 담지않고 보낼수도 있을 것 같다
// fetch에 accessToken을 하나하나입력하는 방법 또는 Authorization을 설정할 수 있다면 fetch에 적지 않아도 된다
// 쿠키에서 refresh가 존재한다면 바로 로그인, 존재하지않으면 로그인 필요
// 받은 refresh만 쿠키에 저장한다, 쿠키 쓰기,읽기 필요

// 만약 로컬스토리지에 refreshToken 저장시 아래를 사용
// npm install redux-persist // 상태를 브라우저 로컬스토리지에 저장 - 새로고침에도 휘발 방지