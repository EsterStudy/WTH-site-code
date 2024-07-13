import { useState, useCallback } from "react";
import CartSidebarView from "../components/CartSidebarView";
import PortalPopup from "../components/PortalPopup";
import SidebarMenu from "../components/SidebarMenu";
import { useNavigate } from "react-router-dom";
import "./auth-log-in.css";

const AuthLogIn = () => {
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

  const onWhatTheHairClick = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Auth - Log in" to the project
  }, []);

  const onTextClick = useCallback(() => {
    // Please sync "Info -  Pattern template" to the project
  }, []);

  return (
    <>
      <div className="auth-log-in">
        <div className="auth-log-in-child" />
        <img className="auth-log-in-item" alt="" src="/rectangle-84@2x.png" />
        <div className="header-pages">
          <img
            className="icon"
            alt=""
            src="/.svg"
            onClick={openCartSidebarView}
          />
          <div className="rectangle-parent" onClick={openSidebarMenu}>
            <div className="instance-child" />
            <div className="instance-child" />
            <div className="instance-child" />
          </div>
          <img className="icon1" alt="" src="/1.svg" />
          <div className="what-the-hair" onClick={onWhatTheHairClick}>
            <div className="vector-parent">
              <img className="vector-icon" alt="" src="/vector.svg" />
              <img className="vector-icon1" alt="" src="/vector1.svg" />
              <img className="vector-icon2" alt="" src="/vector2.svg" />
              <img className="vector-icon3" alt="" src="/vector3.svg" />
            </div>
          </div>
        </div>
        <div className="enter">
          <i className="i">Вход</i>
          <div className="parent" onClick={onFrameContainerClick}>
            <i className="faq">Еще нет аккаунта?</i>
            <i className="faq">Регистрация</i>
          </div>
          <div className="state-inputs-parent">
            <div className="state-inputs">
              <i className="faq">E-mail</i>
            </div>
            <div className="wrapper">
              <i className="faq">Пароль</i>
            </div>
            <div className="state-button">
              <i className="faq">Свяжитесь со мной</i>
            </div>
          </div>
          <div className="button-request">
            <img className="button-request-child" alt="" src="/star-1.svg" />
            <i className="i6">Войти</i>
          </div>
        </div>
        <div className="auth-log-in-inner" />
        <div className="footer">
          <img className="logo-icon" alt="" src="/logo.svg" />
          <div className="frame-parent">
            <div className="group">
              <i className="faq">политика обработки данных</i>
              <i className="i8" onClick={onTextClick}>
                посещение салона
              </i>
              <i className="i8" onClick={onTextClick}>
                доставка и оплата
              </i>
              <i className="faq">оферта</i>
            </div>
            <div className="container">
              <i className="faq">составы</i>
              <i className="faq">подбор ухода</i>
              <i className="faq">faq</i>
            </div>
            <div className="frame-div">
              <i className="faq">о бренде</i>
              <i className="i14">вакансии</i>
              <i className="faq">связаться с нами</i>
            </div>
          </div>
          <i className="copyright-2024">COPYRIGHT © 2024</i>
          <i className="think-about-your">THINK ABOUT YOUR HAIR</i>
          <i className="its-alright-all">IT`S ALRIGHT! ALL RIGHTS RESERVED</i>
          <img className="footer-child" alt="" src="/group-4.svg" />
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

export default AuthLogIn;
