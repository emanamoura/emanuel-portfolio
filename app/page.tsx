'use client'
import clsx from "clsx";
import Link from "next/link";
import { MouseEventHandler, useState } from "react";

export default function Home() {
  const fullName = "Emanuel Moura"
  const [mileseconds, setMiliseconds] = useState(300)
  const [sliceIndex, setSliceIndex] = useState(0)
  const [mouseXPosition, setMouseXPosition] = useState(0)
  const [mouseYPosition, setMouseYPosition] = useState(0)

  setTimeout(() => {
    setSliceIndex(sliceIndex + 1)
    if (fullName[sliceIndex] === "") {
      setMiliseconds(0)
    } else {
      setMiliseconds(100)
    }
  }, mileseconds)



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white bg-black">
      <section className="bg-red-500 w-full">
        <div className="flex justify-between">
          <div style={{
            
          }}>
            <Link href={""}>
              UX/UI projects
            </Link>
          </div>
          <div className="text-2xl">
            <Link href={""}>
              Fullstack projects
            </Link>
          </div>
        </div>
        <div className="py-80 text-2xl flex flex-col items-center">
          <p>Hi, my name is {fullName.slice(0, sliceIndex)}. I'm a fullstack software engineer.</p>
          <p>I build systems from scratch ready to production</p>
        </div>
        <div className="text-2xl text-center">
          <Link href={""}>
            Experience
          </Link>
        </div>
      </section>
    </main>
  );
}
