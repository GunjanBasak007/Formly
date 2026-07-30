import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "~/components/ui/empty";

import { Inbox } from "lucide-react";

type ResponseOverTime = {
  date: string;
  responses: number;
};

type Props = {
  data: ResponseOverTime[];
};

const cardClassName = `
  group
  rounded-2xl
  border
  border-border/60
  shadow-md
  transition-all
  duration-300
  hover:-translate-y-1
  hover:border-violet-300
  hover:shadow-xl
  dark:hover:border-violet-500/40
`;

export function ResponsesOverTimeChart({ data }: Props) {
  if (data.length === 0) {
    return (
      <Card className={cardClassName}>
        <CardHeader>
          <CardTitle className="text-xl font-bold tracking-tight">
            Responses Over Time
          </CardTitle>

          <CardDescription className="text-muted-foreground">
            Last 30 days
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Inbox />
              </EmptyMedia>

              <EmptyTitle>No responses yet</EmptyTitle>

              <EmptyDescription>
                Publish your form and collect submissions to see response trends
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cardClassName}>
      <CardHeader>
        <CardTitle className="text-xl font-bold tracking-tight">
          Responses Over Time
        </CardTitle>

        <CardDescription className="text-muted-foreground">
          Last 30 days
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={380}>
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 8,
              bottom: 10,
            }}
          >
            <CartesianGrid
              stroke="#ede9fe"
              strokeDasharray="4 4"
              vertical={false}
            />

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />

            <YAxis
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
              width={40}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "14px",
                border: "1px solid #ddd6fe",
                boxShadow: "0 12px 30px rgba(124, 58, 237, 0.15)",
              }}
              cursor={{
                stroke: "#7c3aed",
                strokeOpacity: 0.15,
              }}
              labelFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              }
            />

            <Line
              type="natural"
              dataKey="responses"
              stroke="#7c3aed"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#7c3aed",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 7,
                fill: "#7c3aed",
                stroke: "#ffffff",
                strokeWidth: 3,
              }}
              isAnimationActive
              animationDuration={900}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}