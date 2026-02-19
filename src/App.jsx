import { useState, useEffect } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import NewEntryForm from "./components/NewEntryForm"

function App() {
  //initialize entries from localStorage
  const [entries, setEntries] = useState(() => {
    const storedEntries = localStorage.getItem("diaryEntries")
    return storedEntries ? JSON.parse(storedEntries) : []
  })

  //stores the entry currently being edited
  const [editingEntry, setEditingEntry] = useState(null)

  //controls forms visibility
  const [isCreating, setIsCreating] = useState(false)

  //sync entries state with localStorage + runs every time entries change
  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries))
  }, [entries])

  //adds a new entry to the state
  const addEntry = (title, content) => {
    const newEntry = {
      id: crypto.randomUUID(),
      title,
      content,
      date: new Date().toISOString().split("T")[0],
    }
    setEntries((prevEntries) => [newEntry, ...prevEntries])
    setIsCreating(false) //hide form after saving
  }

  //update an existing entry + uses map to immutably replace the matching entry
  const updateEntry = (updateEntry) => {
    setEntries((prev) => prev.map((entry) => entry.id === updateEntry.id ? updateEntry : entry))
    setEditingEntry(null)
    setIsCreating(false)
  }

  //deletes an entry by id
  const deleteEntry = (id) => {
    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id))
  }

  return (
    <div className='min-h-screen bg-base-200'>

      <Header onNewClick={() => setIsCreating(true)} />

      {isCreating && (<NewEntryForm addEntry={addEntry} updateEntry={updateEntry} editingEntry={editingEntry} onCancel={() => {setEditingEntry(null); setIsCreating(false);}} />)}

      <Home entries={entries} deleteEntry={deleteEntry} onEdit={(entry) => {setEditingEntry(entry); setIsCreating(true);}} />
    </div>
  )
}

export default App