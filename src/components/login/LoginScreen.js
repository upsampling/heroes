import React from 'react'

export const LoginScreen = ({ history }) => {
    
    const handleClick  = () =>{
        history.push('/');
    }

    return (
        <div className="container mt-5">
            <h1>Login screen</h1>
            <hr />
            <button className="btn btn-primary" onClick={handleClick}>
                login
            </button> 
        </div>
    )
}
