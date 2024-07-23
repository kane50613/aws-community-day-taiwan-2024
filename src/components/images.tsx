import { Marquee } from "@/components/magicui/marquee";
import { FadeText } from "@/components/magicui/fade-text";
import { BlurIn } from "@/components/magicui/blur-in";
import Image from "next/image";

const images = [
  "/310453674_127783883379847_6065828499053974119_n_50.webp",
  "/309837317_127784460046456_1773663882536643444_n_50.webp",
  "/309980049_127784513379784_1225642072973866308_n_50.webp",
  "/311248617_127784140046488_84216263115604009_n_50.webp",
  "/311337622_127784010046501_3066697702341383213_n_50.webp",
];

export const Images = () => (
  <FadeText direction="up">
    <Marquee className="mt-16 md:mt-32 w-full">
      {images.map((url, i) => (
        <BlurIn
          key={i}
          delay={i * 0.2}
          className="rounded-md aspect-video overflow-hidden w-56 md:w-96"
        >
          <Image
            unoptimized
            width={1024}
            height={683}
            key={i}
            loading={i <= 1 ? "eager" : "lazy"}
            priority={i <= 1}
            src={url}
            className="object-cover"
            alt="Image"
          />
        </BlurIn>
      ))}
    </Marquee>
  </FadeText>
);
