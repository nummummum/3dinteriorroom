import { useNavigate } from "react-router-dom";
import "./ProductObjectCard.scss";
export default function ProductObjectCard() {
  const navigate = useNavigate();
  return (
    <div
      className="objectcardwrap"
      onClick={() => {
        navigate("./detail");
      }}
    >
      <img src="" alt="" />
      <h4 className="title">테스트 티셔츠</h4>
      <p className="price">12,000원</p>
    </div>
  );
}
