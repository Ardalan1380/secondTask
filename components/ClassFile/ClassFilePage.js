function ClassFilePage(data) {
    console.log(data.data[0])
    const {id , title , file} = data.data[0]
    return ( 
        <div className="flex justify-center mx-auto min-h[100vh]">
            <table className=" mt-6 rounded-xl">
                    <thead  className="rounded-xl px-8 h-[60px]">
                        <tr className="p-10">
                            <th className="font-lg px-10">
                                ردیف
                            </th>
                            <th className="font-lg px-10">
                                عنوان
                            </th>
                            <th className="font-lg px-10">
                                فایل
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td className="py-5 text-center">{file}</td>
                            <td className="text-center ">{title}</td>
                            <td className="text-center ">{id}</td>

                        </tr>
                    </tbody>
            </table>
        </div>
     );
}

export default ClassFilePage;