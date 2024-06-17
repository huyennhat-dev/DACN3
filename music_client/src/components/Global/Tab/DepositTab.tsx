import { startTransition, useState } from "react";
import { CoinDepositList } from "../../../api/_mock";
import { formatCoin } from "../../../utils/format";
import { Button, message } from "antd";
import Web3 from "web3";
import { walletApi } from "../../../contracts/walletApi";
import { env } from "../../../configs/env";
import { web3 } from "../../../contracts";
import transactionApi from "../../../api/transaction.api";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { updateBalance } from "../../../redux/features/authSlice";

const DepositTab = () => {
  const dispatch = useAppDispatch();
  const wallet_address = useAppSelector((state) => state.auth.userInfo?.wallet_address);

  const [deposit, setDeposit] = useState<{
    denominations: number;
    value: number;
  }>({ denominations: 0, value: 0 });

  const handleSendDeposit = async (amount: number) => {

    const amountInWei =
      "0x" + Number(Web3.utils.toWei(amount, "ether")).toString(16);
    const transactionParameters = {
      to: env.contractAddress,
      from: wallet_address,
      value: amountInWei,
      data: new web3.eth.Contract(walletApi, env.contractAddress).methods
        .deposit()
        .encodeABI(),
    };

    try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      return txHash;
    } catch (error) {
      console.error("Transaction failed", error);
    }
  };

  const handleSubmit = async () => {
    if (deposit.value <= 0)
      return message.warning(`Mệnh giá tối thiểu là ${formatCoin(100)}`);

    try {
      const txHash = await handleSendDeposit(deposit.denominations);
      if (!txHash) return message.error(`Giao dịch thất bại!`);

      startTransition(() => {
        transactionApi.deposit({ txHash }).then((rs: any) => {
          dispatch(updateBalance({ balance: deposit.value }));
          message.success(rs.message);
        });
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <>
        <div className="mr-5 overflow-auto hide-scroll h-full">
          <div className=" bg-white p-2 rounded  flex flex-col justify-between">
            <div className="text-center">
              <h5 className="text-lg md:text-xl my-3 font-medium">
                Chọn số tiền bạn muốn nạp
              </h5>

              <p className="text-grey-500/70 font-bold text-4xl my-4">
                {formatCoin(deposit.value)}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {CoinDepositList.map((data, index) => (
                <div
                  key={index}
                  onClick={() => setDeposit(data)}
                  className={`rounded border-[1.5px] border-grey-300 p-5 flex justify-center items-center cursor-pointer hover:border-primary-50/50 hover:bg-primary-50/10 duration-200 ease-in-out${
                    deposit == data && "border-primary-50/50 bg-primary-50/10"
                  }`}
                >
                  <span className="font-medium text-xl">
                    {formatCoin(data.value)}
                  </span>
                </div>
              ))}
            </div>
            <p className="italic my-3 mb-10 text-sm w-full text-center font-normal">
              Giá trị quy đổi là 1/1000 (Ví dụ: để nạp{" "}
              <strong>{formatCoin(100)}</strong>
              <span className="mx-1">thì bạn phải có</span>
              <strong>0.1 ETH</strong>)
            </p>
            <div className="border-t-[1px] py-5  grid grid-cols-1 md:grid-cols-3 border-grey-300 gap-3">
              <div></div>
              <div></div>
              <div className="flex items-center justify-around">
                <div>
                  <p className="text-xs">Tổng tiền:</p>
                  <p className="font-medium text-xl">
                    {deposit.denominations} ETH
                  </p>
                </div>
                <Button onClick={handleSubmit} type="primary" danger ghost>
                  Nạp ngay
                </Button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default DepositTab;
