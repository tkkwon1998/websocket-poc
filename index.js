const ethers = require("ethers");

async function main() {
	const wcanto = "0x826551890Dc65655a0Aceca109aB11AbDbD7a07B"; ///WCANTO Contract
	// const provider = new ethers.providers.WebSocketProvider("wss://canto.ansybl.io/mainnet/ws_evm_rpc/?X-API-KEY=c806e55755c24949e56ee6ca");
	const provider = new ethers.providers.WebSocketProvider("ws://143.198.228.162:8546");
	provider.on("Block", async (blockNumber) => {
		console.log(blockNumber);
		const logs = await provider.getLogs({
			fromBlock: blockNumber,
			toBlock: blockNumber,
			address: wcanto,
			topics: [ethers.utils.id("Transfer(address,address,uint256)")], //filter
		});
		console.log(logs);
	});
}

main();
