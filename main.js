const { app, Tray, Menu, dialog } = require("electron");
const GetPrice = require("./Services/CriptoPrices/criptoPrices.services.ts");
const getPrice = new GetPrice();

app.on('ready', () => {
    const tray = new Tray('./assets/iconTemplate.png');
    const contextMenu = Menu.buildFromTemplate([{
        label: 'BitCoin', type: 'normal', checked: true, click: async () => {
            try {
                const btcData = await getPrice.getBtc();
                dialog.showMessageBox({ type: 'info', title: 'Preço do BitCoin', icon: './assets/bitcoin.png', detail: `${String(btcData.USD)} Dollars` })
            } catch (error) {
                console.error(error);
            }
        }
    },
    {
        label: 'Etherum', type: 'normal', checked: true, click: async () => {
            try {
                const ethData = await getPrice.getEth();
                dialog.showMessageBox({ type: 'info', title: 'Preço do Etherum', icon: './assets/ethereum.png', detail: `${String(ethData.USD)} Dollars` })
            } catch (error) {
                console.error(error);
            }
        }
    }]);

    tray.setToolTip('Price Criptos');
    tray.setContextMenu(contextMenu);
});
