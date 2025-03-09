import { createPlayerStore } from '../../store/playerStore';

interface MultiViewPopoverProps {
    playerStore: ReturnType<typeof createPlayerStore>;
    isShow: boolean;
    getCurrentSeconds: () => number;
}
export declare const MultiViewPopoverSmall: ({ isShow, getCurrentSeconds, playerStore }: MultiViewPopoverProps) => import("react/jsx-runtime").JSX.Element;
export {};
