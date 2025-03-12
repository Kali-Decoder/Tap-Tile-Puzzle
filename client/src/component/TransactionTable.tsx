"use client";

import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useDataContext } from "@/context/DataContext";
import Link from "next/link";
const formatAddress = (address: string, length = 6) => {
  if (!address || address.length < length * 2) return address;
  return `${address.slice(0, length)}...${address.slice(-length)}`;
};

const TransactionTable = () => {
  const { transactions } = useDataContext();
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Transaction History
      </h2>
      <ConnectButton />
      <div className="overflow-x-auto mt-10">
        <div className="max-h-[600px] overflow-y-auto border border-gray-200 rounded-lg">
          <table className="min-w-full bg-black shadow-md rounded-lg">
            <thead className="sticky top-0 bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Transaction</th>

                <th className="py-3 px-6 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {transactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="border-b border-gray-200"
                >
                  <td className="py-3 px-6">{tx.id}</td>

                  <td className="py-3 px-6">
                    <a
                      target="_blank"

                      className="text-blue-500"
                      href={`https://testnet.monadexplorer.com/tx/${tx.txHash}`}
                    >
                      {formatAddress(tx.txHash)}
                    </a>
                  </td>
                  <td
                    className={`py-3 px-6 font-semibold 
                      ${
                        tx.status === "Completed"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                  >
                    {tx.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
