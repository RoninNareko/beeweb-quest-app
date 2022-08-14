import { Empty, Avatar, Badge } from "antd";
import { NavLink } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import "./Dashboard.scss";
import DashboardContent from "./Content/DashboardContent";
import { useSelector } from "react-redux";
import { selectAuthenticationData } from "../../store/selectors/authenticationSelectors";
import SortMenu from "./SortMenu";

const { Content, Sider } = Layout;

const Dashboard = () => {
  const authenticationData = useSelector(selectAuthenticationData);
  return authenticationData["auth"] ? (
    <section className="dashboard-section">
      <Layout>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 0,
              }}
              items={[
                {
                  label: "Tasks List",
                  className: "ant-menu-item-selected",
                },
              ]}
            />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <section className="middle-menu">
                <Avatar
                  src="https://joeschmoe.io/api/v1/random"
                  style={{
                    width: "150px",
                    height: "150px",
                  }}
                />
                <Badge
                  status="success"
                  text={authenticationData.userData.email}
                />
                <SortMenu />
              </section>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <DashboardContent />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </section>
  ) : (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 60,
      }}
      description={
        <span>
          Need <NavLink to="/login">Autorization</NavLink>
        </span>
      }
    ></Empty>
  );
};

export default Dashboard;
