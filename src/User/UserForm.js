import React, { useState, useRef } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import './userForm.css'
import ErrorModal from '../UI/ErrorModal'

const UserForm = props => {

    const collegeNameRef = useRef();

    const [user, setUser] = useState({
        userName: '',
        age: ''
    })
    const [error, setError] = useState()

    const handleChange = e => {
        setUser((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const eneteredCollengeName = collegeNameRef.current.value
        if (user.userName.trim().length === 0 || user.age.trim().length === 0 || eneteredCollengeName.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name, age and college name (non-empty values).',
            });
            return;
        }
        if (+user.age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }
        props.setUserData([...props.userData, { ...user, id: Math.random().toString(), collegeName: eneteredCollengeName }]);
        setUser({
            userName: '',
            age: ''
        })
        collegeNameRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className='input'>
                <form onSubmit={handleSubmit} >
                    <label htmlFor='userName'>Username</label>
                    <input id='userName' type='text' name='userName' value={user.userName} onChange={handleChange} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' name='age' value={user.age} onChange={handleChange} />
                    <label htmlFor='collegeName'>College Name</label>
                    <input id='collegeName' type='text' ref={collegeNameRef}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default UserForm