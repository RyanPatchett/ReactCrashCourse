import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/modal.jsx'
import React, { useState, useEffect } from 'react';
import Counter from './components/Counter'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Nav from './components/Nav.jsx'
import Users from './pages/Users';

function App() {

    return(
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:username" element={<Users />} />
        </Routes>
      </Router>
    )
 
 
  //return <Counter/>

  const [showModal, setShowModal] = useState(false)

  function deleteToDo() {
    setShowModal(prevState => !prevState)
  }

  function Cancel(){
    setShowModal(prevState => !prevState)
  }

  function Confirm(){
    setShowModal(prevState => !prevState)
  }

  //Runs on mount, without second argument - runs everytime the site re-renders
  //second argument will run code whenever this value changes - can be an array of dependencies.
  useEffect(() => {
    console.log("on mount")
  }, [showModal])

  return (

      

    <>
      <Title />

      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button>Add Todo</button>
      </div>

      <div className="todo__wrapper">
        <Todo 
        title="Finish Frontend Simplified"
        clicked={deleteToDo}
        
        />
        <Todo 
        title="Finish Interview Section"
        clicked={deleteToDo}
        />
        <Todo 
        title="Land £100k Job"
        clicked={deleteToDo}
        />
        
      </div>

    {showModal && <Modal title="Are you sure?" cancel={Cancel} confirm={Confirm}/>}
    </>
  );
}

export default App;
