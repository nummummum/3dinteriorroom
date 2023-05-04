import { useNavigate } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const navigate = useNavigate();
  return (
    <section className="header">
      <div className="header_left">
        <div className="menubar close">
          <span className="span_top"></span>
          <span className="span_middle"></span>
          <span className="span_bottom"></span>
        </div>
        <h1
          className="header_title"
          onClick={() => {
            navigate("/");
          }}
        >
          S3IR
        </h1>
        <ul className="left_menu_wrap">
          <li
            className="item"
            onClick={() => {
              navigate("/product");
            }}
          >
            상품 판매
          </li>
          <li
            className="item"
            onClick={() => {
              navigate("/showroom");
            }}
          >
            쇼룸
          </li>
          <li
            className="item"
            onClick={() => {
              navigate("/community");
            }}
          >
            커뮤니티
          </li>
          <li
            className="item"
            onClick={() => {
              navigate("/promotion");
            }}
          >
            프로모션
          </li>
          <li className="item">About</li>
        </ul>
      </div>
      <div className="header_right">
        <ul className="right_menu_wrap">
          <li
            className="item"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <div className="icon">
              <img src="" alt="" />
            </div>
            <p>장바구니</p>
          </li>
          <li className="item">
            <div className="icon">
              <img src="" alt="" />
            </div>
            <p
              onClick={() => {
                navigate("/mypage");
              }}
            >
              마이페이지
            </p>
          </li>
          <li
            className="item"
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </li>
          <li
            className="item"
            onClick={() => {
              navigate("/account");
            }}
          >
            가입하기
          </li>
          <li
            className="item"
            onClick={() => {
              navigate("/interior");
            }}
          >
            Interior
          </li>
        </ul>
      </div>
    </section>
  );
}
