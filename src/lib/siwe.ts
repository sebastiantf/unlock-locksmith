import { ethers } from 'ethers';
import { generateNonce, SiweMessage } from 'siwe';

export interface MessageData {
  domain: string;
  chainId: number;
  uri: string;
  version: string;
  statement: string;
}

export async function getSignedSiweMessage(
  wallet: ethers.Wallet,
  messageData: MessageData
) {
  const walletAddress = await wallet.getAddress();
  const nonce = generateNonce();
  const siweMessage = new SiweMessage({
    domain: messageData.domain,
    nonce,
    chainId: messageData.chainId,
    uri: messageData.uri,
    version: messageData.version,
    statement: messageData.statement,
    address: walletAddress,
  });


  const message = siweMessage.prepareMessage();
  const signature = await wallet.signMessage(message);

  return {
    signature,
    message,
    wallet,
    walletAddress,
    nonce,
  };
}
