import { Text } from "@/components/text/text";
import styles from "./certificat.module.css";

import { AnimatePresence, motion } from "framer-motion";
import { LiaCertificateSolid } from "react-icons/lia";
import CertificateList from "./certificate-list";
import { Certificate as CertificateType } from "@/services/certificate/certificat";
import UseWindowSize from "@/hooks/window.size";

interface CertificateProps {
  data: CertificateType[];
}

const Certificate: React.FC<CertificateProps> = ({ data }) => {
  const windowsWidth = UseWindowSize().width;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1, y: -50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1,
      }}
      viewport={{ once: true, amount: 0.3 }}
      className={`${styles.container} ${styles.bordered}`}
      id="myCertificates"
    >
      <div className={styles.header}>
        <LiaCertificateSolid size={64} className={styles.icon} />
        <Text.Title
          tag="h1"
          fontWeight="bold"
          fontFamily={""}
          fontSize={windowsWidth > 736 ? "28px" : "22px"}
          className={`lexend-deca ${styles.title}`}
        >
          Mes Diplômes & Certificats
        </Text.Title>
      </div>
      <div className={`lato ${styles.content}`}>
        <CertificateList data={data} />
      </div>
    </motion.div>
  );
};

export default Certificate;
