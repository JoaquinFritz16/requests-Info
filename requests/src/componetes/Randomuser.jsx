import React, {useState} from "react";
function Randomuser(){
    const [user, setUser] = useState(null);
    const getUser = () => {
        fetch(`https://randomuser.me/api/`)
        .then(response => response.json())
        .then(data => {
            setUser(data.results[0]);
        });
    }
    const handleUser = () => {
        getUser();
        console.log(data.results);
    }
    return (
        <>
        <button onClick={()=>handleUser()}>Crer usuario random</button>
        {
            user && (
            <div>
                <h2>Usuario creado:</h2>
                <p>Nombre: {user.name.first} {user.name.last}</p>
                <p>Genero: {user.gender}</p>
                <p>Pais: {user.location.country}</p>
                <p>Email: {user.email}</p>
            </div>)
            
        }
        </>
    )
}
export default Randomuser;