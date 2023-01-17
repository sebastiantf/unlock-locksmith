import {
  LocksmithService,
  LocksmithServiceConfiguration,
} from '@unlock-protocol/unlock-js';
import { LOCKSMITH_HOST } from '../common/constants';
import { ethers } from 'ethers';
import { MessageData, getSignedSiweMessage } from './siwe';

const service = new LocksmithService(
  new LocksmithServiceConfiguration(),
  LOCKSMITH_HOST
);

export const login = async (wallet: ethers.Wallet) => {
  const messageData: MessageData = {
    domain: 'coinvise.co',
    chainId: (await wallet.provider.getNetwork()).chainId,
    uri: 'https://coinvise.co/',
    version: '1',
    statement: '',
  };

  const { message, signature } = await getSignedSiweMessage(
    wallet,
    messageData
  );

  const response = await service.login({
    message,
    signature,
  });

  const { accessToken, refreshToken, walletAddress } = response.data;

  return { accessToken, refreshToken, walletAddress };
};
