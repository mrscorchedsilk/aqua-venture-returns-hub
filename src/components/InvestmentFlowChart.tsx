
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, ReferenceArea, ResponsiveContainer } from 'recharts';
import { Button } from "@/components/ui/button";
import { Download, PlayCircle, PauseCircle } from "lucide-react";
import { ChartContainer } from "@/components/ui/chart";

interface DataPoint {
  month: string;
  value: number;
  phase?: string;
  annotation?: string;
}

const data: DataPoint[] = [
  { month: 'Q1 25', value: 12, phase: 'investment', annotation: 'First Investment (₹12L)' },
  { month: 'Q2 25', value: 17, phase: 'rampup' },
  { month: 'Q3 25', value: 22, phase: 'rampup', annotation: 'In-house feed & management' },
  { month: 'Q4 25', value: 27, phase: 'market' },
  { month: 'Q1 26', value: 32, phase: 'market', annotation: 'Premium pricing starts' },
  { month: 'Q2 26', value: 37, phase: 'returns' },
  { month: 'Q3 26', value: 42, phase: 'returns' },
  { month: 'Q4 26', value: 47, phase: 'returns', annotation: '15% payout (Nov-Jan)' },
  { month: 'Q1 27', value: 52, phase: 'principal' },
  { month: 'Q4 27', value: 57, phase: 'principal', annotation: 'Principal returned (₹32L)' }
];

const InvestmentFlowChart = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [activePhase, setActivePhase] = useState<string | null>(null);

  const config = {
    investment: { color: '#22c55e' },
    rampup: { color: '#3b82f6' },
    market: { color: '#8b5cf6' },
    returns: { color: '#f59e0b' },
    principal: { color: '#ef4444' }
  };

  const handleMouseEnter = (phase: string) => {
    setActivePhase(phase);
  };

  const handleMouseLeave = () => {
    setActivePhase(null);
  };

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8">
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleAnimation}
          className="gap-2"
        >
          {isPlaying ? (
            <>
              <PauseCircle className="h-4 w-4" />
              Pause
            </>
          ) : (
            <>
              <PlayCircle className="h-4 w-4" />
              Play
            </>
          )}
        </Button>
        {showDownload && (
          <Button
            variant="default"
            size="sm"
            className="animate-pulse gap-2"
          >
            <Download className="h-4 w-4" />
            Download Pitch
          </Button>
        )}
      </div>

      <ChartContainer
        className="h-[400px] w-full"
        config={config}
      >
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis
            dataKey="month"
            tick={{ fill: '#6b7280' }}
            tickLine={{ stroke: '#6b7280' }}
          />
          <YAxis
            tick={{ fill: '#6b7280' }}
            tickLine={{ stroke: '#6b7280' }}
            label={{ value: 'Portfolio Value (₹ Lakhs)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload as DataPoint;
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-md">
                    <p className="font-medium">{data.month}</p>
                    <p className="text-sm text-muted-foreground">₹{data.value}L</p>
                    {data.annotation && (
                      <p className="text-sm text-primary">{data.annotation}</p>
                    )}
                  </div>
                );
              }
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6, fill: "#047857" }}
          />
          {data.map((point, index) => {
            if (point.annotation) {
              return (
                <ReferenceLine
                  key={index}
                  x={point.month}
                  stroke={config[point.phase as keyof typeof config].color}
                  label={{
                    value: point.annotation,
                    position: 'top',
                    fill: config[point.phase as keyof typeof config].color
                  }}
                />
              );
            }
            return null;
          })}
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default InvestmentFlowChart;
