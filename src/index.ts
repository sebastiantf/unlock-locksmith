import { ethers } from 'ethers';
import { config } from './common/config';
import { login } from './lib/locksmith';

(async function () {
  const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
  const signer = new ethers.Wallet(config.privateKey, provider);

  const { accessToken, refreshToken, walletAddress } = await login(signer);
})();
