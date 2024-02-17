import { ethers } from 'ethers';

export async function hasPermitFunction(provider: ethers.providers.JsonRpcProvider, contractAddress: string): Promise<boolean> {
    const permitSignature = 'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)';
    const permitSelector = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(permitSignature)).slice(2, 10);

    try {
        const contractByteCode = await provider.getCode(contractAddress);
        return contractByteCode.includes(permitSelector);
    } catch (error) {
        console.error(`Error checking permit function for address ${contractAddress}:`, error);
        return false;
    }
}
