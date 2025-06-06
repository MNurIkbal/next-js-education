import { NextRequest, NextResponse } from "next/server";

export function middleware(req : NextRequest) {
    const login = true;
    if(login) {
        return NextResponse.next();
    } else {
        return NextResponse.redirect(new URL("/",req.url))
    }
}

export const config = {
    matcher : ['/produk','/about'],
}