import React from 'react'

const gifSearch = ({handleSubmit, handleChange, searchValue}) => (
    <form onSubmit={event => handleSubmit(event)}>
        <label>
        Search Gifs:
        <input 
            type="text" 
            value={searchValue} 
            onChange={event => handleChange(event)} 
        />
        </label>
        <input type="submit" value="Submit" />
    </form>
)

export default gifSearch
