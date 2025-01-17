import { default as Player } from 'video.js/dist/types/player';

interface ControlsProps {
    playerRef: React.RefObject<Player | null>;
    onBack?: () => void;
    onClickTagButton?: () => void;
    seekTo: (seconds: number, type: 'seconds' | 'fraction') => void;
}
export declare function Controls(props: ControlsProps): import("react/jsx-runtime").JSX.Element;
export {};
