import { clients } from "../constants";
import styles from "../style";
import { partners } from "../assets";

const Clients = () => (
  <section className={`${styles.flexCenter} mt-[-80px]`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {/* {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))} */}
      <div className={`flex-1 ${styles.flexCenter} sm:min-w-[592px] min-w-[320px]`}>
        <img src={partners} alt="client_logo" className="sm:w-[592px] w-[300px] object-contain" />
      </div> 
    </div>
  </section>
);

export default Clients;
