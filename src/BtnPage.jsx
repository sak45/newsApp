import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import HomePage from './HomePage';
import { StepContext } from '@mui/material';


export default function BtnPage({text, handleChange, SetText}) {
    let navigate = useNavigate();

    const isLoggedIn = text.length;

    const nextPage = () => {
        if (isLoggedIn > 0) {
            navigate('HomePage');
        } else {
            return
        }
    }

    
    return (
        <div className='forgotten'>
            <button className='btn' onClick={nextPage}  >Sign In</button>
            <p className='forgot-text'>Forgot password?</p>
        </div>
    )
}
