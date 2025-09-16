"use client";

import { memo } from "react";
import { Card, CardFooter, Image } from "@heroui/react";

import { HighlightText } from "@/components/textAnimations/highlight-text";
import { SplittingText } from "@/components/textAnimations/splitting-text";
import { ProfileCardProps } from "@/components/about/types";

export const ProfileCard = memo(function ProfileCard({
  image,
  name,
  title,
  description,
}: ProfileCardProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto p-0 mb-12 rounded-2xl dark:shadow-neutral-700 shadow-md overflow-hidden bg-white/90 dark:bg-black/60">
      <div className="flex flex-col items-center gap-6 p-6">
        
        {/* Profile Photo */}
        <div className="w-[260px] h-[320px] relative">
          <Card isFooterBlurred className="w-full h-full rounded-xl overflow-hidden">
            <Image
              alt="Profile photo"
              className="z-0 object-cover w-full h-full"
              src={image}
            />
            <CardFooter className="absolute bg-black/50 bottom-0 z-10 border-t border-white/20">
              <div className="flex flex-col text-white">
                <HighlightText className="text-lg font-semibold" text={name} />
                <p className="text-sm text-white/80">{title}</p>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Description BELOW photo */}
        <div className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-xl text-center">
          {description.map((paragraph, index) => (
            <p key={index} className="mb-2">
              <SplittingText
                delay={index * 300}
                inView={true}
                inViewOnce={true}
                motionVariants={{ stagger: 0.06 }}
                text={paragraph}
                type="words"
              />
            </p>
          ))}
        </div>
      </div>
    </Card>
  );
});
