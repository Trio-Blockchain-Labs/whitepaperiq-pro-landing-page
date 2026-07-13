"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check, Mic, ArrowUp, Trash2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Role {
    id: string;
    label: string;
    desc: string;
    dot: string;
}

const ROLES: Role[] = [
    { id: "retail", label: "Retail Investor", desc: "Simple insights for everyday investors", dot: "bg-emerald-500" },
    { id: "analyst", label: "Market Analyst", desc: "Price trends & market dynamics", dot: "bg-purple-500" },
    { id: "vc", label: "VC Analyst", desc: "Investment potential & fundraising signals", dot: "bg-blue-500" },
    { id: "regulator", label: "Regulator", desc: "Compliance & legal perspective", dot: "bg-amber-500" },
];

const SUGGESTIONS = [
    "What's Bitcoin's current market trend?",
    "What's Ethereum's risk level?",
    "Explain on-chain metrics",
    "Compare BTC and ETH performance",
];

export default function IQBotWidget() {
    const [message, setMessage] = useState("");
    const [roleMenuOpen, setRoleMenuOpen] = useState(false);
    const [role, setRole] = useState(ROLES[0]);
    const [showHint, setShowHint] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const roleButtonRef = useRef<HTMLButtonElement>(null);
    const hintTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() => {
        if (!roleMenuOpen) return;
        const onPointerDown = (e: PointerEvent) => {
            if (menuRef.current?.contains(e.target as Node) || roleButtonRef.current?.contains(e.target as Node)) return;
            setRoleMenuOpen(false);
        };
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return;
            setRoleMenuOpen(false);
            roleButtonRef.current?.focus();
        };
        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [roleMenuOpen]);

    useEffect(() => () => clearTimeout(hintTimeoutRef.current), []);

    const handleSendAttempt = () => {
        setShowHint(true);
        setRoleMenuOpen(false);
        clearTimeout(hintTimeoutRef.current);
        hintTimeoutRef.current = setTimeout(() => {
            document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
            setShowHint(false);
        }, 300);
    };

    return (
        <div className="w-full h-[70vh] lg:w-[460px] lg:h-[640px] mx-auto flex flex-col rounded-2xl border border-slate-200 dark:border-[#2a1f3d] bg-[#FAFAFB] dark:bg-[#140c22] shadow-xl shadow-slate-900/5 dark:shadow-black/40 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-[#2a1f3d] shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-100 dark:bg-[#1f1530] shrink-0 ring-1 ring-slate-200 dark:ring-[#2a1f3d]">
                        <img src="/maskot.png" alt="" className="w-full h-full object-cover object-[50%_16%] scale-150" />
                    </div>
                    <div className="min-w-0">
                        <div className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">IQ Bot</div>
                        <div className="text-xs text-slate-400 dark:text-slate-500 leading-tight">General Mode</div>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500 shrink-0">
                    <Trash2 className="w-4 h-4" aria-hidden="true" />
                    <X className="w-4 h-4" aria-hidden="true" />
                </div>
            </div>

            {/* Body */}
            <div className="flex-1 min-h-0 flex flex-col items-center justify-center px-6 text-center overflow-y-auto">
                <img src="/maskot.png" alt="IQ Bot" className="w-32 h-32 object-contain mb-5" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Hi, I&apos;m IQ Bot</h3>
                <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed max-w-xs">
                    Ask me anything about crypto markets and on-chain data.
                </p>
            </div>

            {/* Suggestions + input */}
            <div className="shrink-0 px-4 pb-4 pt-2">
                <div className="flex lg:flex-wrap gap-2 overflow-x-auto lg:overflow-visible flex-nowrap lg:justify-center mb-3 pb-1 lg:pb-0 -mx-1 px-1">
                    {SUGGESTIONS.map((s) => (
                        <button
                            key={s}
                            type="button"
                            onClick={handleSendAttempt}
                            className="shrink-0 whitespace-nowrap lg:whitespace-normal text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-[#1f1530] hover:bg-slate-200 dark:hover:bg-[#2a1f3d] border border-slate-200/70 dark:border-[#2a1f3d] rounded-full px-3.5 py-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
                        >
                            {s}
                        </button>
                    ))}
                </div>

                <div className="relative">
                    {roleMenuOpen && (
                        <div
                            ref={menuRef}
                            role="listbox"
                            aria-label="Switch mode"
                            className="absolute bottom-full left-0 mb-2 w-64 rounded-xl border border-slate-200 dark:border-[#2a1f3d] bg-white dark:bg-[#1a1129] shadow-2xl shadow-slate-900/10 dark:shadow-black/50 p-2 z-20"
                        >
                            <div className="px-2.5 pt-1 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                Switch Mode
                            </div>
                            {ROLES.map((r) => {
                                const active = r.id === role.id;
                                return (
                                    <button
                                        key={r.id}
                                        type="button"
                                        role="option"
                                        aria-selected={active}
                                        onClick={() => {
                                            setRole(r);
                                            setRoleMenuOpen(false);
                                            roleButtonRef.current?.focus();
                                        }}
                                        className={cn(
                                            "w-full flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]",
                                            active ? "bg-[#7C3AED]/10" : "hover:bg-slate-50 dark:hover:bg-[#241a38]"
                                        )}
                                    >
                                        <span className={cn("w-2 h-2 rounded-full shrink-0", r.dot)} />
                                        <span className="min-w-0 flex-1">
                                            <span
                                                className={cn(
                                                    "block text-sm font-semibold truncate",
                                                    active ? "text-[#7C3AED]" : "text-slate-800 dark:text-slate-200"
                                                )}
                                            >
                                                {r.label}
                                            </span>
                                            <span className="block text-[11px] text-slate-400 dark:text-slate-500 truncate">{r.desc}</span>
                                        </span>
                                        {active && <Check className="w-4 h-4 text-[#7C3AED] shrink-0" />}
                                    </button>
                                );
                            })}
                        </div>
                    )}

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSendAttempt();
                        }}
                        className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-[#2a1f3d] bg-white dark:bg-[#1a1129] px-2 py-2 shadow-sm"
                    >
                        <button
                            type="button"
                            ref={roleButtonRef}
                            aria-haspopup="listbox"
                            aria-expanded={roleMenuOpen}
                            onClick={() => setRoleMenuOpen((o) => !o)}
                            className="shrink-0 flex items-center gap-1.5 pl-2.5 pr-2 py-1.5 rounded-full bg-slate-100 dark:bg-[#241a38] hover:bg-slate-200 dark:hover:bg-[#2a1f3d] text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
                        >
                            <span className={cn("w-1.5 h-1.5 rounded-full", role.dot)} />
                            {role.label}
                            <ChevronDown className={cn("w-3.5 h-3.5 text-slate-400 transition-transform", roleMenuOpen && "rotate-180")} />
                        </button>

                        <Mic className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" aria-hidden="true" />

                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message..."
                            aria-label="Type a message"
                            className="flex-1 min-w-0 bg-transparent text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none"
                        />

                        <button
                            type="submit"
                            className={cn(
                                "shrink-0 flex items-center justify-center rounded-full bg-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2",
                                showHint ? "px-3.5 h-9 gap-1.5 text-xs font-semibold whitespace-nowrap" : "w-9 h-9"
                            )}
                        >
                            {showHint ? (
                                <>
                                    Unlock full access <span aria-hidden="true">→</span>
                                </>
                            ) : (
                                <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
