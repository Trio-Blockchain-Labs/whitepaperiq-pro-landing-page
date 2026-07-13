import { TEAM_MEMBERS } from "@/data/constants";

function TeamCard({ member }: { member: (typeof TEAM_MEMBERS)[number] }) {
    return (
        <div className="group w-[280px] flex-shrink-0 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-purple-300/70">
            <div className="h-1.5 bg-gradient-to-r from-violet-500 to-pink-500" />
            <div className="p-6">
                <div className="relative mx-auto w-20 h-20 mb-5">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8c25f4]/20 to-pink-500/20 dark:from-[#8c25f4]/30 dark:to-pink-500/30 flex items-center justify-center border-2 border-slate-200 dark:border-slate-600 group-hover:border-[#8c25f4]/50 transition-colors overflow-hidden">
                        {member.avatar ? (
                            <img
                                src={member.avatar}
                                alt={member.name}
                                className="w-full h-full object-cover rounded-full"
                            />
                        ) : (
                            <span className="material-symbols-outlined text-3xl text-[#8c25f4]/60 dark:text-[#8c25f4]/80">
                                person
                            </span>
                        )}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-white dark:bg-slate-700 rounded-full border-2 border-slate-200 dark:border-slate-600 flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-xs text-[#8c25f4]">{member.icon}</span>
                    </div>
                </div>

                <div className="text-center">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-0.5">
                        {member.name}
                    </h3>
                    <p className="text-xs font-medium text-[#8c25f4] mb-2">{member.role}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                        {member.bio}
                    </p>

                    <div className="flex items-center justify-center gap-2">
                        {member.linkedin && (
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-400 hover:text-[#8c25f4] hover:border-[#8c25f4]/30 transition-all"
                            >
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        )}
                        {member.twitter && (
                            <a
                                href={member.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-400 hover:text-[#8c25f4] hover:border-[#8c25f4]/30 transition-all"
                            >
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function OurTeam() {
    const doubled = [...TEAM_MEMBERS, ...TEAM_MEMBERS];

    return (
        <section id="team" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden min-h-screen flex flex-col justify-center">
            <div className="absolute inset-0 grid-bg pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl -z-0" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#8c25f4]/10 rounded-full blur-3xl -z-0" />

            <style>{`
                @keyframes team-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            `}</style>

            <div className="relative z-10 min-w-0 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#8c25f4] font-bold text-sm uppercase tracking-wider">Our Team</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-6">
                            The Minds Behind{" "}
                            <span className="gradient-text">WhitepaperIQ</span>
                        </h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                            A multidisciplinary team of blockchain engineers, data scientists, and
                            financial analysts united by a single mission — bringing transparency
                            to crypto markets.
                        </p>
                    </div>
                </div>

                {/* Scrolling carousel */}
                <div
                    className="relative overflow-hidden"
                    style={{
                        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                    }}
                >
                    <div
                        className="flex gap-6 w-max hover:[animation-play-state:paused]"
                        style={{ animation: "team-scroll 40s linear infinite" }}
                    >
                        {doubled.map((member, i) => (
                            <TeamCard key={`${member.name}-${i}`} member={member} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
