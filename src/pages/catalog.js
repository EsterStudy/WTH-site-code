import { useState, useCallback } from "react";
import CartSidebarView from "../components/cart-sidebar-view";
import PortalPopup from "../components/portal-popup";
import SidebarMenu from "../components/sidebar-menu";
import { useNavigate } from "react-router-dom";
import "./catalog.css";

const Catalog = () => {
  const [isCartSidebarViewOpen, setCartSidebarViewOpen] = useState(false);
  const [isSidebarMenuOpen, setSidebarMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openCartSidebarView = useCallback(() => {
    setCartSidebarViewOpen(true);
  }, []);

  const closeCartSidebarView = useCallback(() => {
    setCartSidebarViewOpen(false);
  }, []);

  const openSidebarMenu = useCallback(() => {
    setSidebarMenuOpen(true);
  }, []);

  const closeSidebarMenu = useCallback(() => {
    setSidebarMenuOpen(false);
  }, []);

  const onLogoClick = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    // Please sync "Info -  Pattern template" to the project
  }, []);

  const onCardFrameMContainerClick = useCallback(() => {
    navigate("/product-card-details");
  }, [navigate]);

  return (
    <>
      <div className="catalog">
        <div className="footer2">
          <img
            className="logo-icon4"
            alt=""
            src="/logo.svg"
            onClick={onLogoClick}
          />
          <div className="frame-parent3">
            <div className="parent18">
              <i className="i62">политика обработки данных</i>
              <i className="i63" onClick={onTextClick}>
                посещение салона
              </i>
              <i className="i63" onClick={onTextClick}>
                доставка и оплата
              </i>
              <i className="i62">оферта</i>
            </div>
            <div className="parent19">
              <i className="i62">составы</i>
              <i className="i62">подбор ухода</i>
              <i className="i62">faq</i>
            </div>
            <div className="parent20">
              <i className="i62">о бренде</i>
              <i className="i69">вакансии</i>
              <i className="i62">связаться с нами</i>
            </div>
          </div>
          <i className="copyright-20242">COPYRIGHT © 2024</i>
          <i className="think-about-your2">THINK ABOUT YOUR HAIR</i>
          <i className="its-alright-all2">IT`S ALRIGHT! ALL RIGHTS RESERVED</i>
          <img className="footer-inner" alt="" src="/group-4.svg" />
        </div>
        <div className="individual-care1">
          <div className="bubble-line-frame">
            <div className="bubble-line6">
              <img className="bubble-icon30" alt="" src="/bubble.svg" />
              <img className="bubble-icon30" alt="" src="/bubble1.svg" />
              <img className="bubble-icon30" alt="" src="/bubble2.svg" />
              <img className="bubble-icon30" alt="" src="/bubble3.svg" />
              <img className="bubble-icon30" alt="" src="/bubble4.svg" />
              <img className="bubble-icon30" alt="" src="/bubble5.svg" />
            </div>
          </div>
          <div className="order-application1">
            <div className="parent21">
              <i className="i71">Подбор индивидуального ухода</i>
              <i className="i72">Наслаждение для твоих волос!</i>
              <i className="i73">
                Оставь заявку и мы свяжемся с тобой для назначения даты и визита
                в наш салон
              </i>
              <img
                className="frame-child10"
                alt=""
                src="/rectangle-54@2x.png"
              />
              <div className="state-inputs-container">
                <div className="state-inputs2">
                  <i className="i62">Меня зовут</i>
                </div>
                <div className="wrapper1">
                  <i className="i62">E-mail</i>
                </div>
                <div className="state-button4">
                  <i className="i62">Свяжитесь со мной</i>
                </div>
              </div>
            </div>
          </div>
          <div className="button-request6">
            <img className="button-request-child3" alt="" src="/star-15.svg" />
            <i className="i77">Отправить</i>
          </div>
        </div>
        <div className="popular-products2">
          <img
            className="popular-products-inner"
            alt=""
            src="/rectangle-421@2x.png"
          />
          <i className="i78">Самый ТОП</i>
          <div className="card-frame-s4">
            <div className="card-name-m7">
              <i className="collection9">COLOUR BIG BANG</i>
              <i className="i79">2500 р</i>
              <i className="i80">
                <p className="blank-line">Универсальный конкрит</p>
                <p className="blank-line">для волос и макияжа</p>
              </i>
            </div>
            <img
              className="card-frame-s-child2"
              alt=""
              src="/rectangle-1331@2x.png"
            />
          </div>
          <div className="bubble-line7">
            <img className="bubble-icon30" alt="" src="/bubble12.svg" />
            <img className="bubble-icon30" alt="" src="/bubble13.svg" />
            <img className="bubble-icon30" alt="" src="/bubble14.svg" />
            <img className="bubble-icon30" alt="" src="/bubble15.svg" />
            <img className="bubble-icon30" alt="" src="/bubble16.svg" />
            <img className="bubble-icon30" alt="" src="/bubble17.svg" />
          </div>
        </div>
        <div className="collection10">
          <div className="state-button5">
            <div className="i62">Полная коллекция</div>
          </div>
          <div className="collection-child" />
          <div className="card-frames1">
            <div className="card-frames2">
              <div className="card-frames3">
                <div className="card-frame-m3">
                  <div className="card-name-m8">
                    <i className="collection9">DEEP DEEP DIVE</i>
                    <i className="i79">2098 р</i>
                    <i className="i82">Шампунь глубокого очищения</i>
                  </div>
                  <img
                    className="card-frame-s-child2"
                    alt=""
                    src="/rectangle-1337@2x.png"
                  />
                </div>
                <div className="card-frame-m3">
                  <div className="card-name-m8">
                    <i className="collection9">HAIR DISTRESS</i>
                    <i className="i79">3000 р</i>
                    <i className="i82">Шампунь для восстановления волос</i>
                  </div>
                  <img
                    className="card-frame-s-child2"
                    alt=""
                    src="/rectangle-1338@2x.png"
                  />
                </div>
                <div className="card-frame-m3">
                  <div className="card-name-m8">
                    <i className="collection9">BIG BANG BOOM</i>
                    <i className="i79">3100 р</i>
                    <i className="i82">Шампунь для тонизирования волос</i>
                  </div>
                  <img
                    className="card-frame-s-child2"
                    alt=""
                    src="/rectangle-1339@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="card-frame-m3">
              <div className="card-name-m8">
                <i className="collection9">CICA CORTEX SERUM</i>
                <i className="i79">1500 р</i>
                <i className="i82">Сыворотка-маска для кончиков</i>
              </div>
              <img
                className="card-frame-s-child2"
                alt=""
                src="/rectangle-1334@2x.png"
              />
            </div>
            <div className="card-frame-m3">
              <div className="card-name-m8">
                <i className="collection9">ANTI-GRAVITY SERUM</i>
                <i className="i79">2000 р</i>
                <i className="i82">Сыворотка-маска против выпадения</i>
              </div>
              <img
                className="card-frame-s-child2"
                alt=""
                src="/rectangle-1335@2x.png"
              />
            </div>
            <div className="card-frame-m3">
              <div className="card-name-m8">
                <i className="collection9">REBALANCE BOUNCE</i>
                <i className="i79">1500 р</i>
                <i className="i82">Маска для обновления цвета</i>
              </div>
              <img
                className="card-frame-s-child2"
                alt=""
                src="/rectangle-1336@2x.png"
              />
            </div>
            <div className="card-frame-m3">
              <div className="card-name-m8">
                <i className="collection9">JUST SPACE BASE</i>
                <i className="i79">3500 р</i>
                <i className="i82">Базовый уход 2+1</i>
              </div>
              <img
                className="card-frame-s-child2"
                alt=""
                src="/rectangle-13310@2x.png"
              />
            </div>
            <div className="card-frame-m3">
              <div className="card-name-m8">
                <i className="collection9">FLUFF HAIR GUM</i>
                <i className="i79">1500 р</i>
                <i className="i82">Бальзам для кудрявых волос</i>
              </div>
              <img
                className="card-frame-s-child2"
                alt=""
                src="/rectangle-13311@2x.png"
              />
            </div>
            <div
              className="card-frame-m11"
              onClick={onCardFrameMContainerClick}
            >
              <div className="card-name-m8">
                <i className="collection9">MOISTURE ME</i>
                <i className="i79">1384 р</i>
                <i className="i82">Суперувлажняющий бальзам для волос</i>
              </div>
              <img
                className="card-frame-s-child2"
                alt=""
                src="/rectangle-13312@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="filters">
          <div className="frame-parent4">
            <div className="parent22">
              <i className="i62">Шампунь</i>
              <img className="vector-icon17" alt="" src="/vector7.svg" />
            </div>
            <div className="parent22">
              <i className="i62">Бальзам для волос</i>
              <img className="vector-icon17" alt="" src="/vector7.svg" />
            </div>
            <div className="parent22">
              <i className="i62">Маска для волос</i>
              <img className="vector-icon17" alt="" src="/vector7.svg" />
            </div>
          </div>
          <div className="parent25">
            <i className="i62">Сортировка: По умолчанию</i>
            <img className="frame-child11" alt="" src="/vector-3.svg" />
          </div>
          <div className="frame-parent5">
            <div className="parent26">
              <i className="i62">Тип средства</i>
              <img className="frame-child11" alt="" src="/vector-31.svg" />
            </div>
            <div className="parent26">
              <i className="i62">Коллекция</i>
              <img className="frame-child11" alt="" src="/vector-31.svg" />
            </div>
            <div className="parent26">
              <i className="i62">Цена</i>
              <img className="frame-child11" alt="" src="/vector-31.svg" />
            </div>
          </div>
        </div>
        <div className="catalog-announce">
          <img
            className="catalog-announce-child"
            alt=""
            src="/rectangle-234.svg"
          />
          <div className="info-catalog">
            <div className="info-catalog-child" />
            <i className="i106">
              <p className="blank-line">Наша коллекция ухода,</p>
              <p className="blank-line">которая восстановит</p>
              <p className="blank-line">твои волосы благодаря</p>
              <p className="blank-line">уникальным формулам</p>
            </i>
          </div>
          <div className="bubble-line8">
            <img className="bubble-icon42" alt="" src="/bubble30.svg" />
            <img className="bubble-icon42" alt="" src="/bubble7.svg" />
            <img className="bubble-icon42" alt="" src="/bubble8.svg" />
            <img className="bubble-icon42" alt="" src="/bubble9.svg" />
            <img className="bubble-icon42" alt="" src="/bubble10.svg" />
            <img className="bubble-icon47" alt="" src="/bubble31.svg" />
          </div>
          <img
            className="catalog-announce-item"
            alt=""
            src="/ellipse-131@2x.png"
          />
          <img
            className="catalog-announce-inner"
            alt=""
            src="/ellipse-121@2x.png"
          />
          <i className="i107">
            <p className="blank-line">
              Каждые полгода тебя ждут новые средства,
            </p>
            <p className="blank-line">
              которые будут заботиться о твоих волосах
            </p>
            <p className="blank-line">в разные сезоны и особые случаи</p>
            <p className="blank-line">&nbsp;</p>
            <p className="blank-line">&nbsp;</p>
            <p className="blank-line">
              Ты можешь подобрать индивидуальный набор косметики,
            </p>
            <p className="blank-line">обратившись к нам в салон!</p>
          </i>
          <i className="i108">каталог</i>
          <div className="button-request7">
            <img className="button-request-child3" alt="" src="/star-16.svg" />
            <i className="i109">Оставить заявку</i>
          </div>
          <img
            className="catalog-banner-icon"
            alt=""
            src="/catalog-banner.svg"
          />
        </div>
        <div className="header-pages1">
          <img
            className="icon11"
            alt=""
            src="Target.svg"
            onClick={openCartSidebarView}
          />
          <div className="rectangle-parent1" onClick={openSidebarMenu}>
            <div className="instance-child4" />
            <div className="instance-child4" />
            <div className="instance-child4" />
          </div>
          <img className="icon12" alt="" src="/1.svg" />
          <div className="what-the-hair1" onClick={onLogoClick}>
            <div className="vector-group">
              <img className="vector-icon20" alt="" src="/vector.svg" />
              <img className="vector-icon21" alt="" src="/vector1.svg" />
              <img className="vector-icon22" alt="" src="/vector2.svg" />
              <img className="vector-icon23" alt="" src="/vector3.svg" />
            </div>
          </div>
        </div>
      </div>
      {isCartSidebarViewOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCartSidebarView}
        >
          <CartSidebarView onClose={closeCartSidebarView} />
        </PortalPopup>
      )}
      {isSidebarMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSidebarMenu}
        >
          <SidebarMenu onClose={closeSidebarMenu} />
        </PortalPopup>
      )}
    </>
  );
};

export default Catalog;
