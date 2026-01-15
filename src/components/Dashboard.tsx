import "./Dashboard.css";
import { Warehouse, Wallet, CalendarDays } from "lucide-react";


const Dashboard = () => {
    return(
        <>
                <hr/>
                <br/>
            <div>
                <h1 className="main-text">Добро пожаловать !</h1>
                <p className="secondary-text">Ваш обзор бизнеса на сегодня</p>
            </div>
                <br/>
                <hr/>
            <div className="blocks">
                <div className="Remainder">
                    <div className="flex items-center gap-1">
                        <Warehouse/><p>Остаток на складе</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <h1>135</h1><p>Товаров в наличии</p>
                    </div>
                </div>

                <div className="Profit">
                    <div className="flex items-center gap-1">
                        <Wallet/><p>Прибыль за сегодня</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <h1>+ 12 500 KZT</h1>
                    </div>
                </div>

                <div className="Calendar">
                    <div className="flex items-center gap-1">
                        <CalendarDays/><p>Прибыль за неделю</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <h1>+ 78 200 KZT</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;