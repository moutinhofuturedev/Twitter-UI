import './index.css'
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { TweetProps } from '../../types/type'
import { Link } from 'react-router-dom'

export function Tweet(props: TweetProps) {
    return (
        <Link to="/status" className="tweet">
            <img src="https://github.com/moutinhofuturedev.png" alt="Paulo Moutinho" />
            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Paulo Moutinho</strong>
                    <span>@paulomoutinho</span>
                </div>
                <p>{props.content}</p>
                <div className="tweet-content-footer">
                    <button type='button'>
                        <ChatCircle />
                        20
                    </button>

                    <button type='button'>
                        <ArrowsClockwise />
                        20
                    </button>

                    <button type='button'>
                        <Heart />
                        20
                    </button>
                </div>
            </div>
        </Link>
    )
}