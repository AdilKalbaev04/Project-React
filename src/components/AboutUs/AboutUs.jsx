import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const screenWidth = window.screen.width;

  const descText = function () {
    if (screenWidth <= 600) {
      return (
        <p className={styles.descText}>
          Все, что вам нужно, чтобы начать ремонт. Мы создали сервис для тех,
          кто не знает, как подступиться к большому ремонту, ценит красоту и
          качественный дизайн. Заказав Simple design, вы получите дизайн-проект
          и подробную инструкцию со всеми подробно расписанными шагами к его
          реализации.
        </p>
      );
    } else {
      return (
        <p className={styles.descText}>
          Мы создали сервис для тех, кто не знает, как подступиться к большому
          ремонту, ценит качественный дизайн, для тех, кому нужен чёткий план.
          Заказав Simple Design - вы получите
          <span className={styles.noWrap}> дизайн-проект, </span> подробную
          инструкцию по реализации, смету с материалами,
          <span className={styles.noWrap}> чек-лист </span> для проверки
          строителей.
        </p>
      );
    }
  };

  const sliderTitle = function () {
    if (screenWidth <= 800) {
      return (
        <h3 className={styles.sliderTitle}>
          В команде Simple design
          <span className={styles.textOrange}> 24 человека</span>
        </h3>
      );
    } else {
      return (
        <h3 className={styles.sliderTitle}>
          В команде Simple design <br />
          <span className={styles.textOrange}> 21 человек</span>
        </h3>
      );
    }
  };

  const descSecText = function () {
    if (screenWidth <= 600) {
      return (
        <div className={styles.descSecListWrap}>
          <p className={styles.descSecText}>
            Главная идея Simple design - дать возможность каждому жить в
            красивом доме. Решить главные вопросы, которые возникают при
            планировании ремонта:
          </p>
          <ul className={styles.descSecList}>
            <li className={styles.descSecListItem}>какую выбрать планировку</li>

            <li className={styles.descSecListItem}>
              как грамотно расставить мебель, чтобы всему хватало места
            </li>

            <li className={styles.descSecListItem}>
              как правильно расположить освещение
            </li>

            <li className={styles.descSecListItem}>
              спланировать бюджет на ремонт и закупить материалы
            </li>

            <li className={styles.descSecListItem}>
              как выбрать строителей и проверять их
            </li>

            <li className={styles.descSecListItem}>
              а еще это должно стоить адекватных денег
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className={styles.descSecListWrap}>
          <p className={styles.descSecText}>
            Главная идея Simple design - дать возможность каждому жить в
            красивом доме. Мы помогаем решить вам сложные, но важные вопросы,
            касающиеся ремонта:
          </p>
          <ul className={styles.descSecList}>
            <li className={styles.descSecListItem}>
              какую планировку лучше выбрать;
            </li>

            <li className={styles.descSecListItem}>
              как рационально использовать площадь дома;
            </li>

            <li className={styles.descSecListItem}>какой дизайн выбрать?</li>

            <li className={styles.descSecListItem}>
              как правильно спланировать освещение;
            </li>

            <li className={styles.descSecListItem}>
              как грамотно составить бюджет на материалы и мебель;
            </li>

            <li className={styles.descSecListItem}>
              как выбрать надежную строительную бригаду;
            </li>

            <li className={styles.descSecListItem}>
              и как на всём этом еще и сэкономить?
            </li>
          </ul>
        </div>
      );
    }
  };

  const descSecImg = function () {
    if (screenWidth > 700) {
      return (
        <img
          src="./images/aboutImages/aboutImg-4.png"
          alt=""
          className={styles.descSecImg}
        />
      );
    }
  };

  const descSecImgMob = function () {
    if (screenWidth <= 700) {
      return (
        <img
          src="./images/aboutImages/aboutImg-4-mob.png"
          alt=""
          className={styles.descSecImgMob}
        />
      );
    }
  };

  return (
    <div className={styles.about}>
      <div className={styles.aboutMainTitles}>
        <h1 className={styles.aboutMainTitle}>
          Команда Simple <span className={styles.textOrange}>Design</span>
        </h1>
        <h2 className={styles.aboutMainSubtitle}>
          Первый интернет-сервис дизайна интерьера в Казахстане
        </h2>
      </div>

      <div className={styles.aboutMainImgContainer}>
        <picture>
          <source
            media="(max-width: 450px)"
            srcSet="./images/aboutImages/aboutImg-1-mob.png"
            className={styles.aboutMainImgMob}
          />
          <img
            src="./images/aboutImages/aboutImg-1.png"
            className={styles.aboutMainImg}
          />
        </picture>
      </div>

      <div className={styles.aboutDesc}>
        <div className={styles.descTextWrap}>
          <h2 className={styles.descTitle}>
            <span className={styles.textOrange}>10 </span> дизайн-концепций,
            отражающих актуальные стили в интерьере
          </h2>
          {descText()}
        </div>
        <div className={styles.descImgWrap}>
          <picture>
            <source
              media="(max-width: 800px)"
              srcSet="./images/aboutImages/aboutImg-2-mob.png"
              className={styles.descImgMob}
            />
            <img
              src="./images/aboutImages/aboutImg-2.png"
              className={styles.descImg}
            />
          </picture>
        </div>
      </div>

      <div className={styles.aboutSlider}>
        <div className={styles.sliderTitleWrap}>
          <hr className={styles.sliderLine} />
          {sliderTitle()}
        </div>
        {/* <Slider></Slider> */}
      </div>

      <div className={styles.aboutDescSec}>
        {descSecImg()}

        <div className={styles.descSecTextWrap}>
          <h3 className={styles.descSecTitle}>Юрий Черепанов</h3>
          <h5 className={styles.descSecSubtitle}>
            Дизайнер, основатель студии Design Republic основатель сервиса
            Simple Design
          </h5>
          {descSecImgMob()}
          {descSecText()}
        </div>
      </div>

      <div className={styles.aboutShow}>
        <div className={styles.showTitleWrap}>
          <h3 className={styles.showTitle}>
            <span className={styles.textOrange}>За 4 года</span> мы реализовали
            более 250 проектов
          </h3>
          <hr className={styles.showLine} />
        </div>
        <div className={styles.show}>
          <div className={styles.showWrap}>
            <a href="/" className={styles.showLink}>
              <img
                src="./images/aboutImages/aboutImg-play.png"
                alt=""
                className={styles.showBtn}
              />
            </a>
            <h4 className={styles.showText}>
              <span className={styles.textOrange}>Show Reel</span> готовых
              проектов
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
