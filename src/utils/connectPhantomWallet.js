const connectWallet = async (setForm, setMessage) => {
  try {
    if (!window.solana || !window.solana.isPhantom) {
      throw new Error("Phantom Wallet not found. Please install it.");
    }

    const response = await window.solana.connect();
    const walletAddress = response.publicKey.toString();

    setForm((prev) => ({ ...prev, wallet: walletAddress }));
    // setMessage({ type: "success", text: "Wallet connected! " });
    // setMessage({ type: "success", text: "Wallet connected: " + walletAddress });
  } catch (err) {
    setMessage({ type: "error", text: err.message });
  }
};

export default connectWallet;
