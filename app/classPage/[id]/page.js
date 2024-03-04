import ClassDetails from "@/components/ClassDetails/ClassDetails";
import axios from "axios";

async function Details(params) {
    // console.log(params.params.id)
    const config = {
        headers : {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5OTAwNzc2LCJpYXQiOjE3MDkzNjA3NzYsImp0aSI6IjYxZWU5MGZkMWE0YTRhNzg5OTNmOTJjZDU4OWFmZWUxIiwidXNlcl9pZCI6MjN9.3x9hGy5gywAD72l8jpu3P3WnuVWNWNLA8GVfRQb4MfI",
        // 'Accept': 'application/json',
        }
    }
    let data;
     await axios.get(`http://api.ebsalar.com/api/v1/admin/class_room/${params.params.id}/`, {
        headers : config.headers
     }).then(res => data = res.data).catch(err => console.log(err))
    return ( 
        <ClassDetails data={data} />
     );
}

export default Details;