
import styles from "../assets/styles/Homepage.module.css"
import { useNavigate } from 'react-router-dom';
import { useOwnOutlet } from '../Hooks/useOwnOutlet'
import PauseMenu from '../Components/PauseMenu';

const HomePage2 = () => {

    const {isOpen, setIsOpen} = useOwnOutlet();

    const navigate = useNavigate();


    return (

      <div className={styles.game}>

        <div className={styles.background}/>

          <div className={styles.main_left}>
            <div
              className={styles.goRIGHT_btn}
              onClick={() => navigate("/game")}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" viewBox="0 0 57 60" fill="none">
            <path d="M47.8285 32.8284C49.3906 31.2663 49.3906 28.7337 47.8285 27.1716L22.3727 1.71573C20.8106 0.153632 18.2779 0.153632 16.7158 1.71573C15.1537 3.27783 15.1537 5.81049 16.7158 7.37258L39.3432 30L16.7158 52.6274C15.1537 54.1895 15.1537 56.7222 16.7158 58.2843C18.2779 59.8464 20.8106 59.8464 22.3727 58.2843L47.8285 32.8284ZM45 30V34H45.0001V30V26H45V30Z" fill="#131522"/>
            </svg>
            </div>

            <button className="btn-menu" onClick={() => setIsOpen(true)}/>
              {isOpen && ( <PauseMenu onClose={() => setIsOpen(false)}/> )}

            <div className={styles.games}>
              <button className={`${styles.building} ${styles.food}`} onClick={() => navigate("/stall/foodbar")}/>
              <button className={`${styles.building} ${styles.slots}`} onClick={() => navigate("/stall/slots")}/>
              <button className={`${styles.building} ${styles.blackjack}`} onClick={() => navigate("/stall/blackjack")}/>
              <button className={`${styles.building} ${styles.whackamole}`} onClick={() => navigate("/stall/whackamole")}/>
              <button className={`${styles.building} ${styles.pexeso}`} onClick={() => navigate("/stall/memorymatch")}/> {/* nema routu udelanou*/}
               {/* nema routu udelanou*/}
            </div>

            <div className={styles.NPC}>
              <span className={`${styles.npc_1} ${styles.girlindress}`}></span>
            </div> 

          </div>

        </div>
    );
};
export default HomePage2;