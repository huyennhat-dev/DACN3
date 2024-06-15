import { Tabs, TabsProps } from 'antd'
import React, { useEffect } from 'react'
import useQuery from '../hooks/useQuery';
import { useNavigate } from 'react-router-dom';
import DepositTab from '../components/Global/Tab/DepositTab';
import ProfileTab from '../components/Global/Tab/ProfileTab';
import TransactionTab from '../components/Global/Tab/TransactionTab';
import WithDrawlTab from '../components/Global/Tab/WithDrawlTab';

type Props = {}

export enum TabList {
  Profile = "profile",
  Deposit = "deposit",
  WithDraw = "with-draw",
  Transaction = "transaction"
}

const ProfilePage = (props: Props) => {

  const query = useQuery();
  // Sử dụng hook useNavigate để điều hướng trang
  const navigate = useNavigate();
  // Lấy giá trị của tham số 'tab' từ URL
  const tab = query.get('tab');

  const items: TabsProps["items"] = [
    {
      label: "Tài khoản",
      key: TabList.Profile,
      children: < ProfileTab />,
    },
    {
      label: "Nạp tiền",
      key: TabList.Deposit,
      children: <DepositTab />,
    },
    {
      label: "Rút tiền",
      key: TabList.WithDraw,
      children: <WithDrawlTab />,
    },
    {
      label: "Lịch sử",
      key: TabList.Transaction,
      children: <TransactionTab />,
    }

  ];
  const changeTab = (newTab: string) => {
    const query = new URLSearchParams();
    query.set('tab', newTab);
    navigate({ search: query.toString() }); // Điều hướng với URL mới
  };



  return (
    <div className="my-music mr-5 h-full">
      <div className="flex flex-col bg-white p-2 pb-5 rounded mb-5 h-full">
        <h3 className="text-title-md w-full px-5 my-3">Tài khoản của bạn</h3>
        <Tabs
          onChange={(val) => changeTab(val)}
          className=" h-full flex-1 overflow-hidden"
          tabPosition="left"
          defaultActiveKey={tab ?? TabList.Profile}
          items={items}
        />
      </div>
    </div>
  )
}

export default ProfilePage