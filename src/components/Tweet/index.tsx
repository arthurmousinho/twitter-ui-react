import './style.css';

import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom';

interface TweetProps {
    content: string
}

export function Tweet(props: TweetProps) {
    return (
        <Link className="tweet" to='/status'>
            <img src="https://github.com/arthurmousinho.png" alt="Arthur Mousinho" />

            <div className='tweet-content'>
                <div className="tweet-content-header">
                    <strong>Arthur Mousinho</strong>
                    <span>@arthurmousinho</span>
                </div>

                <p>{props.content}</p>
                
                <div className='tweet-content-footer'>
                    <button type="button" className=''>
                        <ChatCircle/>
                        20
                    </button>

                    <button type="button" className=''>
                        <ArrowsClockwise/>
                        20
                    </button>

                    <button type="button" className=''>
                        <Heart/>
                        20
                    </button>
                </div>
            </div>

        </Link>
    )
}