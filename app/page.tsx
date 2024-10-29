import Image from "next/image";
import Link from "next/link";
import JobCards from "./ui/components/jobCard";

export default function Home() {
  return (
    <main className="">
      <div className="lg:mx-40 my-24">
        <h1 className="lg:text-9xl font-extrabold text-violet-900">
          Transferable Skills
        </h1>
        <p className="lg:text-4xl mt-4">
          abilities and knowledge we can apply across various jobs and
          industries.
        </p>
      </div>

      <div className="lg:mx-40">
        <div className="pb-12">
          <h3 className="text-2xl font-bold">Explore Jobs:</h3>
        </div>
        <div className="pb-24">
          <JobCards />
        </div>
      </div>
    </main>
  );
}
