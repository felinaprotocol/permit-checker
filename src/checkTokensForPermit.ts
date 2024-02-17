import fs from 'fs';
import { ethers } from 'ethers';
import { checkContractForPermit } from './checkContractForPermit';
import { formatTableLine } from './utils/formatTableLine';
import type { Token } from './types';

export async function checkTokensForPermit(filePath: string, provider: ethers.providers.JsonRpcProvider): Promise<void> {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const tokens = JSON.parse(data);

        const checkPromises = tokens.map((token: Token) => {
            if (token.standard === 'ERC20' && token.contractAddress) {
                return checkContractForPermit(provider, token);
            } else {
                return Promise.resolve({
                    Token: `${token.name} (${token.symbol})`,
                    Address: 'N/A',
                    HasPermit: 'Skipped'
                });
            }
        });

        const results = await Promise.all(checkPromises);
        const formattedResults = results.map(formatTableLine);

        console.table(formattedResults);
    } catch (error) {
        console.error('Error reading or parsing the file:', error);
    }
}
