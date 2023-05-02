import { useNavigate } from "react-router-dom";
import "./ProductObjectSimilarCard.scss";

export default function ProductObjectSimilarCard() {
  const navigate = useNavigate();
  return (
    <div className="objectsimilarcardwrap">
      <img src="" alt="" />
      <h4 className="title">테스트 티셔츠</h4>
      <p className="price">12,000원</p>
      <div className="functionwrap">
        <div className="cartfunction">
          <img src="" alt="" />
        </div>
        <div className="heartfunction">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
