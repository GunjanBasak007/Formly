import { BUILT_FOR_EVERYONE_CONTENT } from "./constant";
import { AudienceCard } from "./audience-card";

export function AudienceGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {BUILT_FOR_EVERYONE_CONTENT.audiences.map((audience) => (
        <AudienceCard
          key={audience.title}
          icon={audience.icon}
          title={audience.title}
          description={audience.description}
        />
      ))}
    </div>
  );
}