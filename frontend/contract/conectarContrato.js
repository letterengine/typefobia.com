import { ethers } from 'ethers';
import abiJson from './abi.json';

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT;

async function conectarContrato() {
    let donarTypefobia;
    try {
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum),
                signer = provider.getSigner();
            donarTypefobia = new ethers.Contract(
                contractAddress,
                abiJson.abi,
                signer
            );
        } else {
            throw new Error('Hubo un problema al conectarse con el contrato.');
        }
    } catch (error) {
        console.log('ERROR:', error);
    }
    return donarTypefobia;
}

export default conectarContrato;
