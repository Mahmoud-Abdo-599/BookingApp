import React from 'react';
import hotel1 from '../img/hotel-1.jpg';
import hotel2 from '../img/hotel-2.jpg';
import hotel3 from '../img/hotel-3.jpg';
import user3 from '../img/user-3.jpg';
import user4 from '../img/user-4.jpg';
import user5 from '../img/user-5.jpg';
import user6 from '../img/user-6.jpg';
import user1 from '../img/user-1.jpg';
import user2 from '../img/user-2.jpg';

function HotelView() {
    return (
        <main className="hotel-view">
            <div className="gallery">
                <figure className="gallery__item">
                    <img src={hotel1} alt="photo of hotel 1" className="gallery__photo" />
                </figure>
                <figure className="gallery__item">
                    <img src={hotel2} alt="photo of hotel 2" className="gallery__photo" />
                </figure>
                <figure className="gallery__item">
                    <img src={hotel3} alt="photo of hotel 3" className="gallery__photo" />
                </figure>
            </div>

            <div className="overview">
                <h1 className="overview__heading">Hotel Porto</h1>
                <div className="overview__stars">
                    <svg className="overview__icon-star">
                        <use xlinkHref="../img/sprite.svg#icon-star"></use>
                    </svg>
                    <svg className="overview__icon-star">
                        <use xlinkHref="../img/sprite.svg#icon-star"></use>
                    </svg>
                    <svg className="overview__icon-star">
                        <use xlinkHref="../img/sprite.svg#icon-star"></use>
                    </svg>
                    <svg className="overview__icon-star">
                        <use xlinkHref="../img/sprite.svg#icon-star"></use>
                    </svg>
                    <svg className="overview__icon-star">
                        <use xlinkHref="../img/sprite.svg#icon-star"></use>
                    </svg>
                </div>

                <div className="overview__location">
                    <svg className="overview__icon-location">
                        <use xlinkHref="../img/sprite.svg#icon-location-pin"></use>
                    </svg>
                    <button className="btn-inline">Ain El Sokhna, Egypt</button>
                </div>

                <div className="overview__rating">
                    <div className="overview__rating-average">8.6</div>
                    <div className="overview__rating-count">429 votes</div>
                </div>
            </div>

            <div className="detail">
                <div className="description">
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                    </p>
                    <p className="paragraph">
                        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                    </p>
                    <ul className="list">
                        <li className="list__item">Close to the beach</li>
                        <li className="list__item">Breakfast included</li>
                        <li className="list__item">Free airport shuttle</li>
                        <li className="list__item">Free wifi in all rooms</li>
                        <li className="list__item">Air conditioning and heating</li>
                        <li className="list__item">Pets allowed</li>
                        <li className="list__item">We speak all languages</li>
                        <li className="list__item">Perfect for families</li>
                    </ul>
                    <div className="recommend">
                        <p className="recommend__count">
                            Lucy and 3 other friends recommend this hotel.
                        </p>
                        <div className="recommend__friends">
                            <img src={user3} alt="Friend 1" className="recommend__photo" />
                            <img src={user4} alt="Friend 2" className="recommend__photo" />
                            <img src={user5} alt="Friend 3" className="recommend__photo" />
                            <img src={user6} alt="Friend 4" className="recommend__photo" />
                        </div>
                    </div>
                </div>
                
                <div className="user-reviews">
                    <figure className="review">
                        <blockquote className="review__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                        </blockquote>
                        <figcaption className="review__user">
                            <img src={user1} alt="User 1" className="review__photo" />
                            <div className="review__user-box">
                                <p className="review__user-name">Nick Smith</p>
                                <p className="review__user-date">Feb 23rd, 2020</p>
                            </div>
                            <div className="review__rating">7.8</div>
                        </figcaption>
                    </figure>

                    <figure className="review">
                        <blockquote className="review__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.                        </blockquote>
                        <figcaption className="review__user">
                            <img src={user2} alt="User 1" className="review__photo" />
                            <div className="review__user-box">
                                <p className="review__user-name">Mary Thomas</p>
                                <p className="review__user-date">Sept 13th, 2019</p>
                            </div>
                            <div className="review__rating">9.3</div>
                        </figcaption>
                    </figure>

                    <button className="btn-inline">Show all <span>&rarr;</span></button>
                </div>
            </div>

            <div className="cta">
                    <h2 className="cta__book-now">
                        Good news! we have 4 free rooms for your selected dates!
                    </h2>
                    <button className="btn">
                        <span className="btn__visible">Book now</span>
                        <span className="btn__invisble">Only 4 rooms left</span>
                    </button>
            </div>
        </main>
    )
}

export default HotelView;
