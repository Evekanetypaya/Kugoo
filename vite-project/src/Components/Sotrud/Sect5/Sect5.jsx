import "./Sect5.scss"
import {Photo} from "../../../Photo.js"

export default function Sect5() {
    return (
        <section className="sect11">
            <div className="dropshipContainer">
                <div className="dropshipHeader">
                    <h2 className="dropshipTitle">
                        ПОКУПАЙТЕ ТОВАР ТОГДА, КОГДА ПОЛУЧИТЕ<br />
                        НА НЕГО ЗАКАЗ И ОПЛАТУ ОТ СВОЕГО КЛИЕНТА
                    </h2>
                    <p className="dropshipSubtitle">
                        За 4 года разработали удобную схему дропшипинга
                    </p>
                </div>

                <div className="schemeWrapper">
                    <img className="arrowVertical arrowUp" src={Photo.arrowUp} alt="" />
                    <img className="arrowVertical arrowDown" src={Photo.arrowDown} alt="" />
                    <div className="schemeRow">
                        <div className="nodeBlock">
                            <div className="iconCircle"><img src={Photo.iconFace} alt="" /></div>
                            <p className="nodeText">Покупатель</p>
                        </div>
                        <img className="arrowHorizontal" src={Photo.arrowRight} alt="" />
                        
                        <div className="nodeBlock">
                            <div className="iconCircle"><img src={Photo.iconLaptop} alt="" /></div>
                            <p className="nodeText">Делает заказ</p>
                        </div>
                        <img className="arrowHorizontal" src={Photo.arrowRight} alt="" />
                        
                        <div className="nodeBlock">
                            <div className="iconCircle"><img src={Photo.iconMoney} alt="" /></div>
                            <p className="nodeText">Оплачивает вам</p>
                        </div>
                        <img className="arrowHorizontal" src={Photo.arrowRight} alt="" />
                        
                        <div className="nodeBlock">
                            <div className="iconCircle"><img src={Photo.iconSeller} alt="" /></div>
                            <p className="nodeText">Продавец (Вы)</p>
                        </div>
                    </div>
                    <div className="schemeRow">
                        <div className="nodeBlock">
                            <div className="iconCircle"><img src={Photo.iconBoxDrop} alt="" /></div>
                            <p className="nodeText">Отправка покупателю</p>
                        </div>
                        <img className="arrowHorizontal" src={Photo.arrowLeft} alt="" />
                        
                        <div className="nodeBlock">
                            <div className="iconCircle"><img src={Photo.iconScooterDrop} alt="" /></div>
                            <p className="nodeText">Товар</p>
                        </div>
                        <img className="arrowHorizontal" src={Photo.arrowLeft} alt="" />
                        
                        <div className="nodeBlock">
                            <div className="iconCircle"><img src={Photo.iconProcess} alt="" /></div>
                            <p className="nodeText">Поставщик (Мы)<br/>обрабатывает заказ</p>
                        </div>
                        <img className="arrowHorizontal" src={Photo.arrowLeft} alt="" />
                        
                        <div className="nodeBlock">
                            <div className="iconCircle"><img src={Photo.iconMail} alt="" /></div>
                            <p className="nodeText">Заказывает товар<br/>на адрес покупателя</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}