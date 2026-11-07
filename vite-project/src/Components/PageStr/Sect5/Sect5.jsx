import "./Sect5.scss"
import {Photo} from "../../../Photo.js"

export default function Sect5() {
    const quizOptions = [
        { id: 1, text: "Для взрослого", isActive: true },
        { id: 2, text: "Для ребенка", isActive: false },
        { id: 3, text: "Для человека в возрасте", isActive: false },
        { id: 4, text: "Будет кататься и взрослый, и ребенок", isActive: false },
    ];

    return (
        <section className="pageStrSect5">
            <div className="containerWrapper">
                
                <div className="headerBlock">
                    <h2 className="mainTitle">
                        ПРОЙДИТЕ ТЕСТ ИЗ 5 ВОПРОСОВ И ПОЛУЧИТЕ<br/>
                        ПОДБОРКУ ТОП-3 ЭЛЕКТРОСАМОКАТА<br/>
                        ПО ВАШИМ ПАРАМЕТРАМ
                    </h2>
                    <p className="bonusSubtitle">Бонусом вы получите</p>
                    
                    <div className="topBonusesRow">
                        <div className="bonusCard">
                            <img src={Photo.iconChecklist} alt="Чек-лист" className="bonusIcon" />
                            <span className="bonusText">Чек-лист «ТОП-5 городских<br/>электросамокатов 2021 г.»</span>
                        </div>
                        <div className="bonusCard">
                            <img src={Photo.iconBookYellow} alt="Инструкция" className="bonusIcon" />
                            <span className="bonusText">Инструкция «Как правильно подготовить<br/>самокат к первой поездке. 7 советов эксперта»</span>
                        </div>
                    </div>
                </div>

                <div className="quizBlock">
                    <div className="quizLeft">
                        <div className="quizStepHeader">
                            <img src={Photo.iconScooterDrop} alt="Самокат" className="stepIcon" />
                            <span className="stepText">Пройдите тест и получите подборку 3 моделей<br/>электросамокатов, которые вам подходят</span>
                        </div>
                        
                        <h3 className="quizQuestion">ДЛЯ КОГО ВЫБИРАЕТЕ<br/>ЭЛЕКТРОСАМОКАТ?</h3>
                        
                        <div className="optionsGrid">
                            {quizOptions.map((option) => (
                                <div className={`optionCard ${option.isActive ? 'active' : ''}`} key={option.id}>
                                    <div className="radioCircle"></div>
                                    <span className="optionText">{option.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="quizFooter">
                            <div className="progressWrapper">
                                <span className="progressText">Готово: 0%</span>
                                <div className="progressBar">
                                    <div className="progressFill"></div>
                                </div>
                            </div>
                            
                            <div className="navButtons">
                                <button className="btnPrev">
                                    <img src={Photo.iconArrowLeft} alt="Назад" />
                                </button>
                                <button className="btnNext">
                                    Далее <img src={Photo.iconArrowRight} alt="Далее" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="quizRight">
                        <div className="managerProfile">
                            <img src={Photo.managerPetr} alt="Петр Алексеев" className="managerAvatar" />
                            <div className="managerInfo">
                                <span className="managerName">Петр Алексеев</span>
                                <span className="managerRole">Менеджер</span>
                            </div>
                        </div>

                        <div className="yellowBonusesList">
                            <div className="yellowBonusCard">
                                <img src={Photo.iconScooterSmall} alt="" className="yellowBonusIcon" />
                                <span className="yellowBonusText">Топ-5 городских<br/>электросамокатов<br/>2021 г.</span>
                            </div>
                            <div className="yellowBonusCard">
                                <img src={Photo.iconLaptopYellow} alt="" className="yellowBonusIcon" />
                                <span className="yellowBonusText">7 советов эксперта<br/>по подготовке самоката<br/>к первой поездке</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}