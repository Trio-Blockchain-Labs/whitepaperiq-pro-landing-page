import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/data/constants";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed w-full top-0 z-50 glass-nav transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Whitepaper IQ" className="h-10 w-auto" />
                    </div>

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
                            href="#"
                        >
                            Login
                        </a>
                        <Button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-lg shadow-slate-200 dark:shadow-none rounded-lg px-5 py-2.5 text-sm font-semibold">
                            Book Demo
                        </Button>
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
                                        href="#"
                                    >
                                        Login
                                    </a>
                                    <Button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 w-full rounded-lg text-sm font-semibold">
                                        Book Demo
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
