import React from 'react'

import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className="App">
      <form
      className="block" onSubmit={handleSubmit(onSubmit)}>
        <label>Login</label>
        <input type="text" {...register('login')}/>
        <label>Password</label>
        <input type="text" {...register('password')}/>
        <button type="submit" className="">Войти</button>
      </form>
    </div>
  );
}

export default App;
