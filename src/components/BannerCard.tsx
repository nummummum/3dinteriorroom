import { useNavigate } from "react-router-dom";
import "./BannerCard.scss";
export default function BannerCard(props: {
  imgUrl: string;
  title: string;
  btntitle: string;
  goUrl: string | null;
}) {
  let titleArr = splitTitle(props.title);
  const navigate = useNavigate();
  return (
    <section className="bannercard">
      <img src={props.imgUrl} alt="" />
      <div className="bannertitlewrap">
        {titleArr.map((item, index) => {
          return <h4 key={index + ": bannercard title"}>{item}</h4>;
        })}
      </div>
      <div
        className="btnwrap white"
        onClick={() => {
          if (props.goUrl != null) {
            navigate(props.goUrl);
          }
        }}
      >
        <p>{props.btntitle}</p>
      </div>
    </section>
  );

  function splitTitle(title: string) {
    return title.split("<br/>");
  }
}
