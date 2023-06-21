export interface ButtonI {
    id: string;
    text: string;
    type?: "button" | "submit" | "reset";
    className?: string;
    onClick?: () => void;
    disableAnimations?: boolean;
    style?: { [key: string]: string }
}