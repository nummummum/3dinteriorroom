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
  const mypageMainRef = useRef<HTMLElement>(null);
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
    getItem("마이페이지", "1"),
    getItem("주문이력", "2"),
    getItem("상품평", "3"),
    getItem("인테리어", "4"),
    getItem("결재내역", "5"),
    getItem("회원탈퇴하기", "6"),
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
          <Layout className="state_modify_content" ref={stateModifyRef}>
            <Header />
            <Content>
              <section className="mainpage_modify">
                <h4 className="modify_title">나의 정보</h4>
                <p className="modify_little_title">회원 정보 조회 / 수정</p>
                <div className="horizen_bar" />
                <div className="modify_content_wrap">
                  <div className="modify_content_profile">
                    <img className="profile_img" src="" alt="" />
                    <div className="btnwrap navy reverse">
                      <p>프로필 사진 변경</p>
                    </div>
                  </div>
                  <div className="modify_content_modify">
                    <ul>
                      <li>
                        <p>아이디</p>
                        <input type="text" value="aaabbbccc1234" disabled />
                      </li>
                      <li>
                        <p>생년월일</p>
                        <input type="text" value="1997-01-15" disabled />
                      </li>
                      <li>
                        <p>비밀번호 변경</p>
                        <input type="password" />
                      </li>
                      <li>
                        <p>비밀번호 확인</p>
                        <input type="password" />
                      </li>
                      <li>
                        <p>이메일 주소</p>
                        <input type="text" />
                      </li>
                      <li>
                        <p>휴대전화</p>
                        <input type="text" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="btnwrap black reverse">
                  <p>수정하기</p>
                </div>
              </section>
            </Content>
          </Layout>
          <Layout className="mypage_main_content" ref={mypageMainRef}>
            <Header />
            <Content>
              <div className="mainpage_main">
                <div className="main_profile_wrap">
                  <p className="profile_title">유저 프로필</p>
                  <ul className="card_component_wrap">
                    <li className="card_component_list">
                      <img src="" alt="" className="component_icon" />
                      <div className="component_p">
                        <p className="component_number">123</p>
                        <p className="component_title">만든 인테리어 수</p>
                      </div>
                    </li>
                    <li className="card_component_list">
                      <img src="" alt="" className="component_icon" />
                      <div className="component_p">
                        <p className="component_number">123</p>
                        <p className="component_title">보유 가구 수</p>
                      </div>
                    </li>
                    <li className="card_component_list">
                      <img src="" alt="" className="component_icon" />
                      <div className="component_p">
                        <p className="component_number">123</p>
                        <p className="component_title">좋아요 받은 수</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="point_wrap">
                  <img src="" alt="" className="point_img" />
                  <p className="poing_txt">포인트</p>
                </div>
                <div className="timeline">
                  <p className="timeline_title">유저 활동 타임라인</p>
                  <div className="content_wrap">
                    <div className="icon red" />
                    <p className="timeline_content">
                      누군가 나의 "aaaa" 게시글에 추천을 눌렀습니다.
                    </p>
                  </div>
                  <div className="content_wrap">
                    <div className="icon blue" />
                    <p className="timeline_content">
                      누군가 나의 "aaaa" 게시글에 추천을 눌렀습니다.
                    </p>
                  </div>
                  <div className="content_wrap">
                    <div className="icon red" />
                    <p className="timeline_content">
                      누군가 나의 "aaaa" 게시글에 추천을 눌렀습니다.
                    </p>
                  </div>
                </div>
              </div>
            </Content>
          </Layout>
          <Layout className="buy_receipt_content" ref={buyReceiptRef}>
            <Header />
            <Content>
              <section className="mainpage_buyreceipt">
                <p className="buyreceipt_title">구매 내역</p>
                <div className="duration_wrap">
                  <ul className="duration_top_ul">
                    <li className="duration">
                      <button className="duration_btn">1주일</button>
                    </li>
                    <li className="duration">
                      <button className="duration_btn">1개월</button>
                    </li>
                    <li className="duration">
                      <button className="duration_btn">3개월</button>
                    </li>
                    <li className="duration">
                      <button className="duration_btn">6개월</button>
                    </li>
                    <li className="duration">
                      <button className="duration_btn">기간 설정</button>
                    </li>
                  </ul>
                  <ul className="duration_bottom_ul">
                    <li className="time">
                      <input className="time_input" type="date" />
                    </li>
                    <li className="time">
                      <input className="time_input" type="date" />
                    </li>
                    <li className="time">
                      <input className="time_input" type="date" />
                    </li>
                    ~
                    <li className="time">
                      <input className="time_input" type="date" />
                    </li>
                    <li className="time">
                      <input className="time_input" type="date" />
                    </li>
                    <li className="time">
                      <input className="time_input" type="date" />
                    </li>
                  </ul>
                  <div className="btnwrap black reverse radius15">조회</div>
                </div>
                <p className="receipt_title">구매 목록</p>
                <ul>
                  <li className="receipt_wrap">
                    <img className="receipt_img" src="" alt="" />
                    <div className="receip_content_wrap">
                      <p className="receipt_name">
                        이곳은 제목을 입력하는 곳입니다.
                      </p>
                      <p className="receipt_price_amount">6,500원 1개</p>
                    </div>
                    <p className="receipt_total">6,500원</p>
                    <button className="receipt_review">후기 작성</button>
                  </li>
                </ul>
              </section>
            </Content>
          </Layout>
          <Layout className="review_content" ref={reviewRef}>
            <Header />
            <Content>
              <div>content3</div>
            </Content>
          </Layout>
          <Layout className="interior_content" ref={interiorRef}>
            <Header />
            <Content>
              <div>content4</div>
            </Content>
          </Layout>
          <Layout className="bill_content" ref={billRef}>
            <Header />
            <Content>
              <div>content5</div>
            </Content>
          </Layout>
          <Layout className="fire_state_content" ref={fireStateRef}>
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
        mypageMainRef.current!.style.display = "flex";
        break;
      }
      case "2": {
        buyReceiptRef.current!.style.display = "flex";
        break;
      }
      case "3": {
        reviewRef.current!.style.display = "flex";
        break;
      }
      case "4": {
        interiorRef.current!.style.display = "flex";
        break;
      }
      case "5": {
        billRef.current!.style.display = "flex";
        break;
      }
      case "6": {
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
    mypageMainRef.current!.style.display = "none";
  }
}
