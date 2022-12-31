import React, { useState } from 'react'
import { useClubs } from '../hooks/useClubs'


const ClubForm = () => {

  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const [division, setDivision] = useState(0)
  const [error, setError] = useState(null)
  const { dispatch } = useClubs()
  const [emptyFields, setEmptyFields] = useState([])


  const handleSubmit = async (e) => {
    e.preventDefault()

    const club = {name, country, division}

    const response = await fetch("http://localhost:4000/api/clubs/", {
        method: "POST",
        body: JSON.stringify(club),
        headers: {
        'Content-Type': 'application/json'
        }
      })

      const json = await response.json()

      if(!response.ok){
        setError(json.error)
        setEmptyFields(json.emptyFields)
      }

      if(response.ok) {
        setName("")
        setCountry("")
        setDivision(0)
        setError(null)
        setEmptyFields([])
        dispatch({
          type: "CREATE_CLUB",
          payload: json
        })
        console.log(json)
      }
  
  }


  return (
    <form className='create' onSubmit={handleSubmit}>
        <h2>Add a club</h2>

        <label>Name:</label>
        <input className={emptyFields.includes("name") ? "error" : ""} type={"text"} value={name} onChange={(e) => setName(e.target.value)} />

        <label>Country:</label>
        <input className={emptyFields.includes("country") ? "error" : ""} type={"text"} value={country} onChange={(e) => setCountry(e.target.value)} />

        <label>Division:</label>
        <input className={emptyFields.includes("division") ? "error" : ""} type={"number"} value={division} onChange={(e) => setDivision(e.target.value)} />

        <button type='submit'>Add</button>

        { error && <div className='error'> {error } </div>}
    </form>
  )
}

export default ClubForm