import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import WalletInspector from "./WalletInspector";
import type { WalletInspectorData } from "@/data/walletInspectorMock";

interface WalletInspectorSheetProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    data?: WalletInspectorData;
}

/** Same report as WalletInspectorDialog, but slides in from the right edge instead of a centered modal. */
export default function WalletInspectorSheet({ open, onOpenChange, data }: WalletInspectorSheetProps) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="right"
                className="w-full sm:max-w-none lg:w-[1100px] xl:w-[1300px] border-l border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-0 gap-0"
            >
                <SheetTitle className="sr-only">Wallet Inspector report</SheetTitle>
                <SheetDescription className="sr-only">
                    Detailed on-chain wallet analysis including risk score, balances, counterparties, related wallets, transfers, and AI insights.
                </SheetDescription>
                <div className="h-full overflow-y-auto custom-scrollbar p-6 sm:p-8">
                    <WalletInspector data={data} />
                </div>
            </SheetContent>
        </Sheet>
    );
}
