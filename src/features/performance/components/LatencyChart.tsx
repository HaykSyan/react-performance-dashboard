import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
} from "@visx/xychart";

const accessors = {
  xAccessor: (d: any) => d.iteration,
  yAccessor: (d: any) => d.ms,
};

export function LatencyChart({ samples }: { samples: number[] }) {
  const data = samples.map((ms, i) => ({ iteration: i + 1, ms }));

  return (
    <div className="h-80 ">
      <XYChart
        height={350}
        xScale={{ type: "band" }}
        yScale={{ type: "linear" }}
      >
        <AnimatedAxis orientation="left" />
        <AnimatedAxis orientation="bottom" />
        <AnimatedGrid columns={false} numTicks={4} />
        <AnimatedLineSeries
          dataKey="Latency Chart"
          data={data}
          {...accessors}
        />
        <Tooltip
          snapTooltipToDatumX
          snapTooltipToDatumY
          showVerticalCrosshair
          showSeriesGlyphs
          renderTooltip={({ tooltipData }) => (
            <div>
              <p>{accessors.xAccessor(tooltipData?.nearestDatum?.datum)}</p>
              <p>MS: {accessors.yAccessor(tooltipData?.nearestDatum?.datum)}</p>
            </div>
          )}
        />
      </XYChart>
    </div>
  );
}
