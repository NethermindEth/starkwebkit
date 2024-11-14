import type { Config } from 'sn-wolf-core';
import { http, createConfig } from 'sn-wolf';
import { mainnet } from 'sn-wolf/chains';
import { useChainIsSupported } from '../hooks/useChainIsSupported';

const ensFallbackConfig = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

export function useEnsFallbackConfig(): Config | undefined {
  return !useChainIsSupported(mainnet.chain_id) ? ensFallbackConfig : undefined;
}
