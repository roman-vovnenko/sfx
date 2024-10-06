import Image from "next/image";
import Userform from "@/components/Userform";
import Userlist from "@/components/Userlist";
export default function Home() {
  return (
    <div>
      <Userform />
      <Userlist />
    </div>
  );
}
