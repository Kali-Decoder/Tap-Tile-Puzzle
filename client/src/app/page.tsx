import Game from "@/component/Game";
import TransactionTable from "@/component/TransactionTable";

export default function Home() {
  return (
    <div className="w-[100%] flex justify-center mt-10 h-[100vh]">
      <div className="w-1/1 flex justify-center items-center">
        <Game />
      </div>
      <div className="w-1/2 flex overflow-hidden">
        <TransactionTable/>
      </div>
    </div>
  );
}
