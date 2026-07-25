import { SOCIAL_PROOF_CONTENT } from "./constant";
import { SocialProofCard } from "./social-proof-card";

export function SocialProofStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {SOCIAL_PROOF_CONTENT.stats.map((stat) => (
        <SocialProofCard
          key={stat.title}
          icon={stat.icon}
          title={stat.title}
          value={stat.value}
        />
      ))}
    </div>
  );
}