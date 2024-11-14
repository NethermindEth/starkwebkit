import { getDefaultConfig } from 'connectkit';
import { createConfig } from 'sn-wolf';
import { mainnet, sepolia } from 'sn-wolf/chains';

export const config = createConfig(
  getDefaultConfig({
    appName: 'ConnectKit Next.js demo',
    chains: [mainnet, sepolia],
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  })
);

declare module 'sn-wolf' {
  interface Register {
    config: typeof config;
  }
}
