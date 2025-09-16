import { MorphingText } from "@/components/textAnimations/morphing-text";

interface PageHeaderProps {
  texts: readonly string[];
  className?: string;
}

export const PageHeader = ({ texts, className = "" }: PageHeaderProps) => (
  <div className={`mb-12 ${className}`}>
    <MorphingText
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
      texts={texts}
    />
  </div>
);
