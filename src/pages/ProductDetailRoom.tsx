import ProductRoomSimilarCard from "../components/ProductRoomSimilarCard";
import "./ProductDetailRoom.scss";

export default function ProductDetailRoom() {
  return (
    <section className="detailobjpage">
      <div className="inner">
        <h4 className="objdivision">제품|거실|선반</h4>
        <div className="detailproductwrap">
          <div className="detailimgwrap">
            <img className="detailimg" src="" alt="" />
          </div>
          <div className="detailcontentwrap">
            <h5 className="detailtitle">이름</h5>
            <p className="detailcontent">2023 뉴 티셔츠</p>
            <h5 className="detailtitle">가격</h5>
            <p className="detailcontent">12300원</p>
            <h5 className="detailtitle">평점 4.3 (리뷰 수)</h5>
            <p className="detailcontent">4.3</p>
            <div className="accountnumberwrap">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
            <div className="detailbtnwrap">
              <div className="btnwrap black">
                <p>구매하기</p>
              </div>
              <div className="btnwrap black reverse">
                <p>장바구니</p>
              </div>
            </div>
          </div>
        </div>
        <div className="horizenbar" />
        <h5 className="similartitle">비슷한 제품</h5>
        <ul className="similarobjectwrap">
          <li>
            <ProductRoomSimilarCard />
          </li>
          <li>
            <ProductRoomSimilarCard />
          </li>
          <li>
            <ProductRoomSimilarCard />
          </li>
          <li>
            <ProductRoomSimilarCard />
          </li>
          <li>
            <ProductRoomSimilarCard />
          </li>
        </ul>
        <div className="horizenbar" />
        <h5 className="reviewtitle">평범 ( 리뷰 수 )</h5>
        <div className="horizenbar" />
        <ul className="reviewul">
          <li>
            <div className="reviewwrap">
              <img src="" alt="" />
              <div className="reviewfield">
                <p className="reviewrating">4.3</p>
                <div className="reviewnamewrap">
                  <p className="reviewname">정은수</p>
                  <p className="reviewdate">2023-04-26</p>
                </div>
                <p className="reviewcontent">
                  리뷰내용이 들어갑니다.리뷰내용이 들어갑니다.리뷰내용이
                  들어갑니다.리뷰내용이 들어갑니다.리뷰내용이
                  들어갑니다.리뷰내용이 들어갑니다.리뷰내용이
                  들어갑니다.리뷰내용이 들어갑니다.리뷰내용이 들어갑니다.
                </p>
              </div>
            </div>
            <div className="horizenbar" />
          </li>
          <li>
            <div className="reviewwrap">
              <img src="" alt="" />
              <div className="reviewfield">
                <p className="reviewrating">4.3</p>
                <div className="reviewnamewrap">
                  <p className="reviewname">정은수</p>
                  <p className="reviewdate">2023-04-26</p>
                </div>
                <p className="reviewcontent">
                  리뷰내용이 들어갑니다.리뷰내용이 들어갑니다.리뷰내용이
                  들어갑니다.리뷰내용이 들어갑니다.리뷰내용이
                  들어갑니다.리뷰내용이 들어갑니다.리뷰내용이
                  들어갑니다.리뷰내용이 들어갑니다.리뷰내용이 들어갑니다.
                </p>
              </div>
            </div>
            <div className="horizenbar" />
          </li>
        </ul>
      </div>
    </section>
  );
}
