import { BrowserProvider } from 'ethers';

import split6 from '../../Contract/SplitContract';

async function handleClaimButtom(myVaultid) {
  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const splitb = split6.connect(signer);

  try {
    await splitb.claimOrRefund(myVaultid);
  } catch (error) {
    console.error(error);
  }
}

export default handleClaimButtom;
