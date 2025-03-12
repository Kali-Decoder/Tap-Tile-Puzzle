import React from "react";

const transactions = [
  { id: 1, sender: "Alice", status: "Completed" },
  { id: 2, sender: "Charlie", status: "Pending" },
  { id: 3, sender: "Eve", status: "Failed" },
  { id: 4, sender: "John", status: "Completed" },
  { id: 5, sender: "Tom", status: "Pending" },
  { id: 6, sender: "Mike", status: "Completed" },
  { id: 7, sender: "Sara", status: "Failed" },
  { id: 7, sender: "Sara", status: "Failed" },
  { id: 7, sender: "Sara", status: "Failed" },
  { id: 7, sender: "Sara", status: "Failed" },
  { id: 7, sender: "Sara", status: "Failed" },
  { id: 7, sender: "Sara", status: "Failed" },
];

const TransactionTable = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Transaction History
      </h2>
      <div className="overflow-x-auto">
        <div className="max-h-[600px] overflow-y-auto border border-gray-200 rounded-lg">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="sticky top-0 bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Sender</th>

                <th className="py-3 px-6 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {transactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6">{tx.id}</td>

                  <td className="py-3 px-6">${tx.sender}</td>
                  <td
                    className={`py-3 px-6 font-semibold 
                      ${
                        tx.status === "Completed"
                          ? "text-green-500"
                          : tx.status === "Pending"
                          ? "text-yellow-500"
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
