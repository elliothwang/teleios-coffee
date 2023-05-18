import '../styles/main.scss';

const SidebarButton = ({ shown, handleButtonClick }) => {
  return (
    <>
      <div className="navButton" onClick={handleButtonClick}>
        <div className={shown ? 'topBarActive' : 'bar'}></div>
        <div className={shown ? 'midBarActive' : 'bar'}></div>
        <div className={shown ? 'botBarActive' : 'bar'}></div>
      </div>
    </>
  );
};

export default SidebarButton;
