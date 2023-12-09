import { clients } from "../constants";
import styles from "../style";
import Testimonials from "./Testimonials";
import {Navbar, Footer} from '../components'
const Clients = () => (
  <>
  <div className= "bg-primary w-full overflow-hidden">
<div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.paddingX}`}>
          <Navbar />
        </div>
        
      </div>
  <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
  <div className={`${styles.boxWidth}`}>
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter}  w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  
  </section>
  <div>
  <Testimonials/>
  <Footer />
  </div>
  </div>
  </div>
  </div>
</>

);

export default Clients;