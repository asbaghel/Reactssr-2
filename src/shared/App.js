import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import "./App.css";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
import About from "./components/pages/About";

import s2 from "./App.css";
import withStyles from "isomorphic-style-loader/withStyles";

import { Provider } from "react-redux";

var title1, id1;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };


    
   
  }

  componentDidMount() {
    console.log("window.__INITIAL_DATA__", window.__INITIAL_DATA__);
    const tododata = window.__INITIAL_DATA__;
    this.setState({ todos: tododata });
    // fetch("http://localhost:4001/api/posts")
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ todos: data })
    //     console.log('this is state',this.state.todos);

    //   });
  }

  markComplete = (id, title, completed) => {
    const todo = {
      _id: id,
      title: title,
      completed: !completed
    };

    fetch("http://localhost:4001/api/posts/update" + "/" + id, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(console.log("there is a err"));
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo._id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo._id !== id)]
    });
  };
  myfunc = (value, index, todos) => {
    if (value._id === id1) {
      value.title = title1;
    }

    console.log(title1);
    return value;
  };

  updateTodo = todo => {
    title1 = todo.title;
    id1 = todo._id;

    // this.myfunc();
    this.setState({ todos: this.state.todos.map(this.myfunc) });
    // console.log(this.state.todos.map(this.myfunc));
  };

  //Add todo
  addTodo = data => {
    const newTodo = {
      _id: data._id,
      title: data.title,
      completed: data.completed
    };

    this.setState({ todos: [newTodo, ...this.state.todos] });
  };

  render() {
    console.log(this.state.todos);

    return (
      <div>
        <Header></Header>
        <Switch>
          <div className="App">
            <div id="page-body">
              <Route exact path="/">
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                  updateTodo={this.updateTodo}
                ></Todos>
              </Route>
              <Route path="/header" component={Header}></Route>
              <Route path="/about" component={About}></Route>
            </div>
          </div>
        </Switch>
      </div>
    );
  }
}

export default withStyles(s2)(App);
