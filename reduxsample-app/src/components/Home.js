import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

export default function Home() {
    const dispatch = useDispatch();
    const {withdrawMoney, depositeMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <>
    {/* <div className='d-flex justify-content-center my-4 align-content-center align-items-lg-center'>
        <button className='btn btn-primary mx-2' onClick={()=> {dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      Hello Home
      <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.depositeMoney(100))}}>+</button>
    </div> */}
     <div className='d-flex justify-content-center my-4 align-content-center align-items-lg-center'>
        <button className='btn btn-primary mx-2' onClick={()=> {withdrawMoney(100)}}>-</button>
      Hello Home
      <button className='btn btn-primary mx-2' onClick={()=>{depositeMoney(100)}}>+</button>
    </div>
    </>
  )
}
