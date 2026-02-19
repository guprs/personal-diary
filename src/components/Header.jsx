function Header({ onNewClick, toggleTheme, theme }) {
    return (
        <header className='bg-primary text-primary-content'>
            <div className='max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-5'>

                <div className='text-center sm:text-left'>
                    <h1 className='text-lg sm:text-xl md:text-2xl font-bold'>Personal Diary</h1>
                    <p className='text-sm sm:text-base'>Your personal space to write daily thoughts.</p>
                </div>

                <div className='flex gap-3'>

                    {/*theme toggle switch*/}
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <span className='text-sm'>{theme === "light" ? "Light Mode ☀️" : "Dark Mode 🌙" }</span>
                        <input className='toggle toggle-sm' type='checkbox' checked={theme === "dark"} onChange={toggleTheme} />
                    </label>

                    {/* triggers form visibility in app */}
                    <button className='btn btn-sm sm:btn-md btn-secondary' onClick={onNewClick}>New Entry</button>

                </div>
            </div>
        </header>
    )
}

export default Header