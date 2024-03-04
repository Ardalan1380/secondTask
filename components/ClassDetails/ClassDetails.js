"use client"

import { detailsHeader } from "@/helper/detailsHeader";
import { useRouter } from "next/navigation";

function ClassDetails(data) {
    const router = useRouter()
    console.log(data.data.results);
     const {id ,teacher, students_count ,year ,class_link ,student , course , online , term ,class_number ,level} = data.data.results
    return ( 
        <div className="flex justify-center items-center min-h-[100vh]" dir="rtl">
           <table  className=" mt-6 rounded-xl">
                <thead className="rounded-xl px-8 h-[60px]" >
                    <tr  className="p-10">
                        {
                            detailsHeader.map(item => (
                                <th className="font-lg px-10">{item.title}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody className="text-center border-collapse rounded-xl">
                   
                        <tr key={id} >
                            <td className=" py-5">
                                {student[0].first_name} {student[0].last_name}
                            </td>
                            <td className=" py-5">
                                {teacher.first_name} {teacher.last_name}
                            </td>
                            <td>{term}</td>
                            <td>{level}</td>
                            <td>{class_number}</td>
                            <td>{class_link}</td>
                            <td>online</td>
                            <td>{year}</td>
                            <td>{students_count}</td>
                            <td>{course}</td>
                            <td>
                                {/* <Link href={`/classPage/${id}`}>
                                جزئیات کلاس
                                </Link> */}
                                </td>
                        </tr>       
                    
                </tbody>
           </table>
           <p>
           
           </p>
        </div>
     );
}

export default ClassDetails;