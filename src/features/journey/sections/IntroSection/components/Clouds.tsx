import { INTRO_CLOUD_DATA } from "../../../constants/clouds";
import Cloud from "../../../components/Cloud";

export default function Clouds() {
  return (
    <>
      {INTRO_CLOUD_DATA.map((cloud, idx) => (
        <Cloud
          key={`intro-cloud-${idx}`}
          className={cloud.className}
          priority={idx === 0}
        />
      ))}
    </>
  );
}
