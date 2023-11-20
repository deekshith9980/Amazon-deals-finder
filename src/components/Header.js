import React from 'react'

const Header = () => {
    const today = new Date().toString().slice(0,10)

  return (
    <header className='header'>
        <div className='text-container'>
            <h1>Dealfinder</h1>
            <p>{today}</p>
        </div>
        <div className="logo-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVbVcNj94_vrHQC9EGx0kkFYhVFqrx2AmWY0xjw6hyXTkcuapPvZ2G8NlVje00lQXfWC4&usqp=CAU" alt="logo" />
        </div>
    </header>
  )
}

export default Header
