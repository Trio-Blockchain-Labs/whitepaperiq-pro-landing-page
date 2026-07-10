import type { RiskLevel } from "@/data/walletInspectorMock";

export const RISK_STYLES: Record<RiskLevel, { stroke: string; text: string; pill: string; label: string }> = {
    low: { stroke: "#10b981", text: "text-emerald-600 dark:text-emerald-400", pill: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800", label: "Low Risk" },
    medium: { stroke: "#f59e0b", text: "text-amber-600 dark:text-amber-400", pill: "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800", label: "Medium Risk" },
    high: { stroke: "#ef4444", text: "text-red-600 dark:text-red-400", pill: "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800", label: "High Risk" },
    unknown: { stroke: "#94a3b8", text: "text-slate-500 dark:text-slate-400", pill: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700", label: "Unknown" },
};

export function riskStyle(level: RiskLevel) {
    return RISK_STYLES[level];
}
