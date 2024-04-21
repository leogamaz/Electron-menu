const https = require('https');

class GetPrice {
    async getBtc() {
        let url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key=413c8d3d3570fca2b49de23ac0963bbbcea4fd35283a11af42bd6a2680380eef';

        return new Promise((resolve, reject) => {
            const req = https.get(url, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    resolve(JSON.parse(data)); // Parse JSON para objeto antes de resolver a promessa
                });
            });

            req.on('error', (error) => {
                reject(error);
            });
        });
    }

    async getEth() {
        let url = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR&api_key=413c8d3d3570fca2b49de23ac0963bbbcea4fd35283a11af42bd6a2680380eef';

        return new Promise((resolve, reject) => {
            const req = https.get(url, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    resolve(JSON.parse(data)); // Parse JSON para objeto antes de resolver a promessa
                });
            });

            req.on('error', (error) => {
                reject(error);
            });
        });
    }
}

module.exports = GetPrice;
