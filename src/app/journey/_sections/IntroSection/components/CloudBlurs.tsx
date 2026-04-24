import CloudBlur from "../../../_components/CloudBlur";
import { CLOUD_BLUR_DATA } from "../../../_constants/clouds";

export default function CloudBlurs() {
  return (
    <>
      {CLOUD_BLUR_DATA.map((cloud, idx) => (
        <CloudBlur
          key={`intro-cloud-blur-${idx}`}
          className={cloud.className}
        />
      ))}
    </>
  );
}
