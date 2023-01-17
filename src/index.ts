import { ethers } from 'ethers';
import { config } from './common/config';
import { getKeyMetadata, getLockMetadata, login } from './lib/locksmith';

(async function () {
  const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
  const signer = new ethers.Wallet(config.privateKey, provider);

  const { accessToken, refreshToken, walletAddress } = await login(signer);

  const lockAddress = '0xb6a7bcd9c74bf685ede0074ca44dda0beff673d9';

  const currentLockMetadata = await getLockMetadata(signer, lockAddress);
  console.log(
    '🚀 ~ file: index.ts:19 ~ currentLockMetadata',
    currentLockMetadata
  );
  const currentKeyMetadata = await getKeyMetadata(signer, lockAddress, '1');
  console.log(
    '🚀 ~ file: index.ts:21 ~ currentKeyMetadata',
    currentKeyMetadata
  );
})();
