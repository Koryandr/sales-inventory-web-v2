import { Link } from "react-router-dom";
import {House,PackageOpen,BadgeDollarSign,ChartNoAxesCombined} from "lucide-react";

const Navbar = () => {
    return(
        <>  
            <div className="flex justify-center">
                <div className="inline-flex gap-5 border px-4 py-2">
                    <Link to="/" className="flex items-center gap-2">
                        <House size={20} />
                        <span>Домой</span>
                    </Link>

                    <Link to="/Goods" className="flex items-center gap-2">
                        <PackageOpen size={20} />
                        <span>Товары</span>
                    </Link>

                    <Link to="/Sales" className="flex items-center gap-2">
                        <BadgeDollarSign size={20} />
                        <span>Продажи</span>
                    </Link>

                    <Link to="/Analytics" className="flex items-center gap-2">
                        <ChartNoAxesCombined size={20} />
                        <span>Аналитика</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;