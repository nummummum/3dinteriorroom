import BannerCard from "../components/BannerCard";
import ProductObjectCard from "../components/ProductObjectCard";
import "./MainPage.scss";
export default function MainPage() {
  return (
    <section className="mainpage">
      <BannerCard
        title="A-Shopping 의 신제품들을 한 번에.<br/>
        지금 만나보세요"
        btntitle="Buy now"
        imgUrl="images/bannercard1.jpg"
      />
      <h4 className="main_subtitle">인기 상품</h4>
      <div className="popular_wrap">
        <div className="image_first">
          <img src="" alt="" />
        </div>
        <div className="image_second">
          <img src="" alt="" />
        </div>
        <div className="image_third">
          <img src="" alt="" />
        </div>
      </div>
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
      </ul>
      <div className="space"></div>
      <div className="btncenter">
        <div className="btnwrap black reverse">
          <p>더보기</p>
        </div>
        <div className="space"></div>
      </div>
      <BannerCard
        title="자신만의 인테리어 룸을 만들 수 있습니다<br/>그리고 나눌 수 있습니다"
        btntitle="Get Started"
        imgUrl="/images/bannercard2.jpg"
      />
      <h4 className="main_subtitle">인기 쇼룸</h4>
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
      </ul>
      <div className="space"></div>
      <div className="btncenter">
        <div className="btnwrap black reverse">
          <p>더보기</p>
        </div>
      </div>
      <div className="space"></div>
    </section>
  );
}
