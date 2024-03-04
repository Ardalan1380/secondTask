"use client"

import Link from "next/link";


function HomePage() {
  
    return ( 
        <div className="text-center h-[300px]">
            <h1 className="mb-5">Home Page</h1>

            <Link className="my-3" href="/classPage">ClassPage </Link>
        </div>
     );
}

export default HomePage;