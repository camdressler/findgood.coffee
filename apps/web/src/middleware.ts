import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    async function middleware(req) {
        const token = await getToken({ req });
        const isAuth = !!token;
        const isAdmin = token?.role === "ADMIN";
        const isAuthPage = req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/register");
        const isAdminPage = req.nextUrl.pathname.startsWith("/admin");

        if (isAuthPage) {
            if (isAuth) {
                return NextResponse.redirect(new URL("/dashboard", req.url));
            }

            return null;
        }

        if (!isAuth) {
            let from = req.nextUrl.pathname;
            if (req.nextUrl.search) {
                from += req.nextUrl.search;
            }

            return NextResponse.redirect(new URL(`/login?from=${encodeURIComponent(from)}`, req.url));
        }

        if (isAdminPage && !isAdmin) {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }
    },
    {
        callbacks: {
            async authorized() {
                // This is a work-around for handling redirect on auth pages.
                // We return true here so that the middleware function above
                // is always called.
                return true;
            }
        }
    }
);

export const config = {
    matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/register"]
};
