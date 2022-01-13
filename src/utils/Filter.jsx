import React, { useEffect } from 'react'

const Filter = () => {
    useEffect(() => {
        let filterList = document.querySelectorAll('.filter-list');
        let cardWrapper = document.querySelectorAll('.card-wrapper');

        for (let i = 0; i < filterList.length; i++) {
            filterList[i].addEventListener('click', function() {
                for (let j = 0; j < filterList.length; j++) {
                    filterList[j].classList.remove('active');
                }
                this.classList.add('active');

                let dataFilter = this.getAttribute('data-filter');

                for (let k = 0; k < cardWrapper.length; k++) {
                    cardWrapper[k].classList.remove('active');  
                    cardWrapper[k].classList.add('hide');  

                    if (cardWrapper[k].getAttribute('data-item') === dataFilter || dataFilter === "all") {
                        cardWrapper[k].classList.remove('hide');
                        cardWrapper[k].classList.add('active');
                    }
                }
            })            
        }
    }, [])

    return (
        <div className="filter__wrapper">
            <section>
                <ul>
                    <li className="filter-list active" data-filter="all">All</li>
                    <li className="filter-list" data-filter="abstract">Abstract</li>
                    <li className="filter-list" data-filter="buttons">Buttons</li>
                    <li className="filter-list" data-filter="cards">Cards</li>
                    <li className="filter-list" data-filter="icons">Icons</li>
                    <li className="filter-list" data-filter="glass">Glass</li>
                    <li className="filter-list" data-filter="menu">Menu</li>
                    <li className="filter-list" data-filter="nature">Nature</li>
                </ul>
            </section>
        </div>
    )
}

export default Filter
