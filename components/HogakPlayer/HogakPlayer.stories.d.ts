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
                        seconds: {
                            name: "number";
                        };
                        title: {
                            name: "string";
                        };
                        iconType: {
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
            seconds: number;
            title: string;
            iconType: string;
        }[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
