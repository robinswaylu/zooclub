import styles from "../style";
import { discount, robot, zooLand } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col relative sm:pb-80 sm:pt-28 py-6`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6  z-[1]`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full fadeinAnimation">
          <h1 className="flex-1 font-oswald font-semibold ss:text-[42px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Welcome to the <br className="sm:block hidden" />{" "}
            <span className="text-gradient ss:text-[116px]">ZOO CLUB</span>{" "}
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 md:mt-0 md:max-w-[420px] fadeinAnimation`}>
          Our team of experts uses a unique methodology to identify the NFT trend. We examine team behind the project and provide first hand alpha.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter}  relative md:absolute md:top-[-100px] md:right-[-320px]`}>
        <img src={zooLand} alt="zoo land nft" className="w-[100%] h-[100%] relative md:w-[80%] " />
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />  */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
