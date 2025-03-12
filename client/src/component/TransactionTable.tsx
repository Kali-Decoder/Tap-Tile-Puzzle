import React from "react";

const transactions = [
  { id: 1, sender: "Alice", receiver: "Bob", amount: 100, status: "Completed" },
  { id: 2, sender: "Charlie", receiver: "Dave", amount: 250, status: "Pending" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
  { id: 3, sender: "Eve", receiver: "Frank", amount: 75, status: "Failed" },
];

const TransactionTable = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Transaction History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Sender</th>
         
              <th className="py-3 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm h-[50%] overflow-y-hidden">
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6">{tx.id}</td>
                <td className="py-3 px-6">{tx.sender}</td>
            
                <td className={`py-3 px-6 font-semibold 
                  ${tx.status === "Completed" ? "text-green-500" : 
                    tx.status === "Pending" ? "text-yellow-500" : "text-red-500"}`}>
                  {tx.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
