import React, { useState } from 'react';
import classes from './Header.module.css';
import Modal from './Modal';


const Header = (props) => {

    const [isModalOpen, setModalOpen] = useState(false);

    const ClickHandler = (event) => {
     event.preventDefault();
     setModalOpen(true);
    };

    const Close = () => {
        setModalOpen(false);
       };
 
    return (
            <React.Fragment>
            <header className={classes.header}>
               <div>
                   <h1 className={classes.h1}>HeaderComponent</h1>
               </div>
               <div>
               <button className={classes.button} onClick={ClickHandler} >Sign Up</button>
               {isModalOpen ? <Modal onClose={Close} /> : ''}
               
               </div>
            </header>
            </React.Fragment>
     
    )
};

export default Header;
