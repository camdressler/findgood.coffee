import LandingNav from "@/components/landing-nav";
import Footer from "@/components/shared/footer";


interface LandingLayoutProps {
    children: React.ReactNode;
}

export default async function LandingLayout({ children }: LandingLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="bg-background">
                <LandingNav />
            </header>
            <main className="flex-1">{children}</main>
            <Footer />
            <section className=" bg-background p-8">
        </section>
        </div>
    );
}