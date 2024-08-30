import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type MetricCardProps = {
  title: string;
  value: string;
  change: number;
};
