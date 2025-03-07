interface Option {
    value: string | number;
    label: string;
    tag?: string;
}
interface DropdownProps {
    options: Option[];
    defaultValue?: string | number | null;
    onChangeValue?: (value: Option) => void;
    disabled?: boolean;
    onChangeOpen?: (isOpen: boolean) => void;
}
declare const Dropdown: ({ options, defaultValue, onChangeValue, disabled, onChangeOpen }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
export default Dropdown;
