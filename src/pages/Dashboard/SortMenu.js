import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, message, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sortByDateActionCreator,
  sortByNameActionCreator,
} from "../../store/actions/sort";
import { selectSort } from "../../store/selectors/sortSelectors";

const SortMenu = () => {
  const sort = useSelector(selectSort);
  const dispatch = useDispatch();
  const sortMode = sort["sortMode"];
  const onClick = () => {
    if (sortMode === "byName") {
      message.info(`Sort by Date`);
      dispatch(sortByDateActionCreator("byDate"));
    } else {
      message.info(`Sort by Name`);
      dispatch(sortByNameActionCreator("byName"));
    }
  };
  const handleMenuClick = (e) => {};
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "Sort By Date",
          onClick,
          key: "2",
          icon: <UserOutlined />,
        },
        {
          label: "Sort By Name",
          key: "1",
          onClick,
          icon: <UserOutlined />,
        },
      ]}
    />
  );
  return (
    <Space wrap>
      <Dropdown overlay={menu}>
        <Button>
          <Space>
            {sortMode === "byName" ? "Sort by name" : "Sort by Date"}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </Space>
  );
};

export default SortMenu;
