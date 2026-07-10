export type RiskLevel = "low" | "medium" | "high" | "unknown";

export interface WalletBalance {
    symbol: string;
    name: string;
    amount: number;
    price: number;
    value: number;
}

export interface Counterparty {
    address: string;
    labels: string[];
    interactionCount: number;
    totalVolumeUsd: number;
    volumeInUsd: number;
    volumeOutUsd: number;
    explorerUrl: string;
}

export interface RelatedWallet {
    address: string;
    label: string;
    relation: string;
    transactionHash: string;
    blockTimestamp: string;
    order: number;
    explorerUrl: string;
}

export interface Transfer {
    transactionHash: string;
    blockTimestamp: string;
    direction: "in" | "out";
    tokenSymbol: string;
    tokenAmount: number;
    counterpartyAddress: string;
    counterpartyLabel: string;
    counterpartyExplorerUrl: string;
}

export interface WalletInspectorData {
    address: string;
    chain: string;
    generatedAt: string;
    amlScore: number;
    riskLevel: RiskLevel;
    totalValueUsd: number;
    balances: WalletBalance[];
    labels: string[];
    counterparties: Counterparty[];
    counterpartiesTotalCount: number;
    counterpartiesTotalVolumeUsd: number;
    relatedWallets: RelatedWallet[];
    transfers: Transfer[];
    transfersTotalCount: number;
    transfersInCount: number;
    transfersOutCount: number;
    aiSummary: string;
    aiTags: string[];
    aiMarkdown: string;
}

export const MOCK_WALLET_INSPECTOR: WalletInspectorData = {
    address: "0x6CC149B5f9fFcC44c46eb4502989e3f724030053",
    chain: "Ethereum",
    generatedAt: "2026-07-08T12:12:00Z",
    amlScore: 22,
    riskLevel: "medium",
    totalValueUsd: 310.56,
    balances: [
        { symbol: "ETH", name: "Ethereum", amount: 0.1779287369326471, price: 1745.3586625265182, value: 310.54946231779763 },
        { symbol: "ZIK", name: "ZIK coin", amount: 133, price: 0.0000947707435257731, value: 0.012604508888927822 },
    ],
    labels: ["Smart Money", "DeFi User", "High Balance"],
    counterpartiesTotalCount: 100,
    counterpartiesTotalVolumeUsd: 64473.76,
    counterparties: [
        { address: "0xbd19462adbcaff0142ad0b61b8e4c6183d7f89f3", labels: [], interactionCount: 2, totalVolumeUsd: 25519.51, volumeInUsd: 25519.51, volumeOutUsd: 0, explorerUrl: "https://etherscan.io/address/0xbd19462adbcaff0142ad0b61b8e4c6183d7f89f3" },
        { address: "0x388c818ca8b9251b393131c08a736a67ccb19297", labels: ["timewallet.eth*"], interactionCount: 704, totalVolumeUsd: 11881.34, volumeInUsd: 0, volumeOutUsd: 11881.34, explorerUrl: "https://etherscan.io/address/0x388c818ca8b9251b393131c08a736a67ccb19297" },
        { address: "0x396343362be2a4da1ce0c1c210945346fb82aa49", labels: ["quasarbuilder.eth"], interactionCount: 1, totalVolumeUsd: 8333.01, volumeInUsd: 8333.01, volumeOutUsd: 0, explorerUrl: "https://etherscan.io/address/0x396343362be2a4da1ce0c1c210945346fb82aa49" },
        { address: "0xe688b84b23f322a994a53dbf8e15fa82cdb71127", labels: ["jack020.eth*"], interactionCount: 82, totalVolumeUsd: 1231.93, volumeInUsd: 0, volumeOutUsd: 1231.93, explorerUrl: "https://etherscan.io/address/0xe688b84b23f322a994a53dbf8e15fa82cdb71127" },
        { address: "0x4ad393206569465ffa4f3e0fc34aa181887a5d3e", labels: ["High Balance"], interactionCount: 94, totalVolumeUsd: 1164.68, volumeInUsd: 0, volumeOutUsd: 1164.68, explorerUrl: "https://etherscan.io/address/0x4ad393206569465ffa4f3e0fc34aa181887a5d3e" },
        { address: "0x4675c7e5baafbffbca748158becba61ef3b0a263", labels: ["High Activity"], interactionCount: 86, totalVolumeUsd: 1107.80, volumeInUsd: 0, volumeOutUsd: 1107.80, explorerUrl: "https://etherscan.io/address/0x4675c7e5baafbffbca748158becba61ef3b0a263" },
        { address: "0x6d2e03b7effeae98bd302a9f836d0d6ab0002766", labels: [], interactionCount: 66, totalVolumeUsd: 1053.23, volumeInUsd: 0, volumeOutUsd: 1053.23, explorerUrl: "https://etherscan.io/address/0x6d2e03b7effeae98bd302a9f836d0d6ab0002766" },
        { address: "0xd4d3fde5145141ddf7c465889923f29154526de3", labels: ["High Balance"], interactionCount: 73, totalVolumeUsd: 1010.38, volumeInUsd: 0, volumeOutUsd: 1010.38, explorerUrl: "https://etherscan.io/address/0xd4d3fde5145141ddf7c465889923f29154526de3" },
        { address: "0xa27cef8af2b6575903b676e5644657fae96f491f", labels: [], interactionCount: 75, totalVolumeUsd: 933.41, volumeInUsd: 0, volumeOutUsd: 933.41, explorerUrl: "https://etherscan.io/address/0xa27cef8af2b6575903b676e5644657fae96f491f" },
        { address: "0x06db50807d887958001af32e9303128e49b6704e", labels: ["High Balance"], interactionCount: 64, totalVolumeUsd: 918.95, volumeInUsd: 0, volumeOutUsd: 918.95, explorerUrl: "https://etherscan.io/address/0x06db50807d887958001af32e9303128e49b6704e" },
        { address: "0x0b26c05866e6353e46f4a7e2d10cb42d4b583e57", labels: ["Token Millionaire"], interactionCount: 59, totalVolumeUsd: 737.19, volumeInUsd: 0, volumeOutUsd: 737.19, explorerUrl: "https://etherscan.io/address/0x0b26c05866e6353e46f4a7e2d10cb42d4b583e57" },
        { address: "0x155a59fd6bd7839a0c9b1d3f56fdd4d8784897ac", labels: [], interactionCount: 54, totalVolumeUsd: 713.44, volumeInUsd: 0, volumeOutUsd: 713.44, explorerUrl: "https://etherscan.io/address/0x155a59fd6bd7839a0c9b1d3f56fdd4d8784897ac" },
        { address: "0x7d16d2c4e96bcfc8f815e15b771ac847ecbdb48b", labels: ["High Activity"], interactionCount: 44, totalVolumeUsd: 554.13, volumeInUsd: 0, volumeOutUsd: 554.13, explorerUrl: "https://etherscan.io/address/0x7d16d2c4e96bcfc8f815e15b771ac847ecbdb48b" },
        { address: "0x51b4096d4bde1b883f6d6ca3b1b7eb54dc20b913", labels: ["ETH Millionaire"], interactionCount: 35, totalVolumeUsd: 527.79, volumeInUsd: 0, volumeOutUsd: 527.79, explorerUrl: "https://etherscan.io/address/0x51b4096d4bde1b883f6d6ca3b1b7eb54dc20b913" },
        { address: "0xffee087852cb4898e6c3532e776e68bc68b1143b", labels: ["High Activity"], interactionCount: 29, totalVolumeUsd: 420.84, volumeInUsd: 0, volumeOutUsd: 420.84, explorerUrl: "https://etherscan.io/address/0xffee087852cb4898e6c3532e776e68bc68b1143b" },
        { address: "0x7da0aef1b75035cbf364a690411bcca7e7859df8", labels: ["High Activity"], interactionCount: 20, totalVolumeUsd: 406.58, volumeInUsd: 0, volumeOutUsd: 406.58, explorerUrl: "https://etherscan.io/address/0x7da0aef1b75035cbf364a690411bcca7e7859df8" },
        { address: "0xe887312c0595a10ac88e32ebb8e9f660ad9ab7f7", labels: ["ETH Millionaire"], interactionCount: 33, totalVolumeUsd: 378.77, volumeInUsd: 0, volumeOutUsd: 378.77, explorerUrl: "https://etherscan.io/address/0xe887312c0595a10ac88e32ebb8e9f660ad9ab7f7" },
        { address: "0xba1951df0c0a52af23857c5ab48b4c43a57e7ed1", labels: ["Token Millionaire"], interactionCount: 20, totalVolumeUsd: 350.17, volumeInUsd: 0, volumeOutUsd: 350.17, explorerUrl: "https://etherscan.io/address/0xba1951df0c0a52af23857c5ab48b4c43a57e7ed1" },
        { address: "0xd4e96ef8eee8678dbff4d535e033ed1a4f7605b7", labels: ["smoothingpool.eth"], interactionCount: 18, totalVolumeUsd: 284.19, volumeInUsd: 0, volumeOutUsd: 284.19, explorerUrl: "https://etherscan.io/address/0xd4e96ef8eee8678dbff4d535e033ed1a4f7605b7" },
        { address: "0xb364e75b1189dcbbf7f0c856456c1ba8e4d6481b", labels: ["ethpool.eth"], interactionCount: 15, totalVolumeUsd: 245.92, volumeInUsd: 0, volumeOutUsd: 245.92, explorerUrl: "https://etherscan.io/address/0xb364e75b1189dcbbf7f0c856456c1ba8e4d6481b" },
        { address: "0x11d391e94a9e5c61c9dcc8f6e29c2559599706be", labels: [], interactionCount: 15, totalVolumeUsd: 241.88, volumeInUsd: 0, volumeOutUsd: 241.88, explorerUrl: "https://etherscan.io/address/0x11d391e94a9e5c61c9dcc8f6e29c2559599706be" },
        { address: "0xcda9d71bdfae59b89cee131ed3079f8ac4c77062", labels: ["High Balance"], interactionCount: 16, totalVolumeUsd: 229.53, volumeInUsd: 0, volumeOutUsd: 229.53, explorerUrl: "https://etherscan.io/address/0xcda9d71bdfae59b89cee131ed3079f8ac4c77062" },
        { address: "0x73f7b1184b5cd361cc0f7654998953e2a251dd58", labels: ["High Activity"], interactionCount: 12, totalVolumeUsd: 228.15, volumeInUsd: 0, volumeOutUsd: 228.15, explorerUrl: "https://etherscan.io/address/0x73f7b1184b5cd361cc0f7654998953e2a251dd58" },
        { address: "0x7e2a2fa2a064f693f0a55c5639476d913ff12d05", labels: ["meowventure.eth*"], interactionCount: 8, totalVolumeUsd: 218.83, volumeInUsd: 0, volumeOutUsd: 218.83, explorerUrl: "https://etherscan.io/address/0x7e2a2fa2a064f693f0a55c5639476d913ff12d05" },
    ],
    relatedWallets: [
        {
            address: "0x396343362be2a4da1ce0c1c210945346fb82aa49",
            label: "quasarbuilder.eth",
            relation: "First Funder",
            transactionHash: "0xab0cf7adff0befd110afe3cfbd133f069a006b8888a0388a52df77fbe7bfd969",
            blockTimestamp: "2026-06-09T19:25:59",
            order: 1,
            explorerUrl: "https://etherscan.io/address/0x396343362be2a4da1ce0c1c210945346fb82aa49",
        },
    ],
    transfersTotalCount: 100,
    transfersInCount: 47,
    transfersOutCount: 53,
    transfers: [
        { transactionHash: "0x12acab93e1343ed10b1847f21984e7032d6ec9fcf53f931993f83f53ddcbc4fb", blockTimestamp: "2026-07-08T12:08:11", direction: "in", tokenSymbol: "ETH", tokenAmount: 0.000000001, counterpartyAddress: "0x6d2e44f82c95c5081ed7ac2d586f25f64f332766", counterpartyLabel: "[0x6d2e44]", counterpartyExplorerUrl: "https://etherscan.io/address/0x6d2e44f82c95c5081ed7ac2d586f25f64f332766" },
        { transactionHash: "0x44c27d2af086332ffcdc944314bf57a00c627626d3473c15fe021c181426bcbe", blockTimestamp: "2026-07-08T12:06:59", direction: "out", tokenSymbol: "ETH", tokenAmount: -0.008225693768237946, counterpartyAddress: "0x388c818ca8b9251b393131c08a736a67ccb19297", counterpartyLabel: "timewallet.eth* [0x388c81]", counterpartyExplorerUrl: "https://etherscan.io/address/0x388c818ca8b9251b393131c08a736a67ccb19297" },
        { transactionHash: "0xd412b26d4f67fcf114217f5b9c6449e4e40cfcd524b146a45c257c0d644ecfd1", blockTimestamp: "2026-07-08T11:36:47", direction: "out", tokenSymbol: "ETH", tokenAmount: -0.006290203458733551, counterpartyAddress: "0x388c818ca8b9251b393131c08a736a67ccb19297", counterpartyLabel: "timewallet.eth* [0x388c81]", counterpartyExplorerUrl: "https://etherscan.io/address/0x388c818ca8b9251b393131c08a736a67ccb19297" },
        { transactionHash: "0xd7332f83fff60b5738d5652abfbac98098d306f5adb5b84ebcfc43ada81771dd", blockTimestamp: "2026-07-08T11:32:11", direction: "in", tokenSymbol: "ETH", tokenAmount: 0.000000001, counterpartyAddress: "0xe5561c556bb4fc77ab57e8f9176d07e6da611f58", counterpartyLabel: "[0xe5561c]", counterpartyExplorerUrl: "https://etherscan.io/address/0xe5561c556bb4fc77ab57e8f9176d07e6da611f58" },
        { transactionHash: "0x16256daf4b16199ea4d5724a2fbeae76b2a1505fd555f5231f1c79b2ce7f327c", blockTimestamp: "2026-07-08T11:31:35", direction: "out", tokenSymbol: "ETH", tokenAmount: -0.007208619571687492, counterpartyAddress: "0xa27cef8af2b6575903b676e5644657fae96f491f", counterpartyLabel: "[0xa27cef]", counterpartyExplorerUrl: "https://etherscan.io/address/0xa27cef8af2b6575903b676e5644657fae96f491f" },
        { transactionHash: "0x614c21295841bc3a39e562528c4d61fdfd3b8a0731b9882baf70ad01b2dba78a", blockTimestamp: "2026-07-08T11:27:47", direction: "out", tokenSymbol: "ETH", tokenAmount: -0.007168846486968913, counterpartyAddress: "0x388c818ca8b9251b393131c08a736a67ccb19297", counterpartyLabel: "timewallet.eth* [0x388c81]", counterpartyExplorerUrl: "https://etherscan.io/address/0x388c818ca8b9251b393131c08a736a67ccb19297" },
        { transactionHash: "0xa47e86f8f7c93b16cf3058dd43ba13c1a9d2204d7d48c2f1cb4023574f380b8e", blockTimestamp: "2026-07-08T11:25:23", direction: "out", tokenSymbol: "ETH", tokenAmount: -0.007784999285716282, counterpartyAddress: "0x388c818ca8b9251b393131c08a736a67ccb19297", counterpartyLabel: "timewallet.eth* [0x388c81]", counterpartyExplorerUrl: "https://etherscan.io/address/0x388c818ca8b9251b393131c08a736a67ccb19297" },
        { transactionHash: "0x6b6ca06bcb60fa3e1989a53e1ed56faa3dfebf83af698d3f7b50f643c2f6d788", blockTimestamp: "2026-07-08T11:04:47", direction: "out", tokenSymbol: "ETH", tokenAmount: -0.013763793436440474, counterpartyAddress: "0x065fa4ea1d94e5bc7f6fa10bfd49766836052fcb", counterpartyLabel: "High Balance [0x065fa4]", counterpartyExplorerUrl: "https://etherscan.io/address/0x065fa4ea1d94e5bc7f6fa10bfd49766836052fcb" },
        { transactionHash: "0xc6d800bc9de4db7a252941c1e0341ca11989a4b6fc7df2174d0bb0d65e12fdd4", blockTimestamp: "2026-07-08T10:52:35", direction: "in", tokenSymbol: "ETH", tokenAmount: 0.000000001, counterpartyAddress: "0x6d2e12cc26b1e1168231d9acffe824c151ed2766", counterpartyLabel: "[0x6d2e12]", counterpartyExplorerUrl: "https://etherscan.io/address/0x6d2e12cc26b1e1168231d9acffe824c151ed2766" },
        { transactionHash: "0xaece9427514871fe7beea08a2ef2d0eb8fc774724ca2648cd499ebb4061c23a6", blockTimestamp: "2026-07-08T10:51:47", direction: "out", tokenSymbol: "ETH", tokenAmount: -0.011920621423721583, counterpartyAddress: "0x388c818ca8b9251b393131c08a736a67ccb19297", counterpartyLabel: "timewallet.eth* [0x388c81]", counterpartyExplorerUrl: "https://etherscan.io/address/0x388c818ca8b9251b393131c08a736a67ccb19297" },
        { transactionHash: "0xf4956be9c26aa59b2015f3bab35beb4d74410d06794ed168adb9b9f30a8a5021", blockTimestamp: "2026-07-08T09:49:23", direction: "out", tokenSymbol: "ETH", tokenAmount: -0.007188014203194216, counterpartyAddress: "0x4675c7e5baafbffbca748158becba61ef3b0a263", counterpartyLabel: "High Activity [0x4675c7]", counterpartyExplorerUrl: "https://etherscan.io/address/0x4675c7e5baafbffbca748158becba61ef3b0a263" },
        { transactionHash: "0xf67f4520b91d57e4d6d4ca5230736d682e1b3faa78d25584e462e1ef6cacf24a", blockTimestamp: "2026-07-08T07:38:11", direction: "out", tokenSymbol: "ETH", tokenAmount: -0.005377342149718337, counterpartyAddress: "0xecb5c1c159f3f799364dfcee5c58e846b3bc3264", counterpartyLabel: "bozobank.eth [0xecb5c1]", counterpartyExplorerUrl: "https://etherscan.io/address/0xecb5c1c159f3f799364dfcee5c58e846b3bc3264" },
        { transactionHash: "0x14f65a3a1b5269e24206b0c11ec4237ebdf5241d0609a2be064746a908565851", blockTimestamp: "2026-07-08T07:33:23", direction: "out", tokenSymbol: "ETH", tokenAmount: -0.007999913002482833, counterpartyAddress: "0x2b17aab5420bf839f5bdeb0e41aa9f9216e1e009", counterpartyLabel: "Proxy [0x2b17aa]", counterpartyExplorerUrl: "https://etherscan.io/address/0x2b17aab5420bf839f5bdeb0e41aa9f9216e1e009" },
        { transactionHash: "0xc775c9b436b8a25b3ec5a00e913185b56050ac7199154d7326ade4a46f80d103", blockTimestamp: "2026-07-08T06:35:23", direction: "in", tokenSymbol: "ETH", tokenAmount: 0.000000001, counterpartyAddress: "0xe5561c556bb4fc77ab57e8f9176d07e6da611f58", counterpartyLabel: "[0xe5561c]", counterpartyExplorerUrl: "https://etherscan.io/address/0xe5561c556bb4fc77ab57e8f9176d07e6da611f58" },
        { transactionHash: "0xdac73b7ee34eec5ebd35629760571ed32ba67d736c30bcd3dea0c5400886ecd7", blockTimestamp: "2026-07-08T06:08:47", direction: "out", tokenSymbol: "ETH", tokenAmount: -0.008067258014341532, counterpartyAddress: "0x388c818ca8b9251b393131c08a736a67ccb19297", counterpartyLabel: "timewallet.eth* [0x388c81]", counterpartyExplorerUrl: "https://etherscan.io/address/0x388c818ca8b9251b393131c08a736a67ccb19297" },
    ],
    aiSummary:
        "This wallet presents a low-to-medium risk profile with an AML score of 22/100. While it shows indirect exposure to financial crime, stealing attacks, and gambling activities through its transaction network, it maintains a clean direct transaction history with no sanctioned or high-risk entities. The wallet demonstrates legitimate trading behavior with high-value counterparties and maintains a concentrated ETH position.",
    aiTags: ["indirect_financial_crime", "indirect_stealing_attack", "indirect_gambling_accounts"],
    aiMarkdown: `## AML Risk Profile

The wallet receives an **AML risk score of 22/100**, indicating relatively low direct risk exposure. However, several indirect risk factors warrant attention:

- **Indirect Financial Crime Exposure**: The wallet has transacted with addresses that have connections to financial crime networks
- **Indirect Stealing Attack Exposure**: Transaction history includes counterparties linked to theft-related activities
- **Indirect Gambling Activities**: Some transaction counterparties have connections to gambling operations

Importantly, the wallet shows **no direct involvement** in any sanctioned activities, money laundering, cybercrime, or other high-risk categories.

## Portfolio Analysis

### Asset Holdings
The wallet maintains a **concentrated portfolio** totaling approximately **$310.55 USD**:

- **ETH (99.996%)**: 0.178 ETH valued at $310.55
- **ZIK Token (0.004%)**: 133 tokens valued at $0.013

This concentration in ETH suggests either a newer wallet with limited trading activity, a focused investment strategy, or potential preparation for larger transactions.

## Transaction Network Analysis

### High-Value Counterparties
The wallet has engaged with several **legitimate, high-net-worth entities**:

- **$25,519** from an unlabeled address (2 interactions)
- **$8,333** from quasarbuilder.eth (1 interaction)
- **timewallet.eth**: 704 interactions, $11,881 outbound
- **jack020.eth**: 82 interactions, $1,232 outbound
- Multiple addresses labeled "High Balance", "High Activity", and "Token Millionaire"

### Counterparty Risk Assessment
**Positive indicators:**
- Interactions with ENS-registered addresses (timewallet.eth, quasarbuilder.eth, jack020.eth)
- Multiple counterparties labeled as reputable, high-balance wallets
- No direct mixer or sanctioned-exchange interactions flagged

**Risk considerations:**
- High transaction volume concentration with specific addresses
- Predominantly outbound transaction pattern

## Wallet Relationships

### Funding Source
The wallet was **initially funded by quasarbuilder.eth** on June 9, 2026, establishing a clear funding relationship. This ENS-registered address is also present in the regular counterparty list with significant transaction volume.

## Recommendations

**Enhanced monitoring suggested** for the indirect risk exposures through the transaction network and continued high-volume outbound patterns.

**Acceptable risk level** based on a clean direct transaction history, legitimate counterparty profile, and a transparent, traceable funding source.`,
};

export const COUNTERPARTY_PALETTE = [
    "#8c25f4",
    "#C13584",
    "#3B82F6",
    "#0EA5A0",
    "#D97706",
    "#16A34A",
    "#6366F1",
    "#DB2777",
    "#0891B2",
    "#A855F7",
    "#B45309",
    "#4F46E5",
];
