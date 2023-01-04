import { Button } from '../components/Ui/Button'

import styles from '../components/func/message.module.scss'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signIn } from '../services/firebase'


export function SignIn() {
    const [inputs, setInputs] = useState({ email: '', password: '' })
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await signIn(inputs.email, inputs.password)
            dispatch({ type: "CHANGE_AUTH", payload: true })
            navigate('/')
        } catch (error) {
            setError(error.message);
            setInputs({ login: inputs.email, password: '' })
        }finally{
            setLoading(false)
        }
    }

    return (
        <>
            <div className={styles.wrapNews}>
                <p style={{ textAlign: 'center' }}> Your profile </p>
                <form onSubmit={handleSubmit} id="myform">
                    <p>Email:</p>
                    <input
                        placeholder='Email'
                        value={inputs.email}
                        name='email'
                        type='email'
                        onChange={(e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                    ></input>
                    <p>Password:</p>
                    <input
                        placeholder='Password'
                        maxLength='10'
                        value={inputs.password}
                        name='password'
                        type='text'
                        onChange={(e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                    ></input>
                </form>
                <Button type='submit' form='myform'>Sign in</Button>
                {loading && (
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                )}
                {error && (<p style={{ color: 'darkred', border: '1px solid darkred', padding: '5px' }}> {error}</p>)}
            </div>
        </>
    )
}