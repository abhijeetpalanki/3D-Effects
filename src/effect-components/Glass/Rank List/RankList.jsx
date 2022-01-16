import React from 'react';
import './RankList.css';
import dhoni from './dhoni.jpg';
import gayle from './gayle.png';
import kohli from './kohli.jpg';
import tendulkar from './tendulkar.jpg';
import bradman from './bradman.jpg';

const RankList = () => {
    return (
        <div className="ranklist__wrapper">
            <section>
                <div className="box">
                    <h3>Popular Cricketers Rank List</h3>
                    <div className="list">
                        <div className="imgBx">
                            <img src={dhoni} alt="dhoni" />
                        </div>
                        <div className="content">
                            <h2 className="rank"><small>#</small>1</h2>
                            <h4>MS Dhoni</h4>
                            <p>Captain Cool</p>
                        </div>
                    </div>
                    <div className="list">
                        <div className="imgBx">
                            <img src={gayle} alt="gayle" />
                        </div>
                        <div className="content">
                            <h2 className="rank"><small>#</small>2</h2>
                            <h4>Chris Gayle</h4>
                            <p>Universe Boss</p>
                        </div>
                    </div>
                    <div className="list">
                        <div className="imgBx">
                            <img src={kohli} alt="kohli" />
                        </div>
                        <div className="content">
                            <h2 className="rank"><small>#</small>3</h2>
                            <h4>Virat Kohli</h4>
                            <p>Run Machine</p>
                        </div>
                    </div>
                    <div className="list">
                        <div className="imgBx">
                            <img src={tendulkar} alt="tendulkar" />
                        </div>
                        <div className="content">
                            <h2 className="rank"><small>#</small>4</h2>
                            <h4>Sachin Tendulkar</h4>
                            <p>Master Blaster</p>
                        </div>
                    </div>
                    <div className="list">
                        <div className="imgBx">
                            <img src={bradman} alt="bradman" />
                        </div>
                        <div className="content">
                            <h2 className="rank"><small>#</small>5</h2>
                            <h4>Donald Bradman</h4>
                            <p>The Don</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RankList
