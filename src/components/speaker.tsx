import { cn } from "@/lib/utils.ts";
import Image from "next/image";
import { SessionType } from "@/lib/session.ts";

export const Speaker = ({
  speaker,
  compact,
}: {
  speaker: SessionType["speakers"][number];
  compact?: boolean;
}) => {
  const speakerComp = (
    <div className={cn("flex gap-4 w-full text-start", compact && "gap-2")}>
      {speaker.image && (
        <Image
          src={speaker.image}
          alt={speaker.name}
          className={cn(
            "h-[3lh] object-cover w-auto rounded-full aspect-square",
            compact && "h-[2lh]"
          )}
        />
      )}
      <div className="flex flex-col justify-center">
        <p>{speaker.name}</p>
        <i className={cn("text-primary/75", compact && "text-sm")}>
          {speaker.bio}
        </i>
      </div>
    </div>
  );

  if (speaker.link)
    return (
      <a
        href={speaker.link}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={speaker.name}
      >
        {speakerComp}
      </a>
    );

  return speakerComp;
};
