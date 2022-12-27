import { Button } from '../components/Ui/Button'

import styles from '../components/func/message.module.scss'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export function SignIn() {
    const [inputs, setInputs] = useState({ login: '', password: '' })
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputs.login === 'name' && inputs.password === '123456') {
            dispatch({ type: "CHANGE_AUTH", payload: true })
            navigate('/')
        } else {
            setError('Login or password is false');
            setInputs({ login: inputs.login, password: '' })
        }
    }

    return (
        <>
            <div className={styles.wrapNews}>
                <p style={{ textAlign: 'center' }}> Your profile </p>
                <form onSubmit={handleSubmit} id="myform">
                    <p>Login:</p>
                    <input
                        placeholder='Login'
                        value={inputs.login}
                        name='login'
                        type='text'
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
                {error && (<p style={{ color: 'darkred', border: '1px solid darkred', padding: '5px' }}> {error}</p>)}
            </div>
        </>
    )
}