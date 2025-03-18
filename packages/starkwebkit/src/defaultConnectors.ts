import {
  argentX,
  braavos,
  metamask,
  keplr
} from 'starkweb/connectors';
import { CreateConnectorFn } from 'starkweb/core';

type DefaultConnectorsProps = {
  app: {
    name: string;
    icon?: string;
    description?: string;
    url?: string;
  };
};

const defaultConnectors = ({
  app,
}: DefaultConnectorsProps): CreateConnectorFn[] => {
  const hasAllAppData = app.name && app.icon && app.description && app.url;
  const shouldUseSafeConnector =
    !(typeof window === 'undefined') && window?.parent !== window;

  const connectors: CreateConnectorFn[] = [];

  connectors.push(
    argentX(),
    braavos(),
    metamask(),
    keplr(),
  );

  return connectors;
};

export default defaultConnectors;
