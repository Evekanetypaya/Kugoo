import "./Sect2.scss"
import {Photo} from "../../../Photo.js"
import { Routes, Route} from 'react-router-dom'

export default function Sect2() {
    const viewedProducts = [
        { id: 1, name: "Защитная экипировка «Черепаха»", desc: "100% дышащая ткань", price: "5 900 ₽" },
        { id: 2, name: "Защитная экипировка «Черепаха»", desc: "100% дышащая ткань", price: "5 900 ₽" },
        { id: 3, name: "Защитная экипировка «Черепаха»", desc: "100% дышащая ткань", price: "5 900 ₽" },
        { id: 4, name: "Защитная экипировка «Черепаха»", desc: "100% дышащая ткань", price: "5 900 ₽" },
        { id: 5, name: "Защитная экипировка «Черепаха»", desc: "100% дышащая ткань", price: "5 900 ₽" },
    ];

    return (
        <section className="viewedSect">
            <div className="containerWrapper">
                <h2 className="sectionTitle">ВЫ СМОТРЕЛИ</h2>
                
                <div className="sliderContainer">
                    <div className="cardsRow">
                        {viewedProducts.map((item) => (
                            <div className="productCard" key={item.id}>
                                <div className="cardHeader">
                                    <span className="badgeNew">Новинка</span>
                                    <img src={Photo.iconCompare} alt="Сравнить" className="compareIcon" />
                                </div>
                                
                                <div className="cardImageWrapper">
                                    <img src={Photo.armor} alt={item.name} className="productImg" />
                                </div>
                                
                                <div className="cardInfo">
                                    <h3 className="productName">{item.name}</h3>
                                    <p className="productDesc">{item.desc}</p>
                                </div>
                                
                                <div className="cardPurchase">
                                    <span className="productPrice">{item.price}</span>
                                    <div className="actionButtons">
                                        <div className="iconBtn">
                                            <img src={Photo.iconCart} alt="В корзину" />
                                        </div>
                                        <div className="iconBtn">
                                            <img src={Photo.iconHeart} alt="В избранное" />
                                        </div>
                                    </div>
                                </div>
                                
                                <button className="buyBtn">Купить в 1 клик</button>
                            </div>
                        ))}
                    </div>
                    
                    <div className="sliderNextBtn">
                        <img src={Photo.iconArrowRight} alt="Далее" />
                    </div>
                </div>
            </div>
        </section>
    )
}