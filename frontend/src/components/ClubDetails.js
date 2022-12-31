import { useClubs } from '../hooks/useClubs'
import { AiFillDelete } from "react-icons/ai"
import axios from "axios"

export const ClubDetails = ({club}) => {


  const { dispatch } = useClubs()


  //Delete a club
  const handleDelete = async () => {
      const response = await fetch("http://localhost:4000/api/clubs/" + club._id, {
        method: "DELETE"
      })

      const json = await response.json()
    
      if(response.ok){
        dispatch({
          type: "DELETE_CLUB",
          payload: json
        })
      }
  }




  //Update a club
  const handleUpdate  = async () => {
    const response = await fetch("http://localhost:4000/api/clubs/" + club._id, {
      method: 'PATCH',
      body: JSON.stringify({
        name: 'foo',
      }),
      
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },

    })
    .then((response) => response.json())
  .then((json) => console.log(json));
  }



  return (
    <div className='each-club'>
        <h4>{club.name}</h4>
        <p><strong>Country: </strong>{club.country}</p>
        <p><strong>Division: </strong>{club.division}</p>
        <p>{club.createdAt}</p>
        <span onClick={handleDelete} className='delete' title='Delete Club'><AiFillDelete/></span>
    </div>
  )
}

export default ClubDetails