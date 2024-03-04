"use client"

import { headTh } from "@/helper/header";
import Link from "next/link";
import { useRouter } from "next/navigation";

function ClassPage(data) {
    const router = useRouter()
     const getData = data.data;
     console.log(getData)
     
    return ( 
        <div className="flex justify-center items-center min-h-[100vh]" dir="rtl">
           <table  className=" mt-6 rounded-xl">
                <thead className="rounded-xl px-8 h-[60px]" >
                    <tr  className="p-10">
                        {
                            headTh.map(item => (
                                <th className="font-lg px-10">{item.title}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody className="text-center  rounded-xl">
                   {
                    getData.map((item , index) => (
                        <tr key={item.id} className={`${index % 2 === 0 ? '' : ' border-y-2 rounded-2xl'}`}>
                            <td className=" py-5">
                                {item.id}
                            </td>
                            <td className=" py-5">
                                {item.teacher.first_name} {item.teacher.last_name}
                            </td>
                            <td>{item.term}</td>
                            <td>{item.level}</td>
                            <td>{item.class_number}</td>
                            <td>{item.class_link}</td>
                            <td>{item.online ? "online" : "offline"}</td>
                            <td>{item.year}</td>
                            <td>{item.student[0]}</td>
                            <td>{item.course}</td>
                            <td>
                                <Link href={`/classPage/${item.id}`}>
                                جزئیات کلاس
                                </Link>
                                </td>
                            <td>
                                <Link href={`/classFile/${item.id}`}>
                                فایل کلاس ها
                                </Link>
                                </td>

                        </tr>       
                    ))
                   }
                </tbody>
           </table>
           <p>
           
           </p>
        </div>
     );
}

export default ClassPage;