import "./Sect3.scss"
import {Photo} from "../../../Photo.js"

export default function Sect3() {
    return (
        <section className="sect3Test">
            <div className="requestBanner">
                <div className="textContent">
                    <h2 className="bannerTitle">
                        НЕТ НУЖНОЙ МОДЕЛИ, КОТОРУЮ<br />
                        ХОТИТЕ ПРОТЕСТИРОВАТЬ?
                    </h2>
                    <p className="bannerSubtitle">Оставьте заявку, и менеджер подберет нужный самокат</p>
                    
                    <form className="requestForm">
                        <div className="inputGroup">
                            <input className="phoneInput" type="tel" placeholder="+7 (___) __ - __ - __" />
                            <button className="submitBtn" type="button">Оставить заявку на тест-драйв</button>
                        </div>
                        
                        <div className="agreementBox">
                            
                            <img className="checkIcon" src={Photo.iconCheckBlue} alt="" />
                            <p className="agreementText">
                                Нажимая на кнопку, вы соглашаетесь на обработку<br />
                                персональных данных и <a href="#">политикой конфиденциальности</a>
                            </p>
                        </div>
                    </form>
                </div>
                
                <div className="imageContent">
                    <img className="managerImg" src={Photo.managerWoman} alt="Менеджер" />
                </div>
            </div>
        </section>
    )
}