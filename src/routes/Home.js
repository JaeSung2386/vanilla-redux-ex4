import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// mapStateToProps
// connect() 함수의 첫 번쨰 인자
// state: Redux store로부터 불러온 state
// ownProps: 컴포넌트의 props
// return 값이 props에 추가된다.
function mapStateToProps(state) {
  return { toDos: state };
}

// mapDispatchToProps
// connect() 함수의 두 번째 인자
// dispatch: Redux store로부터 불러온 dispatch
// ownProps: 컴포넌트의 props
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
