
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { id: string[] } }) {
    // 动态参数根据第二个参数传入的对象获取，params.id是一个数组，包含了所有的动态参数

    console.log(await params)
    // NextRequest NextResponse 本质上是对web api Request Response的封装，NextRequest继承自Request，NextResponse继承自Response
    console.log(request.headers)
    console.log(request.method)
    const body = await request.nextUrl.searchParams.get('aa')
    console.log(body)
   
    return NextResponse.json({ message: 'Hello, World!' })
}


export async function HEAD(request: NextRequest) {
    //  const body = await request.formData(); //接受formData数据
    //  const body = await request.text(); //接受text数据
    //  const body = await request.arrayBuffer(); //接受arrayBuffer数据
    //  const body = await request.blob(); //接受blob数据
    const body = await request.json(); //接受json数据
}
 
export async function POST(request: NextRequest ) {}
 
export async function PUT(request: NextRequest) {}
 
export async function DELETE(request: NextRequest) {}
 
export async function PATCH(request: NextRequest) {}
 
//如果没有定义OPTIONS方法，则Next.js会自动实现OPTIONS方法
export async function OPTIONS(request: NextRequest) {}