/* eslint-disable @typescript-eslint/no-unused-vars */

//ROMAN: Image is not used
import Image from "next/image";
import Userform from "@/components/Userform";
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div>
         <Navbar />
         <h1>Home</h1>
         {/* Other page content */}
         <Userform />
    </div>
  );
}
