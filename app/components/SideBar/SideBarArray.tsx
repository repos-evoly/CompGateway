import { FaUserPlus, FaWpforms, FaCcVisa } from "react-icons/fa";
import { MdCurrencyExchange } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { BiTransfer } from "react-icons/bi";
import { PiBankBold, PiCertificateBold, PiMoneyBold } from "react-icons/pi";
import {
  TbCircleLetterGFilled,
  TbExternalLink,
  TbLicense,
  TbTransferVertical,
} from "react-icons/tb";
import { VscPreview, VscRequestChanges } from "react-icons/vsc";
import { LiaMoneyCheckSolid } from "react-icons/lia";
import { RiChatFollowUpFill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";

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
    icon: <BiTransfer />,
    tip: "transfer.label",
    combo: true,
    subItems: [
      {
        href: "#",
        labelKey: "transfer.inBank",
        icon: <PiBankBold />,
        tip: "Purchase Invoice",
      },
      {
        href: "#",
        labelKey: "transfer.betweenBanks",
        icon: <PiBankBold />,
        tip: "Transfer between banks",
      },
      {
        href: "#",
        labelKey: "transfer.out",
        icon: <TbExternalLink />,
        tip: "External transfers",
      },
    ],
  },

  {
    href: "#",
    labelKey: "requests.label",
    icon: <VscRequestChanges />,
    tip: "requests.label",
    combo: true,
    subItems: [
      {
        href: "/checkbook",
        labelKey: "requests.checkBook",
        icon: <LiaMoneyCheckSolid />,
        tip: "requests.checkBook",
      },
      {
        href: "/checkRequest",
        labelKey: "requests.certifiedCheck",
        icon: <PiCertificateBold />,
        tip: "requests.certifiedCheck",
      },
      {
        href: "#",
        labelKey: "requests.guaranteeLetter",
        icon: <TbCircleLetterGFilled />,
        tip: "requests.guaranteeLetter",
      },
      {
        href: "#",
        labelKey: "requests.creditFacility",
        icon: <FaWpforms />,
        tip: "requests.creditFacility",
      },
      {
        href: "#",
        labelKey: "requests.visa",
        icon: <FaCcVisa />,
        tip: "requests.visa",
      },
      {
        href: "/rtgs",
        labelKey: "requests.rtgs",
        icon: <TbTransferVertical />,
        tip: "requests.rtgs",
      },
      {
        href: "#",
        labelKey: "requests.foreign",
        icon: <TbLicense />,
        tip: "requests.foreign",
      },
      {
        href: "/cbl",
        labelKey: "requests.cbl",
        icon: <BsFillInfoCircleFill />,
        tip: "requests.cbl",
      },
    ],
  },

  {
    href: "#",
    labelKey: "localization",
    icon: <PiMoneyBold />,
    tip: "localization",
  },
  {
    href: "#",
    labelKey: "documentary",
    icon: <VscPreview />,
    tip: "documentary",
  },
  {
    href: "#",
    labelKey: "followUp",
    icon: <RiChatFollowUpFill />,
    tip: "Follow Up",
  },
  {
    href: "#",
    labelKey: "settings",
    icon: <IoIosSettings />,
    tip: "settings",
  },
  {
    href: "#",
    labelKey: "currRate",
    icon: <MdCurrencyExchange />,
    tip: "currRate",
  },
];
