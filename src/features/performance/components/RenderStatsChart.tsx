import { RenderCountBadge } from "@/shared/components/RenderCountBadge";
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
} from "@visx/xychart";

const data = [...Array(10)].map((_, i) => ({
  cycle: i + 1,
  renders: Math.floor(Math.random() * 100),
}));

const accessors = {
  xAccessor: (d: any) => d.cycle,
  yAccessor: (d: any) => d.renders,
};

export default function RenderStatsChart() {
  return (
    <div className="h-80 relative">
      <span className="absolute -top-4 right-1 text-xs text-white px-1 rounded">
        <RenderCountBadge />
      </span>
      <XYChart
        height={400}
        xScale={{ type: "band" }}
        yScale={{ type: "linear" }}
      >
        <AnimatedAxis orientation="left" />
        <AnimatedAxis orientation="bottom" />
        <AnimatedGrid columns={false} numTicks={4} />
        <AnimatedLineSeries dataKey="State Chart" data={data} {...accessors} />
        <Tooltip
          snapTooltipToDatumX
          snapTooltipToDatumY
          showVerticalCrosshair
          showSeriesGlyphs
          renderTooltip={({ tooltipData }) => (
            <div>
              <p>{accessors.xAccessor(tooltipData?.nearestDatum?.datum)}</p>
              <p>
                Renders: {accessors.yAccessor(tooltipData?.nearestDatum?.datum)}
              </p>
            </div>
          )}
        />
      </XYChart>
    </div>
  );
}
