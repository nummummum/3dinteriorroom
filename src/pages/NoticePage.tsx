import PromotionCard from "../components/PromotionCard";
import "./NoticePage.scss";

export default function NoticePage() {
  return (
    <section className="noticepage">
      <div className="space" />
      <h4 className="title">프로모션</h4>
      <ul className="promotionwrap">
        <li>
          <PromotionCard
            imgUrl="images/promotioncard1.jpg"
            title="프로모션이름1"
            dateStart="0000-00-00"
            dateEnd="1111-11-11"
          />
        </li>
        <li>
          <PromotionCard
            imgUrl="images/promotioncard2.jpg"
            title="프로모션이름2"
            dateStart="1111-11-11"
            dateEnd="2222-22-22"
          />
        </li>
        <li>
          <PromotionCard
            imgUrl="images/promotioncard3.jpg"
            title="프로모션이름3"
            dateStart="2222-22-22"
            dateEnd="3333-33-33"
          />
        </li>
        <li>
          <PromotionCard
            imgUrl="images/promotioncard4.jpg"
            title="프로모션이름4"
            dateStart="3333-33-33"
            dateEnd="4444-44-44"
          />
        </li>
      </ul>
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
