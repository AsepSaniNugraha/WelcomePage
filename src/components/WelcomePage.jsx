import React from 'react'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return (
        <div className='h-screen w-screen flex flex-col items-end'>
            <div className='h-1/2 w-full flex gap-1 justify-center items-center'>
                <div className='flex items-center gap-3'>
                    <div className='h-10 w-10 bg-text-primary/50 rounded-full'></div>
                    <div className='h-15 w-15 bg-text-primary/70 rounded-full'></div>
                    <div className='h-20 w-20 border-4 border-accent rounded-full'></div>
                    <div className='h-15 w-15 bg-text-primary/70 rounded-full'></div>
                    <div className='h-10 w-10 bg-text-primary/50 rounded-full'></div>
                </div>
            </div>

            <div className='flex flex-col justify-between items-center h-1/2 w-full py-10 mt-auto text-text-primary'>
                <div className='flex flex-col gap-3 text-center'>
                    <p className='text-4xl'>Welcome</p>
                    <p className='text-lg text-text-muted'>Lorem ipsum dolor sit amet.</p>
                </div>
                <Link
                    className="w-18 h-18 border-2 border-accent/0 flex items-center justify-center rounded-full hover:border-accent transition-border duration-500 active:scale-95">
                    <i className="bi bi-arrow-right-circle-fill text-5xl text-accent"></i>
                </Link>
            </div>
        </div>
    )
}

export default WelcomePage