import "./Sect3.scss"
import {Photo} from "../../../Photo.js"
import { Link } from "react-router-dom"
export default function Sect3() {
    return(
        <>
        <section className="promo">
            <div className="promo_tiles">
                <div className="tile">
                    <div className="tile_content">
                        <h2 className="tile_title">ПОДБОР МОДЕЛИ<br />ЭЛЕКТРОСАМОКАТА</h2>
                        <p className="tile_text">Пройдите тест и выберите<br />электросамокат по своим критериям</p>
                        <Link to="/Tovars2">
                            <p className="tile_link">Подобрать модель <span>&#8594;</span></p>
                        </Link>
                    </div>
                    <div className="tile_circle"></div>
                    <img className="tile_img img_quiz" src={Photo.quiz} alt="" />
                </div>
                <div className="tile">
                    <div className="tile_content">
                        <h2 className="tile_title">СЕРВИСНОЕ<br />ОБСЛУЖИВАНИЕ</h2>
                        <p className="tile_text">Крупнейший сервисный центр<br />в России для продуктов Kugoo</p>
                        <Link to="/Servis">
                            <p className="tile_link">Подобрать модель <span>&#8594;</span></p>
                        </Link>
                    </div>
                    <div className="tile_circle"></div>
                    <img className="tile_img img_serv" src={Photo.serv} alt="" />
                </div>
            </div>

            <div className="promo_banner">
                <img className="banner_img" src={Photo.drone} alt="" />
                <div className="banner_content">
                    <p className="banner_tag">Акция</p>
                    <h2 className="banner_title">БЕСПЛАТНАЯ ДОСТАВКА<br />ЭЛЕКТРОСАМОКАТОВ<br />ПО РОССИИ ДО 01.09</h2>
                    <Link to="/PageDost"><button className="btn_white">Подробнее</button></Link>
                </div>
            </div>
        </section>
        </>
    )
}