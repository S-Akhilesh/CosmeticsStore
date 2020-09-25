import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-static.nykaa.com/uploads/ac56d2c6-2236-450b-9b5d-382c99443e3a.jpg" alt="" />
            </div>

            <div className="home__row">

                <div className="home__item">
                    <img src="https://images-static.nykaa.com/tr:w-560,c-at_max/uploads/e602dd37-ee3a-40de-9d50-4c0f26b6558f.jpg" alt="" />
                </div>
                <div className="home__item">
                    <img src="https://images-static.nykaa.com/tr:w-560,c-at_max/uploads/a6ee57ba-739a-43dd-8a50-8d0b5b008e04.gif" alt="" />
                </div>
                <div className="home__item">
                    <img src="https://images-static.nykaa.com/tr:w-560,c-at_max/uploads/df105749-7c5f-412f-b9e3-f3a207583d30.jpg" alt="" />
                </div>
            </div>

            <div className="home__row">
                <div className="home__item">
                    <img src="https://images-static.nykaa.com/tr:w-560,c-at_max/uploads/d95bc823-a083-4bf4-9abe-d56fd9eea098.jpg" alt="" />
                </div>
                <div className="home__item">
                    <img src="https://images-static.nykaa.com/tr:w-560,c-at_max/uploads/11c0eee0-2188-4f7e-843d-ec052db626e8.jpg" alt="" />
                </div>
            </div>

            <div className="home__row">
                <div className="home__item">
                    <img src="https://images-static.nykaa.com/tr:w-1140,c-at_max/uploads/6afa9332-e78d-49b4-9a43-eddf27821aed.gif" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Home
