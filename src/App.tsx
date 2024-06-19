import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import MapTest from './MapTest';

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
      <MapTest></MapTest>
    </div>
  );
}

export default App;
