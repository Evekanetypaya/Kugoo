import "./Sect5.scss"
import {Photo} from "../../../Photo.js"

export default function Sect5() {
    const photos = [
        Photo.process1, Photo.process2, Photo.process3,
        Photo.process4, Photo.process5, Photo.process6
    ]

    return (
        <section className="sect5">
            <div className="processWrapper">
                <div className="processHeader">
                    <h2 className="processTitle">ПОСМОТРИТЕ<br />НА ПРОЦЕСС РАБОТЫ</h2>
                    <div className="infoBadge">
                        <img className="badgeIcon" src={Photo.iconWrench} alt="" />
                        <div className="badgeText">
                            <p className="badgeSubtitle">В среднем</p>
                            <p className="badgeValue">350 доработок</p>
                            <p className="badgeDesc">специалисты выполняют за 1 месяц</p>
                        </div>
                    </div>
                </div>

                <div className="photoGrid">
                    {photos.map((img, index) => (
                        <img className="photoItem" src={img} alt="Процесс работы" key={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}