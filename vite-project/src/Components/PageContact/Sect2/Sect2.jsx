import "./Sect2.scss";
import { Photo } from "../../../Photo.js";

export default function Sect2() {
    return (
        <section className="contactSect2">
            <div className="containerWrapper">
                <div className="departmentsCard">
                    <div className="departmentsGrid">
                        
                        <div className="deptCol">
                            <h3 className="deptTitle">ОТДЕЛ РЕКЛАМАЦИЙ<br/>И ПРЕТЕНЗИЙ</h3>
                            
                            <div className="contactList">
                                <div className="contactItem">
                                    <img src={Photo.iconAt} alt="Email" className="contactIcon" />
                                    <a href="mailto:claim@kugoo-russia.ru" className="contactValue">claim@kugoo-russia.ru</a>
                                </div>
                                
                                <div className="contactItem">
                                    <img src={Photo.iconPhoneAlt} alt="Phone" className="contactIcon" />
                                    <div className="contactTextCol">
                                        <a href="tel:+74993507692" className="contactValue">+7 (499) 350-76-92</a>
                                        <span className="contactSubtext">Ср-Вс 10:00 - 19:00</span>
                                    </div>
                                </div>
                                
                                <div className="contactItem">
                                    <img src={Photo.iconChat} alt="Chat" className="contactIcon" />
                                    <div className="contactTextCol">
                                        <a href="tel:+79112845319" className="contactValue">+7 (911) 284-53-19</a>
                                        <span className="contactSubtext">Ср-Вс 10:00 - 19:00</span>
                                    </div>
                                </div>
                            </div>
                            
                            <a href="#" className="downloadLink">Скачать шаблон обращения</a>
                            <button className="submitAppealBtn">Отправить обращение</button>
                        </div>
                        <div className="deptCol">
                            <h3 className="deptTitle">ОПТОВЫЙ ОТДЕЛ</h3>
                            
                            <div className="contactList">
                                <div className="contactItem">
                                    <img src={Photo.iconAt} alt="Email" className="contactIcon" />
                                    <a href="mailto:opt@kugoo-russia.ru" className="contactValue">opt@kugoo-russia.ru</a>
                                </div>
                                
                                <div className="contactItem">
                                    <img src={Photo.iconPhoneAlt} alt="Phone" className="contactIcon" />
                                    <div className="contactTextCol">
                                        <a href="tel:+74992816452" className="contactValue">+7 (499) 281-64-52</a>
                                        <span className="contactSubtext">Ср-Вс 10:00 - 19:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="deptCol">
                            <h3 className="deptTitle">ОТДЕЛ МАРКЕТИНГА<br/>И РЕКЛАМЫ</h3>
                            
                            <div className="contactList">
                                <div className="contactItem">
                                    <img src={Photo.iconAt} alt="Email" className="contactIcon" />
                                    <a href="mailto:marketing@kugoo-russia.ru" className="contactValue">marketing@kugoo-russia.ru</a>
                                </div>
                            </div>
                        </div>

                        <div className="deptCol">
                            <h3 className="deptTitle">НАПИСАТЬ ДИРЕКТОРУ</h3>
                            <p className="directorText">
                                Если у вас возникли предложения или пожелания, которые помогут улучшить работу нашей компании, вы можете написать через <a href="#" className="formLink">специальную форму</a> напрямую руководителю компании.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="subscribeBlock">
                    <div className="subscribeTextCol">
                        <h2 className="subscribeTitle">ПОДПИСЫВАЙТЕСЬ И ПЕРВЫМИ<br/>УЗНАВАЙТЕ О НОВЫХ СКИДКАХ<br/>И АКЦИЯХ</h2>
                        <p className="subscribeSubtext">Станьте частью сообщества Kugoo-Russia</p>
                    </div>

                    <div className="subscribeSocialsCard">
                        <a href="#" className="socialRowBtn vkBtn">
                            <div className="socialIconName">
                                <img src={Photo.iconVk} alt="Вконтакте" />
                                <span>Вконтакте</span>
                            </div>
                            <span className="socialCount">3 300</span>
                        </a>
                        
                        <a href="#" className="socialRowBtn instaBtn">
                            <div className="socialIconName">
                                <img src={Photo.iconInsta} alt="Instagram" />
                                <span>Instagram</span>
                            </div>
                            <span className="socialCount">10 602</span>
                        </a>

                        <a href="#" className="socialRowBtn youtubeBtn">
                            <div className="socialIconName">
                                <img src={Photo.iconYoutube} alt="YouTube" />
                                <span>YouTube</span>
                            </div>
                            <span className="socialCount">3 603</span>
                        </a>

                        <a href="#" className="socialRowBtn telegramBtn">
                            <div className="socialIconName">
                                <img src={Photo.iconTelegram} alt="Telegram" />
                                <span>Telegram</span>
                            </div>
                            <span className="socialCount">432</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}