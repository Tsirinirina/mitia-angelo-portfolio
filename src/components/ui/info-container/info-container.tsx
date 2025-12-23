import Citation from "../citation/citation";
import styles from "./info-container.module.css";
import SocialContainer from "../social-container/social-container";
import Downloader from "@/components/download/download";
import { Text } from "@/components/text/text";
import Typewriter from "@/components/typewriter/typewriter";
import ContactForm from "@/components/contact-form/contact-form";
import { IoLocationSharp } from "react-icons/io5";
import { Personal } from "@/services/personal/personal";
import { UrlType } from "@/services/url/url";

interface InfoContainerProps {
  personal: Personal;
  urls: UrlType[];
}

const InfoContainer: React.FC<InfoContainerProps> = ({ personal, urls }) => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.personal}>
        {/* <Biographie bio={data.description} /> */}
        <Citation>{personal.slogan}</Citation>
        <Typewriter
          typingSpeed={80}
          className={""}
          fontFamily="gabarito"
          fontSize="28px"
          fontWeight="400"
        >
          {`${personal.firstname} ${personal.lastname}`}
        </Typewriter>
        <Text.Subtitle fontSize="16px" fontFamily={"lato"} fontWeight="300">
          {personal.invitation}
        </Text.Subtitle>
        <Downloader title="Voir mon CV" link={urls[0].url} />
        <SocialContainer socials={[]} />
        <p className={styles.location}>
          <IoLocationSharp />
          {personal.city}, {personal.contry}
        </p>
        <Text.Subtitle fontSize="12px" fontFamily={"lato"} fontWeight="300">
          © {new Date().getFullYear()} Tsirinirina | Créé avec passion et
          professionnalisme.
        </Text.Subtitle>
      </div>
      <div className={styles.contactForm}>
        <ContactForm />
      </div>
    </div>
  );
};

export default InfoContainer;
