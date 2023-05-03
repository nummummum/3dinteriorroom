import "./CartPage.scss";

export default function CartPage() {
  return (
    <section className="cartpage">
      <div className="inner">
        <h4 className="pagetitle">장바구니</h4>
        <ul className="cartwrapform">
          <li>
            <img className="cartcheck" src="" alt="" />
            <img className="cartimg" src="" alt="" />
            <p className="carttitle">상품정보</p>
            <p className="cartprice">판매가</p>
            <div className="accountnumberwrap">
              <p></p>
              <p>수량</p>
              <p></p>
            </div>
          </li>
        </ul>
        <ul className="cartwrap">
          <li>
            <img className="cartcheck" src="" alt="" />
            <img className="cartimg" src="" alt="" />
            <p className="carttitle">제품 이름</p>
            <p className="cartprice">판매가</p>
            <div className="accountnumberwrap">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
          </li>
          <li>
            <img className="cartcheck" src="" alt="" />
            <img className="cartimg" src="" alt="" />
            <p className="carttitle">제품 이름</p>
            <p className="cartprice">판매가</p>
            <div className="accountnumberwrap">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
          </li>
          <li>
            <img className="cartcheck" src="" alt="" />
            <img className="cartimg" src="" alt="" />
            <p className="carttitle">제품 이름</p>
            <p className="cartprice">판매가</p>
            <div className="accountnumberwrap">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
          </li>
        </ul>
        <div className="btngroupwrap">
          <div className="btnwrap black reverse">
            <p>구매하기</p>
          </div>
          <div className="btnwrap black">
            <p>인테리어</p>
          </div>
          <div className="btnwrap black">
            <p>돌아가기</p>
          </div>
        </div>
      </div>
    </section>
  );
}
