import React, { startTransition, useState } from "react";
import { walletApi } from "../../../contracts/walletApi";
import Web3 from "web3";
import { env } from "../../../configs/env";
import { formatCoin } from "../../../utils/format";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import Button from "../Button";
import { message } from "antd";
import transactionApi from "../../../api/transaction.api";
import { updateBalance } from "../../../redux/features/authSlice";

type Props = {};

const WithDrawlTab = (props: Props) => {
  const dispatch = useAppDispatch();
  const balance = useAppSelector((state) => state.auth.balance);
  const wallet_address = useAppSelector((state) => state.auth.userInfo?.wallet_address);

  const [amount, setAmount] = useState<number>(0)

  const handleWithdraw = async (amount: number) => {
    const web3 = new Web3(window.ethereum);

    const contract = new web3.eth.Contract(walletApi, env.contractAddress);

    // Convert the amount to Wei
    const amountInWei = Web3.utils.toWei(amount.toString(), "ether");

    // Encode the ABI for the withdraw function with the amount as a parameter
    const data = contract.methods.withdraw(amountInWei).encodeABI();

    const transactionParameters = {
      to: env.contractAddress,
      from: wallet_address,
      data: data,
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
    if (amount <= 0)
      return message.warning(`Mệnh giá tối thiểu là ${formatCoin(1)}`);

    if (amount > balance)
      return message.warning(`Số dư không đủ`);


    try {
      const txHash = await handleWithdraw(amount / 1000);
      if (!txHash) return message.error(`Giao dịch thất bại!`);

      startTransition(() => {
        transactionApi.withDraw({ txHash }).then((rs: any) => {
          dispatch(updateBalance({ balance: -amount }));
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
          <div className="flex flex-col justify-center items-center">
            <h5 className="text-xl my-3 font-medium">
              Số dư hiện tại của bạn là:
              <span className="font-bold ml-2 text-[#e19435]">
                {formatCoin(balance)}
              </span>
            </h5>

            <div className="w-100 text-start mb-3 mt-3">
              <label htmlFor="balance-input" className="mb-2">Nhập số tiền bạn muốn rút</label>
              <input
                min={0}
                max={balance}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                type="number"
                name="balance"
                id="balance-input"
                placeholder="Nhập số tiền"
                className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

              />
              <p className="text-xs">= {amount / 1000} ETH</p>
            </div>
            <div className="w-100 text-start mb-6">
              <label htmlFor="wallet-input" className="mb-2 w-full">Địa chỉ ví</label>
              <input
                type="text"
                name="wallet"
                id="wallet-input"
                placeholder="Địa chỉ ví"
                defaultValue={wallet_address?.toUpperCase()}
                disabled
                className="shadow appearance-none border rounded w-full py-2 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

              />
            </div>
            <div className="w-100 text-start">
              <Button
                onclick={handleSubmit}
                title="Xác nhận"
                classes={`w-full py-3 text-white text-sm font-medium rounded-xl bg-primary-300`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithDrawlTab;
