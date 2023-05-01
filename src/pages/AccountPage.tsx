import "./AccountPage.scss";

export default function AccountPage() {
  return (
    <section className="accountpage">
      <h4 className="title">회원가입</h4>
      <div className="titlewrap">
        <p className="accounttitle">아이디</p>
        <p className="titlered">사용 할 수 없는 아이디입니다.</p>
      </div>
      <input
        className="accountinput"
        type="text"
        placeholder="아이디 입력 (6~20자)"
      />
      <div className="titlewrap">
        <p className="accounttitle">비밀번호 입력</p>
        <p className="titlered">20자 이내의 비밀번호를 입력해주세요.</p>
      </div>
      <input
        className="accountinput"
        type="password"
        placeholder="비밀번호 입력 (문자, 숫자, 특수문자 포함 12~20자)"
      />
      <div className="titlewrap">
        <p className="accounttitle">비밀번호 확인</p>
        <p className="titlered">비밀번호가 일치하지 않습니다.</p>
      </div>
      <input
        className="accountinput"
        type="password"
        placeholder="비밀번호 재입력"
      />
      <p className="accounttitle">이름</p>
      <input
        className="accountinput"
        type="text"
        placeholder="이름을 입력해주세요"
      />
      <p className="accounttitle">전화번호</p>
      <input
        className="accountinput"
        type="text"
        placeholder="휴대폰 번호 입력 ('-' 제외 11자리 입력)"
      />
      <p className="accounttitle">이메일 주소</p>
      <div className="emailwrap">
        <input className="accountinput" type="text" placeholder="이메일 주소" />
        <p>@</p>
        <input
          className="accountinput"
          type="text"
          placeholder="ex : naver.com"
        />
      </div>
      <div className="btnwrap black reverse radius10">가입하기</div>
    </section>
  );
}
