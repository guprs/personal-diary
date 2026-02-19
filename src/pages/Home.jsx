import { useState } from "react"
import DiaryEntry from '../components/DiaryEntry'

function Home ({ entries, deleteEntry, onEdit }) {
  // stores the current search input value
  const [searchTerm, setSearchTerm] = useState("")

  //filters entries based on title or content
  const filteredEntries = entries.filter((entry) => {
    const normalizedSearch = searchTerm.toLocaleLowerCase()
    return (entry.title.toLocaleLowerCase().includes(normalizedSearch) || entry.content.toLocaleLowerCase().includes(normalizedSearch))
  })

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/*search input*/}
      <div className="mb-6">
        <input className="input input-bordered w-full" type="text" placeholder="Search entries" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      {/*no entries in system*/}
      {entries.length === 0 && (
        <p className="text-center text-base sm:text-lg">No diary entries yet.</p>
      )}

      {/*no results for search*/}
      {entries.length > 0 && filteredEntries.length === 0 && (
        <p className="text-center text-base sm:text-lg">No matching entries found.</p>
      )}

      {/* render filtered entries */}
      {filteredEntries.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEntries.map((entry) => (
            <DiaryEntry key={entry.id} entry={entry} deleteEntry={deleteEntry} onEdit={onEdit} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home