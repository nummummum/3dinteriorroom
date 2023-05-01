import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <section className="loginpage">
      <div className="startline" />
      <h4 className="logintitle">Login</h4>
      <input className="logininput" type="text" placeholder="아이디" />
      <input className="logininput" type="password" placeholder="비밀번호" />
      <div className="btnwrap black reverse radius10">
        <p>Login</p>
      </div>
      <p className="horizenbar">--------------또는--------------</p>
      <div className="btnwrap blue reverse radius10">
        <p>Facebook으로 로그인하기</p>
      </div>
      <div className="btnwrap yellow reverse radius10">
        <p>Kakao로 로그인하기</p>
      </div>
      <div className="etcfunction">
        <p className="findId">아이디 찾기</p>/
        <p className="findPw">비밀번호 찾기</p>/
        <p
          className="findAccount"
          onClick={() => {
            navigate("/account");
          }}
        >
          회원가입
        </p>
      </div>
    </section>
  );
}
