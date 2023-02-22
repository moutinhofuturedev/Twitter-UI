export interface FormProps {
    className: string;
    placeholder: string;
    text: string;
    value: string;
    onSubmit: (value: React.FormEvent<HTMLFormElement>) => void;
    onChange: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
}