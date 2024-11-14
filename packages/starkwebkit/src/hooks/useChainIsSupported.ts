import { useConfig } from 'starkweb/react';
import { Hex } from 'starkweb';

export function useChainIsSupported(chainId?: Hex): boolean | null {
  const { chains } = useConfig();
  if (!chainId) return false;
  return chains.some((x) => x.chain_id === chainId);
}
