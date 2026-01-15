import "./Goods.css";

const Goods = () => {
    return(
        <>
        <div className="flex gap-10 px-20 py-10">
            <h1 className="main-text">Товары</h1>
            <button className="add-goods">+ Добавить товар</button>
        </div>

        <div className="px-25">
            <table className="border border-gray-400 border-collapse">
                <thead>
                    <tr>
                    <th className="border border-gray-400 p-2">Товар</th>
                    <th className="border border-gray-400 p-2">Количество</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="border border-gray-400 p-2">Смартфоны</td>
                    <td className="border border-gray-400 p-2">20 000</td>
                    </tr>
                    <tr>
                    <td className="border border-gray-400 p-2">Чайники</td>
                    <td className="border border-gray-400 p-2">3 500</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Goods