
import {NextRequest, NextResponse} from 'next/server'
export default async function proxy(request: NextRequest) {

    console.log('proxy Request', request.url)
}


export const config = {

    matcher: '/home',
}