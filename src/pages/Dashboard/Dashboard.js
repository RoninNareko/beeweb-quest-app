import "./Dashboard.scss";

import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import DashboardContent from "./Content/DashboardContent";

const { Content, Sider } = Layout;

const Dashboard = () => (
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
                label: "Task List",
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
            <Breadcrumb.Item>Task List</Breadcrumb.Item>
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
);

export default Dashboard;
