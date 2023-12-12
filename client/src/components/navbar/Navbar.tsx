import { HomeFilled } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import RouteConstants from "../../constants/routes_config";

const Navbar: React.FC = () => {
  interface MenuItemInterface {
    key: string;
    label?: string;
    icon?: React.ReactNode;
    path: string;
  }

  const items: MenuItemInterface[] = [
    {
      label: "Home",
      key: "home",
      icon: <HomeFilled />,
      path: RouteConstants.HOME,
    },
    {
      label: "About",
      key: "about",
      path: RouteConstants.ABOUT,
    },
  ];

  return (
    <Menu
      mode="horizontal"
      style={{
        backgroundColor: "#FFF5EE",
        display: "flex",
        justifyContent: "center",
      }}
      // items={items}
    >
      {items.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          <NavLink to={item.path}>{item.label}</NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Navbar;