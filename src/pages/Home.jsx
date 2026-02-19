import React from 'react'
import DiaryEntry from '../components/DiaryEntry'

const Home = ({ entries, deleteEntry }) => {
  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      {entries.length === 0
        ? (<p className='text-center text-base sm:text-lg'>No diary entries yet.</p>)
        : (<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {entries.map((entry) => (<DiaryEntry key={entry.id} entry={entry} deleteEntry={deleteEntry} />))}
          </div>)
      }
    </div>
  )
}

export default Home