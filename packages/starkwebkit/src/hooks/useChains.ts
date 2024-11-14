import { Chain } from 'strkjs';
import { useConfig } from 'sn-wolf';

export function useChains() {
  const wolf = useConfig();
  const chains = wolf?.chains ?? [];
  return chains.map((c) => c) as Chain[];
}
