import React from 'react'

function Header({ onNewClick }) {
    return (
        <header className='bg-primary text-primary-content'>
            <div className='max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-5'>

                <div className='text-center sm:text-left'>
                    <h1 className='text-lg sm:text-xl md:text-2xl font-bold'>Personal Diary</h1>
                    <p className='text-sm sm:text-base'>Your personal space to write daily thoughts.</p>
                </div>

                {/* triggers form visibility in app */}
                <button className='btn btn-sm sm:btn-md btn-secondary' onClick={onNewClick}>New Entry</button>

            </div>
        </header>
    )
}

export default Header