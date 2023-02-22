export interface FormProps {
    className: string;
    placeholder: string;
    text: string;
    value: string;
    onSubmit: (value: any) => void;
    onChange: (value: any) => void;
    onKeyDown?: (event: any) => void;
}