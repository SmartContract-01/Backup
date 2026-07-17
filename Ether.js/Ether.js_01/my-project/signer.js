const {ethers} =require("ethers");

const provider=new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/6b02f694eadd41f283326ca4912ccce9");
const walletAddress="0x5fc9b13b157F445c218b6131D6Ca919382A88721";

const walletabi=[
  {
    "inputs": [],
    "name": "sendContract",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "sendetheruser",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_num",
        "type": "uint256"
      }
    ],
    "name": "setValue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "accountbalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "contractbalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getValue",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
}
]

const sign=async ()=>{
    const contract=new ethers.Contract(walletAddress,walletabi,provider);

    const getname=await contract.name();
    console.log("Name : ",getname);

    const set=await contract.getValue();
    console.log("setvalue : ",set)

    const set2=await contract.contractbalance();
    console.log("contractbalance : ",set2)

    // const set3=await contract.sendetheruser("0x2d6188A56075307651F1D0a48Fafc4dD2c3EA238");
    // console.log("sendether : ",set2)

    const set4=await contract.accountbalance("0x2d6188A56075307651F1D0a48Fafc4dD2c3EA238");
    console.log("balance : ",set4)
    
    const set5=await ethers.formatEther(set4);
    console.log("balance : ",set5)
    
}
sign();