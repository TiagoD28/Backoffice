import axios from "axios";

export const fetchEvents = async () => {
    try{
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/getEvents`);
        const data = response.data;
        return data;
        
    } catch(e: any) {
        console.log('ERROR: ', e);
    }
}