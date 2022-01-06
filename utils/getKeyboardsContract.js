import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x59113DBc6ffe68B7D5dA1177FCd9b6F28F090f73';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}