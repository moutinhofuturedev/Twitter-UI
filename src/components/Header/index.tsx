import "./index.css"
import { Sparkle } from "phosphor-react";

interface HeaderProps {
    title: string;
}

export function Header({ title }: HeaderProps) {
    return (
        <div className="timeline-header">
            {title}
            <Sparkle />
        </div>
    )
}