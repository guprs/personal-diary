function Footer() {
    const currentYear = new Date().getFullYear

    return (
        <footer className="bg-base-300 border-t border-base-200">
            <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm opcaity-80">
                <p>&copy; {currentYear} Personal Diary. All rights reserved.</p>
                <br />
                <p className="mt-2">The "Personal Diary" project was developed as part of the Software Engineering & AI program at WBS Coding School.</p>
            </div>
        </footer>
    )
}

export default Footer