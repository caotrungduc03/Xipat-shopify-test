import { Navigation } from "@shopify/polaris";
import {
  HomeFilledIcon,
  OrderFilledIcon,
  SettingsFilledIcon,
} from "@shopify/polaris-icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Navigator = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  return (
    <Navigation location={pathname}>
      <Navigation.Section
        items={[
          {
            label: "Dashboard",
            icon: HomeFilledIcon,
            url: "/dashboard",
            onClick: () => setPathname("/dashboard"),
            selected: pathname === "/dashboard",
          },
          {
            label: "Products",
            icon: OrderFilledIcon,
            url: "/products",
            onClick: () => setPathname("/products"),
            selected: pathname === "/products",
          },
          {
            label: "Settings",
            icon: SettingsFilledIcon,
            url: "/settings",
            onClick: () => setPathname("/settings"),
            selected: pathname === "/settings",
          },
        ]}
      />
    </Navigation>
  );
};

export default Navigator;
