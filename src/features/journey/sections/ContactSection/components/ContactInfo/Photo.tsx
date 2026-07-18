import Image from "next/image";

export default function Photo() {
  return (
    <div className="relative w-[210px] h-[260px] md:w-[320px] md:h-[400px]">
      <Image
        src="/images/img-contact-profile.jpg"
        alt="my photo"
        fill
        sizes="300px"
        priority
      />
    </div>
  );
}
