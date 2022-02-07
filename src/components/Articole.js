import React, {useEffect, useState} from "react"
import Axios from 'axios'

function TabelArticole(){

    const [articoleFull, setArticoleFull] = useState([{ArticolTitlu:"Metaverse"}])

    const getArticoleFull = () => {
        Axios.get(`http://localhost:3001/get-articole-full`).then(response => {
            const TabelArticole = response.data
            setArticoleFull([...TabelArticole])
        })
        .catch(err => console.log(err))
    }
  

    
    return(
            <div>
            <button onClick={getArticoleFull}>Vizualizare Articole</button>
                { articoleFull.map(item=>(
                    <>
                <p> Nume articol: {item.ArticolTitlu}</p>
                <p> Rezumat articol: {item.ArticolRezumat}</p>
                <p> Data postarii articolului: { item.ArticolData} </p>
                </>
                ) 

                 
                )}
            </div>
    )
}

export default TabelArticole