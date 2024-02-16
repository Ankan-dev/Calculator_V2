import React, {useState} from 'react'
import './App.css'
import Screen from './Components/Screen'
import Button from './Components/Button'
function App() {

  //Hooks
  const [first, setfirst]=useState(0);
  const [second,setsecond]=useState(0);
  const [ opr, setopr]=useState();
  const [result,setresult]=useState();
  const [count,setcount]=useState(0);
  const [flag,setflag]=useState(0);
  const [repeat,setrepeat]=useState(0);


  //functions
  const getfirst=(val)=>{
      setfirst(parseInt(val));
      setcount(1);
  }

  const getsecond=(val)=>{
      setsecond(parseInt(val));
      setcount(2);
  }

  const op =(val)=>{
    setopr(val);
    setflag(1);
    setrepeat(repeat+1);
    if(repeat>=1){
      setfirst(result);
      setsecond(0);
      setresult(undefined);
      setflag(1);
    }
  }
  const calc=()=>{

      if(opr==='+'){
        setresult(first+second);
      }
      else if(opr==='-'){
        setresult(first-second);
      }
      else if(opr==='*'){
        setresult(first*second);
      }else{
        if(second!==0){
          setresult(first/second);
        }else{
          setresult("ERROR");
        }
        
      }      
      setflag(2);
      setcount(3);
      
  }

  const clear=()=>{
      setflag(0);
      setfirst(0);
      setsecond(0);
      setresult(undefined);
      setopr(undefined);
      setrepeat(0);
  }

  const dlt = () => {
  
    let updatedValue = 0;
    if (count === 1) {
      updatedValue = Math.floor(first / 10);
      setfirst(updatedValue);
    } else if (count === 2) {
      updatedValue = Math.floor(second / 10);
      setsecond(updatedValue);
    } else if (count === 3) {
      updatedValue = Math.floor(result / 10);
      setresult(updatedValue);
    }
  };
  
  const percent=()=>{
      let updateValue=0;
      if(count===1){
        updateValue=first/100;
        setfirst(updateValue);
      }
      else{
        updateValue=second/100;
        setsecond(updateValue);
      }
  }

  return (
    <div className='container'>
      <Screen first={first} second={second} opr={opr} result={result} flag={flag} />
      <Button getfirst={getfirst} getsecond={getsecond} op={op} first={first} second={second} opr={opr} calc={calc} clear={clear} dlt={dlt} percent={percent} />
    </div>
  )
}

export default App