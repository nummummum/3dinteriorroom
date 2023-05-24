import { Layout, Menu, RadioChangeEvent } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import React, { useRef, useState } from "react";
import "./MyPage.scss";

export default function MyPage() {
  const stateModifyRef = useRef<HTMLElement>(null);
  const buyReceiptRef = useRef<HTMLElement>(null);
  const reviewRef = useRef<HTMLElement>(null);
  const interiorRef = useRef<HTMLElement>(null);
  const billRef = useRef<HTMLElement>(null);
  const fireStateRef = useRef<HTMLElement>(null);

  const { Header, Content, Sider } = Layout;
  function getItem(label: string, key: string, icon?: any, children?: any) {
    return { key, icon, children, label };
  }

  const items = [
    getItem("주문이력", "1"),
    getItem("상품평", "2"),
    getItem("인테리어", "3"),
    getItem("결재내역", "4"),
    getItem("회원탈퇴하기", "5"),
  ];
  return (
    <section className="mypagewrap">
      <div className="inner">
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="demo-logo-vertical" />
            <img className="profile_img" src="" alt="" />
            <p className="profile_nickname">정은수</p>
            <div
              className="btnwrap navy reverse"
              onClick={() => SelectTab("0")}
            >
              <p>회원 정보 수정</p>
            </div>
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={items}
              style={{ backgroundColor: "white" }}
              onSelect={({ item, key, keyPath, selectedKeys, domEvent }) => {
                SelectTab(key);
              }}
            />
          </Sider>
          <Layout ref={stateModifyRef}>
            <Header />
            <Content>
              <div>content1</div>
            </Content>
          </Layout>
          <Layout ref={buyReceiptRef}>
            <Header />
            <Content>
              <div>content2</div>
            </Content>
          </Layout>
          <Layout ref={reviewRef}>
            <Header />
            <Content>
              <div>content3</div>
            </Content>
          </Layout>
          <Layout ref={interiorRef}>
            <Header />
            <Content>
              <div>content4</div>
            </Content>
          </Layout>
          <Layout ref={billRef}>
            <Header />
            <Content>
              <div>content5</div>
            </Content>
          </Layout>
          <Layout ref={fireStateRef}>
            <Header />
            <Content>
              <div>content6</div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </section>
  );
  function SelectTab(key: string) {
    ClearTab();
    switch (key) {
      case "0": {
        stateModifyRef.current!.style.display = "flex";
        break;
      }
      case "1": {
        buyReceiptRef.current!.style.display = "flex";
        break;
      }
      case "2": {
        reviewRef.current!.style.display = "flex";
        break;
      }
      case "3": {
        interiorRef.current!.style.display = "flex";
        break;
      }
      case "4": {
        billRef.current!.style.display = "flex";
        break;
      }
      case "5": {
        fireStateRef.current!.style.display = "flex";
        break;
      }
    }
  }
  function ClearTab() {
    buyReceiptRef.current!.style.display = "none";
    reviewRef.current!.style.display = "none";
    interiorRef.current!.style.display = "none";
    billRef.current!.style.display = "none";
    fireStateRef.current!.style.display = "none";
    stateModifyRef.current!.style.display = "none";
  }
}
