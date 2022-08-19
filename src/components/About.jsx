import { features } from "../constants";
import styles, { layout } from "../style"; 

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-oswald font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                {content}
            </p>
        </div>
    </div>
);

const About = () => (
    <section id="features" className={`flex flex-col ${styles.paddingY}`}>
        <div className={`${styles.flexCenter} flex flex-center flex-col md:flex-row`}>
            <h2 className={`${styles.heading2} text-center md:text-left`}>
                ABOUT
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 md:max-w-[100%]`}>
                The Zoo Club was founded to provide NFT alpha, project analysis&promotion, knowledge sharing, Mandarin translation, nft education, project mint tools, and security warnings. Zhang Kai started this group with the goal of sharing his insights, bridging communities, and creating a family of talents. The Team has released our first series of 200 alpha passes (red envelopes), and will be building a long-term strategy that focuses on educating, rewarding, and expanding our community while bridging NFT culture worldwide.
            </p>

            {/* <Button text="Get Started" styles={`mt-10`} /> */}
        </div>

        {/* <div className={`flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-10 mt-10 relative flex-col md:flex-row`}>
            {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index} />
            ))}
        </div> */}
    </section>
);

export default About;
