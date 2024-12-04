import {
  FaUserPlus,
  FaFileContract,
  FaFileInvoice,
  FaBox,
  FaUsers,
  FaSignOutAlt,
  FaRegFileAlt, // New icon for "Statement of Accounts"
  FaBalanceScale, // New icon for "Trial Balance"
  FaBook, // New icon for "Balance Sheet"
} from "react-icons/fa";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { GrCurrency } from "react-icons/gr";
import { BsJournalArrowUp } from "react-icons/bs";

// Define your items without translation logic
export const sideBarItemsArray = [
  {
    href: "/main/Contact",
    labelKey: "contact",
    icon: <FaUserPlus />,
    tip: "Contact",
  },
  {
    href: "/main/Contract",
    labelKey: "contract",
    icon: <FaFileContract />,
    tip: "Contract",
  },
  {
    href: "/main/Accounts",
    labelKey: "accounts",
    icon: <FaUsers />,
    tip: "Accounts",
  },
  {
    href: "#",
    labelKey: "invoice.label",
    icon: <FaFileInvoice />, // Updated for Financial Statements
    tip: "invoice.label",
    combo: true,
    subItems: [
      {
        href: "/main/Invoice",
        labelKey: "invoice.purchase",
        icon: <FaFileInvoice />, // Updated for Statement of Accounts
        tip: "Purchase Invoice",
      },
      {
        href: "/main/salesInvoice",
        labelKey: "invoice.sales",
        icon: <FaFileInvoice />, // Updated for Trial Balance
        tip: "SalesInvoice",
      },
    ],
  },
  {
    href: "/main/Chart",
    labelKey: "chart",
    icon: <MdOutlineSwitchAccount />,
    tip: "Chart Of Accounts",
  },
  {
    href: "/main/Currencies",
    labelKey: "currencies",
    icon: <GrCurrency />,
    tip: "Currencies",
  },
  {
    href: "/main/journal",
    labelKey: "journal",
    icon: <BsJournalArrowUp />,
    tip: "Journal",
  },
  {
    href: "/main/Products",
    labelKey: "products",
    icon: <FaBox />,
    tip: "Products",
  },
  {
    href: "/main/financialStatements",
    labelKey: "financial.label",
    icon: <FaRegFileAlt />, // Updated for Financial Statements
    tip: "Financial Statements",
    combo: true,
    subItems: [
      {
        href: "/main/statement-of-accounts",
        labelKey: "financial.accounts",
        icon: <FaRegFileAlt />, // Updated for Statement of Accounts
        tip: "Statement of Accounts",
      },
      {
        href: "/main/trialBalance",
        labelKey: "financial.trialBalance",
        icon: <FaBalanceScale />, // Updated for Trial Balance
        tip: "Trial Balance",
      },
      {
        href: "/main/financialStatements/balance-sheet",
        labelKey: "financial.balanceSheet",
        icon: <FaBook />, // Updated for Balance Sheet
        tip: "Balance Sheet",
      },
    ],
  },
];
