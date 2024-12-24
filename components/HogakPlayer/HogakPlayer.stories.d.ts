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
        url: {
            defaultValue: string;
            description: string;
            type: "string";
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
        onBack: {
            description: string;
            action: string;
        };
        onClickAddTag: {
            description: string;
            action: string;
        };
    };
    args: {
        title: string;
        url: string;
        width: undefined;
        height: undefined;
        isPlay: false;
        setIsPlay: () => void;
        onBack: () => void;
        onClickAddTag: (data: OnClickAddTagEventObject) => void;
        multiViewSources: {
            thumbnailUrl: string;
            title: string;
            url: string;
        }[];
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
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
