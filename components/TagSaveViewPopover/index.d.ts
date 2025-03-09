import { createPlayerStore } from '../../store/playerStore';

interface TagSaveViewPopoverProps {
    playerStore: ReturnType<typeof createPlayerStore>;
    isShow: boolean;
    onSave?: () => void;
    onCancel?: () => void;
}
export declare const TagSaveViewPopover: (props: TagSaveViewPopoverProps) => import("react/jsx-runtime").JSX.Element;
export {};
