import "./PromotionCard.scss";
export default function PromotionCard(props: {
  imgUrl: string;
  title: string;
  dateStart: string;
  dateEnd: string;
}) {
  return (
    <div className="promotioncardwrap">
      <div className="cardimg">
        <img src={props.imgUrl} alt="" />
      </div>
      <div className="cardtext">
        <div className="cardleft">
          <h4 className="promotiontitle">{props.title}</h4>
          <p className="promotiondate">
            이벤트 기간 : {props.dateStart} ~ {props.dateEnd}
          </p>
        </div>
        <p className="cardright">진행</p>
      </div>
    </div>
  );
}
