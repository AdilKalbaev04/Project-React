import Btn from "../../components/Btn/Btn";
import Loaders from "../../components/Loaders/Loaders";
import { Bank, Corzinka, Kaspi, Time } from "../../icons";
import { Ptichka } from "../../icons";
import { Bug } from "../../icons";
import { useGetRestorauntsQuery } from "../../store/reducers/restoraunt.reducer";
import styles from "./Main.module.css";
import React from "react";

const Main = () => {
  const { data, isLoading } = useGetRestorauntsQuery();
  if (isLoading) return <Loaders />;
  return (
    <>
      <div className={styles.fon}>
        <div className={styles.order_cont}>
          <div className={styles.sometext}>
            <span className={styles.order_text}>Мой заказ</span>
            <p className={styles.order_price}>3 х 29 000тг</p>
          </div>
          <div className={styles.order_svg}>
            <Corzinka />
          </div>
        </div>
        <div className={styles.title_cont}>
          <h1 className={styles.title}>
            Дизайн-проект для вашей квартиры <br /> за 2 недели и 199 000 ₸
          </h1>
          <Btn>Консультация</Btn>
          <div className={styles.block}>
            <div className={styles.text_cont}>
              <Time />
              <div className={styles.block_text}>
                <span className={styles.block_text_span}>2 недели</span>
                <p className={styles.block_text_p}>
                  срок выполнения <br /> заказа
                </p>
              </div>
            </div>
            <div className={styles.text_cont}>
              <Ptichka />
              <div className={styles.block_text}>
                <span className={styles.block_text_span}>Не важно</span>
                <p className={styles.block_text_p}>
                  Сколько квадратов, <br /> цена - одна!
                </p>
              </div>
            </div>
            <div className={styles.text_cont}>
              <Bug />
              <div className={styles.block_text}>
                <span className={styles.block_text_span}>Рассрочка</span>
                <p className={styles.block_text_p}>до 24 месяцев</p>
                <div className={styles.block_svg}>
                  <Bank />
                  <Kaspi />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.block_2}>
        <div className={styles.block_2_light}>
          <h2 className={styles.h2}>Как это работает?</h2>
          <div className={styles.wrap}>
            <div className={styles.logo_cont}>
              <span className={styles.logo}>01</span>
              <div className={styles.logo_span_p}>
                <span className={styles.block_2_span}>
                  Выбор состава проекта
                </span>
                <p className={styles.block_2_p}>
                  Выберите состав вашего <br /> проекта: только планировка или{" "}
                  <br />
                  дизайн-проект
                </p>
              </div>
            </div>
            <div className={styles.logo_cont}>
              <span className={styles.logo}>01</span>
              <div className={styles.logo_span_p}>
                <span className={styles.block_2_span}> Настройка проекта</span>
                <p className={styles.block_2_p}>
                  Отметьте в корзине нужен ли <br /> вам профессиональный замер,{" "}
                  <br /> подбор строительной бригады <br /> или точный просчет
                  сметы
                </p>
              </div>
            </div>
            <div className={styles.logo_cont}>
              <span className={styles.logo}>01</span>
              <div className={styles.logo_span_p}>
                <span className={styles.block_2_span}>Создание чертежей</span>
                <p className={styles.block_2_p}>
                  Наши дизайнеры спроектируют <br /> интерьер, подготовят <br />
                  чертежи.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.img_wrap}>
          <img src="./public/backgroundTwo.png" alt="" />
          <div className={styles.block_2_img}>
            <img src="./public/backgroundTwoTwo.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
