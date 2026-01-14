import "./Header.css";

const Header = () => {
    return(
        <>
        <div className="flex items-center gap-300">
            <div className="flex items-center px-10 py-5">
                <img src="BoxLogo.png" width={110}/>
                <p className="main-name">SellControl</p>
                
            </div>
            <div className="flex gap-10">
                <p className="setup">Настройки</p>
                <p className="setup">Пользователи</p>
            </div>
        </div>
        </>
    )
}

export default Header;