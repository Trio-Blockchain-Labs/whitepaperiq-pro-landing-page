import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import WalletInspector from "./WalletInspector";
import type { WalletInspectorData } from "@/data/walletInspectorMock";

interface WalletInspectorDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    data?: WalletInspectorData;
}

export default function WalletInspectorDialog({ open, onOpenChange, data }: WalletInspectorDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-[96vw] max-w-[1440px] h-[92vh] rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-0 overflow-hidden">
                <DialogTitle className="sr-only">Wallet Inspector report</DialogTitle>
                <DialogDescription className="sr-only">
                    Detailed on-chain wallet analysis including risk score, balances, counterparties, related wallets, transfers, and AI insights.
                </DialogDescription>
                <div className="h-full overflow-y-auto custom-scrollbar p-6 sm:p-8">
                    <WalletInspector data={data} />
                </div>
            </DialogContent>
        </Dialog>
    );
}
