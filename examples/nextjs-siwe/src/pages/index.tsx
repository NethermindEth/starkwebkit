import { ConnectKitButton, useSIWE } from 'starkwebkit';

export default function Home({ address }: { address?: string }) {
  const { data, isSignedIn, signOut, signIn } = useSIWE();
  return (
    <div className="flex items-center justify-center min-h-screen py-2">
      <ConnectKitButton />
    </div>
  );
}
