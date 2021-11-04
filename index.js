// geochain-server/index.js

const express = require("express");
const xrpl = require("xrpl")

const PORT = process.env.PORT || 3001;

const app = express();
const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233");

async function connectXRP() {

    // Define the network client

    await client.connect()

    // ... custom code goes here
    console.log("Success! Connected to XRP Ledger");

    // Disconnect when done (If you omit this, Node.js; won't end the process)
    client.disconnect()
}

async function generateWallet() {
    // @todo - Set up auth and tokens
    // Create a wallet and fund it with the Testnet faucet:
    const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233")
    const test_wallet = new xrpl.Wallet()
    const fund_result = await client.fundWallet(test_wallet)
        //const test_wallet = fund_result.wallet
    console.log(fund_result)
}

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });

});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
    connectXRP()
    generateWallet()


});