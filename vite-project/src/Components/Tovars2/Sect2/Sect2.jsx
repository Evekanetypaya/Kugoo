import "./Sect2.scss"
import {Photo} from "../../../Photo.js"
import { Link } from "react-router-dom";

export default function Sect2() {
    const gridItems = [
        { type: "product", badge: "ХИТ", badgeType: "hit", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", newPrice: "29 900 ₽", showArrows: true },
        { type: "product", badge: "Новинка", badgeType: "new", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", newPrice: "29 900 ₽", showArrows: false },
        { type: "promoQuiz" },
        { type: "product", badge: "Новинка", badgeType: "new", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", newPrice: "29 900 ₽", showArrows: false },
        { type: "product", badge: "Новинка", badgeType: "new", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", newPrice: "29 900 ₽", showArrows: false },
        { type: "product", badge: "ХИТ", badgeType: "hit", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", newPrice: "29 900 ₽", showArrows: false },
        { type: "product", badge: "ХИТ", badgeType: "hit", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", newPrice: "29 900 ₽", showArrows: false },
        { type: "product", badge: "Новинка", badgeType: "new", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", newPrice: "29 900 ₽", showArrows: false },
        { type: "product", badge: "Новинка", badgeType: "new", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", newPrice: "29 900 ₽", showArrows: false },
        { type: "product", badge: "ХИТ", badgeType: "hit", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", newPrice: "29 900 ₽", showArrows: false },
        { type: "product", badge: "Новинка", badgeType: "new", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", newPrice: "29 900 ₽", showArrows: false },
        { type: "product", badge: "Новинка", badgeType: "new", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", newPrice: "29 900 ₽", showArrows: false },
    ];

    return (
        <section className="catalogSect">
            <div className="catalogContainer">
                <aside className="filterSidebar">
                    <h2 className="filterMainTitle">ФИЛЬТР</h2>
                    
                    <div className="filterBox">
                        <div className="filterGroup">
                            <h3 className="groupTitle">Цена</h3>
                            <div className="rangeTrack">
                                <div className="rangeLine"></div>
                                <div className="rangeHandle leftHandle"></div>
                                <div className="rangeHandle rightHandle"></div>
                            </div>
                            <div className="rangeInputs">
                                <input className="numInput" type="text" defaultValue="0" />
                                <span className="dash">—</span>
                                <input className="numInput" type="text" defaultValue="55 000" />
                            </div>
                        </div>

                        <div className="filterGroup">
                            <h3 className="groupTitle">Тип</h3>
                            <label className="checkLabel"><input type="checkbox" defaultChecked /> Внедорожный</label>
                            <label className="checkLabel"><input type="checkbox" /> Городской</label>
                            <label className="checkLabel"><input type="checkbox" /> Зимний</label>
                        </div>

                        <div className="filterGroup">
                            <h3 className="groupTitle">Для кого</h3>
                            <label className="checkLabel"><input type="checkbox" defaultChecked /> Для взрослого</label>
                            <label className="checkLabel"><input type="checkbox" /> Для ребенка</label>
                            <label className="checkLabel"><input type="checkbox" /> Для пенсионера</label>
                        </div>

                        <div className="filterGroup">
                            <h3 className="groupTitle">Вес</h3>
                            <label className="checkLabel"><input type="checkbox" defaultChecked /> Легкие (до 15 кг)</label>
                            <label className="checkLabel"><input type="checkbox" /> Средние (15-30 кг)</label>
                            <label className="checkLabel"><input type="checkbox" /> Тяжелые (свыше 30 кг)</label>
                        </div>
                        
                        <div className="showAllFilters">
                            <span>Показать весь фильтр</span>
                            <img src={Photo.iconChevronDown} alt="" />
                        </div>
                    </div>

                    <div className="promoMonth">
                        <div className="promoMonthTitleRow">
                            <img src={Photo.iconFire} alt="" />
                            <span>Товар месяца</span>
                        </div>
                        <div className="promoMonthCard">
                            <img className="promoMonthImg" src={Photo.scooterM4} alt="" />
                            <div className="promoMonthInfo">
                                <p className="promoMonthName">Kugoo Kirin M4</p>
                                <p className="promoMonthPrice">29 900 ₽</p>
                            </div>
                        </div>
                    </div>

                    <div className="promoManager">
                        <img className="managerBg" src={Photo.promoManagerGreen} alt="Менеджер" />
                        <span className="managerText">Задать вопрос<br/>менеджеру</span>
                    </div>
                </aside>
                <main className="catalogMain">
                    <div className="sortHeader">
                        <span className="sortLabel">Сортировать:</span>
                        <div className="sortDropdown">
                            <span>По цене</span>
                            <img src={Photo.iconChevronDown} alt="" />
                        </div>
                        <div className="sortDropdown">
                            <span>По дальности хода</span>
                            <img src={Photo.iconChevronDown} alt="" />
                        </div>
                    </div>

                    <div className="productsGrid">
                        {gridItems.map((item, index) => {
                            if (item.type === "promoQuiz") {
                                return (
                                    <div className="quizCard" key={index}>
                                        <h3 className="quizTitle">Не можете выбрать<br/>подходящую модель?</h3>
                                        <p className="quizDesc">Пройдите тест и подберите<br/>самокат по своим параметрам</p>
                                        <a href="#" className="quizLink">Подобрать самокат &rarr;</a>
                                        <img className="quizImg" src={Photo.promoQuizMan} alt="Подобрать самокат" />
                                    </div>
                                )
                            }

                            return (
                                <div className="productCard" key={index}>
                                    <div className="cardImageArea">
                                        <div className={`cardBadge ${item.badgeType === 'hit' ? 'badgeHit' : 'badgeNew'}`}>
                                            {item.badge}
                                        </div>
                                        <img className="compareIcon" src={Photo.iconCompare} alt="Сравнить" />
                                        
                                        {item.showArrows && (
                                            <>
                                                <div className="sliderArrow arrowLeft"><img src={Photo.iconArrowLeft} alt="" /></div>
                                                <div className="sliderArrow arrowRight"><img src={Photo.iconArrowRight} alt="" /></div>
                                            </>
                                        )}
                                        
                                        <img className="productMainImg" src={Photo.scooterM4} alt={item.name} />
                                    </div>

                                    <div className="cardContentArea">
                                        <h3 className="productTitle">{item.name}</h3>
                                        
                                        <div className="specsGrid">
                                            <div className="specItem"><img className="specIcon" src={Photo.iconBattery} alt="" /><span className="specText">{item.battery}</span></div>
                                            <div className="specItem"><img className="specIcon" src={Photo.iconPower} alt="" /><span className="specText">{item.power}</span></div>
                                            <div className="specItem"><img className="specIcon" src={Photo.iconSpeed} alt="" /><span className="specText">{item.speed}</span></div>
                                            <div className="specItem"><img className="specIcon" src={Photo.iconTimer} alt="" /><span className="specText">{item.time}</span></div>
                                        </div>

                                        <div className="purchaseRow">
                                            <div className="priceBlock">
                                                <p className="priceOld">{item.oldPrice}</p>
                                                <p className="priceNew">{item.newPrice}</p>
                                            </div>
                                            <div className="actionButtons">
                                                <div className="circleBtn"><img src={Photo.iconCart} alt="" /></div>
                                                <div className="circleBtn"><img src={Photo.iconHeart} alt="" /></div>
                                            </div>
                                        </div>
                                        <Link to="/PageStr"><button className="buyButton">Купить в 1 клик</button></Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </main>
            </div>
        </section>
    )
}