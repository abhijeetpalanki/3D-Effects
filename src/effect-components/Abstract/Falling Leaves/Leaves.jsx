import React from 'react';
import './Leaves.css';
import leaves1 from './leaves1.png';
import leaves2 from './leaves2.png';
import leaves3 from './leaves3.png';
import leaves4 from './leaves4.png';

const Leaves = () => {
    return (
        <div className="leaves__wrapper">
            <section>
                <h2>Falling Leaves</h2>
                <div className="set">
                    <div><img src={leaves1} alt='leaves1' /></div>
                    <div><img src={leaves2} alt='leaves2' /></div>
                    <div><img src={leaves3} alt='leaves3' /></div>
                    <div><img src={leaves4} alt='leaves4' /></div>
                    <div><img src={leaves1} alt='leaves1' /></div>
                    <div><img src={leaves2} alt='leaves2' /></div>
                    <div><img src={leaves3} alt='leaves3' /></div>
                    <div><img src={leaves4} alt='leaves4' /></div>
                </div>
                <div className="set set2">
                    <div><img src={leaves1} alt='leaves1' /></div>
                    <div><img src={leaves2} alt='leaves2' /></div>
                    <div><img src={leaves3} alt='leaves3' /></div>
                    <div><img src={leaves4} alt='leaves4' /></div>
                    <div><img src={leaves1} alt='leaves1' /></div>
                    <div><img src={leaves2} alt='leaves2' /></div>
                    <div><img src={leaves3} alt='leaves3' /></div>
                    <div><img src={leaves4} alt='leaves4' /></div>
                </div>
                <div className="set set3">
                    <div><img src={leaves1} alt='leaves1' /></div>
                    <div><img src={leaves2} alt='leaves2' /></div>
                    <div><img src={leaves3} alt='leaves3' /></div>
                    <div><img src={leaves4} alt='leaves4' /></div>
                    <div><img src={leaves1} alt='leaves1' /></div>
                    <div><img src={leaves2} alt='leaves2' /></div>
                    <div><img src={leaves3} alt='leaves3' /></div>
                    <div><img src={leaves4} alt='leaves4' /></div>
                </div>
            </section>
        </div>
    )
}

export default Leaves
