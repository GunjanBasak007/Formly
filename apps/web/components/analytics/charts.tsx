import { ResponsesOverTimeChart } from "./responses-over-time-chart";
import { ViewsOverTimeChart } from "./views-over-time-chart";

type ResponseOverTime = {
  date: string;
  responses: number;
};

type Props = {
  responsesOverTime: ResponseOverTime[];
  viewsOverTime: ViewOverTime[];
};

type ViewOverTime = {
  date: string;
  views: number;
};

export function Charts({ 
  responsesOverTime,
  viewsOverTime,
 }: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <ResponsesOverTimeChart
        data={responsesOverTime}
      />

      <ViewsOverTimeChart
      data={viewsOverTime}
    />
    </div>
    
  );
}