import { Marquee } from "@/components/magicui/marquee";
import { FadeText } from "@/components/magicui/fade-text";
import { BlurIn } from "@/components/magicui/blur-in";
import Image from "next/image";

export const Images = () => (
  <FadeText direction="up">
    <Marquee className="mt-16 md:mt-32 w-full">
      {new Array(5).fill(0).map((_, i) => (
        <BlurIn
          key={i}
          delay={i * 0.2}
          className="rounded-md aspect-video overflow-hidden w-56 md:w-96"
        >
          <Image
            unoptimized
            width={720}
            height={480}
            key={i}
            loading={i <= 1 ? "eager" : "lazy"}
            priority={i <= 1}
            src={`https://picsum.photos/seed/images-${i + 1}/560/315.webp`}
            className="object-cover"
            alt="Image"
          />
        </BlurIn>
      ))}
    </Marquee>
  </FadeText>
);
