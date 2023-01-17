import {
  LocksmithService,
  LocksmithServiceConfiguration,
} from '@unlock-protocol/unlock-js';
import { LOCKSMITH_HOST } from '../common/constants';
import { ethers } from 'ethers';
import { generateNonce } from 'siwe';

export interface UpdateLockMetadataRequest {
  metadata?: {
    [key: string]: any;
  };
}

const service = new LocksmithService(
  new LocksmithServiceConfiguration(),
  LOCKSMITH_HOST
);

export const login = async (wallet: ethers.Wallet) => {
  const siweMessage = LocksmithService.createSiweMessage({
    domain: 'coinvise.co',
    nonce: generateNonce(),
    chainId: (await wallet.provider.getNetwork()).chainId,
    uri: 'https://coinvise.co/',
    version: '1',
    statement: '',
    address: await wallet.getAddress(),
  });

  const message = siweMessage.prepareMessage();
  const signature = await wallet.signMessage(message);

  const response = await service.login({
    message,
    signature,
  });

  const { accessToken, refreshToken, walletAddress } = response.data;

  return { accessToken, refreshToken, walletAddress };
};

export const getLockMetadata = async (
  wallet: ethers.Wallet,
  lockAddress: string
) => {
  const { data } = await service.lockMetadata(
    (
      await wallet.provider.getNetwork()
    ).chainId,
    lockAddress
  );
  return data;
};

export const getKeyMetadata = async (
  wallet: ethers.Wallet,
  lockAddress: string,
  keyId: string
) => {
  const { data } = await service.keyMetadata(
    (
      await wallet.provider.getNetwork()
    ).chainId,
    lockAddress,
    keyId
  );
  return data;
};

export const updateLockMetadata = async (
  wallet: ethers.Wallet,
  lockAddress: string,
  metadata: UpdateLockMetadataRequest,
  accessToken: string
) => {
  const { data } = await service.updateLockMetadata(
    (
      await wallet.provider.getNetwork()
    ).chainId,
    lockAddress,
    metadata,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return data;
};
