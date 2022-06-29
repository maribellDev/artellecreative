import styles from "../styles/navigation.module.scss";
import { Navadapt } from "../Components/Navadapt";
import Menuui from "./Menuui";

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <Menuui />
      <Navadapt />
    </div>
  );
}
