// import React from 'react';
import classes from './Form.module.css';
import React, { useState, useRef } from 'react';


const Form = (props) => {

  const UserName = useRef('');
  const UserAge = useRef('');
    

    const SubmitHandler = (e) => {
      e.preventDefault();
        const Name = UserName.current.value;
        const Age = UserAge.current.value;
        localStorage.setItem('NameOfUser', Name);
        localStorage.setItem('AgeOfUser', Age);
        UserName.current.value = '';
        UserAge.current.value = '';
       
    };
  
    return (
        
        <div className={classes.div}>
        <form>

        <label>Full Name</label> 
        <input type="text" placeholder="Full Name" ref={UserName} />
        <label>Age</label>
        <input type="number" placeholder="Your Age.." ref={UserAge} />
        <button onClick={SubmitHandler} className={classes.Submit}> Submit</button>

        </form>
        </div>
    );
};

export default Form;
