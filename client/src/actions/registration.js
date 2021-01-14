import axios from "axios";

export const registration = async (email, password) =>{
    try {
        const response = await axios.post("http://localhost:5000/api/auth/reg",
            {email,password})
        alert(response.data.message)
    } catch (e) {
        alert(e)
    }
}