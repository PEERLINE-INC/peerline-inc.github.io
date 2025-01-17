interface MultiViewPopoverProps {
    isShow: boolean;
    seekTo: (seconds: number, type: 'seconds' | 'fraction') => void;
    getCurrentSeconds: () => number;
}
export declare const MultiViewPopover: ({ isShow, seekTo, getCurrentSeconds }: MultiViewPopoverProps) => import("react/jsx-runtime").JSX.Element;
export {};
