import { useEffect } from "react"
import axios from "axios"
import ClubDetails from "../components/ClubDetails"
import "../index.css"
import ClubForm from "../components/ClubForm"
import { useClubs } from "../hooks/useClubs"

const Home = () => {

    const { clubs, dispatch } = useClubs()


    useEffect(() => {
        const fetchClubs = async () => {
            const res = await axios.get("http://localhost:4000/api/clubs/")
            dispatch({
                type: "SET_CLUBS",
                payload: res.data
            })
            console.log(res.data)
        }

        fetchClubs()
    }, [dispatch])


    return (
        <div className="home">
            <div className="clubs">
                {clubs && clubs.map(club => {
                    return <ClubDetails club={club} key={club._id} />
                })}
            </div>

            <div>
                <ClubForm />
            </div>
        </div>
    )
}

export default Home