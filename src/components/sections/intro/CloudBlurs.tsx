import { CLOUD_BLUR_DATA } from "@/constants/clouds";
import CloudBlur from "@/components/common/CloudBlur";

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
