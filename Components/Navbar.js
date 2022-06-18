import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo/Logo-up.svg";
import styles from "../styles/navigation.module.scss";
import style from "../styles/home.module.scss";
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
