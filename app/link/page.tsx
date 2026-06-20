'use client'

import Link from "next/link";
import { useRouter, redirect, permanentRedirect } from "next/navigation";


export default function Page({ params }: { params: { id: string[] } }) {

    const router = useRouter()
    return (
        <div>
            {/* <Link>是一个内置组件，在a标签的基础上扩展了功能，并且还能用来实现预获取(prefetch)，prefetch只在生产模式下生效,默认为true，以及保持滚动位置(scroll)等。 */}
            <Link href="/home" className="block text-blue-500 hover:text-blue-700">
                Home
            </Link>
            <Link href="/about" className="block text-blue-500 hover:text-blue-700">
                About
            </Link>

            <button onClick={() => router.push("/home")}>Click Home</button>
            <button onClick={() => router.push("/about")}>Click About</button>

        <br />

            {/* 重定向 */}
            <button onClick={() => redirect("/")}>Click redirect</button>
            <button onClick={() => permanentRedirect("/about")}>Click permanentRedirect</button>
        </div>
    )
}