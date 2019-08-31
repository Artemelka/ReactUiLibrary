export interface ProgressProps { percent: number; }

export interface ProgressCircularProps extends ProgressProps {
    darkColor?: boolean;
    strokeWidth: number;
    radius: number;
}
