import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={`${layout.sectionInfo}  items-center md:items-start md:text-left`}>
      <h2 className={`${styles.heading2} text-center md:text-left`}>
        The Zoo Club NFT
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center md:text-left`}>
      Mint Price: Free <br/>
Amount: 200<br/>
<br/>
The Zoo Club, Founded by ZhangKai Owning a Red Envelope will grant you access to our private alpha club. Mei cu dicat voluptaria volumus.
      </p>

      <Button text='Buy Now' styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[90%] h-[100%] hover:drop-shadow-4xl w-[50%] cursor-pointer" />
    </div>
  </section>
);

export default CardDeal;
