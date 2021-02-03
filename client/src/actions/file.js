import axios from "axios"

export function getFiles(dirId){
    return async dispatch =>{
        try{
            const response = await axios.get(`http://localhost:3000/api/files
            ${dirId? "?parent="+dirId: ""}`,{
                headers: {Authorisation : `Bearer ${localStorage.getItem("token")}`}
            })
            console.log(response.data)
        }catch(e){
            alert(e.response.data.message)
        }
    }
}