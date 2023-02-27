import "./index.css"
import { Sparkle } from "phosphor-react";
import { HeaderProps } from "../../types/type";

export function Header(props: HeaderProps) {
    return (
        <div className="timeline-header">
            {props.title}
            <Sparkle />
        </div>
    )
}