import "./Sect4.scss"
import {Photo} from "../../../Photo.js"

export default function Sect10() {
    return (
        <section className="sect10">
            <div className="deliveryMapContainer">
                <div className="deliveryTextHeader">
                    <h2 className="deliveryTitle">
                        ДОСТАВЛЯЕМ СО СКЛАДОВ ПО <span className="highlightBlue">МОСКВЕ,<br />
                        КРАСНОДАРУ И МИНСКУ БЕСПЛАТНО</span>, ПО РОССИИ —<br />
                        ЛЮБОЙ ТРАНСПОРТНОЙ КОМПАНИЕЙ НА ВАШ ВЫБОР
                    </h2>
                    <p className="deliverySubtitle">
                        Ежегодно оформляем и доставляем более 1 000 оптовых и розничных заказов.<br />
                        Всегда в наличии на складах весь ассортимент, представленный в каталоге.
                    </p>
                </div>
                
                <div className="mapImageWrapper">
                    <img className="mapImage" src={Photo.mapDelivery} alt="Карта географии доставки" />
                </div>
            </div>
        </section>
    )
}