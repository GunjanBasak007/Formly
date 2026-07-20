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

type ResponseOverTime = {
    date: string;
    responses: number;
};

type Props = {
    data: ResponseOverTime[];
};

export function ResponsesOverTimeChart({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Responses Over Time</CardTitle>
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
                dataKey="responses"
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