
async function main() {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    const counterd =await counter.waitForDeployment();
    console.log("Counter deployed to:", counterd.target);
    // if(hre.network.config.chainId == 11155111 ) {
    //     await hre.run("verify:verify", {
    //         address: counterd.target
    //     });        
    // } else {
    //     console.log("Network is not sepolia, verification skipped...")
    // }

}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
