import Image from "next/image";
import Link from "next/link";

const Section = () => {
  return (
    <>
      <section>
        <div className="video_container">
          <video muted loop autoPlay>
            <source src="/videos/main.mp4" />
          </video>
        </div>
        <Link href="tel:010-7762-0416">
          <button className="call_btn" value="call">
            전화문의
          </button>
        </Link>
        <div className="img_container">
          <Image
            src="/images/mainImage.jpg"
            alt="수원 인계동 1등 가라오케 홈페이지 메인이미지"
            width={600}
            height={400}
          />
        </div>
        <div className="explain_container">
          <h3>
            찾아주시는 고객님의 마음을 술잔처럼 채워주는 아름다운 술자리를
            약속드리겠습니다.
          </h3>
          <h3>
            수원 전지역 모든 업소를 고객님의 상황과 성향에 맞게<br></br>
            정확하고 빠르게 안내해드리겠습니다.
          </h3>
          <p style={{ color: "red", fontSize: "3rem", fontWeight: "bolder" }}>
            최저가 주대금액
          </p>
          <p style={{ color: "blue", fontSize: "3rem", fontWeight: "bolder" }}>
            수원 인계동 1등 가라오케
            <br />
            Suwon No.1 KARAOKE
          </p>
          <h3>ONLY 고정선수 항시 대기</h3>
          <h3>
            말보다는 행동으로 앞서 수원에서는 최고라는 것을 보여드리겠습니다.
          </h3>
          <ul>
            <li>
              무엇보다 고객 우선이라는 신념으로 허리를 굽힐 줄 아는
              동근실장입니다.
            </li>
            <li>
              현재 NO.1 수량 최고+수질 최고+물량 최고+국내 최저가를 자랑합니다.
            </li>
            <li>
              내가 있기 전 고객이 있기에 내가 이 자리에 있다고 생각하겠습니다.
            </li>
            <li>
              지금 이 자리는 고객님들께서 만들어 주셨다는 겸손함을 잃지
              않겠습니다.
            </li>
          </ul>
          <h3>
            <strong>항상 감사하는 마음으로 한 분 한 분 모시겠습니다.</strong>
          </h3>
        </div>
        <Link href="tel:010-7762-0416">
          <button className="call_btn" value="call">
            동근실장에게 전화
          </button>
        </Link>
        <div className="img_container">
          <Image
            src="/images/room_1.jpg"
            alt="수원 인계동 호스트바 가라오케 아가씨 룸 이미지"
            width={600}
            height={400}
          />
          <Image
            src="/images/room_2.jpg"
            alt="수원 인계동 호스트바 가라오케 아가씨 룸 이미지"
            width={600}
            height={400}
          />
        </div>
      </section>

      <style jsx>{`
        section {
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .video_container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .img_container {
          width: 80vw;
          height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .call_btn {
          width: 10vw;
          height: 5vh;
          margin-bottom: 6rem;
          font-weight: bolder;
          font-size: 1rem;
          background-color: black;
          color: white;
        }

        .explain_container {
          text-align: center;
          word-wrap: break-word;
        }

        li {
          font-weight: bold;
        }
        @media screen and (max-width: 728px) {
          video {
            width: 100%;
            height: 100%;
          }
          .call_btn {
            width: 30vw;
            font-weight: bold;
            font-size: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Section;
