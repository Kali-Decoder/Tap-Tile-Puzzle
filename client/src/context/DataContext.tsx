"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { useAccount } from "wagmi";
import { useEthersSigner } from "@/utils/signer";
import { ethers } from "ethers";

// Define transaction structure
interface Transaction {
  id: number;
  txHash: string;
  status: "Completed" | "Failed";
}

interface DataContextProps {
  transactions: Transaction[];
  addTransaction: () => Promise<void>;
  loading : boolean;
}

interface DataContextProviderProps {
  children: ReactNode;
}

// Context initialization
const DataContext = React.createContext<DataContextProps | undefined>(
  undefined
);

const DataContextProvider: React.FC<DataContextProviderProps> = ({
  children,
}) => {
  const { chain,address } = useAccount();
  const [activeChain, setActiveChainId] = useState<number | undefined>(
    chain?.id
  );
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    setActiveChainId(chain?.id);
  }, [chain?.id]);


  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Load transactions from localStorage on component mount
  useEffect(() => {
    const storedTransactions: Transaction[] = JSON.parse(
      localStorage.getItem("transactions") || "[]"
    );
    console.log(transactions,"transactions");
    setTransactions(storedTransactions);
  }, [address]);

  // Function to send a transaction and store it in localStorage
  const addTransaction = async (): Promise<boolean> => {
    setLoading(true);
    const receiverAddress = "0xdAF0182De86F904918Db8d07c7340A1EfcDF8244";

    try {
      const txHash = await sendATransaction(receiverAddress);
      if (!txHash) throw new Error("Transaction failed");

      const newTransaction: Transaction = {
        id: transactions.length + 1,
        txHash,
        status: txHash ? "Completed" : "Failed", // Initially marked as Pending
      };

      const updatedTransactions = [...transactions, newTransaction];
      setTransactions(updatedTransactions);
      localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
      setLoading(false);
      return true;
    } catch (error) {
      console.error("Failed to add transaction:", error);
      setLoading(false);
      return false;

    }
  };

  // Function to send a transaction
  const sendATransaction = async (recipientAddress: string): Promise<string | null> => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL);
      const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY!, provider);
      const signer = wallet.connect(provider);

      if (!signer) {
        console.error("Signer not found");
        return null;
      }

      const tx = {
        to: recipientAddress,
        value: ethers.utils.parseEther("0.00005"),
      };

      const transactionResponse = await signer.sendTransaction(tx);
      console.log("Transaction Sent:", transactionResponse);
      return transactionResponse.hash;
    } catch (error) {
      console.error("Transaction Failed:", error);
      return null;
    }
  };


  return (
    <DataContext.Provider
      value={{
        transactions,
        addTransaction,
        loading
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Hook to use DataContext
export const useDataContext = (): DataContextProps => {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
};

export default DataContextProvider;
