import styles from "./Price.module.css";

const Price = () => {
  return (
    <div className={styles.header}>
      <div className={styles.text_2}>
        <h2 className={styles.h1}>Планировка</h2>
        <h3 className={styles.h4}>
          Мы разработаем для вас уникальное планировочное <br /> решение
          квартиры, которое <br /> будет соответствовать как нормам эргономики,{" "}
          <br /> так и вашим личным пожеланиям, а также <br /> подготовим чертеж
          для согласования <br /> планировки.{" "}
        </h3>
        <h3 className={styles.ix}>Вам подойдет,если;</h3>
        <h3 className={styles.ix1}>
          Вы купили квартиру без отделки и <br /> планируете начать ремонт;{" "}
          <br />
          Вы приобрели квартиру с ремонтом, и не <br /> понимаете, как правильно
          зонировать ее и <br /> расставить мебель; <br />
          Вы хотите изменить интерьер квартиры, в <br /> которой уже проживаете.
        </h3>
        <h3 className={styles.ix}>Срок выполненния.</h3>
        <h3 className={styles.ix2}>5 рабочих дней после получения замера</h3>
        <h3 className={styles.ix}>Вы получите:</h3>
        <h3 className={styles.ix2}>
          2 варианта планировки + финальный <br />
          план демонтажа стен <br />
          план монтажа перегородок
        </h3>
        <div className={styles.price}>
          <h3>цена услуги:</h3>
          <h2 className={styles.price1}>99 000мг</h2>
        </div>
        <div className={styles.button1}>
          <button className={styles.button}>
            <button>
              <svg
                width="23"
                height="26"
                viewBox="0 0 23 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.96223 10.3202C2.01005 9.72439 2.28054 9.16844 2.71982 8.76308C3.15911 8.35772 3.73497 8.13269 4.3327 8.13281H18.6673C19.265 8.13269 19.8409 8.35772 20.2802 8.76308C20.7195 9.16844 20.99 9.72439 21.0378 10.3202L21.9924 22.2082C22.0186 22.5354 21.9769 22.8644 21.8697 23.1747C21.7626 23.4849 21.5924 23.7696 21.3698 24.0108C21.1472 24.252 20.8772 24.4445 20.5765 24.5762C20.2759 24.7079 19.9513 24.776 19.6231 24.7761H3.37691C3.0487 24.776 2.72408 24.7079 2.42346 24.5762C2.12285 24.4445 1.85275 24.252 1.63019 24.0108C1.40763 23.7696 1.23742 23.4849 1.13027 23.1747C1.02312 22.8644 0.981365 22.5354 1.00762 22.2082L1.96223 10.3202V10.3202Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.2551 11.6992V5.75521C16.2551 4.49405 15.7541 3.28455 14.8623 2.39277C13.9705 1.50099 12.761 1 11.4998 1C10.2387 1 9.02917 1.50099 8.1374 2.39277C7.24562 3.28455 6.74463 4.49405 6.74463 5.75521V11.6992"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            В корзину
          </button>
          <button className={styles.button2}>Посмотреть пример</button>
        </div>

        <h1>salam</h1>

        <div className={styles.text - 3}>
          <h2 className={styles.text}>Дизайн-проект</h2>
          <h3 className={styles.text4}>
            Мы разработаем для вас уникальное <br /> планировочное решение
            квартиры, которое <br /> будет соответствовать как нормам <br />{" "}
            эргономики, так и вашим личным <br /> пожеланиям.
          </h3>

          <h3 className={styles.text4}>
            Затем мы подготовим альбом, состоящий из 12 <br /> чертежей,
            необходимых строителям для <br /> ремонта.
          </h3>

          <h3 className={styles.text5}>
            * также, вы можете дополнительно выбрать <br /> любой дизайн из
            нашего каталога, и мы <br /> добавим его в ваш проект.
          </h3>
          <h3 className={styles.ix5}>Вам подойдет,если;</h3>
          <h3 className={styles.text6}>
            Вы купили квартиру в новостройке, и <br /> нужен чёткий план на
            ремонт; <br />
            Вы хотите полностью переделать квартиру с уже готовой отделкой или
            вторичку; Вы планируете бюджетный ремонт квартиры для дальнейшей
            сдачи в аренду.
          </h3>
        </div>
      </div>
    </div>
  );
}
export default Price;
