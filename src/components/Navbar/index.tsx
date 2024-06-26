"use client"

import { useWallet } from "@initia/react-wallet-widget";
import styles from "./style.module.css";
import { BiLogInCircle, BiWalletAlt } from "react-icons/bi";

export default function Navbar() {
  const { onboard, account, view } = useWallet()

  return <nav className={styles.component}>
    <span className={styles.siteName}>init.place</span>
    <div className={styles.blankSpace}/>
    {account == null
      ? <button onClick={() => onboard()}><BiLogInCircle size={24}/></button>
      : <button onClick={view}><BiWalletAlt size={24}/></button>}
  </nav>
}
