
interface ClipViewPopoverProps {
    seekTo: (seconds: number, type: 'seconds' | 'fraction') => void;
    onChangeClipDuration: (data: number[]) => void;
    isShow: boolean;
    setValuesRef?: React.MutableRefObject<((values: number[]) => void) | null>;
    onSave?: () => void;
}
export declare const ClipViewPopover: (props: ClipViewPopoverProps) => import("react/jsx-runtime").JSX.Element;
export {};
