import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Abuzardev</div>
      <div className={styles.text}>
        Abuzar creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
