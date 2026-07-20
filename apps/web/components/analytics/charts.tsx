import { ResponsesOverTimeChart } from "./responses-over-time-chart";

type ResponseOverTime = {
  date: string;
  responses: number;
};

type Props = {
  responsesOverTime: ResponseOverTime[];
};

export function Charts({ responsesOverTime }: Props) {
  return (
    <ResponsesOverTimeChart
      data={responsesOverTime}
    />
  );
}