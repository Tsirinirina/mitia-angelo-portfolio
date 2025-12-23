import { DateFormat } from "@/utils/date.utils";
import Experience from "../experience/experience";
import styles from "./experience-container.module.css";
import { Text } from "@/components/text/text";
import { Experience as ExperienceType } from "@/services/experience/experience";
interface ExperienceContainerProps {
  data: ExperienceType[];
}

const ExperienceContainer: React.FC<ExperienceContainerProps> = ({ data }) => {
  return (
    <div className={styles.container} id="experience">
      <div className={styles.title}>
        <Text.Title
          fontFamily={""}
          fontSize="42px"
          tag="h2"
          className={`gabarito ${styles.subtitle}`}
        >
          Expériences Professionnelles
        </Text.Title>
      </div>
      {data.map((item, _i) => (
        <Experience
          key={`xp_${_i}`}
          position={item.position}
          startDate={new DateFormat(item.startDate).toFullYear().toString()}
          endDate={
            item.endDate
              ? new DateFormat(item.endDate).toFullYear().toString()
              : "Présent"
          }
          companyName={item.companyName}
          location={item.location}
          contractType={item.contractType}
          descriptions={item.description}
          tasks={item.tasks}
          technoList={item.technologiesUsed}
          defaultCollapsed={_i === 0 ? true : false}
        />
      ))}
    </div>
  );
};

export default ExperienceContainer;
