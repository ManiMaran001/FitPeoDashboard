import { CiBadgeDollar } from "react-icons/ci";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { LiaStoreSolid } from "react-icons/lia";

export const BarChartData = [
    {
      id: "1",
      month: "Jan",
      percent: "70%",
      active: false,
    },
    {
      id: "2",
      month: "Feb",
      percent: "50%",
      active: false,
    },
    {
      id: "3",
      month: "Mar",
      percent: "100%",
      active: false,
    },
    {
      id: "4",
      month: "Apr",
      percent: "65%",
      active: false,
    },
    {
      id: "5",
      month: "May",
      percent: "30%",
      active: false,
    },
    {
      id: "6",
      month: "Jun",
      percent: "60%",
      active: false,
    },
    {
      id: "7",
      month: "Jul",
      percent: "80%",
      active: false,
    },
    {
      id: "8",
      month: "Aug",
      percent: "100%",
      active: true,
    },
    {
      id: "9",
      month: "Sep",
      percent: "90%",
      active: false,
    },
    {
      id: "10",
      month: "Oct",
      percent: "56%",
      active: false,
    },
    {
      id: "11",
      month: "Nov",
      percent: "20%",
      active: false,
    },
    {
      id: "12",
      month: "Dec",
      percent: "48%",
      active: false,
    },
  ];

  export const EarningsData = [
    {
      id: "1",
      icon: <CiBadgeDollar />,
      summaryTag: "Earnings",
      amount: `984`,
      Percent: "37% this month",
      color: "var(--color-green-400)",
      bgcolor: "rgba(0, 150, 136,0.07)",
    },
    {
      id: "2",
      summaryTag: "Orders",
      amount: `2.4`,
      icon: <HiOutlineDocumentChartBar />,
      Percent: "2% this month",
      color: "var(--color-purple-200)",
      bgcolor: "rgba(103, 58, 183,0.2)",
    },
    {
      id: "3",
      summaryTag: "Balance",
      amount: `2.4`,
      icon: <MdOutlineAccountBalanceWallet />,
      Percent: "2% this month",
      color: "var(--color-cyan-200)",
      bgcolor: `rgba(0, 188, 212,0.2)`,
    },
    {
      id: "4",
      summaryTag: "Total Sales",
      amount: `8.9`,
      icon: <LiaStoreSolid />,
      Percent: "2% this week",
      color: "var(--color-pink-200)",
      bgcolor: "var(--color-pink-light)",
    },
  ];