// import Hero from "@/components/landing/hero";
// import Pricing from "@/components/landing/pricing";
// import FAQ from "@/components/landing/faq";
import { Metadata } from "next/types";


export const metadata: Metadata = {
    title: "Find A Cafe Near You",
};

export default async function LandingPage() {
    return (
        <div className="flex min-h-screen flex-col gap-24">
            {/* <Hero />
            <Pricing />
            <FAQ /> */}
        </div>
    );
}