import "./ProductObjectPage.scss";
import ProductObjectCard from "../components/ProductObjectCard";

export default function ProductObjectPage() {
  return (
    <section className="productobjectpage">
      <h2 className="productobjecttitle">가구 or 주방 or 화장실 등</h2>
      <div className="btnwrap black radius10">
        <p>정렬</p>
      </div>
      <section className="productobjectsection">
        <div className="sectionleft">
          <div className="horizenbar" />
          <div className="clickmenubar">
            <div className="menubarwrap">
              <p className="menubartitle">카테고리</p>
              <img src="" alt="" />
            </div>
            <ul className="item">
              <li>가구</li>
              <li>주방 용품</li>
            </ul>
          </div>
          <h4 className="pricetitle">가격</h4>
          <div className="pricebar" />
        </div>
        <div className="sectionright">
          <ul className="popularproduct_wrap">
            <li>
              <ProductObjectCard />
            </li>
            <li>
              <ProductObjectCard />
            </li>
            <li>
              <ProductObjectCard />
            </li>
            <li>
              <ProductObjectCard />
            </li>
            <li>
              <ProductObjectCard />
            </li>
            <li>
              <ProductObjectCard />
            </li>
            <li>
              <ProductObjectCard />
            </li>
            <li>
              <ProductObjectCard />
            </li>
            <li>
              <ProductObjectCard />
            </li>
          </ul>
        </div>
      </section>
      <div className="numberbarwrap">
        <ul className="numberbar">
          <li>이전</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>다음</li>
        </ul>
      </div>
    </section>
  );
}
