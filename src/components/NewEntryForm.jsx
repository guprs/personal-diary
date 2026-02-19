import { useEffect, useState } from "react"

function NewEntryForm({ addEntry, updateEntry, editingEntry, onCancel}) {
    //local state to control form inputs
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    //when editingEntry changes, pre-refill form fields
    useEffect(() => {
        if (editingEntry) {
            setTitle(editingEntry.title)
            setContent(editingEntry.content)
        }
    }, [editingEntry])

    /**
     * prevents page reload
     * handles form submission + switches between create and edit mode
     * resets input fields
     */
    function handleSubmit(e) {

        console.log("editingEntry:", editingEntry)
        e.preventDefault()

        if (!title.trim() || !content.trim()) return

        if (editingEntry) {
            updateEntry({...editingEntry, title, content,})
        } else {
            addEntry(title, content)
        }

        setTitle("")
        setContent("")
    }

    return (
        <div className="max-w-3xl max-auto px-4 py-6">
            <div className="card bg-base-100 shadow-md">
                <div className="car-body">
                    <h2 className="card-title text-lg sm:text-xl py-4">{editingEntry ? "Edit Entry" : "Create New Entry"}</h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <input className="input input-bordered w-full" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>

                        <div className="form-control">
                            <textarea className="textarea textarea-bordered w-full" placeholder="Write your thoughts..." rows="4" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-end">
                            <button className="btn btn-outline" type="button" onClick={onCancel}>Cancel</button>
                            <button className="btn btn-primary" type="submit">Save Entry</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewEntryForm