import { default as React } from '../../../node_modules/react';

interface RangeSliderProps {
    value: number[];
    min: number;
    max: number;
    onChange?: (value: number[]) => void;
    onDragStart?: (value: number[]) => void;
    onDragEnd?: (value: number[]) => void;
    onChangeEnd?: (value: number[]) => void;
    minDistance?: number;
    maxDistance?: number;
    step?: number;
    isPlayheadShow?: boolean;
    playheadPercent?: number;
}
export declare const RangeSlider: React.FC<RangeSliderProps>;
export {};
