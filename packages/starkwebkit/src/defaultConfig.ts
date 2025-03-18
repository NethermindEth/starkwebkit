import { http } from 'starkweb';
import { type CreateConfigParameters } from 'starkweb/core';
import { mainnet, sepolia} from 'starkweb/chains';

import defaultConnectors from './defaultConnectors';

// TODO: Move these to a provider rather than global variable
let globalAppName: string;
let globalAppIcon: string;
export const getAppName = () => globalAppName;
export const getAppIcon = () => globalAppIcon;

type DefaultConfigProps = {
  appName: string;
  appIcon?: string;
  appDescription?: string;
  appUrl?: string;
} & Partial<CreateConfigParameters>;

const defaultConfig = ({
  appName = 'ConnectKit',
  appIcon,
  appDescription,
  appUrl,
  chains = [mainnet, sepolia],
  client,
  ...props
}: DefaultConfigProps): CreateConfigParameters => {
  globalAppName = appName;
  if (appIcon) globalAppIcon = appIcon;

  // TODO: nice to have, automate transports based on chains, but for now just provide public if not provided
  const transports: CreateConfigParameters['transports'] =
    props?.transports ??
    Object.fromEntries(chains.map((chain) => [chain.chain_id, http()]));

  const connectors: CreateConfigParameters['connectors'] =
    props?.connectors ??
    defaultConnectors({
      app: {
        name: appName,
        icon: appIcon,
        description: appDescription,
        url: appUrl,
      },
    });

  const config: CreateConfigParameters<any, any> = {
    ...props,
    chains,
    connectors,
    transports,
  };

  return config;
};

export default defaultConfig;
