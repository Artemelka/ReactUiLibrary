import { ProgressCircularProps, ProgressProps } from '../../../../../elements/progress/types';

type IdProps = { id: string };
type Type = { type: string; };

export type ExampleProps = ProgressProps & IdProps;

export type CircularExampleProps = ProgressCircularProps & IdProps;

export type ProgressState = { value: number };

export type ComponentProps = ProgressProps & Type;

export type ComponentCircularProps = ProgressCircularProps & Type;
