import React from 'react'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-detail'>
                    <div className='colz'>
                        <a href='https://www.facebook.com/'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.google.com/'>
                            <i className='fa fa-goole-plus-square'></i>
                        </a>
                        <a href='https://www.instagram.com/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://www.youtube.com/'>
                            <i className='fa fa-youtube-square'></i>
                        </a>
                        <a href='https://www.twitter.com/'>
                            <i className='fa fa-twitter'></i>
                        </a>
                    </div>
                    <div className='profile-details-name'>
                        <h2 className='highlighted-text'>Hello</h2>
                    </div>
                    <div className='profile-details-role'>
                        <h2>Hello</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
