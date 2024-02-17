## Token Permit Checker

This project provides a utility to check the implementation of the `permit` function in ERC20 tokens on the Ethereum blockchain. It allows users to verify if a token contract supports gasless transactions by utilizing the `permit` function.

## Features

- Check permit function implementation in ERC20 tokens.
- Support for EIP-1967 and OpenZeppelin proxies.
- Output results in a color-coded console table format.
- Efficient and parallel processing of multiple tokens.

## Getting Started

## Prerequisites

- [Node.js](https://nodejs.org/en)
- [Bun](https://bun.sh/)
- An Ethereum node or a service like [Infura](https://www.infura.io/) for JSON-RPC requests

## Installation

1. Clone the repository:

```bash
git clone https://github.com/felinaprotocol/permit-checker.git
```

2. Navigate to the project directory:

```bash
cd permit-checker
```

3. Install the dependencies:

```bash
bun i
```

## Usage

Update the `combinedArray.json` file with the list of tokens you want to check.

Run the script:

```bash
bun permit
```

## Documentation

- `getImplementationAddress`: Retrieves the implementation address for proxy contracts.
- `hasPermitFunction`: Checks if the contract has a permit function.
- `checkContractForPermit`: Verifies the permit function in a single token contract.
- `checkTokensForPermit`: Processes multiple tokens and outputs results.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
