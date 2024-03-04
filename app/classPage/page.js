import ClassPage from "@/components/Class/ClassPage";
import axios from "axios";

async function  Class() {
    let message;
    const config = {
        headers : {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5OTAwNzc2LCJpYXQiOjE3MDkzNjA3NzYsImp0aSI6IjYxZWU5MGZkMWE0YTRhNzg5OTNmOTJjZDU4OWFmZWUxIiwidXNlcl9pZCI6MjN9.3x9hGy5gywAD72l8jpu3P3WnuVWNWNLA8GVfRQb4MfI",
        // 'Accept': 'application/json',
        }
    }
     await axios.get('http://api.ebsalar.com/api/v1/admin/class_room/', {
        headers : config.headers
    }).then(res =>{
        // console.log(res.data)
        message = res.data
    }).catch(err => console.log(err));
    
    return ( 
        <ClassPage data={message.results} />
     );
}

export default Class;