import React, { useState } from "react";

function Restcountrys() {
    const [text, setText] = useState("");
    const [country, setCountry] = useState(null);

    const getCountry = (code) => {
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then(response => response.json())
        .then(data => {
            setCountry(data[0]);
        });
    }

    const handleChangeText = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getCountry(text);
        console.log(text);
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChangeText} />
            <br />
            <button type="submit">Buscar</button>
        </form>
        {
            country && (
                <div>
                    <h2>Nombre más común: {country.name.common}</h2>
                    <p>Capital: {country.capital}</p>
                    <p>Región: {country.region}</p>
                    <p>Idioma: {Object.values(country.languages).join(' - ')}</p>
                    <img src={country.flags.png} alt="bandera" width="100"></img>
                </div>
            )
        }
        </>
    );
    }

export default Restcountrys;
