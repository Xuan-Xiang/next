'use client'
import { useState } from "react"

export default function AboutTemplate({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>About Template</h1>
            {count}
            {children}
            <button onClick={() => setCount(count + 1)}>Click Template</button>
            <h1>About Template</h1>
        </div>
    )
}