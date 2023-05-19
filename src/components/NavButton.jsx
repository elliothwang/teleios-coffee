import '../styles/main.scss';

const SidebarButton = ({ sideNavOpen, handleButtonClick }) => {
  return (
    <>
      <div className="nav-button" onClick={handleButtonClick}>
        <div className={sideNavOpen ? 'top-bar-active' : 'bar'}></div>
        <div className={sideNavOpen ? 'mid-bar-active' : 'bar'}></div>
        <div className={sideNavOpen ? 'bot-bar-active' : 'bar'}></div>
      </div>
    </>
  );
};

export default SidebarButton;
