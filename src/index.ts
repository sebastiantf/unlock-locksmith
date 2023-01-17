import { ethers } from 'ethers';
import { config } from './common/config';
import {
  getKeyMetadata,
  getLockMetadata,
  login,
  updateLockMetadata,
} from './lib/locksmith';
import { METADATA } from './common/constants';

(async function () {
  const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
  const signer = new ethers.Wallet(config.privateKey, provider);

  const { accessToken } = await login(signer);

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

  const metadataRequest = {
    metadata: METADATA,
  };

  await updateLockMetadata(signer, lockAddress, metadataRequest, accessToken);

  const newLockMetadata = await getLockMetadata(signer, lockAddress);
  console.log('🚀 ~ file: index.ts:19 ~ newLockMetadata', newLockMetadata);
  const newKeyMetadata = await getKeyMetadata(signer, lockAddress, '1');
  console.log('🚀 ~ file: index.ts:21 ~ newKeyMetadata', newKeyMetadata);
})();
