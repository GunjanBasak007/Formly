import { SOCIAL_PROOF_CONTENT } from "./constant";
import { SocialProofCard } from "./social-proof-card";

export function SocialProofStats() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
      {SOCIAL_PROOF_CONTENT.stats.map((stat) => (
        <SocialProofCard
          key={stat.title}
          icon={stat.icon}
          title={stat.title}
          description={stat.description}
        />
      ))}
    </div>
  );
}