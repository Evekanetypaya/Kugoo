import "../Header/Header.scss"
import { Link } from "react-router-dom"
import {Photo} from "../../Photo.js"
export default function Header() {
    return(
        <>
            <header>
                <div className="header_top">
                    <div className="header_top_container">
                        <div className="header_top_left">
                            <Link to="/Servis"><p className="text_top">Сервис</p></Link>
                            <Link to="/Sotrud"><p className="text_top">Сотрудничество</p></Link>
                            <p className="text_top">Заказать звонок</p>
                            <div className="header_socials">
                                <img src={Photo.viber} alt="" />
                                <img src={Photo.whatsapp} alt="" />
                                <img src={Photo.telegram} alt="" />
                            </div>
                        </div>
                        <div className="header_top_right">
                            <p className="text_phone">+7 (800) 505-54-61</p>
                            <div className="btn_plus">+</div>
                        </div>
                    </div>
                </div>

                <div className="header_main">
                    <div className="header_main_container">
                        <Link to="/"><img className="header_logo" src={Photo.logo} alt="" /></Link>
                        <Link to="/Catalog"><button className="btn_catalog"><div className="burger"><span></span><span></span><span></span></div>Каталог</button></Link>
                        <div className="header_search">
                            <div className="search_select"><p className="text_select">Везде</p><span className="select_arrow"></span></div>
                            <input className="search_input" type="text" placeholder="Искать самокат KUGOO" />
                            <button className="btn_search"><img src={Photo.search} alt="" /></button>
                        </div>
                        <div className="header_icons">
                            <img className="icon_header" src={Photo.compare} alt="" />
                            <img className="icon_header" src={Photo.heart} alt="" />
                            <Link to="/Korzina">
                                <div className="header_cart">
                                    <img className="icon_header" src={Photo.cart} alt="" />
                                    <p className="text_cart">Корзина</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="header_bottom">
                    <div className="header_bottom_container">
                        <Link to="/PageAbout"><p className="text_menu">О магазине</p></Link>
                        <div className="menu_item">
                            <Link to="/PageDost"><p className="text_menu">Доставка и оплата</p></Link>
                            <p className="badge_text">Доступна рассрочка</p>
                        </div>
                        <Link to="/PageTest"><p className="text_menu">Тест-драйв</p></Link>
                        <Link to="/PageBlog"><p className="text_menu">Блог</p></Link>
                        <Link to="/PageContact"><p className="text_menu">Контакты</p></Link>
                        <div className="menu_item">
                            <Link to="/PageAkz"><p className="text_menu">Акции</p></Link>
                            <div className="badge_percent">%</div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}