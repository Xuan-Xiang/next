'use client'
import { useEffect, useState } from "react"

// 客户端渲染
export default function ClientPage() {
    const [list, setList] = useState([{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(
            res => res.json()
        ).then(
            data => {
                console.log(data, 'data')
                setList(data)
            }
        )
    }, [])
    return (
        <div>
            <h1>Client Page</h1>
            {list.map((item: any) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    )
}