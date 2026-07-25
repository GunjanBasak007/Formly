import { FEATURES_CONTENT } from "./constant";
import { FeatureCard } from "./feature-card";

export function FeaturesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {FEATURES_CONTENT.features.map((feature) => (
        <FeatureCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}