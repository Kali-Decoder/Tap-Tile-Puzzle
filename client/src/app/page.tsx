"use client";
import Game from "@/component/Game";
import TransactionTable from "@/component/TransactionTable";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
export default function Home() {
  const { address } = useAccount();
  return (
    <>
      {address ? (
        <div className="w-[100%] flex justify-center mt-10 h-[100vh]">
          <div className="w-1/1 flex justify-center items-center">
            <Game />
          </div>
          <div className="w-1/2 flex overflow-hidden">
            <TransactionTable />
          </div>
        </div>
      ) : (
        <div
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('./bg.jpeg')" }}
        >
          {/* Overlay for better contrast */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Centered ConnectButton with backdrop effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg">
              <ConnectButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
