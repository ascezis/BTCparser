

document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://www.binance.com/api/v3/depth?symbol=BTCUSDT&limit=1000';
    const BTC = document.querySelector('#btc');

    const updated = () => {
        //Запрос обновляется раз в несколько милисекунд
        setInterval(async () => {
            axios.get(url)
                .then(response => {
                    const data = response.data;
                    const price = data.bids[data.bids.length - 1];
                    BTC.textContent = price[0]; // Изменение текста элемента после получения данных
                })
                .catch(e => {
                    console.log(e);
                })

        }, 700)
    };
    updated();
})

