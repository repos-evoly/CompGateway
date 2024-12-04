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
    href: "#",
    labelKey: "statementOfAccount",
    icon: <FaUserPlus />,
    tip: "Contact",
  },
  {
    href: "#",
    labelKey: "transfer.label",
    icon: <FaFileInvoice />, // Updated for Financial Statements
    tip: "transfer.label",
    combo: true,
    subItems: [
      {
        href: "#",
        labelKey: "transfer.inBank",
        icon: <FaFileInvoice />, // Updated for Statement of Accounts
        tip: "Purchase Invoice",
      },
      {
        href: "#",
        labelKey: "transfer.betweenBanks",
        icon: <FaFileInvoice />, // Updated for Trial Balance
        tip: "Transfer between banks",
      },
      {
        href: "#",
        labelKey: "transfer.out",
        icon: <FaFileInvoice />, // Updated for Trial Balance
        tip: "External transfers",
      },
    ],
  },

  {
    href: "#",
    labelKey: "requests.label",
    icon: <FaFileInvoice />, // Updated for Financial Statements
    tip: "requests.label",
    combo: true,
    subItems: [
      {
        href: "#",
        labelKey: "requests.checkBook",
        icon: <FaFileInvoice />, // Updated for Statement of Accounts
        tip: "requests.checkBook",
      },
      {
        href: "#",
        labelKey: "requests.certifiedCheck",
        icon: <FaFileInvoice />, // Updated for Trial Balance
        tip: "requests.certifiedCheck",
      },
      {
        href: "#",
        labelKey: "requests.guaranteeLetter",
        icon: <FaFileInvoice />, // Updated for Trial Balance
        tip: "requests.guaranteeLetter",
      },
      {
        href: "#",
        labelKey: "requests.creditFacility",
        icon: <FaFileInvoice />, // Updated for Trial Balance
        tip: "requests.creditFacility",
      },
      {
        href: "#",
        labelKey: "requests.visa",
        icon: <FaFileInvoice />, // Updated for Trial Balance
        tip: "requests.visa",
      },
      {
        href: "#",
        labelKey: "requests.rtes",
        icon: <FaFileInvoice />, // Updated for Trial Balance
        tip: "requests.rtes",
      },
      {
        href: "#",
        labelKey: "requests.foreign",
        icon: <FaFileInvoice />, // Updated for Trial Balance
        tip: "requests.foreign",
      },
      {
        href: "#",
        labelKey: "requests.cbl",
        icon: <FaFileInvoice />, // Updated for Trial Balance
        tip: "requests.cbl",
      },
    ],
  },

  {
    href: "#",
    labelKey: "localization",
    icon: <FaUserPlus />,
    tip: "localization",
  },
  {
    href: "#",
    labelKey: "documentary",
    icon: <FaUserPlus />,
    tip: "documentary",
  },
  {
    href: "#",
    labelKey: "followUp",
    icon: <FaUserPlus />,
    tip: "Follow Up",
  },
  {
    href: "#",
    labelKey: "settings",
    icon: <FaUserPlus />,
    tip: "settings",
  },
  {
    href: "#",
    labelKey: "currRate",
    icon: <FaUserPlus />,
    tip: "currRate",
  },
];
