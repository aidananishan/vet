import logo from "./img/logo.png";
import React, { useState } from "react";
import Modal from "./modal"; 
import Accordion from "./Accordion";
import "./App.css";
import "./modal.css";
import img_dog from "./img/card_dog_recipient.png";
import img_dog2 from "./img/card_dog2_recipient.png";
import img_dog3 from "./img/card_dog3_recipient.png";
import img_dog4 from "./img/card_dog4_recipient.png";
import img_cat from "./img/card_cat_recipient.png";
import img_dog5 from "./img/card_dog5_recipient.png";
import img_inst from "./img/premium-icon-instagram-4923005.png";
import img_fb from "./img/free-icon-facebook-733547.png";
import img_twi from "./img/premium-icon-twitter-3536424.png";
import img_btn_cat from "./img/cat.jpeg";
import img_btn_dog from "./img/dog.jpeg";
const App = () => {
  const [modalActive, setModalActive] = useState(true); 
  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <img src={logo} className="App-logo" href="#" alt="logo" />
          <a href="#donor" className="donor">
            НАЙТИ ДОНОРА
          </a>
        </nav>
        <div className="header-text">
          <div className="header-text__baza">
            ДОНОРВЕТ – БАЗА ЖИВОТНЫХ-ДОНОРОВ
          </div>
          <div className="header-text__zagolovok">Ветеринарное донорство</div>
          <div className="header-text__text">
            Ищете кровь для своего питомца или хотите помочь спасти других
            животных? Мы создали этот сайт, чтобы вы не теряли драгоценное время
            на форумах и в соцсетях
          </div>
        </div>
      </header>

      <div className="wrapper">
        <div className="wrapper">ДЛЯ КОГО ЭТОТ САЙТ?</div>
        <div className="wrapper-text">
          <p>
            Иногда на поиски необходимого донора уходят драгоценные часы...{" "}
          </p>
          А промедление может стоить жизни.
          <p>
            Наша миссия – создать постоянно пополняемую, актуальную базу
            животных-доноров крови. Иногда на поиски необходимого донора уходят
            драгоценные часы... А промедление может стоить жизни.{" "}
          </p>
          <p>
            Наша миссия – создать постоянно пополняемую, актуальную
            всероссийскую базу животных-доноров крови.
          </p>
          <p>
            Если вы ищете донора крови для своего питомца – надеемся, что вы
            найдете своего спасителя в разделе <strong>Найти донора</strong>.
          </p>
          <p>
            Если вы хотите помочь и у вас еть здоровое животное (кошка или
            собака), готовое стать героем – ждем вас с разделе
             <strong> Стать донором </strong>.
          </p>
        </div>

        <div>
          <button
            className="open-btn-recipient"
            onClick={() => setModalActive(true)}
          >
            Стать донором
          </button>
          <button
            className="open-btn-clinic"
            onClick={() => setModalActive(true)}
          >
            Вет клиникам
          </button>
        </div>

        <Modal active={modalActive} setActive={setModalActive}>
          <div className="wrapper">
            Стать ветдонором
            <div className="wrapper-text">
              Вы можете помочь спасти жизнь чьего-то питомца уже сегодня,
              зарегистрировав своего любимца в качестве потенциального донора
              крови!
              <form className="form">
                <div className="name">
                  <input
                    type="text"
                    required placeholder="Как к Вам  обращаться"
                  ></input>
                </div>
                <div className="adress">
                  <input type="text" required placeholder="Место проживания"></input>
                </div>
                <div className="email">
                  <input type="email" required placeholder="Введите ваш Email"></input>
                </div>
                <div className="tel">
                  <input type="tel" required placeholder="Введите ваш номер"></input>
                </div>
                <div className="cat">
                  <img src={img_btn_cat } className="btnimg" href="#" alt="btnimg" width="60px" />
                  <input
                    type="checkbox"
                    value="cat"
                    placeholder="cat">

                  </input> 
                  <img src={img_btn_dog } className="btnimg" href="#" alt="btnimg" width="60px" />
                  <input
                    className="dog"
                    type="checkbox"
                    value="dog"
                    placeholder="dog">

                  </input>
                </div>

                <button className="btn" type="submit">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </Modal>

        <Modal>
          <div className="wrapper">
            Приглашаем ветеринарные клиники принять участие в популяризации
            ветдонорства.
            <div className="wrapper-text">
              Если вы владелец или сотрудник ветклиники, где делают процедуру
              гемотрансфузии – предложите клиентам скидку за регистрацию в нашей
              базе доноров. В ответ мы разместим ссылку на ваш сайт или соцсети,
              чтобы люди знали, куда можно обратиться за помощью.
              <form className="form">
                <div className="name">
                  <input
                    type="text"
                    required placeholder="Как к Вам  обращаться"
                  ></input>
                </div>
                <div className="adress">
                  <input type="text"required  placeholder="Адрес клиники"></input>
                </div>
                <div className="position">
                  <input type="text" required placeholder="Должность в клинике"></input>
                </div>

                <div className="email">
                  <input type="email" required placeholder="Введите ваш Email"></input>
                </div>
                <div className="tel">
                  <input
                    className="tel"
                    type="tel"
                    required placeholder="Введите ваш номер"
                  ></input>
                </div>
                <button className="btn" type="submit">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </Modal>
        <div className="wrapper">Частые вопросы</div>

        <div className="wrapper-text">
          О нашем проекте, переливании крови у животных и случаях, в которых мы
          можем быть вам полезны
        </div> 
        <div>
  

        
        <button className="Accordion">
          У вас есть нужная моему питомцу кровь?
        </button>
        <div className="panel">
          <p>
            Мы не являемся банком крови или ветеринарной клиникой. Зато у нас вы
            можете найти контакты владельцев животных в вашем городе и связаться
            с ними, чтобы договориться о встрече на прямом переливании в
            выбранной вами ветклинике. Не теряйте время на форумы и соцсети,
            нужный вам герой может быть в соседнем доме!
          </p>
        </div>

        <button className="Accordion">
          Я хочу сдать кровь питомца в донорский банк, это у вас?
        </button>
        <div className="panel">
          Не совсем. На нашем сайте вы можете добавить описание питомца и свои
          контакты в базу, чтобы с вами могли экстренно связаться при
          необходимости прямого переливания. Если вы хотите сдать кровь в банк
          на хранение – вам нужно найти ближайший к вам банк крови.
        </div>

        <button className="Accordion">
          Чем можно заменить донорскую кровь для животных?
        </button>
        <div className="panel">
          <p>
            Ничем, в современной ветеринарной медицине еще не созданы
            синтетические заменители крови. Большинство препаратов для
            восполнения компонентов крови не пригодны для животных в силу особой
            специфичности и способны вызвать у них тяжелую аллергическую
            реакцию.
          </p>
        </div>

        <button className="Accordion">Есть ли группы крови у питомцев?</button>
        <div className="panel">
          <p>
            Да, у собак и кошек имеются группы крови и резус-факторы. У собак
            выделяют 8 групп крови, но у них нет естественных антител к
            антигенам эритроцитов, поэтому первое переливание крови считается
            безопасным, в отличие от кошек. У кошек есть существует всего 3
            группы крови (А, В и АВ), при этом самой распространенной у
            беспородных кошек является группа А. Определение групп крови
            возможно специальными тестами, но мало распространены и имеют
            высокую стоимость. Поэтому для определения возможности переливания,
            чаще всего в клинике просто проводят перекрестный тест на
            совместимость донора и реципиента, без определения группы крови.
          </p>
        </div>

        <button className="Accordion">Как проводят переливание?</button>
        <div className="panel">
          <p>
            Существуют два способа переливания крови — прямое и непрямое. Прямое
            переливание состоит в том, что кровь непосредственно из вены донора
            переливают в вену реципиента, для чего их соединяют между собой
            специальными трубками. Для этого типа переливания не нужна
            специальная аппаратура, поэтому его чаще всего можно провести в
            обычной ветеринарной клинике. Необходимы навыки проведения
            гемотрансфузии у ветеринара и присутствие обоих животных – донора и
            реципиента. Непрямое переливание крови отличается тем, что кровь у
            донора берут в заранее подготовленный сосуд, где ее смешивают со
            стабилизаторами для предотвращения свертывания. Стабилизированная
            кровь хранится в специальных условиях в банке крови и может быть
            перелита реципиенту даже спустя длительное время после ее взятия.
            Этот способ возможен только при наличии в вашем городе ветеринарной
            клиники с соответствующими материалами и оборудованием (или банк
            крови).
          </p>
        </div>

        <button className="Accordion">Переливание крови – это опасно?</button>
        <div className="panel">
          <p>
            Прежде всего, переливание крови – это возможность спасти животное. У
            больного всегда существует риск осложнений, но чаще всего выбор
            стоит между вероятным риском и неминуемой смертью. Перед
            переливанием крови необходимо в обязательном порядке провести пробы
            на совместимость! Это так называемая перекрестная проба (смешивание
            крови донора и реципиента) и биологическая проба. Гемотрансфузия
            должна проводится под строгим контролем врача, и если есть
            возможность, в условиях стационара. Биологическая проба делается
            непосредственно перед началом процедуры переливания и заключается в
            том, что в организм реципиента вводят небольшое количество (около 10
            мл) крови донора. После этого оценивают состояние реципиента. Если
            не наблюдается никаких отрицательных реакций, то можно проводить
            процедуру переливания. При возникновении у животного реципиента
            учащения дыхания, повышения температуры, покраснения слизистых или
            кожи, одышки, дрожания, рвоты – процедуру незамедлительно
            прекращают. В свете развития современной фармакологии, гематологии и
            соблюдения разработанных протоколов переливания крови, такие реакции
            имеют место быть, но встречаются они не так часто. Для
            животного-донора переливание обычно не представляет опасности, если
            оно здорово и привито, в клинике соблюдаются санитарные нормы, а
            процедуру проводит специалист.
          </p>
        </div>

        <button className="Accordion">
          В каких случаях необходимо переливание?
        </button>
        <div className="panel">
          <p>
            Различные виды анемий, острая кровопотеря, пироплазмоз (в
            определенный момент времени), отравлениях ядами, патологии
            свертывания крови (коагулопатии, ДВС-синдром), лейкопения или
            тромбоцитопения и т.д.
          </p>
        </div>

        <button className="Accordion">
          Абсолютные противопоказания для сдачи крови
        </button>
        <div className="panel">
          <ul>
            <li>
              Период течки, а также периоды беременности и лактации (кормления)
            </li>
            <li>Животное, которому недавно переливали кровь</li>
            <li>
              Временной промежуток менее месяца после последней вакцинации
            </li>
          </ul>
        </div>

        <button className="Accordion">Требования к кошке-донору крови</button>
        <div className="panel">
          <ul>
            <li>Возраст от 1 года до 7 лет</li>
            <li>
              Вес от 3 килограммов. В среднем, значение веса донора должно быть
              в 1,5-2 раза больше веса реципиента
            </li>
            <li>Хорошее самочувствие в течение года</li>
            <li>Отсутствие эпизодов вирусных заболеваний</li>
            <li>
              Отсутствие течки, беременности, кормления потомства на момент
              процедуры
            </li>
            Рекомендации:
            <li>Вакцинация по возрасту (ежегодная, комплексная)</li>
            <li>
              Дегельминтизация и обработка против паразитов (блох и клещей)
            </li>
          </ul>
        </div> 

        <button className="Accordion">Требования к собаке-донору крови</button>
        <div className="panel">
          <ul>
            <li>Возраст от 1 года до 7 лет</li>
            <li>
              Вес от 20 килограммов. В среднем, значение веса донора должно быть
              в 1,5-2 раза больше веса реципиента
            </li>
            <li>Хорошее самочувствие в течение года</li>
            <li>Отсутствие эпизодов вирусных заболеваний</li>
            <li>
              Отсутствие течки, беременности, кормления потомства на момент
              процедуры
            </li>
            Рекомендации:
            <li>Вакцинация по возрасту (ежегодная, комплексная)</li>
            <li>
              Дегельминтизация и обработка против паразитов (блох и клещей)
            </li>
          </ul>
        </div>

        <div className="wrapper" id="donor">
          Ветеринарное донорство
          <div className="wrapper-text">
            Ищете кровь для своего питомца или хотите помочь спасти других
            животных? Мы создали этот сайт, чтобы вы не теряли драгоценное время
            на форумах и в соцсетях
          </div>
        </div>
        {/* <div className="form">
          <input type="text" placeholder="Поиск"></input>
        </div> */}

        <div className="list">
          <article className="card">
            <div className="card_dog">
              <img src={img_dog} alt="img_dog" width="280px" />
              <h4>Группа крови: DEA 1.1(+)</h4>
              <p>Собака Василий и Николай г. Бишкек</p>
              <p>10$</p>
            </div>
          </article>
          <article className="card">
            <div className="card_dog">
              <img src={img_dog2} alt="img_dog" width="280px" />
              <h4>Группа крови: DEA 4(-)</h4>
              <p>Собака Бобби и Юрий Анатольевич  </p>
              <p>0$</p>
            </div>
          </article>

          <article className="card">
            <div className="card_cat">
              <img src={img_cat} alt="img_cat" width="280px" />
              <h4>Группа крови: AB </h4>
              <p>Кошка Нюня и Светлана г.Кара-Кол</p>
              <p>15$</p>
            </div>
          </article>
          <article className="card">
            <div className="card_dog">
              
              <img src={img_dog4} alt="img_dog" width="280px" />
              <h4>Группа крови: DEA 7(+)</h4>
              <p>Собака Оскар и Артём г.Бишкек</p>
              <p>0$</p>
            </div>
          </article>
          <article className="card">
            <div className="card_dog">
              <img src={img_dog5} alt="img_dog" width="280px" />
              <h4>Группа крови: DEA1(-).</h4>
              <p>Собака Маркус и Марат с.Новопавловка</p>
              <p>20$</p>
            </div>
          </article>
          <article className="card">
            <div className="card_dog"> 
            <img src={img_dog3} alt="img_dog" width="280px" />
              <h4>Группа крови: DEA1.2(+).</h4>
              <p>Акжолтой и Бактыбек с.Орто-Сай</p>
              <p>15$</p> 
            </div>
          </article>
        </div>
      </div>
   </div>
      <div className="footer">
        <img src={logo} className="App-logo" href="#" alt="logo" />

        <ul className="footer-navbar">
          <ul className="footer-navbar-contacts">
          <li className="footeer-navbar__item">T | +1 (204) 632-2586 </li>
          <li className="footeer-navbar__item">F | +1 (204) 694-0852 </li>
          </ul>
          <ul className="footer-navbar-worktime">
           <li className="footeer-navbar__item">Часы работы:</li>
          <li className="footeer-navbar__item"> Понедельник - Пятница 8:00 - 20:00  </li>
          <li className="footeer-navbar__item">Суббота-Воскресенье 9:00 - 15:00 </li>
          </ul>
          <ul className="footer-navbar-sns">
          <img src={img_inst} className="inst" href="#" alt="logo" width="40px"/>
          <img src={img_fb} className="fb" href="#" alt="logo" width="40px" />
          <img src={img_twi} className="twi" href="#" alt="logo"  width="40px"/>
          </ul>
        </ul>
      </div>
 
    </div>
  );
};

export default App;
