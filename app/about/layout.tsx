'use client'
import { useState } from "react"

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>About Layout</h1>
            {count}
            {children}
            <button onClick={() => setCount(count + 1)}>Click Layout</button>
            <h1>About Layout</h1>
        </div>
    )
}