import { Chain } from 'starkweb';
import { useConfig } from 'starkweb/react';

export function useChains() {
  const wolf = useConfig();
  const chains = wolf?.chains ?? [];
  return chains.map((c) => c) as Chain[];
}
