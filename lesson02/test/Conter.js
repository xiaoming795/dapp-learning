const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Counter", function () {

    before(async function () {
        const Counter = await ethers.getContractFactory("Counter");
        counter = await Counter.deploy(); 
        await counter.waitForDeployment();
        console.log("Counter deployed to:", counter.target);
    });
    it("init eqeal 1 ", async function () {
        await counter.increment();
        const count = await counter.count();
        console.log("count:", count);
        expect(count).to.equal(1);
    });

    it("init eqeal 11 ", async function () {
        await counter.add(10);
        const count = await counter.count();
        console.log("count:", count);
        expect(count).to.equal(11);

    });



});