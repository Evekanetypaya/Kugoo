import "./Sect4.scss"
import { useState } from 'react'
import {Photo} from "../../../Photo.js"
export default function Sect4() {
    const [city, setCity] = useState(0)
    const cities = ["Москва", "Санкт-Петербург", "Краснодар"]
    const photos = [
        {img: Photo.shop1, cls: "abs_a"},
        {img: Photo.shop2, cls: "abs_b"},
        {img: Photo.shop3, cls: "abs_a"},
        {img: Photo.shop4, cls: "abs_c"},
        {img: Photo.shop5, cls: "abs_d"},
        {img: Photo.shop6, cls: "abs_c"},
    ]
    return(
        <>
        <section className="abs">
            <div className="abs_head">
                <h2 className="abs_title">ОФИЦИАЛЬНЫЕ МАГАЗИНЫ<br />И СЕРВИСНЫЕ ЦЕНТРЫ</h2>
                <div className="abs_tabs">
                    {cities.map((item, index) => (
                        <button key={index} className={city === index ? "abs_tab abs_tab_on" : "abs_tab"} onClick={() => setCity(index)}>{item}</button>
                    ))}
                </div>
            </div>

            <div className="abs_grid">
                {photos.map((item, index) => (
                    <div className={"abs_photo " + item.cls} key={index}>
                        <img className="abs_img" src={item.img} alt="" />
                    </div>
                ))}
            </div>

            <div className="abs_video">
                <img className="abs_video_img" src={Photo.video} alt="" />
                <div className="abs_play"><span>&#9654;</span></div>
            </div>
        </section>
        </>
    )
}