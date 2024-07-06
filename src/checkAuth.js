import axios from "axios"
export const checkAuth = async () => {
    axios.defaults.withCredentials = true;
    try {
        const res = await axios.get("http://localhost:5000/api/checkAuth", {
            withCredentials: true
        });
        // const data = await res.data;
        return res.data.success;
    } catch (error) {
        console.log("Error Checking Authentication", error);
        return false;
    }
}