import Marquee from "@/components/magicui/marquee.tsx";
import { FadeText } from "@/components/magicui/fade-text.tsx";
import BlurIn from "@/components/magicui/blur-in.tsx";

export const Images = () => (
  <FadeText direction="up">
    <Marquee className="mt-16 md:mt-32 w-full">
      {new Array(5).fill(0).map((_, i) => (
        <BlurIn
          key={i}
          delay={i * 0.2}
          className="rounded-md aspect-video overflow-hidden w-56 md:w-96"
        >
          <img
            key={i}
            src={`https://picsum.photos/seed/images-${i + 1}/720/480`}
            className="object-cover"
            alt="Image"
          />
        </BlurIn>
      ))}
    </Marquee>
  </FadeText>
);
