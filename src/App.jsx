import './App.css'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { useState } from 'react'
function App() {
//js code
//states to store data from input feilds
const [principle,setPrinciple]=useState(0)
const [rate,setRate]=useState(0)
const [year,setYear]=useState(0)
const [interest,setInterest]=useState(0)
//for conditional rendering
const [isPrinciple,setIsPrinciple]=useState(true)
const [isRate,setIsRate]=useState(true)
const [isYear,setIsYear]=useState(true)


const Validate=(e)=>{
  const { name,value }= e.target 
  console.log(value);
  console.log(name);

  //reg exp=/^[0-9]*$/
  //match()-check the pattern matchs the value return array if the values match otherwise returns null
  //!! -to convert into boolean
   console.log(!!value.match(/^[0-9]*$/))
    const data = !!value.match(/^[0-9]*$/)
  
   if(data){
    
   if(name==='principle'){
      setPrinciple(value)
      setIsPrinciple(true)
    }
    else if(name==='rate'){
      setRate(value)
      setIsRate(true)
    }
    else{
      setYear(value)
      setIsYear(true)
    }
  }
  else{
    if(name==='principle'){
      setPrinciple(value)
      setIsPrinciple(false)
  }
  else if(name==='rate'){
    setRate(value)
    setIsRate(false)
  }
  else{
    setYear(value)
    setIsYear(false)
  }
} 
}

const handleReset=()=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
}

const handleCalculate=(e)=>{
  e.preventDefault()
  setInterest((principle*rate*year)/100)
}
  return (
    //jsx
    <>
    <div style={{height:'110vh'}} className='bg-dark pb-3 d-flex justify-content-center align-items-center'>
      <div className='bg-light p-5 rounded' style={{width:'480px'}}>
        <h1 className='px-2'>Simple Interest App</h1>
        <p className='text-align-center px-2'>Calculate Your Simple Interest Easily</p>
        <div style={{height:'100px'}} className='bg-warning rounded mt-5 d-flex justify-content-center align-items-center flex-column'>
            <h1>{interest}</h1>
            <p>Total simple Interest</p>
        </div>
        <form onSubmit={handleCalculate}>
          <div className="mb-3 mt-5">
        <TextField id="outlined-basic" name="principle" value={principle || ""} onChange={(e)=>Validate(e)} label="Principle Amount" variant="outlined" className='w-100'/>
        { !isPrinciple && 
            <p className='text-danger'>*Invalid Input</p> }
        </div>
        <div className="mb-3 mt-5">
        <TextField id="outlined-basic" name="rate" value={rate || ""} onChange={(e)=>Validate(e)} label="Rate of Interest" variant="outlined" className='w-100'/>
        { !isRate && 
            <p className='text-danger'>*Invalid Input</p> }
        </div>
        <div className="mb-3 mt-5">
        <TextField id="outlined-basic" name="year" value={year || ""} onChange={(e)=>Validate(e)} label="Year (Yr)" variant="outlined" className='w-100'/>
        { !isYear &&  
            <p className='text-danger'>*Invalid Input</p> }
        </div>
        <div className="mb-3 d-flex justify-content-between">
        <Button variant="contained" color='success' style={{height:'60px',width:"190px"}} disabled={isPrinciple && isRate && isYear?false:true} type='submit'>Calculate</Button>
        <Button onClick={handleReset} variant="outlined" style={{height:'60px',width:"190px"}}>Reset</Button>
        </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
