import PropTypes from "prop-types";
import "./sidebar-menu.css";

const SidebarMenu = ({ className = "" }) => {
  return (
    <div className="sidebar-menu">
      <div className="div87">
        <img className="child24" alt="" src="/star-21.svg" />
        <img className="vector-icon16" alt="" src="/vector6.svg" />
        <div className="side-bar-sort">
          <i className="i59">Новые коллекции</i>
          <i className="with-nasa">with NASA</i>
          <i className="i60">Основной каталог</i>
          <i className="i61">Подбор ухода</i>
        </div>
      </div>
    </div>
  );
};

SidebarMenu.propTypes = {
  className: PropTypes.string,
};

export default SidebarMenu;
