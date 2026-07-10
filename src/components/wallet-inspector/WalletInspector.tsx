import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import RiskGaugeArc from "./RiskGaugeArc";
import { riskStyle } from "./riskStyles";
import BalanceDonut from "./BalanceDonut";
import CounterpartyFanout from "./CounterpartyFanout";
import { renderMarkdownLite } from "./renderMarkdownLite";
import { COUNTERPARTY_PALETTE, MOCK_WALLET_INSPECTOR, type WalletInspectorData } from "@/data/walletInspectorMock";

function shortAddr(a: string) {
    return `${a.slice(0, 6)}…${a.slice(-4)}`;
}
function fmtUsd(n: number | null) {
    if (n === null || n === undefined) return "—";
    if (n < 0.01 && n > 0) return "<$0.01";
    return `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
function fmtAmount(n: number) {
    const abs = Math.abs(n);
    if (abs !== 0 && abs < 0.0001) return abs.toExponential(2);
    return abs.toLocaleString("en-US", { maximumFractionDigits: 6 });
}
function fmtTime(iso: string) {
    const d = new Date(iso.endsWith("Z") ? iso : `${iso}Z`);
    return d.toLocaleString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}
function tokenColor(symbol: string) {
    const hues: Record<string, string> = { ETH: "#627EEA", ZIK: "#C13584" };
    return hues[symbol] ?? "#8c25f4";
}
function labelChipClass(text: string) {
    const t = text.toLowerCase();
    if (t.includes("smart money")) return "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300";
    if (t.includes("defi") || t.includes("cefi")) return "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300";
    if (t.includes("balance") || t.includes("millionaire")) return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300";
    if (t.includes("activity")) return "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300";
    return "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300";
}

function PanelHeader({ title, meta, action }: { title: string; meta?: string; action?: React.ReactNode }) {
    return (
        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between gap-3 flex-wrap">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">{title}</h3>
            <div className="flex items-center gap-3">
                {meta && <span className="text-xs text-slate-400 font-medium">{meta}</span>}
                {action}
            </div>
        </div>
    );
}

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <section className={`bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden ${className}`}>
            {children}
        </section>
    );
}

interface WalletInspectorProps {
    data?: WalletInspectorData;
}

export default function WalletInspector({ data = MOCK_WALLET_INSPECTOR }: WalletInspectorProps) {
    const [copied, setCopied] = useState(false);
    const risk = riskStyle(data.riskLevel);
    const explorerUrl = `https://etherscan.io/address/${data.address}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(data.address);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            // clipboard unavailable — no-op
        }
    };

    return (
        <div className="max-w-[1400px] mx-auto">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-6 pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="min-w-[280px] flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#8c25f4] mb-2">Wallet Inspector</p>
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xl sm:text-2xl font-bold text-slate-900 dark:text-white break-all">{data.address}</span>
                        <button
                            type="button"
                            onClick={handleCopy}
                            title="Copy address"
                            className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-[#8c25f4] hover:border-[#8c25f4] transition-colors shrink-0"
                        >
                            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                        </button>
                        <a
                            href={explorerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View on explorer"
                            className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-[#8c25f4] hover:border-[#8c25f4] transition-colors shrink-0"
                        >
                            <ExternalLink className="size-3.5" />
                        </a>
                    </div>
                    <div className="flex items-center gap-3 mt-2.5 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8c25f4]/10 border border-[#8c25f4]/20 text-[#8c25f4] text-xs font-bold uppercase tracking-wide">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8c25f4]" />
                            {data.chain}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                            Generated {fmtTime(data.generatedAt)}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wide ${risk.pill}`}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "currentColor" }} />
                        {risk.label}
                    </span>
                    <RiskGaugeArc score={data.amlScore} level={data.riskLevel} />
                </div>
            </div>

            {/* Grid */}
            <div className="grid lg:grid-cols-[1fr_360px] gap-6 items-start">
                <div className="flex flex-col gap-6 min-w-0">
                    {/* Wallet Profile */}
                    <Panel>
                        <PanelHeader title="Wallet Profile" meta={`${data.balances.length} assets · ${fmtUsd(data.totalValueUsd)} total`} />
                        <div className="p-5 flex flex-col gap-6">
                            <div className="flex items-center gap-3 flex-wrap pb-5 border-b border-slate-100 dark:border-slate-800">
                                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400 shrink-0">Behavioral Labels</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {data.labels.map((label) => (
                                        <span key={label} className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${labelChipClass(label)}`}>
                                            {label}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400 mb-3">Token Balances</p>
                                <div className="grid sm:grid-cols-[200px_1fr] gap-6">
                                    <div className="flex flex-col justify-center gap-3">
                                        <div className="flex items-center gap-3">
                                            <span className="w-10 h-10 rounded-full bg-[#8c25f4] text-white flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
                                            </span>
                                            <div>
                                                <div className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Total value</div>
                                                <div className="text-xl font-bold text-[#8c25f4] font-mono">{fmtUsd(data.totalValueUsd)}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="w-8 h-8 rounded-full bg-[#8c25f4]/10 text-[#8c25f4] flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-base">token</span>
                                            </span>
                                            <div>
                                                <div className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Tokens held</div>
                                                <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">{data.balances.length}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="w-8 h-8 rounded-full bg-[#8c25f4]/10 text-[#8c25f4] flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-base">star</span>
                                            </span>
                                            <div>
                                                <div className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Top asset</div>
                                                <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                                                    {data.balances[0]?.symbol} · {((data.balances[0]?.value / data.totalValueUsd) * 100).toFixed(3)}%
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-6">
                                        <BalanceDonut percent={(data.balances[0]?.value / data.totalValueUsd) * 100} symbol={data.balances[0]?.symbol ?? ""} />
                                        <div className="flex-1 w-full flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
                                            {data.balances.map((b) => {
                                                const pct = (b.value / data.totalValueUsd) * 100;
                                                return (
                                                    <div key={b.symbol} className="grid grid-cols-[28px_1fr_auto_auto] items-center gap-2.5 py-2">
                                                        <span
                                                            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[9px] font-extrabold"
                                                            style={{ background: tokenColor(b.symbol) }}
                                                        >
                                                            {b.symbol.slice(0, 2)}
                                                        </span>
                                                        <span>
                                                            <span className="block text-sm font-bold text-slate-900 dark:text-white">{b.symbol}</span>
                                                            <span className="block text-[11px] text-slate-400">{b.name}</span>
                                                        </span>
                                                        <span className="text-right font-mono text-xs text-slate-500 dark:text-slate-400">
                                                            {fmtAmount(b.amount)}
                                                            <span className="block text-[10px] text-slate-400">{pct.toFixed(pct < 1 ? 3 : 1)}%</span>
                                                        </span>
                                                        <span className="text-right font-mono text-sm font-bold text-slate-900 dark:text-white">{fmtUsd(b.value)}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Panel>

                    {/* Counterparties */}
                    <Panel>
                        <PanelHeader
                            title="Counterparties"
                            meta={`${data.counterpartiesTotalCount} total · ${fmtUsd(data.counterpartiesTotalVolumeUsd)} volume`}
                        />
                        <div className="p-5 pb-2">
                            <CounterpartyFanout sourceAddress={data.address} data={data.counterparties.slice(0, 12)} />
                            <p className="text-xs text-slate-400 mt-2 mb-1">
                                Chart shows the top 12 by volume — table below lists {data.counterparties.length} of {data.counterpartiesTotalCount}.
                            </p>
                        </div>
                        <div className="overflow-x-auto max-h-[360px] overflow-y-auto border-t border-slate-100 dark:border-slate-800">
                            <table className="w-full text-sm">
                                <thead className="sticky top-0 bg-slate-50 dark:bg-slate-900/80 backdrop-blur">
                                    <tr className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                                        <th className="text-left px-5 py-2">Address</th>
                                        <th className="text-right px-5 py-2">Interactions</th>
                                        <th className="text-right px-5 py-2">In</th>
                                        <th className="text-right px-5 py-2">Out</th>
                                        <th className="text-right px-5 py-2">Total volume</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.counterparties.map((c, i) => (
                                        <tr key={c.address} className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/40">
                                            <td className="px-5 py-2.5">
                                                <a href={c.explorerUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                                                    <span
                                                        className="w-2 h-2 rounded-sm shrink-0"
                                                        style={{ background: COUNTERPARTY_PALETTE[i % COUNTERPARTY_PALETTE.length] }}
                                                    />
                                                    <span className="font-mono text-xs text-slate-700 dark:text-slate-300 group-hover:text-[#8c25f4]">
                                                        {shortAddr(c.address)}
                                                        {c.labels.length ? ` · ${c.labels[0]}` : ""}
                                                    </span>
                                                </a>
                                            </td>
                                            <td className="px-5 py-2.5 text-right font-mono text-xs text-slate-500 dark:text-slate-400">{c.interactionCount}</td>
                                            <td className="px-5 py-2.5 text-right font-mono text-xs text-slate-500 dark:text-slate-400">{fmtUsd(c.volumeInUsd)}</td>
                                            <td className="px-5 py-2.5 text-right font-mono text-xs text-slate-500 dark:text-slate-400">{fmtUsd(c.volumeOutUsd)}</td>
                                            <td className="px-5 py-2.5 text-right font-mono text-xs font-bold text-slate-900 dark:text-white">{fmtUsd(c.totalVolumeUsd)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Panel>

                    {/* Related Wallets */}
                    <Panel>
                        <PanelHeader title="Related Wallets" meta={`${data.relatedWallets.length} found`} />
                        <div>
                            {data.relatedWallets.map((rel) => (
                                <div key={rel.address} className="grid grid-cols-[30px_1fr_auto] items-center gap-3.5 px-5 py-4 border-b border-slate-100 dark:border-slate-800 last:border-0">
                                    <span className="w-[26px] h-[26px] rounded-full bg-[#8c25f4]/10 border border-[#8c25f4]/20 text-[#8c25f4] flex items-center justify-center text-[11px] font-extrabold">
                                        {rel.order}
                                    </span>
                                    <div className="min-w-0">
                                        <a href={rel.explorerUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] font-semibold text-slate-900 dark:text-white hover:text-[#8c25f4] hover:underline">
                                            {rel.label}
                                        </a>
                                        <div className="text-[11px] text-slate-400">{shortAddr(rel.address)}</div>
                                        <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-[10px] font-bold uppercase tracking-wide">
                                            {rel.relation}
                                        </span>
                                    </div>
                                    <div className="text-right text-[11px] text-slate-400">
                                        <a
                                            href={`https://etherscan.io/tx/${rel.transactionHash}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block font-mono text-[#8c25f4] hover:underline mb-0.5"
                                        >
                                            {rel.transactionHash.slice(0, 10)}…
                                        </a>
                                        {fmtTime(rel.blockTimestamp)}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="px-5 py-3 text-xs text-slate-400 border-t border-slate-100 dark:border-slate-800">
                            Related wallets share a direct on-chain link with this address — e.g. an initial funding transaction — distinct from ordinary counterparties above.
                        </p>
                    </Panel>

                    {/* Transfers */}
                    <Panel>
                        <PanelHeader
                            title="Recent Transfers"
                            meta={`${data.transfersTotalCount} total · ${data.transfersInCount} in / ${data.transfersOutCount} out`}
                        />
                        <div className="overflow-x-auto max-h-[360px] overflow-y-auto">
                            <table className="w-full text-sm">
                                <thead className="sticky top-0 bg-slate-50 dark:bg-slate-900/80 backdrop-blur">
                                    <tr className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                                        <th className="text-left px-5 py-2">Type</th>
                                        <th className="text-left px-5 py-2">Amount</th>
                                        <th className="text-left px-5 py-2">Counterparty</th>
                                        <th className="text-left px-5 py-2">Tx Hash</th>
                                        <th className="text-right px-5 py-2">Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.transfers.map((t) => (
                                        <tr key={t.transactionHash} className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/40">
                                            <td className="px-5 py-2.5">
                                                <span
                                                    className={`inline-flex items-center justify-center min-w-[34px] px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                                                        t.direction === "in"
                                                            ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                                                            : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                                                    }`}
                                                >
                                                    {t.direction}
                                                </span>
                                            </td>
                                            <td className={`px-5 py-2.5 font-mono text-xs font-bold whitespace-nowrap ${t.direction === "in" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
                                                {t.direction === "in" ? "+" : "-"}
                                                {fmtAmount(t.tokenAmount)} {t.tokenSymbol}
                                            </td>
                                            <td className="px-5 py-2.5 max-w-[220px]">
                                                <a href={t.counterpartyExplorerUrl} target="_blank" rel="noopener noreferrer" className="block text-xs text-slate-600 dark:text-slate-300 hover:text-[#8c25f4] truncate">
                                                    {t.counterpartyLabel}
                                                </a>
                                            </td>
                                            <td className="px-5 py-2.5">
                                                <a
                                                    href={`https://etherscan.io/tx/${t.transactionHash}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-mono text-xs text-[#8c25f4] hover:underline"
                                                >
                                                    {t.transactionHash.slice(0, 10)}…
                                                </a>
                                            </td>
                                            <td className="px-5 py-2.5 text-right text-[11px] text-slate-400 whitespace-nowrap">{fmtTime(t.blockTimestamp)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Panel>
                </div>

                {/* AI Insights sidebar */}
                <aside className="lg:sticky lg:top-6">
                    <div className="rounded-2xl p-6 text-white flex flex-col gap-4 max-h-[calc(100vh-140px)] bg-gradient-to-br from-[#5b1799] via-[#8c25f4] to-[#a855f7]">
                        <div className="flex items-center justify-between gap-2">
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest opacity-90">
                                <span aria-hidden>✦</span> AI Insights
                            </span>
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-white/15 border border-white/30`}>
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                                {risk.label.replace(" Risk", "")}
                            </span>
                        </div>
                        <p className="text-[14.5px] leading-relaxed font-medium pb-4 border-b border-white/20">{data.aiSummary}</p>
                        <div className="flex flex-wrap gap-1.5">
                            {data.aiTags.map((tag) => (
                                <span key={tag} className="text-[10.5px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-white/15">
                                    {tag.replace(/_/g, " ")}
                                </span>
                            ))}
                        </div>
                        <div className="overflow-y-auto flex-1 min-h-0 -mr-2 pr-2 text-[13.5px] leading-relaxed [&_h2]:text-sm [&_h2]:font-bold [&_h2]:mt-5 [&_h2]:mb-1.5 [&_h2]:pb-1 [&_h2]:border-b [&_h2]:border-white/20 [&_h2:first-child]:mt-0 [&_h3]:text-[11px] [&_h3]:font-bold [&_h3]:uppercase [&_h3]:tracking-wide [&_h3]:opacity-70 [&_h3]:mt-3 [&_h3]:mb-1 [&_p]:mb-2 [&_ul]:pl-4 [&_ul]:mb-2.5 [&_li]:mb-1 [&_strong]:text-white">
                            {renderMarkdownLite(data.aiMarkdown)}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
