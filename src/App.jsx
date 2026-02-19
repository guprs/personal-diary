import { useState } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import NewEntryForm from "./components/NewEntryForm"

function App() {
  //main state that stores all diary entries
  const [entries, setEntries] = useState([
    {
      id: crypto.randomUUID(),
      title: "Welcome to your Diary!",
      content: "Start writing your daily thoughts and reflections.",
      date: new Date().toISOString().split("T")[0],
    },
  ])

  //control whether the form is visible
  const [isCreating, setIsCreating] = useState(false)

  /*
   * adds a new diary entry to the state
   * receives title and content from the form
   * generates unique id and current date
   * updates the entries array immutably
   */
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

  return (
    <div className='min-h-screen bg-base-200'>

      <Header onNewClick={() => setIsCreating(true)} />

      {isCreating && (<NewEntryForm addEntry={addEntry} onCancel={() => setIsCreating(false)} />)}

      <Home entries={entries} />
    </div>
  )
}

export default App