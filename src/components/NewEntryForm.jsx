import { useState } from "react"

function NewEntryForm({ addEntry, onCancel}) {
    //local state to control form inputs
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    /**
     * handles form submission
     * prevents page reload
     * sends data to parent component
     * resets input fields
     */
    function handleSubmit(e) {
        if (!title.trim() || !content.trim()) return
        
        e.preventDefault()

        addEntry(title, content)

        setTitle("")
        setContent("")
    }

    return (
        <div className="max-w-3xl max-auto px-4 py-6">
            <div className="card bg-base-100 shadow-md">
                <div className="car-body">
                    <h2 className="card-title text-lg sm:text-xl">Create New Entry</h2>

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