import ClassFilePage from "@/components/ClassFile/ClassFilePage";
import axios from "axios";

async function ClassFile(params) {
    const config = {
        headers : {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5OTAwNzc2LCJpYXQiOjE3MDkzNjA3NzYsImp0aSI6IjYxZWU5MGZkMWE0YTRhNzg5OTNmOTJjZDU4OWFmZWUxIiwidXNlcl9pZCI6MjN9.3x9hGy5gywAD72l8jpu3P3WnuVWNWNLA8GVfRQb4MfI",
        // 'Accept': 'application/json',
        }
    }
    let data;
    await axios.get(`https://api.ebsalar.com/api/v1/admin/class_file/${params.params.id}/`,{
        headers : config.headers
     }).then(res => data = res.data.results).catch(err => console.log(err))
    console.log(params.params.id)   
    return ( 
        <ClassFilePage data={data} />
     );
}

export default ClassFile;