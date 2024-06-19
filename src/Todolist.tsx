import React,{useState} from "react";

type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
};

const TodoList : React.FC = () => {
    const title : string = '오늘 할일';

    //구조분해 할당
    const [todos, setTodos] = useState<Todo[]>([
        {id : 1, text :'공부하기', isChecked : false},
        {id : 1, text :'잠자기', isChecked : false},
        {id : 1, text :'미팅하기', isChecked : false}
        ]);

    return (
      <div className="container">
        <h1>{title}</h1>
        <p></p>
        <div className="container">
          <div className="board">
            <ul>
              {
                todos.map((todo, index) => (
                <li key={index}>{todo.text}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
}

export default TodoList;