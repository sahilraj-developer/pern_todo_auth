import React from 'react'

const signOut =()=>{
  console.log("signout")
}

const ListHeader = ({ listName }) => {
  return (
    <div className='list-header'>
      <h1> {listName}</h1>
      <div className='button-container'>
        <button className='create'>Add New</button>
        <button className='signout' onClick={signOut}>Sign Out</button>
      </div>
    </div>
  )
}

export default ListHeader
