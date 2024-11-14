import type { Config } from 'starkweb/core';
import { createConfig } from 'starkweb/core';
import { mainnet } from 'starkweb/chains';
import { useChainIsSupported } from './useChainIsSupported';
import { http } from 'starkweb';

const ensFallbackConfig = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

export function useEnsFallbackConfig(): Config | undefined {
  return !useChainIsSupported(mainnet.chain_id) ? ensFallbackConfig : undefined;
}
