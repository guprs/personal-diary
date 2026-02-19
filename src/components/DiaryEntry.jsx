import React from 'react'

const DiaryEntry = ({ entry, deleteEntry }) => {
    return (
        <div className='card bg-base-100 shadow-md hover:shadow-lg transition-shadow relative'>
            <div className='card-body'>

                <button className='btn btn-xs btn-error absolute top-3 right-3' onClick={() => deleteEntry(entry.id)}>X</button>

                <h2 className='card-titles text-lg sm:text-xl'>{entry.title}</h2>

                <p className='text-sm opacity-70'>{entry.date}</p>

                <p className='mt-2 text-sm sm:text-base line-clamp-3'>{entry.content}</p>

            </div>
        </div>
    )
}

export default DiaryEntry