import { useEffect, useState } from "react";
import { MetaMaskSDK } from "@metamask/sdk";
import MetaImg from '../assets/MetaImg.png'
import Metamask from '../assets/MetaMask.svg'
import './Connect.css'
const MMSDK = new MetaMaskSDK({
  dappMetadata: {
    name: "MetaMask SDK Demo",
    url: window.location.href,
    iconUrl: "https://docs.metamask.io/img/metamask-logo.svg",
  },
  infuraAPIKey: import.meta.env.VITE_INFURA_API_KEY || "",
});

const Connect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState();
  const [account, setAccount] = useState();
  const [balance, setBalance] = useState();

  useEffect(() => {
    setProvider(MMSDK.getProvider());
  }, []);

  const connect = async () => {
    const accounts = await MMSDK.connect();
    setAccount(accounts[0]);
    if (accounts.length > 0) {
      setIsConnected(true);
    }
  };

  const terminate = async () => {
    await MMSDK.terminate();
    setIsConnected(false);
    setBalance(undefined);
    setAccount(undefined);
  };

  const getBalance = async () => {
    if (!account || !provider) return;
    const result = await provider.request({
      method: "eth_getBalance",
      params: [account, "latest"],
    });
    const decimal = BigInt(result);
    const balance = Number(decimal) / 10 ** 18;
    console.log(balance.toFixed(4));
    setBalance(balance);
  };

  return (
    <div className="meta-connect">
      <div className="img-place">
        <img src={MetaImg} />
      </div>
      <div className="card">
        <h1>Connect wallet</h1>
        <p>Choose a wallet you want to connect. There are several wallet providers.</p>
        {isConnected ? (
          <>
            <p>Connected to {account}</p>
            {balance !== undefined && (
              <p>Balance: {balance.toFixed(4)} Sepolia ETH</p>
            )}
            <div className="info-btn">
              <button onClick={getBalance}>Get Balance</button>
              {/* <button onClick={batchRequest}>Batch Request</button> */}
              <button onClick={terminate}>Disconnect</button>
            </div>
          </>
        ) : (
          <>
            <button onClick={connect} className="subm-btn">Conect with <img src={Metamask}/></button>
          </>
        )}
      </div>
    </div>
  );
};

export default Connect;
