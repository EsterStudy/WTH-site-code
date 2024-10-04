import { useState, useCallback } from "react";
import CartSidebarView from "../components/cart-sidebar-view";
import PortalPopup from "../components/portal-popup";
import SidebarMenu from "../components/sidebar-menu";
import { useNavigate } from "react-router-dom";
import "./product-card-details.css";

const ProductCardDetails = () => {
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

  const onTextClick = useCallback(() => {
    // Please sync "Info -  Pattern template" to the project
  }, []);

  const onIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWhatTheHairClick = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  return (
    <>
      <div className="product-card-details">
        <div className="footer3">
          <img className="logo-icon5" alt="" src="/logo.svg" />
          <div className="frame-parent6">
            <div className="parent29">
              <i className="i110">политика обработки данных</i>
              <i className="i111" onClick={onTextClick}>
                посещение салона
              </i>
              <i className="i111" onClick={onTextClick}>
                доставка и оплата
              </i>
              <i className="i110">оферта</i>
            </div>
            <div className="parent30">
              <i className="i110">составы</i>
              <i className="i110">подбор ухода</i>
              <i className="i110">faq</i>
            </div>
            <div className="parent31">
              <i className="i110">о бренде</i>
              <i className="i117">вакансии</i>
              <i className="i110">связаться с нами</i>
            </div>
          </div>
          <i className="copyright-20243">COPYRIGHT © 2024</i>
          <i className="think-about-your3">THINK ABOUT YOUR HAIR</i>
          <i className="its-alright-all3">IT`S ALRIGHT! ALL RIGHTS RESERVED</i>
          <img className="group-icon" alt="" src="/group-4.svg" />
        </div>
        <div className="care-request1">
          <div className="individual-care2">
            <div className="bubble-line-wrapper1">
              <div className="bubble-line9">
                <img className="bubble-icon48" alt="" src="/bubble.svg" />
                <img className="bubble-icon48" alt="" src="/bubble1.svg" />
                <img className="bubble-icon48" alt="" src="/bubble2.svg" />
                <img className="bubble-icon48" alt="" src="/bubble3.svg" />
                <img className="bubble-icon48" alt="" src="/bubble4.svg" />
                <img className="bubble-icon48" alt="" src="/bubble5.svg" />
              </div>
            </div>
            <div className="order-application2">
              <div className="product-image-l">
                <i className="i119">Подбор индивидуального ухода</i>
                <i className="i120">Наслаждение для твоих волос!</i>
                <i className="i121">
                  Оставь заявку и мы свяжемся с тобой для назначения даты и
                  визита в наш салон
                </i>
                <img
                  className="frame-child15"
                  alt=""
                  src="/rectangle-541@2x.png"
                />
                <div className="state-inputs-parent1">
                  <div className="state-inputs3">
                    <i className="i110">Меня зовут</i>
                  </div>
                  <div className="wrapper2">
                    <i className="i110">E-mail</i>
                  </div>
                  <div className="state-button6">
                    <i className="i110">Свяжитесь со мной</i>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-request8">
              <img
                className="button-request-child5"
                alt=""
                src="/star-11.svg"
              />
              <i className="i125">Отправить</i>
            </div>
          </div>
          <div className="bubble-line10">
            <div className="bubble-line11">
              <img className="bubble-icon48" alt="" src="/bubble6.svg" />
              <img className="bubble-icon48" alt="" src="/bubble7.svg" />
              <img className="bubble-icon48" alt="" src="/bubble8.svg" />
              <img className="bubble-icon48" alt="" src="/bubble9.svg" />
              <img className="bubble-icon48" alt="" src="/bubble10.svg" />
              <img className="bubble-icon48" alt="" src="/bubble11.svg" />
            </div>
          </div>
        </div>
        <div className="popular-products3">
          <div className="popular-products4">
            <img
              className="popular-products-child1"
              alt=""
              src="/rectangle-421@2x.png"
            />
            <i className="i126">Самый ТОП</i>
            <div className="card-frame-s5">
              <div className="card-name-m17">
                <i className="collection20">COLOUR BIG BANG</i>
                <i className="i127">2500 р</i>
                <i className="i128">
                  <p className="p23">Универсальный конкрит</p>
                  <p className="p23">для волос и макияжа</p>
                </i>
              </div>
              <img
                className="card-frame-s-child3"
                alt=""
                src="/rectangle-1331@2x.png"
              />
            </div>
            <div className="bubble-line12">
              <img className="bubble-icon48" alt="" src="/bubble12.svg" />
              <img className="bubble-icon48" alt="" src="/bubble13.svg" />
              <img className="bubble-icon48" alt="" src="/bubble14.svg" />
              <img className="bubble-icon48" alt="" src="/bubble15.svg" />
              <img className="bubble-icon48" alt="" src="/bubble16.svg" />
              <img className="bubble-icon48" alt="" src="/bubble17.svg" />
            </div>
          </div>
          <div className="bubble-line13">
            <img className="bubble-icon48" alt="" src="/bubble18.svg" />
            <img className="bubble-icon48" alt="" src="/bubble19.svg" />
            <img className="bubble-icon48" alt="" src="/bubble20.svg" />
            <img className="bubble-icon48" alt="" src="/bubble21.svg" />
            <img className="bubble-icon48" alt="" src="/bubble22.svg" />
            <img className="bubble-icon48" alt="" src="/bubble23.svg" />
          </div>
        </div>
        <div className="new-collections1">
          <div className="card-frames4">
            <div className="card-frames5">
              <div className="card-frame-m12">
                <div className="card-name-m18">
                  <i className="collection20">CICA CORTEX SERUM</i>
                  <i className="i127">1500 р</i>
                  <i className="i130">Сыворотка-маска для кончиков</i>
                </div>
                <img
                  className="card-frame-s-child3"
                  alt=""
                  src="/rectangle-13313@2x.png"
                />
              </div>
              <div className="card-frame-m12">
                <div className="card-name-m18">
                  <i className="collection20">ANTI-GRAVITY SERUM</i>
                  <i className="i127">2000 р</i>
                  <i className="i130">Сыворотка-маска против выпадения</i>
                </div>
                <img
                  className="card-frame-s-child3"
                  alt=""
                  src="/rectangle-13314@2x.png"
                />
              </div>
              <div className="card-frame-m12">
                <div className="card-name-m18">
                  <i className="collection20">REBALANCE BOUNCE</i>
                  <i className="i127">1500 р</i>
                  <i className="i130">Маска для обновления цвета</i>
                </div>
                <img
                  className="card-frame-s-child3"
                  alt=""
                  src="/rectangle-13315@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="div89">попробуй новинки!</div>
        </div>
        <div className="product-card-details-child" />
        <div className="product-card-details-item" />
        <div className="div90">подбери полноценный уход:</div>
        <div className="product-info">
          <div className="product-image-l">
            <img className="banner-ls-icon" alt="" src="/banner-ls@2x.png" />
          </div>
        </div>
        <div className="product-image-m-parent">
          <img
            className="product-image-m-icon"
            alt=""
            src="/product-image-m.svg"
          />
          <img
            className="star-product-image-m"
            alt=""
            src="/star-product-image-m@2x.png"
          />
          <img
            className="star-product-image-m1"
            alt=""
            src="/star-product-image-m1@2x.png"
          />
        </div>
        <div className="header-pages2">
          <img
            className="icon13"
            alt=""
            src="Target.svg"
            onClick={openCartSidebarView}
          />
          <div className="rectangle-parent2" onClick={openSidebarMenu}>
            <div className="instance-child7" />
            <div className="instance-child7" />
            <div className="instance-child7" />
          </div>
          <img className="icon14" alt="" src="/1.svg" onClick={onIconClick} />
          <div className="what-the-hair2" onClick={onWhatTheHairClick}>
            <div className="vector-container">
              <img className="vector-icon24" alt="" src="/vector.svg" />
              <img className="vector-icon25" alt="" src="/vector1.svg" />
              <img className="vector-icon26" alt="" src="/vector2.svg" />
              <img className="vector-icon27" alt="" src="/vector3.svg" />
            </div>
          </div>
        </div>
        <div className="product-name">
          <i className="moisture-me">MOISTURE ME</i>
          <i className="i110">Суперувлажняющий бальзам для волос</i>
          <i className="i136">
            <p className="p23">
              В этот солнечний весенний сезон каждому необходимо увлажнение.
            </p>
            <p className="p23">
              Для твоих волос мы подготовили настоящий СУПЕРФУД!
            </p>
            <p className="p23">&nbsp;</p>
            <p className="p23">Бережный химический состав,</p>
            <p className="p23">вступающий в реакцию с водой</p>
            <p className="p23">моментально увлажнит</p>
            <p className="p23">кончики волос на уровне кортекса!</p>
          </i>
        </div>
        <div className="parent33">
          <i className="i110">1384 р</i>
          <i className="i138">2800 р</i>
        </div>
        <i className="i139">со скидкой 20%</i>
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

export default ProductCardDetails;
