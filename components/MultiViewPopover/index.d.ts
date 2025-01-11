interface MultiViewPopoverProps {
    isShow: boolean;
    seekTo: (seconds: number) => void;
    getCurrentSeconds: () => number;
}
export declare const MultiViewPopover: ({ isShow, seekTo, getCurrentSeconds }: MultiViewPopoverProps) => import("react/jsx-runtime").JSX.Element;
export {};
