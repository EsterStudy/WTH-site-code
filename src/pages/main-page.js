import { useState, useCallback } from "react";
import SidebarMenu from "../components/SidebarMenu";
import PortalPopup from "../components/PortalPopup";
import CartSidebarView from "../components/CartSidebarView";
import { useNavigate } from "react-router-dom";
import "./main-page.css";

const MainPage = () => {
  const [isSidebarMenuOpen, setSidebarMenuOpen] = useState(false);
  const [isCartSidebarViewOpen, setCartSidebarViewOpen] = useState(false);
  const navigate = useNavigate();

  const openSidebarMenu = useCallback(() => {
    setSidebarMenuOpen(true);
  }, []);

  const closeSidebarMenu = useCallback(() => {
    setSidebarMenuOpen(false);
  }, []);

  const openCartSidebarView = useCallback(() => {
    setCartSidebarViewOpen(true);
  }, []);

  const closeCartSidebarView = useCallback(() => {
    setCartSidebarViewOpen(false);
  }, []);

  const onTextClick = useCallback(() => {
    // Please sync "Info -  Pattern template" to the project
  }, []);

  const onButtonRequestContainerClick = useCallback(() => {
    // Please sync "Catalog - Collection" to the project
  }, []);

  const onRectangleImageClick = useCallback(() => {
    navigate("/product-card-details");
  }, [navigate]);

  const onButtonRequestContainerClick1 = useCallback(() => {
    navigate("/catalog");
  }, [navigate]);

  const onIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className="main-page">
        <div className="footer1">
          <img className="logo-icon2" alt="" src="/logo.svg" />
          <div className="frame-parent2">
            <div className="parent14">
              <i className="i16">политика обработки данных</i>
              <i className="i17" onClick={onTextClick}>
                посещение салона
              </i>
              <i className="i17" onClick={onTextClick}>
                доставка и оплата
              </i>
              <i className="i16">оферта</i>
            </div>
            <div className="parent15">
              <i className="i16">составы</i>
              <i className="i16">подбор ухода</i>
              <i className="i16">faq</i>
            </div>
            <div className="parent16">
              <i className="i16">о бренде</i>
              <i className="i23">вакансии</i>
              <i className="i16">связаться с нами</i>
            </div>
          </div>
          <i className="copyright-20241">COPYRIGHT © 2024</i>
          <i className="think-about-your1">THINK ABOUT YOUR HAIR</i>
          <i className="its-alright-all1">IT`S ALRIGHT! ALL RIGHTS RESERVED</i>
          <img className="footer-item" alt="" src="/group-4.svg" />
        </div>
        <div className="care-request">
          <div className="individual-care">
            <div className="bubble-line-wrapper">
              <div className="bubble-line">
                <img className="bubble-icon" alt="" src="/bubble.svg" />
                <img className="bubble-icon" alt="" src="/bubble1.svg" />
                <img className="bubble-icon" alt="" src="/bubble2.svg" />
                <img className="bubble-icon" alt="" src="/bubble3.svg" />
                <img className="bubble-icon" alt="" src="/bubble4.svg" />
                <img className="bubble-icon" alt="" src="/bubble5.svg" />
              </div>
            </div>
            <div className="order-application">
              <div className="parent17">
                <i className="i25">Подбор индивидуального ухода</i>
                <i className="i26">Наслаждение для твоих волос!</i>
                <i className="i27">
                  Оставь заявку и мы свяжемся с тобой для назначения даты и
                  визита в наш салон
                </i>
                <img
                  className="frame-child9"
                  alt=""
                  src="/rectangle-54@2x.png"
                />
                <div className="state-inputs-group">
                  <div className="state-inputs1">
                    <i className="i16">Меня зовут</i>
                  </div>
                  <div className="frame">
                    <i className="i16">E-mail</i>
                  </div>
                  <div className="state-button1">
                    <i className="i16">Свяжитесь со мной</i>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-request1">
              <img className="button-request-item" alt="" src="/star-11.svg" />
              <i className="i31">Отправить</i>
            </div>
          </div>
          <div className="bubble-line1">
            <div className="bubble-line2">
              <img className="bubble-icon" alt="" src="/bubble6.svg" />
              <img className="bubble-icon" alt="" src="/bubble7.svg" />
              <img className="bubble-icon" alt="" src="/bubble8.svg" />
              <img className="bubble-icon" alt="" src="/bubble9.svg" />
              <img className="bubble-icon" alt="" src="/bubble10.svg" />
              <img className="bubble-icon" alt="" src="/bubble11.svg" />
            </div>
          </div>
        </div>
        <div className="popular-products">
          <img
            className="popular-products-child"
            alt=""
            src="/rectangle-42@2x.png"
          />
          <i className="i32">Самый ТОП</i>
          <div className="card-frame-s">
            <div className="card-name-m">
              <i className="collection">COLOUR BIG BANG</i>
              <i className="i33">2500 р</i>
              <i className="i34">
                <p className="p4">Универсальный конкрит</p>
                <p className="p4">для волос и макияжа</p>
              </i>
            </div>
            <img
              className="card-frame-s-child"
              alt=""
              src="/rectangle-133@2x.png"
            />
          </div>
          <div className="popular-products1">
            <img
              className="popular-products-item"
              alt=""
              src="/rectangle-421@2x.png"
            />
            <i className="i35">Самый ТОП</i>
            <div className="card-frame-s1">
              <div className="card-name-m">
                <i className="collection">COLOUR BIG BANG</i>
                <i className="i33">2500 р</i>
                <i className="i34">
                  <p className="p4">Универсальный конкрит</p>
                  <p className="p4">для волос и макияжа</p>
                </i>
              </div>
              <img
                className="card-frame-s-child"
                alt=""
                src="/rectangle-1331@2x.png"
              />
            </div>
            <div className="bubble-line3">
              <img className="bubble-icon" alt="" src="/bubble12.svg" />
              <img className="bubble-icon" alt="" src="/bubble13.svg" />
              <img className="bubble-icon" alt="" src="/bubble14.svg" />
              <img className="bubble-icon" alt="" src="/bubble15.svg" />
              <img className="bubble-icon" alt="" src="/bubble16.svg" />
              <img className="bubble-icon" alt="" src="/bubble17.svg" />
            </div>
          </div>
          <div className="bubble-line3">
            <img className="bubble-icon" alt="" src="/bubble18.svg" />
            <img className="bubble-icon" alt="" src="/bubble19.svg" />
            <img className="bubble-icon" alt="" src="/bubble20.svg" />
            <img className="bubble-icon" alt="" src="/bubble21.svg" />
            <img className="bubble-icon" alt="" src="/bubble22.svg" />
            <img className="bubble-icon" alt="" src="/bubble23.svg" />
          </div>
        </div>
        <div className="new-collections">
          <div className="card-frame-s2">
            <div className="card-name-m">
              <i className="collection">OXYGEN OVEREAT</i>
              <i className="i33">3000 р</i>
              <i className="i34">Парфюм-сыворотка для питания</i>
            </div>
            <img
              className="card-frame-s-child"
              alt=""
              src="/rectangle-1332@2x.png"
            />
          </div>
          <div className="card-frame-l">
            <div className="card-name-m3">
              <i className="collection3">BLOATED OIL RAINDROPS</i>
              <i className="i40">3500 р</i>
              <i className="i41">Сет питательных синтетических масел</i>
            </div>
            <img
              className="card-frame-l-child"
              alt=""
              src="/rectangle-1333@2x.png"
            />
          </div>
          <div className="card-frames">
            <div className="card-frame-m">
              <div className="card-name-m3">
                <i className="collection">CICA CORTEX SERUM</i>
                <i className="i33">1500 р</i>
                <i className="i43">Сыворотка-маска для кончиков</i>
              </div>
              <img
                className="card-frame-s-child"
                alt=""
                src="/rectangle-1334@2x.png"
              />
            </div>
            <div className="card-frame-m">
              <div className="card-name-m3">
                <i className="collection">ANTI-GRAVITY SERUM</i>
                <i className="i33">2000 р</i>
                <i className="i43">Сыворотка-маска против выпадения</i>
              </div>
              <img
                className="card-frame-s-child"
                alt=""
                src="/rectangle-1335@2x.png"
              />
            </div>
            <div className="card-frame-m">
              <div className="card-name-m3">
                <i className="collection">REBALANCE BOUNCE</i>
                <i className="i33">1500 р</i>
                <i className="i43">Маска для обновления цвета</i>
              </div>
              <img
                className="card-frame-s-child"
                alt=""
                src="/rectangle-1336@2x.png"
              />
            </div>
          </div>
          <i className="thin-hair">коллекция THIN hAIR</i>
          <i className="nasa">
            Новая коллекция, созданная в коллаборации с NASA
          </i>
        </div>
        <div
          className="button-request2"
          onClick={onButtonRequestContainerClick}
        >
          <img className="button-request-item" alt="" src="/star-12.svg" />
          <i className="i48">Подробнее</i>
        </div>
        <div className="hot-items">
          <div className="card-frame-l1">
            <img
              className="card-frame-l-item"
              alt=""
              src="/rectangle-130@2x.png"
            />
            <div className="card-name-l">
              <i className="collection7">BIG BANG BOOM</i>
              <i className="i49">3100 р</i>
              <i className="i50">{`Шампунь для тонизирования волос `}</i>
            </div>
            <div className="state-button2">
              <div className="i16">New</div>
            </div>
            <img className="vector-icon14" alt="" src="/vector4.svg" />
          </div>
          <div className="card-frame-s3">
            <img
              className="card-frame-s-child1"
              alt=""
              src="/rectangle-1301@2x.png"
              onClick={onRectangleImageClick}
            />
            <div className="card-name-s">
              <i className="collection8" onClick={onRectangleImageClick}>
                MOISTURE ME
              </i>
              <i className="i51">1 384 р</i>
              <i className="i52">Суперувлажняющий бальзам</i>
            </div>
            <div className="state-button3">
              <div className="i16">New</div>
            </div>
            <img className="vector-icon15" alt="" src="/vector5.svg" />
          </div>
          <div className="bubble-line-container">
            <div className="bubble-line2">
              <img className="bubble-icon" alt="" src="/bubble24.svg" />
              <img className="bubble-icon" alt="" src="/bubble25.svg" />
              <img className="bubble-icon" alt="" src="/bubble26.svg" />
              <img className="bubble-icon" alt="" src="/bubble27.svg" />
              <img className="bubble-icon" alt="" src="/bubble28.svg" />
              <img className="bubble-icon" alt="" src="/bubble29.svg" />
            </div>
          </div>
          <div className="button-request3">
            <div className="button-brandnewdefault">
              <div
                className="button-request4"
                onClick={onButtonRequestContainerClick1}
              >
                <img
                  className="button-request-item"
                  alt=""
                  src="/star-13.svg"
                />
                <i className="i53">BRAND NEW</i>
              </div>
            </div>
            <div className="button-brandnewdefault">
              <div
                className="button-request4"
                onClick={onButtonRequestContainerClick1}
              >
                <img
                  className="button-request-item"
                  alt=""
                  src="/star-14.svg"
                />
                <i className="i53">BRAND NEW</i>
              </div>
            </div>
          </div>
        </div>
        <div className="main-banner">
          <div className="main-banner-child" />
          <img className="main-banner-item" alt="" />
          <img className="main-banner-inner" alt="" />
          <div className="banner-ls">
            <img className="banner-ls-child" alt="" src="/ellipse-11@2x.png" />
            <i className="i55">
              <p className="p4">Российский бренд ухода</p>
              <p className="p4">для волос нового поколения</p>
            </i>
            <img className="banner-ls-item" alt="" src="/ellipse-12@2x.png" />
            <i className="i56">
              <p className="p4">средства</p>
              <p className="p4">будущего</p>
            </i>
          </div>
          <div className="banner-rs">
            <i className="i57">новые формулы</i>
            <div
              className="catalog-button"
              onClick={onButtonRequestContainerClick1}
            >
              <img
                className="catalog-button-child"
                alt=""
                src="/ellipse-13@2x.png"
              />
              <div className="catalog-button-item" />
              <i className="i58">каталог</i>
            </div>
          </div>
        </div>
        <div className="header-main">
          <div className="rectangle-container" onClick={openSidebarMenu}>
            <div className="instance-child1" />
            <div className="instance-child1" />
            <div className="instance-child1" />
          </div>
          <img
            className="icon9"
            alt=""
            src="/.svg"
            onClick={openCartSidebarView}
          />
          <img className="icon10" alt="" src="/1.svg" onClick={onIconClick} />
        </div>
        <img className="logo-icon3" alt="" src="/logo.svg" />
      </div>
      {isSidebarMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSidebarMenu}
        >
          <SidebarMenu onClose={closeSidebarMenu} />
        </PortalPopup>
      )}
      {isCartSidebarViewOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCartSidebarView}
        >
          <CartSidebarView onClose={closeCartSidebarView} />
        </PortalPopup>
      )}
    </>
  );
};

export default MainPage;
