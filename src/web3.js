// config web3 provider
import Web3 from "web3";

// const web3 = new Web3(window.web3.currentProvider); // metamask provider that i want to replace
const web3 = new Web3(window.ethereum);

window.ethereum.enable();
export default web3;
