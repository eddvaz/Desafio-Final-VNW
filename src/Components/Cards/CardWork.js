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
                        <div class="back-title">
                            <h2>Projeto Recipes - Pair Programing</h2>
                        </div>
                        <div class="back-info">
                            <p>Esse projeto foi feito com meu colega de turma João Felipe com o intuito de treinarmos Git.</p>
                            <p>Nesse projeto utilizamos React-js e styled-components para a estilização.</p>
                        </div>
                        <div class="back-link">
                            <a href="#">
                                Clique aqui para acessar o repositório
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flip-container">
                <div class="flipper">
                    <div class="front">
                        <img class="img2" src={projeto2} alt=""  />
                    </div>
                    <div class="back">
                        <div class="back-title">
                            <h2>Projeto Mobile First</h2>
                        </div>
                        <div class="back-info">
                            <p>Esse foi um projeto proposto pela Vai na Web durante as aulas de inglês</p>
                            <p>Foi feito em mobile first, utilizei React e styled components para estilizá-lo. Tem uma função de contador no final página.</p>
                        </div>
                        <div class="back-link">
                            <a href="#">
                                Clique aqui para acessar o repositório
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flip-container">
                <div class="flipper">
                    <div class="front">
                        <img class="img1" src={projeto3} alt=""  />
                    </div>
                    <div class="back">
                        <div class="back-title">
                            <h2>Projeto To do List</h2>
                        </div>
                        <div class="back-info">
                            <p>
                                Esse projeto foi um dos meus favoritos durante o curso. Foi proposto criar um To do List em React usando class components.
                                Ainda conta com uma função de deletar a ativide criada.
                            </p>
                            <p>
                                Utilizei React, class components e styled-componets, para a estilização.
                            </p>
                        </div>
                        <div class="back-link">
                            <a href="#">
                                Clique aqui para acessar o repositório
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flip-container">
                <div class="flipper">
                    <div class="front">
                        <img  />
                    </div>
                    <div class="back">
                        <div class="back-title">
                            <h2>Em Breve</h2>
                        </div>
                        <div class="back-info">
                            <p></p>
                            <p></p>
                        </div>
                        <div class="back-link">
                            <a href="#">
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flip-container">
                <div class="flipper">
                    <div class="front">
                        <h1>Em Breve</h1>
                        <img   />
                    </div>
                    <div class="back">
                        <div class="back-title">
                            <h2></h2>
                        </div>
                        <div class="back-info">
                            <p></p>
                            <p></p>
                        </div>
                        <div class="back-link">
                            <a href="#">
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flip-container">
                <div class="flipper">
                    <div class="front">
                        <h1>Em Breve</h1>
                        <img  />
                    </div>
                    <div class="back">
                        <div class="back-title">
                            <h1>Em Breve</h1>
                        </div>
                        <div class="back-info">
                            <p></p>
                            <p></p>
                        </div>
                        <div class="back-link">
                            <a href="#">
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardWork;