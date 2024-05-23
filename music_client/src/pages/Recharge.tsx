import React, { startTransition, useState } from "react";
import DefaultLayout from "../layout/Layout";
import { CoinDepositList } from "../api/_mock";
import { formatCoin } from "../utils/format";
import { Button, message } from "antd";
import Web3 from "web3";
import { walletApi } from "../contracts/walletApi";
import { env } from "../configs/env";
import { web3 } from "../contracts";
import transactionApi from "../api/transaction.api";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setToken, updateBalance } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import authApi from "../api/auth.api";

const RechargePage = () => {
  const dispatch = useAppDispatch();

  const [deposit, setDeposit] = useState<{
    denominations: number;
    value: number;
  }>({ denominations: 0, value: 0 });

  // useEffect(() => {
  //   if (!info?.id) navigate('/')
  // }, [info])

  const info = useAppSelector((state) => state.auth.userInfo);

  const handleConnectWallet = async (): Promise<string> => {
    let wallet_address: string = "";

    return new Promise(async (resolve, reject) => {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          wallet_address = accounts[0];
          resolve(wallet_address);
        } catch (error: any) {
          toast.warning(error.message);
          console.error("User denied account access", error);
          reject(error);
        }
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        console.log("Web3 is injected into the browser");
        resolve(wallet_address);
      } else {
        toast.warning("Không tìm thấy MetaMask. Vui lòng cài đặt MetaMask!");
        reject(new Error("MetaMask not found"));
      }
    });
  };

  const updateWalletAddress = async (wallet_address: string) => {
    try {
      const response: any = await authApi.update({ wallet_address });
      dispatch(setToken({ token: response.accessToken }));
      toast.success("Kết nối Meta Mask thành công!");
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  const handleSendDeposit = async (amount: number) => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const amountInWei =
      "0x" + Number(Web3.utils.toWei(amount, "ether")).toString(16);
    console.log(amountInWei);
    const transactionParameters = {
      to: env.contractAddress,
      from: accounts[0],
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

    if (!info?.wallet_address) {
      const connect_wallet = await handleConnectWallet();
      await updateWalletAddress(connect_wallet);
    }

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
      <DefaultLayout>
        <div className="mr-5">
          <div className=" bg-white p-2 rounded">
            <div className="text-center">
              <h5 className="text-xl my-3 font-medium">
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
                  className={`rounded border-[1.5px] border-grey-300 p-5 flex justify-center items-center cursor-pointer hover:border-primary-50/50 hover:bg-primary-50/10 duration-200 ease-in-out${deposit == data && "border-primary-50/50 bg-primary-50/10"
                    }`}
                >
                  <span className="font-medium text-xl">
                    {formatCoin(data.value)}
                  </span>
                </div>
              ))}
            </div>
            <p className="italic my-3 text-sm w-full text-center font-normal">
              Giá trị quy đổi là 1/1000 (Ví dụ: để nạp{" "}
              <strong>{formatCoin(100)}</strong>
              <span className="mx-1">thì bạn phải có</span>
              <strong>0.1 ETH</strong>)
            </p>
            <div className="border-t-[1px] py-5 mt-20 grid grid-cols-3 border-grey-300 gap-3">
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
      </DefaultLayout>
    </>
  );
};

export default RechargePage;
