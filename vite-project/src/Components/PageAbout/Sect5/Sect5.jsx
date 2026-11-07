import "./Sect5.scss"
import {Photo} from "../../../Photo.js"
export default function Sect5() {
    const row1 = [
        {img: Photo.rev1, w: 214},
        {img: Photo.rev2, w: 213},
        {img: Photo.rev3, w: 378, card: true},
        {img: Photo.rev4, w: 378},
        {img: Photo.rev5, w: 213},
        {img: Photo.rev1, w: 214},
        {img: Photo.rev6, w: 378},
        {img: Photo.rev7, w: 214},
        {img: Photo.rev8, w: 212},
        {img: Photo.rev4, w: 378},
        {img: Photo.rev2, w: 213},
    ]
    const row2 = [
        {img: Photo.rev2, w: 213},
        {img: Photo.rev5, w: 213},
        {img: Photo.rev6, w: 378},
        {img: Photo.rev7, w: 214},
        {img: Photo.rev8, w: 212},
        {img: Photo.rev9, w: 128},
        {img: Photo.rev4, w: 378},
        {img: Photo.rev1, w: 214},
        {img: Photo.rev2, w: 213},
        {img: Photo.rev5, w: 213},
        {img: Photo.rev6, w: 378},
        {img: Photo.rev7, w: 214},
    ]
    return(
        <>
        <section className="abd">
            <div className="abd_box">
                <div className="abd_photo">
                    <img className="abd_img" src={Photo.testdrive} alt="" />
                </div>
                <div className="abd_info">
                    <h2 className="abd_title">БЕСПЛАТНЫЙ ТЕСТ-ДРАЙВ<br />И ОБУЧЕНИЕ В МОСКВЕ</h2>
                    <p className="abd_sub">Оцените все преимущества самокатов лично</p>
                    <div className="abd_form">
                        <input className="abd_input" type="tel" placeholder="+7 (___) __ - __ - __" />
                        <button className="abd_btn">Оставить заявку на тест-драйв</button>
                    </div>
                    <div className="abd_agree">
                        <img className="abd_check" src={Photo.icon_check} alt="" />
                        <p className="abd_agree_text">Нажимая на кнопку, вы соглашаетесь на обработку<br />персональных данных и <span>политикой конфиденциальности</span></p>
                    </div>
                </div>
            </div>
        </section>

        <section className="abr">
            <h2 className="abr_title">ОТЗЫВЫ И ФОТО РЕАЛЬНЫХ ПОКУПАТЕЛЕЙ</h2>
            <p className="abr_link">Читать отзывы на Яндекс <span>&#8594;</span></p>

            <div className="abr_rows">
                <div className="abr_row">
                    <div className="abr_track abr_track_1">
                        {row1.map((item, index) => (
                            <div className="abr_item" key={index} style={{width: item.w}}>
                                <img className="abr_img" src={item.img} alt="" />
                                {item.card && (
                                    <div className="abr_card">
                                        <div className="abr_user">
                                            <img className="abr_avatar" src={Photo.review_avatar} alt="" />
                                            <div>
                                                <p className="abr_name">Илья М.</p>
                                                <p className="abr_level">Знаток города 2 уровня</p>
                                            </div>
                                        </div>
                                        <p className="abr_stars">&#9733;&#9733;&#9733;&#9733;&#9733; <span>23 сентября 2020</span></p>
                                        <p className="abr_text">Магазин очень понравился, быстро обслужили, персонал хорошо знает свой товар, вежливо и грамотно консультирует, ассортимент внушительный, а если чего нет сейчас в наличии, то можно без проблем заказать на сайте, так что всем рекомендую!</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="abr_row">
                    <div className="abr_track abr_track_2">
                        {row2.map((item, index) => (
                            <div className="abr_item" key={index} style={{width: item.w}}>
                                <img className="abr_img" src={item.img} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}