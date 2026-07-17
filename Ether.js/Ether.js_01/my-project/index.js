const { ethers } = require("ethers");

const api=new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/6b02f694eadd41f283326ca4912ccce9");
console.log("Hllo i m run")
const querry=async () => {
    const v1=await api.getBlockNumber();
    console.log("Current Block : ",v1)

    const v2=await api.getBalance("0x4675C7e5BaAFBFFbca748158bEcBA61ef3b0a263");
    console.log("Current Balance : ",v2)

    const balance= ethers.formatEther(v2);
    console.log("Ether : ",balance);
}
querry();


