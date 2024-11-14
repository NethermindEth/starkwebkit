/**
 * This is a wrapper around wagmi's useConnect hook that adds some
 * additional functionality.
 */

import {
  CreateConnectorFn,
  Connector,
} from 'starkweb/core';

import {
  type UseConnectParameters,
  useConnect as starkwebUseConnect,
} from 'starkweb/react';
import { useContext } from '../components/ConnectKit';
import { Hex } from 'starkweb';

export function useConnect({ ...props }: UseConnectParameters = {}) {
  const context = useContext();

  const { connect, connectAsync, connectors, ...rest } = starkwebUseConnect({
    ...props,
    mutation: {
      ...props.mutation,
      onError(err) {
        if (err.message) {
          if (err.message !== 'User rejected request') {
            context.log(err.message, err);
          }
        } else {
          context.log(`Could not connect.`, err);
        }
      },
    },
  });

  return {
    connect: ({
      connector,
      chainId,
      mutation,
    }: {
      connector: CreateConnectorFn | Connector;
      chainId?: Hex;
      mutation?: UseConnectParameters['mutation'];
    }) => {
      return connect(
        {
          connector,
          chainId: chainId ?? context.options?.initialChainId,
        },
        mutation
      );
    },
    connectAsync: async ({
      connector,
      chainId,
      mutation,
    }: {
      connector: CreateConnectorFn | Connector;
      chainId?: Hex;
      mutation?: UseConnectParameters['mutation'];
    }) => {
      return connectAsync(
        {
          connector,
          chainId: chainId ?? context.options?.initialChainId,
        },
        mutation
      );
    },
    connectors,
    ...rest,
  };
}
