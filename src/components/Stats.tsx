import React, { useContext } from 'react'
import Avatar from './Avatar'
import { TwitterContext } from '../utils/context'

const Stats = () => {
    const { user, stats, changeStats} = useContext(TwitterContext);

    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {user.name}
            </div>
            <div className='stats'>
            <div
                    onClick={() => changeStats('followers', 1)}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        changeStats('followers', -1);
                    }}
                >Followers: {stats.followers}</div>
                <div
                    onClick={() => changeStats('following', 1)}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        changeStats('following', -1);
                    }}
                >Following: {stats.following}</div>
            </div>
        </div>
    )
}

export default Stats