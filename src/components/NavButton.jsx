import '../styles/main.scss';

const SidebarButton = ({ shown, handleButtonClick }) => {
  return (
    <>
      <div className="nav-button" onClick={handleButtonClick}>
        <div className={shown ? 'top-bar-active' : 'bar'}></div>
        <div className={shown ? 'mid-bar-active' : 'bar'}></div>
        <div className={shown ? 'bot-bar-active' : 'bar'}></div>
      </div>
    </>
  );
};

export default SidebarButton;
