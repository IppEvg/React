import React from 'react'

export function SignUp() {

    return (
        <>
            <p style={{ textAlign: 'center' }}> SignUp</p>
            <form>
                <p>Login:</p>
                <input
                    placeholder='Login'
                    value={login}
                    type='text'
                ></input>
            </form>
        </>
    )
}