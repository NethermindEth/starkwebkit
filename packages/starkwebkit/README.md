# StarkWebKit

StarkWebKit is a powerful [React](https://reactjs.org/) component library for connecting a wallet to your Starknet dApp. It supports the most popular connectors and chains out of the box and provides a beautiful, seamless experience.

## Features

- 💡 TypeScript Ready — Get types straight out of the box.
- 🌱 Ecosystem Standards — Uses top libraries such as [starkweb](https://github.com/NethermindEth/starkweb).
- 🖥️ Simple UX — Give users a simple, attractive experience.
- 🎨 Beautiful Themes — Predesigned themes or full customization.

and much more...

## Quick Start

Get started with a StarkWebKit + [starkweb](https://github.com/NethermindEth/starkweb) project by running one of the following in your terminal:

#### npm

```sh
npx create-react-app my-app --template cra-template-starkwebkit
```

#### yarn

```sh
yarn create react-app my-app --template cra-template-starkwebkit
```

#### pnpm

```sh
pnpm dlx create-react-app ./my-app --template cra-template-starkwebkit
```

## Documentation

You can find the full StarkWebKit documentation in the StarkWebKit docs [here](https://docs.starkwebkit.com).

## API Reference

You can find the full StarkWebKit API Reference in the StarkWebKit docs [here](https://docs.starkwebkit.com/api-reference).

## Examples

There are various runnable examples included in this repository in the [examples folder](https://github.com/starkwebkit/starkwebkit/tree/main/examples):

- [Create React App Example (TypeScript)](https://github.com/starkwebkit/starkwebkit/tree/main/examples/cra)
- [Next.js Example (TypeScript)](https://github.com/starkwebkit/starkwebkit/tree/main/examples/nextjs)
- [Vite Example (TypeScript)](https://github.com/starkwebkit/starkwebkit/tree/main/examples/vite)

### Try in CodeSandbox

You can try out some StarkWebKit examples directly in your browser through CodeSandbox:

- [Create React App Example (TypeScript)](https://codesandbox.io/s/5rhqm0?file=/README.md)
- [Next.js (TypeScript)](https://codesandbox.io/s/qnvyqe?file=/README.md)
- [Vite Example (TypeScript)](https://codesandbox.io/s/4jtssh?file=/README.md)

### Running Examples Locally

Clone the StarkWebKit project and install the necessary dependencies:

```sh
$ git clone git@github.com:NethermindEth/starkwebkit.git
$ cd starkwebkit
$ yarn install
```

and start the code bundler:

```sh
$ yarn dev:connectkit
$ yarn dev:connectkit-next-siwe
```

and then simply select the example you'd like to run:

```sh
$ yarn dev:vite # Vite
$ yarn dev:nextjs # Next.js
$ yarn dev:nextjs-siwe # Next.js with SIWE
$ yarn dev:cra # Create React App
```

## Contribute

Before starting on anything, please have a read through our [Contribution Guidelines](https://github.com/NethermindEth/starkwebkit/blob/main/CONTRIBUTING.md).

## Twitter

Follow [@starkwebkit](https://twitter.com/starkwebkit) on Twitter for the latest updates on StarkWebKit.

## License

See [LICENSE](https://github.com/NethermindEth/starkwebkit/blob/main/LICENSE) for more information.
