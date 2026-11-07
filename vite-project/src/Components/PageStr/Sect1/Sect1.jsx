import "./Sect1.scss"
import {Photo} from "../../../Photo.js"

export default function Sect1() {
    const thumbnails = [
        Photo.thumb1, Photo.thumb2, Photo.thumb3, 
        Photo.thumb4, Photo.thumb5, Photo.thumb6
    ];

    return (
        <section className="pageStrSect1">
            <div className="containerWrapper">
                
                <div className="breadcrumbsRow">
                    <span className="breadcrumbLink">Главная</span>
                    <span className="breadcrumbSeparator">/</span>
                    <span className="breadcrumbLink">Каталог</span>
                    <span className="breadcrumbSeparator">/</span>
                    <span className="breadcrumbLink">Электросамокаты</span>
                    <span className="breadcrumbSeparator">/</span>
                    <span className="breadcrumbCurrent">Kugoo Kirin M4</span>
                </div>

                <div className="productMainBlock">
                    {/* ЛЕВАЯ КОЛОНКА (ФОТО) */}
                    <div className="galleryCol">
                        <div className="mainImageWrapper">
                            <div className="badgeNew">Новинка 2021</div>
                            <img className="mainImage" src={Photo.scooterM4} alt="Kugoo Kirin M4" />
                        </div>
                        
                        <div className="thumbnailsGrid">
                            {thumbnails.map((thumb, index) => (
                                <div className={`thumbItem ${index === 2 ? 'active' : ''}`} key={index}>
                                    <img src={thumb} alt={`Миниатюра ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ПРАВАЯ КОЛОНКА (ИНФО) */}
                    <div className="infoCol">
                        
                        <div className="productHeader">
                            <h1 className="productTitle">KUGOO KIRIN M4</h1>
                            <div className="statsRow">
                                <span>Просмотров 350</span>
                                <span>Купили 196 раз</span>
                                <span>Артикул: 2200000000026</span>
                            </div>
                            <div className="actionsRow">
                                <div className="actionItem">
                                    <span className="dotGreen"></span>
                                    <span>В наличии</span>
                                </div>
                                <div className="actionItem">
                                    <img src={Photo.iconCompare} alt="Сравнить" />
                                    <span>Сравнить</span>
                                </div>
                                <div className="actionItem">
                                    <img src={Photo.iconShare} alt="Поделиться" />
                                    <span>Поделиться</span>
                                </div>
                            </div>
                        </div>

                        <div className="priceRow">
                            <div className="priceBlock">
                                <span className="oldPrice">39 900 ₽</span>
                                <span className="newPrice">29 900 ₽</span>
                            </div>
                            <div className="creditBlock">
                                <img className="creditIcon" src={Photo.iconBankCard} alt="Рассрочка" />
                                <div className="creditText">
                                    <span className="creditLabel">Рассрочка:</span>
                                    <span className="creditValue">1 760 ₽ в месяц / 24 месяца</span>
                                </div>
                            </div>
                        </div>

                        <div className="optionsSection">
                            
                            <div className="optionGroup">
                                <div className="groupTitleRow">
                                    <span className="groupTitle">Комплектация</span>
                                    <img className="questionIcon" src={Photo.iconQuestion} alt="?" />
                                </div>
                                <div className="buttonsGrid">
                                    <div className="optionBtn active">Базовая</div>
                                    <div className="optionBtn">Версия MAX</div>
                                    <div className="optionBtn">VIP-версия</div>
                                </div>
                            </div>

                            <div className="optionGroup tireGroup">
                                <span className="groupTitle">Покрышки</span>
                                <div className="tireRow">
                                    <div className="tireInfo">
                                        <p className="tireName">Внедорожная шипованная</p>
                                        <p className="tireDesc">+ установка (с доп.комплектом базовых покрышек)</p>
                                        <p className="tirePrice">7600 руб.</p>
                                    </div>
                                    <span className="changeLink">Изменить</span>
                                </div>
                            </div>

                            <div className="optionGroup">
                                <span className="groupTitle">Гарантия</span>
                                <div className="buttonsGrid">
                                    <div className="optionBtn">
                                        <span className="btnName">Стандартная 1 год</span>
                                        <span className="btnPrice">Бесплатно</span>
                                    </div>
                                    <div className="optionBtn active">
                                        <span className="btnName">Расширенная 2 года</span>
                                        <span className="btnPrice">2 990 руб.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="optionGroup">
                                <span className="groupTitle">Дополнительные услуги</span>
                                <div className="buttonsGrid">
                                    <div className="optionBtn">Нет</div>
                                    <div className="optionBtn active">
                                        <span className="btnName">Настройка</span>
                                        <span className="btnPrice">1 520 руб.</span>
                                    </div>
                                    <div className="optionBtn">
                                        <span className="btnName">Гидроизоляция</span>
                                        <span className="btnPrice">3 850 руб.</span>
                                    </div>
                                    <div className="optionBtn">
                                        <span className="btnName">Гидроизоляция<br/>и настройка</span>
                                        <span className="btnPrice">3 409 руб. (-30%)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="optionGroup giftGroup">
                                <div className="groupTitleRow spaceBetween">
                                    <span className="groupTitle">Подарочная упаковка</span>
                                    <span className="timerText">До конца акции <strong>06:34:23:02</strong></span>
                                </div>
                                
                                <div className="giftBanner">
                                    <p className="giftBannerTitle">2 подарка при покупке</p>
                                    <div className="giftsRow">
                                        <div className="giftItem">
                                            <img src={Photo.giftBook} alt="Книга" />
                                            <span>Книга «6 вопросов об<br/>электротранспорте, на которые<br/>вы должны знать ответ»</span>
                                        </div>
                                        <div className="giftItem">
                                            <img src={Photo.giftHolder} alt="Держатель" />
                                            <span>Универсальный<br/>держатель<br/>для телефона</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="buttonsGrid">
                                    <div className="optionBtn">Без упаковки</div>
                                    <div className="optionBtn active">
                                        <span className="colorCircle colorPink"></span>
                                        Розовый
                                    </div>
                                    <div className="optionBtn">
                                        <span className="colorCircle colorBlue"></span>
                                        Синий
                                    </div>
                                    <div className="optionBtn">
                                        <span className="colorCircle colorRed"></span>
                                        Красный
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="finalPurchaseBox">
                            <div className="finalPriceRow">
                                <span className="finalPrice">45 900 руб.</span>
                                <div className="heartBtn"><img src={Photo.iconHeart} alt="Избранное" /></div>
                            </div>
                            
                            <div className="deliveryInfo">
                                <img src={Photo.iconDelivery} alt="Доставка" />
                                <div className="deliveryText">
                                    <span className="deliveryTitle">Бесплатная доставка по РФ</span>
                                    <span className="deliveryDesc">от 1 дня при заказе до 01.09</span>
                                </div>
                            </div>

                            <div className="purchaseBtnsRow">
                                <button className="btnBuyOneClick">Купить в 1 клик</button>
                                <button className="btnAddToCart">Добавить в корзину</button>
                            </div>
                        </div>
                        
                        <p className="buyLaterLink">Хотите купить позже?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}