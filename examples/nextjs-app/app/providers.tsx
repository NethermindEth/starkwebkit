'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode } from 'react';
import { WolfProvider } from 'sn-wolf';

import { config } from '../config';
import { ConnectKitProvider } from 'connectkit';

const queryClient = new QueryClient();
export function Providers(props: { children: ReactNode }) {
  return (
    <WolfProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{props.children}</ConnectKitProvider>
      </QueryClientProvider>
    </WolfProvider>
  );
}
