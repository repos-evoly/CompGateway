export type SideBarItemsProps = {
    href: string;
    label: string;
    icon: JSX.Element;
    isExpanded: boolean;
    tooltipContent: string;
    combo?: boolean; // Optional combo prop
    subItems?: SideBarItemsProps[]; // Optional subItems for nested items
};
  
export type SideBarProps = {
  isRtl: boolean;
};

export type LocaleSwitcherProps = {
  isExpanded: boolean;
};

export type MainHeaderProps = {
    title: string;
    logoUrl: string | StaticImageData;  // Now accepts both string URLs and StaticImageData
    isRtl: boolean;
};

