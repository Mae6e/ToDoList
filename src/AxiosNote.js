import axios from "axios";

const AxiosNote = axios.create({
    baseURL:'https://todolist-12876-default-rtdb.firebaseio.com/'
})

export default AxiosNote