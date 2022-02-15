import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //Group all in one state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangedHandler = (event) => {
        setEnteredTitle(event.target.value);

        //Another way to do this, but it wont remember prev state well.
        //setUserInput({
        //    ...userInput,
        //    enteredTitle: event.target.value,
        //});

        //Do it like this if your depending on previous state.
        //setUserInput((prevState) => {
        //    return { ...prevState, enteredTitle: event.target.value };
        //})

        
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        
        //Another way to do this, but it wont remember prev state well.
        //setUserInput({
        //    ...userInput,
        //    enteredAmount: event.target.value,
        //});

        //Do it like this if your depending on previous state.
        //setUserInput((prevState) => {
        //    return { ...prevState, enteredAmount: event.target.value };
        //})

        
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        
        //Another way to do this, but it wont remember prev state well.
        //setUserInput({
        //    ...userInput,
        //    enteredDate: event.target.value,
        //});

        //Do it like this if your depending on previous state.
        //setUserInput((prevState) => {
        //    return { ...prevState, enteredDate: event.target.value };
        //})

        
    }
    
    const submitHandler = (event) => {
        event.preventDefault(); //prevent resubmit on page reload
        
        //Console.log to view title, amount and date
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData); //Pass around a pointer in a function.
        setEnteredTitle(''); //Set title back to empty after form submit.
        setEnteredAmount(''); //Set amount back to empty after form submit.
        setEnteredDate(''); //Set date back to empty after form submit.
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>

            <div className='new-expense__controls'>
                <label>Title</label>
                <input type="text" 
                value={enteredTitle} 
                onChange={titleChangedHandler} />
            </div>

            <div className='new-expense__controls'>
                <label>Amount</label>
                <input type="number" 
                value={enteredAmount} 
                onChange={amountChangeHandler} 
                min="0.01" 
                step="0.01" />
            </div>

            <div className='new-expense__controls'>
                <label>Date</label>
                <input type="date" 
                value={enteredDate} 
                onChange={dateChangeHandler} 
                min="2017-01-01" 
                max="2022-12-31" />
            </div>            
        </div>
            <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
            </div>
    </form>


}

export default ExpenseForm;