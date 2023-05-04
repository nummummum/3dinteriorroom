import InteriorObjectCard from "../components/InteriorObjectCard";

export default function InteriorPage() {
  return (
    <section className="interiorpage">
      <div className="inner">
        <div className="canvas"></div>

        <div className="bottom_bar">
          <p className="bartitle">방 제목</p>
          <input
            className="bartitleinput"
            type="text"
            placeholder="저장할 방 이름을 입력해주세요."
          />
          <div className="btnlight">조명</div>
          <div className="btnroomlight">밝기</div>
          <div className="btnwrap navy reverse">
            <p>적용하기</p>
          </div>
        </div>

        <div>
          <ul className="interiormenubar">
            <li>
              <div className="btnwrap black radius25">
                <p>전체</p>
              </div>
            </li>
            <li>
              <div className="btnwrap black radius25">
                <p>테이블</p>
              </div>
            </li>
            <li>
              <div className="btnwrap black radius25">
                <p>선반</p>
              </div>
            </li>
            <li>
              <div className="btnwrap black radius25">
                <p>침대</p>
              </div>
            </li>
            <li>
              <div className="btnwrap black radius25">
                <p>책상</p>
              </div>
            </li>
            <li>
              <div className="btnwrap black radius25">
                <p>옷장</p>
              </div>
            </li>
            <li>
              <div className="btnwrap black radius25">
                <p>서랍</p>
              </div>
            </li>
            <li>
              <div className="btnwrap black radius25">
                <p>소파</p>
              </div>
            </li>
            <li>
              <div className="btnwrap black radius25">
                <p>신발장</p>
              </div>
            </li>
            <li>
              <div className="btnwrap black radius25">
                <p>화장대</p>
              </div>
            </li>
          </ul>
          <ul className="interiorobject">
            <li>
              <InteriorObjectCard />
            </li>
            <li>
              <InteriorObjectCard />
            </li>
            <li>
              <InteriorObjectCard />
            </li>
            <li>
              <InteriorObjectCard />
            </li>
            <li>
              <InteriorObjectCard />
            </li>
            <li>
              <InteriorObjectCard />
            </li>
            <li>
              <InteriorObjectCard />
            </li>
            <li>
              <InteriorObjectCard />
            </li>
            <li>
              <InteriorObjectCard />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
