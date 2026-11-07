import { Link } from "react-router-dom";
import "./Sect1.scss";
import { Photo } from "../../../Photo.js";

export default function Sect1() {
    const recommendedProducts = [
        { id: 1, badge: "ХИТ", badgeColor: "#EE685F", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", price: "29 900 ₽", image: Photo.scooterM4 },
        { id: 2, badge: "Новинка", badgeColor: "#71CF42", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", price: "29 900 ₽", image: Photo.scooterM4 },
        { id: 3, badge: "ХИТ", badgeColor: "#EE685F", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", price: "29 900 ₽", image: Photo.scooterM4 },
        { id: 4, badge: "Новинка", badgeColor: "#71CF42", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", price: "29 900 ₽", image: Photo.scooterM4 },
        { id: 5, badge: "Новинка", badgeColor: "#71CF42", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", price: "29 900 ₽", image: Photo.scooterM4 }
    ];

    const stop = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <section className="cartSect1">
            <div className="containerWrapper">

                <div className="breadcrumbsRow">
                    <img src={Photo.icon_home} alt="Главная" className="homeIcon" />
                    <Link to="/" className="breadcrumbLink">Главная</Link>
                    <span className="breadcrumbSeparator">/</span>
                    <Link to="/catalog" className="breadcrumbLink">Каталог</Link>
                    <span className="breadcrumbSeparator">/</span>
                    <span className="breadcrumbCurrent">Моя корзина</span>
                </div>

                <h1 className="pageTitle">МОЯ КОРЗИНА</h1>

                <div className="emptyCartBlock">
                    <img src={Photo.emptyCartBox} alt="Корзина пуста" className="emptyIcon" />
                    <h2 className="emptyTitle">ВАША КОРЗИНА ПУСТА</h2>
                    <p className="emptySubtitle">Добавьте в нее товары из каталога</p>
                    <Link to="/catalog" className="catalogBtn">Перейти в каталог</Link>
                </div>

                <div className="recommendationsBlock">
                    <h2 className="sectionTitle">РЕКОМЕНДУЕМ ВАМ</h2>

                    <div className="sliderContainer">
                        <div className="cardsRow">
                            {recommendedProducts.map((item, index) => (
                                <Link to={``} className="productCard" key={item.id}>

                                    <div className="cardImageWrapper">
                                        <img src={item.image} alt={item.name} className="productImg" />
                                        {index === 0 && <span className="imgArrow imgArrowLeft" onClick={stop}>&#8249;</span>}
                                        {index === 0 && <span className="imgArrow imgArrowRight" onClick={stop}>&#8250;</span>}
                                    </div>

                                    <div className="cardHeader">
                                        <span className="badge" style={{ backgroundColor: item.badgeColor }}>{item.badge}</span>
                                        <img src={Photo.iconCompare} alt="Сравнить" className="compareIcon" onClick={stop} />
                                    </div>

                                    <div className="cardInfo">
                                        <h3 className="productName">{item.name}</h3>

                                        <div className="specsGrid">
                                            <div className="specItem">
                                                <img src={Photo.iconBattery} alt="" />
                                                <span>{item.battery}</span>
                                            </div>
                                            <div className="specItem">
                                                <img src={Photo.iconPower} alt="" />
                                                <span>{item.power}</span>
                                            </div>
                                            <div className="specItem">
                                                <img src={Photo.iconSpeed} alt="" />
                                                <span>{item.speed}</span>
                                            </div>
                                            <div className="specItem">
                                                <img src={Photo.iconTimer} alt="" />
                                                <span>{item.time}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cardPurchase">
                                        <div className="priceCol">
                                            <span className="oldPrice">{item.oldPrice}</span>
                                            <span className="currentPrice">{item.price}</span>
                                        </div>
                                        <div className="actionButtons">
                                            <div className="iconBtn" onClick={stop}>
                                                <img src={Photo.iconCart} alt="В корзину" />
                                            </div>
                                            <div className="iconBtn" onClick={stop}>
                                                <img src={Photo.iconHeart} alt="В избранное" />
                                            </div>
                                        </div>
                                    </div>

                                    <button className="buyBtn" onClick={stop}>Купить в 1 клик</button>
                                </Link>
                            ))}
                        </div>

                        <div className="sliderNextBtn">
                            <img src={Photo.iconArrowRight} alt="Далее" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}