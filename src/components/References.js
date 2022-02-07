import React, {useEffect, useState} from "react"
import Axios from 'axios'


function TabelReferences(){

    const [references, setReferences] = useState([])
    const getReferences = () => {
        Axios.get(`http://localhost:3001/get-references`).then(response => {
            const TabelReferences = response.data
            setReferences([...TabelReferences])
        })
        .catch(err => console.log(err))
    }
  
    return(
            <div>
            <button onClick={getReferences}>Vizualizare Referinte</button>
            { references.map(item=>(
                    <>
                <p> Nume referinta: {item.ReferenceTitlu}</p>
                <p> Apartine articolului: {item.ArticolId}</p>
                </>
                ) 

                 
                )}
            </div>
    )
}

export default TabelReferences