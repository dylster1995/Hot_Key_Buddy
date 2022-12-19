import React from "react";
import { QUERY_READ_USER} from '../utils/queries';
import { useQuery } from '@apollo/client';

const Games = () => {
    
    const { loading, data } = useQuery(QUERY_READ_USER);
    const userData = data?.readUser.games || {};
    console.log(userData);

    return (
            <ul>
                userData.map(function(element){
                    <li key={i}>{userData?.title}</li>
                })
                
            </ul>
    );
  };
  
  export default Games;