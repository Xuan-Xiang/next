// 'use client'

// import { useParams } from "next/navigation"


export default async function Page({ params }: { params: { id: string[] } }) {
    
    /**
     * 两种获取参数方式，分为客户端啊组件与服务端组件
     * 客户端组件：useParams，必须声明客户端组件
     * 服务端组件：通过声明为异步函数的方式，通过函数入参拿到
     */


    // const params22 = useParams()
    // console.log(params22)
    const { id } = await params
    console.log(id)
    return (
        <div>
            <h1>Page</h1>
            {/* <p>Params: {params.id.join('/')}</p> */}
        </div>
    )
}