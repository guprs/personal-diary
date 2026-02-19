import { useState, useEffect } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import NewEntryForm from "./components/NewEntryForm"

function App() {
  //initialize entries from localStorage
  const [entries, setEntries] = useState(() => {
    const storedEntries = localStorage.getItem("diaryEntries")
    return storedEntries ? JSON.parse(storedEntries) : []
  })

  //controls forms visibility
  const [isCreating, setIsCreating] = useState(false)

  //stores the entry currently being edited
  const [editingEntry, setEditingEntry] = useState(null)

  //initialize theme from localStorage + defaults to light theme if not previously set
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"
  })

  //apply theme to root element and persist preference
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  //toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

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
    <div className='min-h-screen flex flex-col bg-base-200'>

      <Header onNewClick={() => {setEditingEntry(null); setIsCreating(true)}} toggleTheme={toggleTheme} theme={theme} />

      <main className="flex-grow">
        {isCreating && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => {setEditingEntry(null); setIsCreating(false)}}>

            {/*modal container*/}
            <div className="bg-base-100 rounded-lg shadow-xl w-full max-w-lg mx-4 p-6 transform transition-all duration-300 scale-100" onClick={(e) => {
              e.stopPropagation()
            }}> {/*prevent closing when clicking inside modal*/}

              {/*close button*/}
              <button className="btn btn-sm btn-circle btn-ghost absolute top-3 right-3" onClick={() => {setEditingEntry(null); setIsCreating(false);}}>X</button>

            <NewEntryForm addEntry={addEntry} updateEntry={updateEntry} editingEntry={editingEntry} onCancel={() => {setEditingEntry(null); setIsCreating(false);}} />
            </div>
          </div>
        )}
        <Home entries={entries} deleteEntry={deleteEntry} onEdit={(entry) => {setEditingEntry(entry); setIsCreating(true);}} />
      </main>

      <Footer />
    </div>
  )
}

export default App