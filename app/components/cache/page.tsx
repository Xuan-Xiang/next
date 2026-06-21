/**
 * @file: 缓存组件
 * @description: next会默认缓存组件的动态数据，dev环境不会缓存，打包后会缓存。解决方案有以下方式：
 * 1. 使用‘use cache’ 配合cacheLife
 * @returns
 */

// 'use cache'
// import { cacheLife } from 'next/cache'

import { connection }  from 'next/server'


// 为开启 componentsCache情况下，如何禁止某个组件被缓存，有以下方式
// 1. 使用 export const dynamic = 'force-dynamic' 强制组件为动态组件，不被缓存
// export const dynamic = 'force-dynamic'
// 2. 使用 export const revalidate = 0 强制组件不被缓存
// 3. 使用 接口headers: { 'cache': 'no-store' } 强制组件不被缓存
// 4. 使用任意以下几种 都不会缓存
// cookies
// headers
// connection
// searchParams
// fetch和{ cache: ‘no-store’ }

const fetchData = async () => {
    const response = await fetch('https://www.mocklib.com/mock/random/name')
    const data = await response.json()
    console.log(data)

    return data
}

export default async function Page() {
    // cacheLife({ revalidate: 10 })
    await connection()
    const data = await fetchData()
    return (
        <div>
            <h1>Cache Page</h1>

            <h1>{data.name}</h1>
        </div>
    )
}