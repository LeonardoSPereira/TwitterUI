import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import "./Tweet.css"
import { Link } from "react-router-dom"

interface tweetProps {
    content: string
}

export function Tweet(props: tweetProps) {
    return (
        <Link to="/status" className="tweet">
            <img src="https://github.com/leonardospereira.png" alt="User logo" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Leonardo Pereira</strong>
                    <span>@leonardospereira</span>
                </div>

                <p>{props.content}</p>

                <div className="tweet-content-footer">
                    <button type="button">
                        <ChatCircle />
                        20
                    </button>
                    <button type="button">
                        <ArrowsClockwise />
                        20
                    </button>
                    <button type="button">
                        <Heart />
                        20
                    </button>
                </div>
            </div>
        </Link>
    )
}