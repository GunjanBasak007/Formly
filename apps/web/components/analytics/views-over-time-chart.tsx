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

type ViewOverTime = {
  date: string;
  views: number;
};

type Props = {
  data: ViewOverTime[];
};

export function ViewsOverTimeChart({ data }: Props) {
  
  if (data.length === 0) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Views Over Time</CardTitle>
        <CardDescription>
          Last 30 days
        </CardDescription>
      </CardHeader>

      <CardContent className="h-[380px]">
        <Empty className="h-full">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Inbox />
            </EmptyMedia>

            <EmptyTitle>No views yet</EmptyTitle>

            <EmptyDescription>
              Share your published form to start tracking views
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </CardContent>
    </Card>
  );
}

  return (
    <Card>
      <CardHeader>
        <CardTitle>Views Over Time</CardTitle>
        <CardDescription>
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
                    left: 0,
                    bottom: 10,
                }}
        >
            <CartesianGrid
                strokeDasharray="4 4"
                vertical={false}
            />

            <XAxis
                dataKey="date"
                tickLine={false}
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
            />

            <Tooltip
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
                dataKey="views"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                isAnimationActive
                animationDuration={700}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
