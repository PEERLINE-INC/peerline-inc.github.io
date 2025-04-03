import { OnClickAddTagEventObject } from './interfaces';
import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../../node_modules/react').ForwardRefExoticComponent<import('./interfaces').HogakPlayerProps & import('../../../node_modules/react').RefAttributes<unknown>>;
    parameters: {
        layout: string;
    };
    argTypes: {
        title: {
            defaultValue: string;
            description: string;
            type: "string";
        };
        isLive: {
            defaultValue: boolean;
            description: string;
            type: "boolean";
        };
        disablePlayer: {
            defaultValue: boolean;
            description: string;
            type: "boolean";
        };
        url: {
            defaultValue: string;
            description: string;
            type: "string";
        };
        thumbnailUrl: {
            defaultValue: string;
            description: string;
            type: "string";
        };
        isPanorama: {
            defaultValue: boolean;
            description: string;
            type: "boolean";
        };
        width: {
            defaultValue: number;
            description: string;
            control: {
                type: string;
            };
        };
        height: {
            defaultValue: number;
            description: string;
            control: {
                type: string;
            };
        };
        isPlay: {
            defaultValue: string;
            description: string;
            type: "boolean";
        };
        multiViewSources: {
            defaultValue: string;
            description: string;
            type: {
                name: "array";
                value: {
                    name: "object";
                    value: {
                        thumbnailUrl: {
                            name: "string";
                        };
                        title: {
                            name: "string";
                        };
                        url: {
                            name: "string";
                        };
                        isPanorama: {
                            name: "boolean";
                        };
                    };
                };
            };
        };
        tags: {
            defaultValue: string;
            description: string;
            type: {
                name: "array";
                value: {
                    name: "object";
                    value: {
                        id: {
                            name: "string";
                        };
                        seconds: {
                            name: "number";
                        };
                        title: {
                            name: "string";
                        };
                        iconUrl: {
                            name: "string";
                        };
                    };
                };
            };
        };
        tagMenus: {
            defaultValue: string;
            description: string;
            type: {
                name: "array";
                value: {
                    name: "object";
                    value: {
                        id: {
                            name: "string";
                        };
                        title: {
                            name: "string";
                        };
                        iconUrl: {
                            name: "string";
                        };
                    };
                };
            };
        };
        disableClip: {
            defaultValue: boolean;
            description: string;
            type: "boolean";
        };
        disableTag: {
            defaultValue: boolean;
            description: string;
            type: "boolean";
        };
        disableMultiView: {
            defaultValue: boolean;
            description: string;
            type: "boolean";
        };
        onBack: {
            description: string;
            action: string;
        };
        backIconType: {
            defaultValue: string;
            description: string;
            type: "string";
        };
        onClickAddTag: {
            description: string;
            action: string;
        };
        onChangeClipDuration: {
            description: string;
            action: string;
        };
        onChangeFullScreen: {
            description: string;
            action: string;
        };
        enableDefaultFullscreen: {
            defaultValue: boolean;
            description: string;
            type: "boolean";
        };
        onClickTagButton: {
            description: string;
            action: string;
        };
        onClickClipSave: {
            description: string;
            action: string;
        };
        onClickTagSave: {
            description: string;
            action: string;
        };
        onClickTagCancel: {
            description: string;
            action: string;
        };
        onPlay: {
            description: string;
            action: string;
        };
        enablePrerollAd: {
            defaultValue: boolean;
            description: string;
            type: "boolean";
        };
        prerollAdUrl: {
            defaultValue: string;
            description: string;
            type: "string";
        };
        isAutoplay: {
            defaultValue: boolean;
            description: string;
            type: "boolean";
        };
        offsetStart: {
            defaultValue: number;
            description: string;
            type: "number";
        };
        offsetEnd: {
            defaultValue: number;
            description: string;
            type: "number";
        };
        offsetSeek: {
            defaultValue: number;
            description: string;
            type: "number";
        };
        eventId: {
            defaultValue: string;
            description: string;
            type: "string";
        };
        clipThumbnailApiHost: {
            defaultValue: string;
            description: string;
            type: "string";
        };
        enableLeftRightArrowButton: {
            defaultValue: boolean;
            description: string;
            type: "boolean";
        };
        onClickLeftArrowButton: {
            description: string;
            action: string;
        };
        onClickRightArrowButton: {
            description: string;
            action: string;
        };
        onClickChromecastButton: {
            description: string;
            action: string;
        };
        errorMessage: {
            defaultValue: string;
            description: string;
            type: "string";
        };
    };
    args: {
        title: string;
        isLive: false;
        disablePlayer: false;
        url: string;
        thumbnailUrl: string;
        width: undefined;
        height: undefined;
        isPlay: false;
        isAutoplay: true;
        onBack: () => void;
        onClickAddTag: (data: OnClickAddTagEventObject) => void;
        onChangeClipDuration: (data: number[]) => void;
        onChangeFullScreen: (isFullScreen: boolean) => void;
        onClickTagButton: () => void;
        onClickClipSave: () => void;
        onClickTagSave: () => void;
        onClickTagCancel: () => void;
        onPlay: () => true;
        multiViewSources: ({
            thumbnailUrl: string;
            title: string;
            description: string;
            url: string;
            isPanorama: false;
        } | {
            thumbnailUrl: string;
            title: string;
            description: string;
            url: string;
            isPanorama: true;
        })[];
        tags: {
            id: string;
            seconds: number;
            title: string;
            iconUrl: string;
        }[];
        tagMenus: {
            id: string;
            title: string;
            iconUrl: string;
        }[];
        disableClip: false;
        disableTag: false;
        disableMultiView: false;
        backIconType: "arrowLeft";
        enablePrerollAd: false;
        prerollAdUrl: string;
        enableScoreBoardOverlay: false;
        scoreBoardOverlayUrl: string;
        offsetStart: number;
        offsetEnd: number;
        offsetSeek: number;
        eventId: string;
        clipThumbnailApiHost: string;
        enableLeftRightArrowButton: false;
        onClickLeftArrowButton: () => void;
        onClickRightArrowButton: () => void;
        onClickChromecastButton: () => void;
        errorMessage: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
