import Web3 from "web3";

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // Espera a página carregar totalmente
    window.addEventListener("load", async () => {
      // Verifica se o navegador tem a extensão do MetaMask instalada
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Solicita a conexão à conta do usuário
          await window.ethereum.request({ method: "eth_requestAccounts" });
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      // Verifica se o web3 foi injetado pelo MetaMask no navegador (versões mais antigas)
      else if (window.web3) {
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      }
      // Caso contrário, conecta a um nó local ou a uma rede de testes
      else {
        const provider = new Web3.providers.HttpProvider(
          "http://localhost:8545"
        );
        const web3 = new Web3(provider);
        console.log("No web3 instance injected, using Local web3.");
        resolve(web3);
      }
    });
  });

export default getWeb3;
