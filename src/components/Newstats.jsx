import { stats } from "../constants";
import styles from "../style";

const Newstats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 relative z-[1]`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center  flex-row md:flex-col m-3`} >
        <h4 className="font-oswald font-semibold xs:text-[48px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white md:mb-2">
          {stat.value}
        </h4>
        <p className="font-oswald font-semibold xs:text-[22px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Newstats;
