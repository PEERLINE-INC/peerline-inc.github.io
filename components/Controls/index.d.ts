import { default as Player } from 'video.js/dist/types/player';
import { createPlayerStore } from '../../store/playerStore';

interface ControlsProps {
    playerStore: ReturnType<typeof createPlayerStore>;
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
    onPlayCallback?: () => void;
}
export declare function Controls(props: ControlsProps): import("react/jsx-runtime").JSX.Element;
export {};
