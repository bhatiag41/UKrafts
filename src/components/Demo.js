import './demo.css'
import React ,{useState} from 'react'

const Demo = () => {
const [state, setState]=useState({count:0,theme:'blue'})
    const count=state.count
    const theme =state.theme
    function decrementCount(){
        setState(prevState=>{
            return{...prevState,count:prevState.count-1,theme:prevState.theme="red"}
        })
        
    }
    function incrementCount(){
        // setCount(prevCount=>prevCount+1)
        setState(prevState=>{
            return{...prevState,count:prevState.count+1,theme:prevState.theme="green"}
        })
    }
    function resetvalue(){
        setState(prevState=>{
            return{...prevState,count:prevState.count=0 ,theme:prevState.theme="blue"}
        })
    }
  
    return (
    <div className='compo'>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
        <button onClick={resetvalue}>reset</button>
    </div>
  )
}
export default Demo