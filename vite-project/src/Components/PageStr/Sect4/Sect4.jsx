import "./Sect4.scss"
import {Photo} from "../../../Photo.js"

export default function Sect4() {
    const products = [
        { id: 1, name: "Защитная экипировка «Черепаха»", desc: "100% дышащая ткань", price: "5 900 ₽" },
        { id: 2, name: "Защитная экипировка «Черепаха»", desc: "100% дышащая ткань", price: "5 900 ₽" },
        { id: 3, name: "Защитная экипировка «Черепаха»", desc: "100% дышащая ткань", price: "5 900 ₽" },
        { id: 4, name: "Защитная экипировка «Черепаха»", desc: "100% дышащая ткань", price: "5 900 ₽" },
        { id: 5, name: "Защитная экипировка «Черепаха»", desc: "100% дышащая ткань", price: "5 900 ₽" },
    ];

    const renderSlider = (title) => (
        <div className="sliderBlock">
            <h2 className="sliderTitle">{title}</h2>
            
            <div className="sliderContainer">
                <div className="cardsRow">
                    {products.map((item) => (
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
    );

    return (
        <section className="pageStrSect4">
            <div className="containerWrapper">
                {renderSlider("С ЭТИМ ТОВАРОМ ПОКУПАЮТ")}
                {renderSlider("ПОХОЖИЕ ТОВАРЫ")}
            </div>
        </section>
    )
}