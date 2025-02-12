import { CreateConnectorFn } from 'starkweb/core';
import {
  injected,
  argentX,
  braavos,
  metamask,
  keplr
} from 'starkweb/connectors';

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


  // Add the rest of the connectors
  connectors.push(
    argentX(),
    braavos(),
    metamask(),
    keplr(),
  );


  /*
  connectors.push(
    injected({
      shimDisconnect: true,
    })
  );
  */

  return connectors;
};

export default defaultConnectors;
