import styles from '../style';

import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";
import { useNavigate } from 'react-router-dom';

const Home = () => (
    <div className= "bg-primary w-full overflow-hidden">

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.paddingX}`}>
          <Navbar />
        </div>
        
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>

        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>

      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>

        <div className={`${styles.boxWidth}`}>
          <Stats />
          {/* <Business />
          <Billing />
          <CardDeal />
          <Testimonials /> */}
          {/* <Clients /> */}
          <CTA />
          <Footer />
        </div>

      </div>

    </div>
  );

export default Home

