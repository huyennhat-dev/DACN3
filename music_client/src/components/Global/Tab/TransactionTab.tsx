import { Pagination, PaginationProps, Tabs, TabsProps, message } from "antd";
import React, { useEffect, useState } from "react";
import useQuery from "../../../hooks/useQuery";
import { useNavigate } from "react-router-dom";
import transactionApi from "../../../api/transaction.api";
import { transaction } from "../../../utils/types";
import { format } from "date-fns";
import { IconCopy, IconCopyCheckFilled } from "@tabler/icons-react";

type Props = {};

export enum TabList {
  Deposit = "deposit",
  WithDraw = "withdraw",
  Transaction = "transaction",
}

const TabItem = ({ item }: { item: transaction }) => {
  const [isCopy, setIsCopy] = useState<boolean>(false)
  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      message.success("Đã copy vào bộ nhớ tạm!");
      setIsCopy(true)
    });
  };
  return (
    <div className="my-2 rounded border border-grey-400 p-2 hover:bg-primary-50/10 cursor-pointer">
      <div className="flex items-center">
        <p className="flex-1 font-semibold ">
          Tx_hash: {item.transaction_hash}
        </p>
        <div onClick={() => handleCopy(item.transaction_hash)}>
          {isCopy ? <IconCopyCheckFilled size={16} color="green" /> : <IconCopy size={16} />}
        </div>
      </div>
      <p className={`text-xs mt-1`}>
        <span>
          action: <b>{item.action}</b>
        </span>
        <span className="mx-5">
          status:
          <span
            className={` ml-2 font-semibold ${item.status == "completed" && "text-success-400"
              } ${item.status == "pending" && "text-sky-500"}  ${item.status == "failed" && "text-danger-200"
              }`}
          >
            {item.status}
          </span>
        </span>
        <span>
          time:
          <span className="ml-1">
            {format(new Date(item.createdAt), "yyyy-MM-dd HH:mm:ss")}
          </span>
        </span>
      </p>
    </div>
  );
};

const TabContent = ({ type }: { type: string }) => {
  const limit = 100;
  const [total, setTotal] = useState<number>(0);
  const [data, setData] = useState<transaction[]>([]);

  useEffect(() => {
    const getTransactions = async () => {
      const rs = await transactionApi.getTransactions({
        keyword: type,
        page: 1,
        limit,
      });
      setData(rs.data);
    };

    getTransactions();
  }, [type]);

  const onChangePage: PaginationProps["onChange"] = (
    current,
    pageSize
  ) => {
    console.log(current, pageSize);
  };
  return (
    <div className="mr-5  w-full h-full overflow-auto hide-scroll">
      {data.map((item) => (
        <TabItem key={item._id} item={item} />
      ))}

      {data.length > 0 && (
        <div className=" w-full text-center float-end mt-2">
          <Pagination
            className="mx-auto border-primary-50"
            pageSize={limit}
            showSizeChanger={false}
            onChange={onChangePage}
            defaultCurrent={1}
            total={200}
          />
        </div>
      )}
    </div>
  );
};

const TransactionTab = (props: Props) => {
  const query = useQuery();
  // Sử dụng hook useNavigate để điều hướng trang
  const navigate = useNavigate();
  // Lấy giá trị của tham số 'tab' từ URL
  const tab = query.get("type");

  const items: TabsProps["items"] = [
    {
      label: "Lịch sử nạp",
      key: TabList.Deposit,
      children: <TabContent type={TabList.Deposit} />,
    },
    {
      label: "Lịch sử rút",
      key: TabList.WithDraw,
      children: <TabContent type={TabList.WithDraw} />,
    },
    {
      label: "Lịch sử giao dịch",
      key: TabList.Transaction,
      children: <TabContent type={TabList.Transaction} />,
    },
  ];
  const changeTab = (newTab: string) => {
    query.set("type", newTab); // Đặt giá trị mới cho tham số 'tab'
    navigate({ search: query.toString() }); // Điều hướng với URL mới
  };
  return (
    <Tabs
      onChange={(val) => changeTab(val)}
      className=" h-full flex-1 overflow-hidden"
      tabPosition="top"
      defaultActiveKey={tab ?? TabList.Deposit}
      items={items}
    />
  );
};

export default TransactionTab;
