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
export default function usePinchZoomAndMove(videoRef: React.RefObject<HTMLDivElement>, zoomPluginRef: React.MutableRefObject<any>): {
    offset: OffsetState;
    size: SizeState;
    currentScale: number;
};
export {};
