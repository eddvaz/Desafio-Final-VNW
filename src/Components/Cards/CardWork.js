import "./StyleCard.css"
import projeto1 from "../../img/projeto1.png"
import projeto2 from "../../img/projeto2.PNG"
import projeto3 from "../../img/projeto3.png"

const CardWork = () => {
    return(
        <>
            <div class="flip-container">
                <div class="flipper">
                    <div class="front">
                        <img class="img1" src={projeto1} alt=""  />
                    </div>
                    <div class="back">
                        <div>
                            <h2>Projeto Recipes - Pair Programing</h2>
                            <p>Esse projeto foi feito em ReactJS</p>
                        </div>
                        <div>
                            <p>Esse projeto foi feito com meu colega de turma João Felipe com o intuito de treinarmos Git</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flip-container">
                <div class="flipper">
                    <div class="front">
                        <img class="img2" src={projeto2} alt=""/>
                    </div>
                    <div class="back">
                        <h2>Projeto mobile</h2>
                        <p>Esse projeto foi construído em React.</p>
                    </div>
                </div>
            </div>

            <div class="flip-container">
                <div class="flipper">
                    <div class="front">
                        <img class="img3" src={projeto3} alt="" />
                    </div>
                    <div class="back">Verso</div>
                </div>
            </div>

            <div class="flip-container">
                <div class="flipper">
                    <div class="front">Frente</div>
                    <div class="back">Verso</div>
                </div>
            </div>

            <div class="flip-container">
                <div class="flipper">
                    <div class="front">Frente</div>
                    <div class="back">Verso</div>
                </div>
            </div>

            <div class="flip-container">
                <div class="flipper">
                    <div class="front">Frente</div>
                    <div class="back">Verso</div>
                </div>
            </div>
        </>
    )
}
export default CardWork;