import "./BannerCard.scss";
export default function BannerCard(props: {
  imgUrl: string;
  title: string;
  btntitle: string;
}) {
  let titleArr = splitTitle(props.title);
  return (
    <section className="bannercard">
      <div className="bannertitlewrap">
        {titleArr.map((item, index) => {
          return <h4 key={index + ": bannercard title"}>{item}</h4>;
        })}
      </div>
      <div className="btnwrap white">
        <p>{props.btntitle}</p>
      </div>
    </section>
  );

  function splitTitle(title: string) {
    return title.split("<br/>");
  }
}
