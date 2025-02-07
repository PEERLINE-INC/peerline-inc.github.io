/// <reference types="react" />
interface OffsetState {
    offsetX: number;
    offsetY: number;
    lastX: number;
    lastY: number;
    isPanning: boolean;
}
interface SizeState {
    width: number;
    height: number;
}
export default function usePinch(videoRef: React.RefObject<HTMLDivElement>): {
    offset: OffsetState;
    size: SizeState;
    currentScale: number;
    setScale: (scale: number) => void;
    setCurrentOffset: (x: number, y: number) => void;
};
export {};
