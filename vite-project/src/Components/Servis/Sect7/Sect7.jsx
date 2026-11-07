import "./Sect7.scss"
import {Photo} from "../../../Photo.js"

export default function Sect7() {
    const cities = [
        {
            name: "МОСКВА",
            address: "Ткацкая улица, 5с16",
            hours: "Пн - Вс 10:00 - 19:00",
            phone: "+7 (499) 350-76-92",
            note: "При себе иметь паспорт для прохождения через пропускной пункт"
        },
        {
            name: "САНКТ-ПЕТЕРБУРГ",
            address: "Фрунзе улица, 2",
            hours: "Пн - Вс  10:00 - 20:00",
            phone: "+7 (499) 350-76-92",
            note: null
        },
        {
            name: "КРАСНОДАР",
            address: "Восточно-Кругликовская улица, 86",
            hours: "Вт - Сб 10:00 - 20:00",
            phone: "+7 (499) 350-76-92",
            note: null
        }
    ]

    return (
        <section className="sect7">
            <h2 className="addressesTitle">АДРЕСА СЕРВИСНЫХ ЦЕНТРОВ</h2>
            
            <div className="addressesCard">
                {cities.map((city, index) => (
                    <div className="cityBlock" key={index}>
                        <h3 className="cityName">{city.name}</h3>
                        
                        <div className="infoList">
                            <div className="infoRow">
                                <img className="infoIcon" src={Photo.iconPin1} alt="Адрес" />
                                <div className="infoTextCol">
                                    <p className="addressText">{city.address}</p>
                                    <p className="hoursText">{city.hours}</p>
                                    <p className="mapLink">Смотреть на карте</p>
                                </div>
                            </div>
                            
                            <div className="infoRow alignCenter">
                                <img className="infoIcon" src={Photo.iconPhone} alt="Телефон" />
                                <p className="phoneText">{city.phone}</p>
                            </div>

                            {city.note && (
                                <div className="infoRow">
                                    <img className="infoIcon" src={Photo.iconWarning} alt="Внимание" />
                                    <p className="noteText">{city.note}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}