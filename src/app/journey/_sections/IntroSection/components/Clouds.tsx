import { INTRO_CLOUD_DATA } from "../../../_constants/clouds";
import Cloud from "../../../_components/Cloud";

export default function Clouds() {
  return (
    <>
      {INTRO_CLOUD_DATA.map((cloud, idx) => (
        <Cloud key={`intro-cloud-${idx}`} className={cloud.className} />
      ))}
    </>
  );
}
