import { useSIWE, useModal } from 'sn-connectkit';
import { SIWESession } from 'sn-connectkit';
import { useAccount } from 'sn-wolf';

const CustomSIWEButton = () => {
  const { setOpen } = useModal();
  const { data, isReady, isRejected, isLoading, isSignedIn, signOut, signIn } =
    useSIWE({
      onSignIn: (sessionData?: SIWESession) => {},
      onSignOut: () => {},
    });
  const { isConnected } = useAccount();

  /** Wallet is connected and signed in */
  if (isSignedIn) {
    return (
      <>
        <div>Address: {data?.address}</div>
        <div>ChainId: {data?.chainId}</div>
        <button onClick={signOut}>Sign Out</button>
      </>
    );
  }

  /** Wallet is connected, but not signed in */
  if (isConnected) {
    return (
      <>
        <button onClick={signIn} disabled={isLoading}>
          {isRejected
            ? 'Try Again'
            : isLoading
            ? 'Awaiting request...'
            : 'Sign In'}
        </button>
      </>
    );
  }

  /** A wallet needs to be connected first */
  return (
    <>
      <button onClick={() => setOpen(true)}>Connect Wallet</button>
    </>
  );
};

export default CustomSIWEButton;
