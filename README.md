# unlock-locksmith

This repo implements using Unlock Protocol's [Locksmith API](https://docs.unlock-protocol.com/tools/locksmith/) and [SIWE](https://github.com/spruceid/siwe), to login and update a Lock's metadata

#### Sample outputs

```sh
❯ y ts-node ./src/index.ts
🚀 ~ file: index.ts:19 ~ currentLockMetadata {
  name: 'Test',
  description: 'Test is a lock created using contracts from Unlock Labs. Unlock is a protocol for memberships. https://unlock-protocol.com/',
  image: 'https://locksmith.unlock-protocol.com/lock/0xB6A7bCD9c74BF685eDe0074cA44Dda0BEFF673D9/icon'
}
🚀 ~ file: index.ts:21 ~ currentKeyMetadata {
  name: 'Unlock Key',
  description: 'A Key to an Unlock lock. Unlock is a protocol for memberships. https://unlock-protocol.com/',
  image: 'http://locksmith.unlock-protocol.com/lock/0xB6A7bCD9c74BF685eDe0074cA44Dda0BEFF673D9/icon?id=1',
  tokenId: '1',
  owner: '0x3fdb224304ddc1916b33fbadbe40f6fe1ca86e74',
  attributes: [],
  keyId: '1',
  lockAddress: '0xB6A7bCD9c74BF685eDe0074cA44Dda0BEFF673D9',
  network: 80001
}
🚀 ~ file: index.ts:19 ~ newLockMetadata {
  name: 'Sample Membership Tier I',
  image: 'ipfs://bafybeibuewxhuv65pge6qsi7ytes22cm727qxiip3pgps7fbxsxradq474',
  attributes: [
    { value: 'Benefit A', trait_type: 'Benefit' },
    { value: 'Benefit B', trait_type: 'Benefit' },
    { value: 'Benefit C', trait_type: 'Benefit' }
  ],
  description: 'Sample Membership Tier I that gives Tier I benefits for holders in the Sample DAO',
  animation_url: ''
}
🚀 ~ file: index.ts:21 ~ newKeyMetadata {
  name: 'Sample Membership Tier I',
  description: 'Sample Membership Tier I that gives Tier I benefits for holders in the Sample DAO',
  image: 'ipfs://bafybeibuewxhuv65pge6qsi7ytes22cm727qxiip3pgps7fbxsxradq474',
  attributes: [
    { value: 'Benefit A', trait_type: 'Benefit' },
    { value: 'Benefit B', trait_type: 'Benefit' },
    { value: 'Benefit C', trait_type: 'Benefit' }
  ],
  animation_url: '',
  tokenId: '1',
  owner: '0x3fdb224304ddc1916b33fbadbe40f6fe1ca86e74',
  keyId: '1',
  lockAddress: '0xB6A7bCD9c74BF685eDe0074cA44Dda0BEFF673D9',
  network: 80001
}
```
