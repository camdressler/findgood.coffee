import { description, fullDomain, fullSiteName } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface RootLayoutProps {
    children: React.ReactNode;
}

export const metadata = {
    siteName: fullSiteName,
    title: {
        default: fullSiteName,
        template: `%s — ${fullSiteName}`
    },
    description: description,
    metadataBase: new URL(fullDomain),
    alternates: {
        canonical: "/",
        languages: {
            "en-US": "/en-US"
        }
    },
    keywords: ["Coffee", "Ratings", "Reviews", "Recommendation", "Cafe", "Finder", "Local", "Small Business"],
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" }
    ],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: fullDomain,
        title: fullSiteName,
        description: description,
        siteName: fullSiteName
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png"
    },
    manifest: `https://www.findgood.coffee/site.webmanifest`
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className={cn("min-h-screen bg-background antialiased")}>{children}</body>
        </html>
    );
}
