import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import Clock from './Timer';
import MyWeather from './MyWeather';

{
  /*
  주석문 
  작성자 : 최효은
  작성일 : 2024.06.18
  내용 : 기능에 대한 내용
  */
}

function App() {
  let name = "REACT";

  return (
    <div className="container">
      <TodoList></TodoList>
      <Clock></Clock>
      <MyWeather weather='맑음'>일기 예보</MyWeather>
    </div>
  );
}

export default App;
