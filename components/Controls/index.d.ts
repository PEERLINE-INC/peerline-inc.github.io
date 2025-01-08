import { default as ReactPlayer } from 'react-player';

interface ControlsProps {
    playerRef: React.RefObject<ReactPlayer | null>;
    onBack?: () => void;
    onClickTagButton?: () => void;
}
export declare function Controls(props: ControlsProps): import("react/jsx-runtime").JSX.Element;
export {};
