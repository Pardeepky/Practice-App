import React from 'react'
import Card from './Card'
import './errorModal.css'
import Button from './Button'
import ReactDom from 'react-dom'

const Backdrop = props => {
    return <div className='backdrop' onClick={props.onConfirm} />
}

const Modal = props => {
    return (
        <Card className='modal'>
            <header className='header'>
                <h2>{props.title}</h2>
            </header>
            <div className='content'>
                <p>{props.message}</p>
            </div>
            <footer className='actions'>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = props => {
    return (
        <>
            {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<Modal title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('modal-root'))}
        </>
    )
}

export default ErrorModal