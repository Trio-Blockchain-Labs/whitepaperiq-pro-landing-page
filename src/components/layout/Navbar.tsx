import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/data/constants";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isAtHero, setIsAtHero] = useState(true);

    useEffect(() => {
        const onScroll = () => setIsAtHero(window.scrollY < 100);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isAtHero ? "bg-transparent border-transparent" : "glass-nav"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-2">
                        <img src="/logo.png" alt="Whitepaper IQ" className="h-8 w-auto" />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#8c25f4] transition-colors"
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#8c25f4] transition-colors"
                            href="https://whitepaperiq.com/login"
                        >
                            Login
                        </a>
                        <a
                            href="mailto:contact@whitepaperiq.com"
                            className="inline-flex items-center justify-center rounded-lg bg-slate-900 dark:bg-white px-5 py-2.5 text-sm font-semibold text-white dark:text-slate-900 shadow-lg shadow-slate-200 dark:shadow-none hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                        >
                            Book Demo
                        </a>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <span className="material-icons">menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-72 bg-white dark:bg-slate-900">
                                <div className="flex flex-col gap-6 mt-8">
                                    {NAV_LINKS.map((link) => (
                                        <a
                                            key={link.href}
                                            className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-[#8c25f4] transition-colors"
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                    <hr className="border-slate-200 dark:border-slate-700" />
                                    <a
                                        className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-[#8c25f4]"
                                        href="https://whitepaperiq.com/login"
                                    >
                                        Login
                                    </a>
                                    <a
                                        href="mailto:contact@whitepaperiq.com"
                                        className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 dark:bg-white px-5 py-2.5 text-sm font-semibold text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                                    >
                                        Book Demo
                                    </a>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
