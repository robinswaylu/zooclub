import { dividerLogo } from "../assets";
import styles from "../style";

const Divider = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 relative z-[1]`}>
        <div className="absolute bg-primary z-[5] hidden sm:inline-block"> 
            <img src={dividerLogo} alt="zoo club logo" className="w-[auto] h-[200px]" />
        </div>
        <div className="overflow-hidden relative ">
            <h2 className='dividerAnimation font-oswald divider text-white hidden sm:inline-block text-[24px] font-bold whitespace-nowrap'>GM &nbsp;WAGMI &nbsp;HODL &nbsp;WE ALL GOING TO MAKE IT&nbsp; WEN WHITELIST&nbsp; LFG&nbsp; SER WE WILL MOON&nbsp; WEN MINT&nbsp; METAVERSE&nbsp; WEB3&nbsp;  FLOOR PRICE&nbsp; ETH&nbsp; APE IN RN&nbsp; PROBABLY NOTHING&nbsp; NEXT BIG NFT PORJECT&nbsp;
            </h2>
        </div>
    </section>
);

export default Divider;
