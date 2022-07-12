export const assets = [
  {
    name: "USDC",
    percent: 50,
    amount: 50000000,
  },
  {
    name: "BTC",
    percent: 20,
    amount: 20000000,
  },
  {
    name: "ETH",
    percent: 18,
    amount: 18000000,
  },
  {
    name: "BNB",
    percent: 5,
    amount: 5000000,
  },
];


export const markets = {
  title: "Orbs Ltd. DEFI",
  tvl: 1000000,
  apy: 15.6,
  wallets: [
    {
      name: "Wallet 1",
      chains: 3,
    },
    {
      name: "Wallet 2",
      chains: 1,
    },
    {
      name: "Wallet 3",
      chains: 4,
    },
  ],
};



export const chains = [
  {
    name: "Ethereum",
    percent: 50,
    amount: 50000000,
  },
  {
    name: "BSC",
    percent: 20,
    amount: 20000000,
  },
  {
    name: "Polygon",
    percent: 12,
    amount: 12000000,
  },
  {
    name: "Avalanche",
    percent: 11,
    amount: 1100000,
  },
];


export const protocols = [
    {
      name: "Ethereum",
      percent: 50,
      amount: 50000000,
    },
    {
      name: "BSC",
      percent: 20,
      amount: 20000000,
    },
    {
      name: "Polygon",
      percent: 12,
      amount: 12000000,
    },
    {
      name: "Avalanche",
      percent: 11,
      amount: 1100000,
    },
  ];


export type Wallet = {
name: string;
chains: number;
}
export type MarketsData = {
    title: string; 
    tvl: number;
    apy: number;
    wallets: Wallet[]
}
export type BaseStatusData =  {
    name: string;
    percent: number;
    amount: number
}