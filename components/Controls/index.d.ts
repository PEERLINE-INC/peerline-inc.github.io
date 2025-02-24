import { default as Player } from 'video.js/dist/types/player';

interface ControlsProps {
    playerRef: React.RefObject<Player | null>;
    airplayRef: React.RefObject<{
        start: () => void;
    } | null>;
    chromecastRef: React.RefObject<{
        start: () => void;
    } | null>;
    onBack?: () => void;
    onClickTagButton?: () => void;
    seekTo: (seconds: number, type: 'seconds' | 'fraction') => void;
    seekToLive: () => void;
}
export declare function Controls(props: ControlsProps): import("react/jsx-runtime").JSX.Element;
export {};
