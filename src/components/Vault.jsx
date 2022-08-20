import styles from "../style";
import { vaultImg } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Vault = () => {

    let newVaultImgArr = vaultImg.slice(1);

    return (
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] text-center">
                <h2 className={styles.heading2}>
                    Community Vault
                </h2>
            </div>

            <div className="flex w-full relative flex-col md:flex-row  ">

                <div key={vaultImg[0].id} className=" shrink-0">
                    <img src={vaultImg[0].img} alt={vaultImg[0].alt} className={`hover:drop-shadow-4xl md:w-[500px] md:h-[500px] rounded-t-lg md:rounded-tr-none md:rounded-l-lg cursor-pointer`} />
                </div>

                <div className="flex flex-wrap   ">
                    {newVaultImgArr.map((item, index) => {
                        return (
                            <img key={item.id} src={item.img} alt={item.alt} className={`hover:drop-shadow-4xl w-[50%] md:w-[250px] md:h-[250px] cursor-pointer 
                                ${index === 2 && "md:rounded-tr-lg"}
                                ${index === 4 && "rounded-bl-lg md:rounded-none"}
                                ${index === 5 && "rounded-br-lg"}
                            `} />

                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Vault