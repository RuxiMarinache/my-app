import React, {useEffect, useState} from "react"
import Axios from 'axios'

function FormularArticol(){

    const [articolId, setArticolId] = useState(0)
    const [articolTitlu, setArticolTitlu] = useState("")
    const [articolRezumat, setArticolRezumat] = useState("")
    const [articolData, setArticolData] = useState(Date.now())
    const [postStatus, setPostStatus] = useState(false)

    const creareArticol = () => {
        Axios.post(`http://localhost:3001/add-articol`, { 
            ArticolId: articolId,
            ArticolTitlu: articolTitlu,
            ArticolRezumat: articolRezumat,
            ArticolData: articolData,
            createdAt: Date.now(),
            updatedAt: Date.now(),

        }).then(response => {
            if(response.status === 200) setPostStatus(true);
            
        })
        .catch(err => console.log(err))
    }
  

    
    return(
            <div>

            <form>
                <label htmlFor ="articolId"> Id </label>
                <input id= "articolId" onChange={(e)=> setArticolId(e.target.value)}></input>
                <label htmlFor ="articolTitlu"> Titlu </label>
                <input id= "articolTitlu" onChange={(e)=> setArticolTitlu(e.target.value)}></input>
                <label htmlFor ="articolRezumat"> Rezumat </label>
                <input id= "articolRezumat" onChange={(e)=> setArticolRezumat(e.target.value)}></input>
                <label htmlFor ="articolData"> Data  </label>
                <input id= "articolData" onChange={(e)=> setArticolData(e.target.value)}></input>

                <button type="submit" onClick={creareArticol}>Submit</button>
            </form>
            {postStatus&& <p> Adaugat cu succes! </p>}
            </div>
    )
}

export default FormularArticol