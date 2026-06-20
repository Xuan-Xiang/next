const delay = (ms: number) => {
return new Promise(resolve => setTimeout(resolve, ms))
}

const fetchData = async () => {
    // const response = await fetch('http://localhost:3000/api/user?&aa=1')
    const response = await fetch('http://localhost:3000/api/login/112?&aa=2')
    const data = await response.json()
    console.log(data)

    return data
}

export default async function Home() {
    // await delay(5000)
    const data = await fetchData()
    // await delay(5000)
    return (
        <div>
            <h1>{data.message}</h1>
        </div>
    )
}