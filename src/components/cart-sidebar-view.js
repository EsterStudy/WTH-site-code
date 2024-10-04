import PropTypes from "prop-types";
import "./cart-sidebar-view.css";

const CartSidebarView = ({ className = "" }) => {
  return (
    <div className="cart-sidebar-view">
      <img className="cart-sidebar-view-child" alt="" src="/star-22.svg" />
      <div className="sidebar-cart">
        <div className="state-button10">
          <i className="button-text">Оформить заказ</i>
        </div>
        <div className="total-sum">
          <i className="i149">Общая сумма</i>
          <i className="i150">1 600 Р</i>
        </div>
        <div className="item-in-cart">
          <img className="item-in-cart-child" alt="" src="/line-12.svg" />
          <img className="item-in-cart-item" alt="" src="/line-12.svg" />
          <img
            className="item-in-cart-inner"
            alt=""
            src="/rectangle-13318@2x.png"
          />
          <i className="i151">1 600 р</i>
          <div className="item-info">
            <i className="feed-me-pussycat">FEED ME, PUSSYCAT</i>
            <div className="wrapper4">
              <i className="i152">Сыворотка для волос</i>
            </div>
          </div>
          <div className="counter">
            <i className="i153">1</i>
            <img className="vector-icon30" alt="" src="/vector9.svg" />
            <img className="vector-icon31" alt="" src="/vector10.svg" />
          </div>
        </div>
        <i className="i154">Бесплатная доставка по СНГ от 2000 р</i>
        <img className="vector-icon32" alt="" src="/vector11.svg" />
        <i className="i155">корзина</i>
      </div>
    </div>
  );
};

CartSidebarView.propTypes = {
  className: PropTypes.string,
};

export default CartSidebarView;
