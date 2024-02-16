import React, { useState } from 'react';
import '../App.css';

function Button({ getfirst, getsecond, op, first, second, opr, calc, clear, dlt, percent }) {
    //hooks

  
    // Function to handle number input
    const getNum = (val) => {
            if (opr === undefined) {
                if (first === 0) {
                    getfirst(val);
                } else {
                    const updatedFirst = first + val;
                    getfirst(updatedFirst);
                }
            } else {
                if (second === 0) {
                    getsecond(val);
                } else {
                    const updatedSecond = second + val;
                    getsecond(updatedSecond);
                }
            }
        
    };

    // Function to handle operator input
    const getOpr = (val) => {
        op(val);
    };

    const calcHandler = () => {
        calc();
    };
    const clearHandler = () => {
        clear();
    };
    const dltHandler = () => {
        dlt();
    };

    const percentHandler = () => {
        percent();
    };

    const decimalHandler = () => {
       
    };

    return (
        <div className="btn_wrap">
            <button className="btn" onClick={() => clearHandler()}>C</button>
            <button className="btn" onClick={() => dltHandler()}>DEL</button>
            <button className="btn" onClick={() => percentHandler()}>%</button>
            <button className="btn" onClick={() => getOpr('/')}>/</button>
            <button className="btn" onClick={() => getNum('7')}>7</button>
            <button className="btn" onClick={() => getNum('8')}>8</button>
            <button className="btn" onClick={() => getNum('9')}>9</button>
            <button className="btn" onClick={() => getOpr('*')}>*</button>
            <button className="btn" onClick={() => getNum('4')}>4</button>
            <button className="btn" onClick={() => getNum('5')}>5</button>
            <button className="btn" onClick={() => getNum('6')}>6</button>
            <button className="btn" onClick={() => getOpr('-')}>-</button>
            <button className="btn" onClick={() => getNum('1')}>1</button>
            <button className="btn" onClick={() => getNum('2')}>2</button>
            <button className="btn" onClick={() => getNum('3')}>3</button>
            <button className="btn" onClick={() => getOpr('+')}>+</button>
            <button className="btn" onClick={() => decimalHandler()}>.</button>
            <button className="btn" onClick={() => getNum('0')}>0</button>
            <button className="btn" onClick={() => calcHandler()}>=</button>
        </div>
    );
}

export default Button;
