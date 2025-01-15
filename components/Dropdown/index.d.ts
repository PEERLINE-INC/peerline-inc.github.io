interface Option {
    value: string | number;
    label: string;
    tag?: string;
}
interface DropdownProps {
    options: Option[];
    defaultValue?: string | number;
    onChangeValue?: (value: Option) => void;
}
declare const Dropdown: ({ options, defaultValue, onChangeValue }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
export default Dropdown;
