import React from "react";
import { QUERY_READ_USER} from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_GAME} from '../utils/mutations';

const Games = () => {
    
    const { loading, data } = useQuery(QUERY_READ_USER);
    const [deleteGame, {error}] = useMutation(DELETE_GAME);

    const userData = data?.readUser.games || {};
    console.log(userData);

    const handleDeleteGame = async (id)=>{
        try{
            const {data} = await deleteGame({
                variables: { id }
            })
            console.log("success!");
        } catch(err){
            console.log(err);
        }
    }

    if(loading){
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <ul>
                   {userData?.map((element, i)=>{
                    return (
                        <div>
                            <li key={i}>{element.title} <br></br> {element.profile}</li>
                            <button onClick={() => handleDeleteGame(element._id)}>Delete</button>
                        </div>
                    )
                   })} 
            </ul>
        </div>
    );
  };
  
  export default Games;