import "./Sect2.scss"
import { useState } from 'react'
import {Photo} from "../../../Photo.js"
export default function Sect2() {
    const [tab, setTab] = useState(0)
    const [model, setModel] = useState(0)
    const tabs = ["Электросамокаты", "Электровелосипеды", "Робот-пылесосы", "Электровелосипеды"]
    const models = ["Kugoo Kirin M4", "Kugoo Kirin S2", "Kugoo Kirin M5", "Kugoo Kirin M7", "Kugoo Kirin M8"]
    const prices = [1, 2, 3, 4, 5, 6]
    return(
        <>
        <section className="repair">
            <h2 className="text_title">СТОИМОСТЬ РЕМОНТА</h2>
            <p className="text_desc">Точную стоимость работ вам озвучит специалист сервисного центра после диагностики.<br />Примерные цены на ремонт без учета запчастей смотрите ниже.</p>

            <div className="repair_tabs">
                {tabs.map((item, index) => (
                    <button key={index} className={tab === index ? "tab tab_active" : "tab"} onClick={() => setTab(index)}>{item}</button>
                ))}
            </div>

            <div className="repair_box">
                <div className="models">
                    {models.map((item, index) => (
                        <p key={index} className={model === index ? "model model_active" : "model"} onClick={() => setModel(index)}>{item}</p>
                    ))}
                </div>
                <div className="prices">
                    {prices.map((item, index) => (
                        <div className="price_row" key={index}>
                            <p className="price_name">Замена/установка контроллера</p>
                            <p className="price_value">от 1500 руб.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="diag_banner_wrap">
            <div className="diag_banner">
                <img className="banner_bg" src={Photo.service_blue_bg} alt="" />
                <div className="zoom_wrap">
                    <img className="zoom_img" src={Photo.service_zoom} alt="" />
                    <img className="zoom_icon" src={Photo.zoom_icon} alt="" />
                </div>
                <div className="banner_info">
                    <p className="banner_tag">Услуга</p>
                    <h2 className="banner_title">ОПРЕДЕЛИМ ПРИЧИНУ<br />НЕИСПРАВНОСТИ УДАЛЕННО<br />ИЛИ НА ДИАГНОСТИКЕ!</h2>
                    <button className="btn_white">Записаться на диагностику</button>
                </div>
            </div>
        </section>
        </>
    )
}