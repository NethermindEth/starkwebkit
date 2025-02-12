import { configureServerSideSIWE } from 'connectkit-next-siwe';
import { ckConfig } from '../components/Web3Provider';

export const siweServer = configureServerSideSIWE({
  config: {
    chains: ckConfig.chains,
    transports: ckConfig.transports,
  },
  options: {
    afterLogout: async () => {},
    afterNonce: async () => {},
    afterSession: async () => {},
    afterVerify: async () => {},
  },
});
