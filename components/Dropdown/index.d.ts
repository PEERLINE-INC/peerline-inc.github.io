interface Option {
    value: string | number;
    label: string;
    tag?: string;
}
interface DropdownProps {
    options: Option[];
    defaultValue?: string | number;
    onChangeValue?: (value: Option) => void;
    disabled?: boolean;
}
declare const Dropdown: ({ options, defaultValue, onChangeValue, disabled }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
export default Dropdown;
