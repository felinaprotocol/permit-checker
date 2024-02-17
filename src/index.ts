import { ethers } from 'ethers';
import { config as dotenvConfig } from 'dotenv';
import { checkTokensForPermit } from './checkTokensForPermit';
dotenvConfig();

const jsonRpcProviderUrl = process.env.JSON_RPC_PROVIDER_URL;
const jsonFilePath = process.env.JSON_FILE_PATH;

if (!jsonRpcProviderUrl || !jsonFilePath) {
    throw new Error('Please ensure all required environment variables are set.');
}

const jsonRpcProvider = new ethers.providers.JsonRpcProvider(jsonRpcProviderUrl);

checkTokensForPermit(jsonFilePath, jsonRpcProvider)
    .then(() => {
        console.log('Token permit check completed.');
    })
    .catch(error => {
        console.error('An error occurred during the token permit check:', error);
    });