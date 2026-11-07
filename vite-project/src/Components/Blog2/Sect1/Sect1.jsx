import { Link } from "react-router-dom";
import "./Sect1.scss";
import { Photo } from "../../../Photo.js";

export default function Sect1() {
    return (
        <section className="articleSect1">
            <div className="containerWrapper">
                
                <div className="breadcrumbsRow">
                    <img src={Photo.icon_home} alt="Главная" className="homeIcon" />
                    <Link to="/" className="breadcrumbLink">Главная</Link>
                    <span className="breadcrumbSeparator">/</span>
                    <Link to="/PageBlog" className="breadcrumbLink">Блог</Link>
                    <span className="breadcrumbSeparator">/</span>
                    <span className="breadcrumbCurrent">Как правильно заряжать самокат</span>
                </div>

                <div className="heroBanner">
                    <img src={Photo.articleHeroImg} alt="Зарядка самоката" className="bannerBg" />
                    <div className="gradientOverlay"></div>
                    
                    <div className="socialPillWrapper">
                        <div className="socialPill">
                            <img src={Photo.iconVk} alt="VK" />
                            <img src={Photo.iconInsta} alt="Instagram" />
                            <img src={Photo.iconYoutube} alt="YouTube" />
                            <img src={Photo.iconTelegram} alt="Telegram" />
                        </div>
                    </div>

                    <div className="bannerContent">
                        <div className="metaRow">
                            <span className="metaDateText">1 сентября 2021</span>
                            <div className="metaItem">
                                <img src={Photo.iconCalendar} alt="Календарь" />
                                <span>01.09.2021</span>
                            </div>
                            <div className="metaItem">
                                <img src={Photo.iconEye} alt="Просмотры" />
                                <span>53</span>
                            </div>
                        </div>
                        <h1 className="articleTitle">КАК ПРАВИЛЬНО<br/>ЗАРЯЖАТЬ САМОКАТ</h1>
                    </div>
                </div>
                <div className="articleBody">
                    <p className="articleParagraph">
                        История. Как мы за 1000 евро обустроили арендную квартиру мебелью, купленной за 2000 евро, на эти деньги купили пылесос, а на оставшиеся две тысячи купили продуктов на месяц. И у нас еще остались деньги на дорогу домой в Москву. У вас же не было выбора, вы приехали и работали за еду, иначе бы не выжили бы. Не нужно было бы <a href="#" className="textLink">покупать мебель</a>, если бы вы поехали домой! Вы правы, я приехал в Украину работать не имея даже регистрации и был вынужден жить с женщиной которая меня не видела ни разу в жизни. И то я купил машину за 100 000 руб.
                    </p>

                    <p className="articleParagraph">
                        История. Как мы за 1000 евро обустроили арендную квартиру мебелью, купленной за 2000 евро, на эти деньги купили пылесос, а на оставшиеся две тысячи купили продуктов на месяц.
                    </p>

                    <h2 className="articleSubheading">Как мы за 1000 евро обустроили<br/>арендную квартиру</h2>

                    <p className="articleParagraph">
                        История. Как мы за 1000 евро обустроили арендную квартиру мебелью, купленной за 2000 евро, на эти деньги купили пылесос, а на оставшиеся две тысячи купили продуктов на месяц. И у нас еще остались деньги на дорогу домой в Москву.
                    </p>
                </div>

            </div>
        </section>
    );
}