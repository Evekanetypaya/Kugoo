import "./Sect7.scss"
import {Photo} from "../../../Photo.js"

export default function Sect7() {
    const reviews = [
        Photo.review1, Photo.review2, Photo.review3, Photo.review4,
        Photo.review5, Photo.review6, Photo.review7, Photo.review8
    ]

    const socials = [
        { name: "Вконтакте", count: "3 300", icon: Photo.iconVk, type: "vk" },
        { name: "Instagram", count: "10 602", icon: Photo.iconInsta, type: "insta" },
        { name: "YouTube", count: "3 603", icon: Photo.iconYoutube, type: "youtube" },
        { name: "Telegram", count: "432", icon: Photo.iconTelegram, type: "telegram" }
    ]

    return (
        <section className="sect13">
            <div className="reviewsContainer">
                <div className="reviewsHeader">
                    <h2 className="reviewsTitle">
                        1 600+ ПОЛОЖИТЕЛЬНЫХ ОЦЕНОК<br />
                        ПОКУПАТЕЛЕЙ О ПРОДУКТАХ KUGOO
                    </h2>
                    <a href="#" className="reviewsLink">Читать отзывы на Яндекс &rarr;</a>
                </div>

                <div className="reviewsGrid">
                    {reviews.map((img, index) => (
                        <div className="reviewImageWrapper" key={index}>
                            <img className="reviewImg" src={img} alt={`Отзыв ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="socialsContainer">
                <div className="socialsTextCol">
                    <h2 className="socialsTitle">
                        ОБЩАЕМСЯ С КЛИЕНТАМИ, ЧТОБЫ<br />
                        ЗНАТЬ ПОЖЕЛАНИЯ И ПРЕДЛАГАТЬ<br />
                        ЛУЧШИЙ АССОРТИМЕНТ И СЕРВИС
                    </h2>
                    <p className="socialsSubtitle">
                        И еще приняли активное участие в выставке «Велокульт 2021»
                    </p>
                    <a href="#" className="socialsLink">Смотреть как это было &rarr;</a>
                </div>

                <div className="socialsButtonsCol">
                    {socials.map((social, index) => (
                        <div className={`socialBtn ${social.type}`} key={index}>
                            <div className="socialIconName">
                                <img className="socialIcon" src={social.icon} alt="" />
                                <span className="socialName">{social.name}</span>
                            </div>
                            <span className="socialCount">{social.count}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}