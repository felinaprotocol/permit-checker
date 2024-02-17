import { ethers } from 'ethers';
import { getImplementationAddress } from './utils/getImplementationAddress';
import { hasPermitFunction } from './utils/hasPermitFunction';
import type { Token } from './types';

export async function checkContractForPermit(provider: ethers.providers.JsonRpcProvider, token: Token): Promise<{ Token: string; Address: string; HasPermit: string }> {
    try {
        let addressToCheck = token.contractAddress;
        const implementationAddress = await getImplementationAddress(provider, token.contractAddress);

        if (implementationAddress !== null) {
            addressToCheck = implementationAddress;
        }

        const hasPermit = await hasPermitFunction(provider, addressToCheck);
        return {
            Token: `${token.name} (${token.symbol})`,
            Address: addressToCheck,
            HasPermit: hasPermit ? 'Yes' : 'No'
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            Token: `${token.name} (${token.symbol})`,
            Address: token.contractAddress,
            HasPermit: 'Error'
        };
    }
}
