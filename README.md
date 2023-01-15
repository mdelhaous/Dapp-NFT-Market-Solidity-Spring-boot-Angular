
# Dapp-NFT-Market-Solidity-Spring-boot-Angular
Il s'agit d'un marché NFT décentralisé ouvert construit avec des contrats intelligents. Il s'agit essentiellement d'une plate-forme ouverte où chaque utilisateur peut créer son propre NFT et l'exposer sur une place de marché.
## Table des matières

- Introduction
- Le Projet
- Outils
- Conclusion

# Introduction
  Le développement de la technologie blockchain a ouvert de nouvelles possibilités pour la création, la vente et l'achat de biens virtuels uniques appelés "NFTs" (non-fungible tokens). Ces NFTs sont des actifs numériques qui ne peuvent pas être échangés de manière interchangeable, comme le sont les crypto-monnaies telles que Bitcoin.
  Le projet de Marketplace des NFTs vise à mettre en place une plateforme en ligne permettant aux utilisateurs de s'authentifier avec leur Ethereum wallet, d'acheter et de vendre des NFTs, ainsi que de procéder au minting de nouveaux NFTs. Les transactions au sein du Marketplace sont effectuées en utilisant des crypto-monnaies telles qu'Ethereum et Bitcoin.
  Le Marketplace est basé sur une architecture hybride avec une base de données NOSQL Mongodb pour stocker les informations générales, tandis que les transactions des NFTs sont gérées de manière sécurisée par des smart contracts.
  Ce rapport présente les détails du développement de ce projet, ainsi que les résultats obtenus et les enseignements tirés de ce processus.

### Repositorie
Tout d'abord, vous devrez `clone`  le référentiel dans votre compte Github :
```bash
  $ git clone https://github.com/mdelhaous/Dapp-NFT-Market-Solidity-Spring-boot-Angular.git
```
### Intallation 
#### Front-end
Tout d'abord, vous devrez installer les dépendances avec : `npm install`.

Exécutez la commande suivante dans votre terminal après avoir cloné le référentiel principal :
```bash
$ npm install
```

Ensuite, vous devrez installer web3 globalement en exécutant la commande suivante dans votre terminal :
```bash
$ npm install web3
```
#### Back-end
Tout d'abord, vous devrez installer les dépendances avec : `npm install ethers`.

Ensuite,
```bash
$ npx hardhat node
```

Déployez les contrats sur votre blockchain locale en exécutant la commande suivante :
```bash
$ npx hardhat run --network localhost scripts/deploy1.js
```

### Ouverture de l'interface utilisateur
Tout d'abord, il est nécessaire d'installer le portefeuille Metamask en tant qu'extension de navigateur : https://metamask.io/

Ensuite, vous devez configurer Metamask pour vous connecter à votre blockchain locale . Cela nécessite les éléments suivants :

- Open Metamask
- Open the Network Configuration panel
- Configure your private network by adding http://localhost:8545 on the URL and 1337 as a chain ID
- Import the first hardhat Account to Metamask by copying the Account Private Key from hardaht and pasting it on Metamask

Enfin, il vous suffit d'exécuter la commande suivante dans votre terminal pour ouvrir l'interface utilisateur :
```bash
$ ng serve
```

# Le Projet
Dans cette Partie, nous allons explorer les différentes phases de la conception et de la réalisation de l'application. Nous allons décrire les différents aspects de l'application, tels que la partie Backend, les Microservices, les Smart Contracts, la partie Frontend et la partie Database.
Cette partie va vous permettre de comprendre les différentes étapes de développement de l'application, ainsi que les technologies et les outils utilisés pour mettre en place chaque partie de l'application.
## 1.Partie Frontend
### Interface avant Metamask 
![Interface](https://github.com/alirahich01/pic/blob/master/interfaceMarket.png?raw=true)
### connection MetaMask 
![Interface](https://github.com/alirahich01/pic/blob/master/connectionMetaMask.png?raw=true)
### Interface après metamask
![Interface](https://github.com/alirahich01/pic/blob/master/interfaceMarket2.png?raw=true)
### Profile
![Interface](https://github.com/alirahich01/pic/blob/master/peofiles.png?raw=true)
### Mint NFT
![Interface](https://github.com/alirahich01/pic/blob/master/MintNft.png?raw=true)
### Buy NFT
![Interface](https://github.com/alirahich01/pic/blob/master/Buynfts.png?raw=true)
![Interface](https://github.com/alirahich01/pic/blob/master/Buynft2.png?raw=true)
## 2.Partie Data base
### Register
![Interface](https://github.com/alirahich01/pic/blob/master/DataBase.png?raw=true)
## 3.Partie DevOps
### DevOps
![Interface](https://github.com/alirahich01/pic/blob/master/DevOPs.png?raw=true)

# Outils
- Figma
- Hardhat
- SpringBoot
- MongoDb
- Angular
- Ethers
- Web3js
- PostMan
- Git
- Github
- Docker
- Metamask

# Conclusion
  Le projet de Marketplace des NFTs a permis de mettre en place une plateforme en ligne sécurisée et efficace pour l'achat et la vente de NFTs. L'utilisation de l'Ethereum wallet et de smart contracts a garanti une gestion sécurisée des transactions, tandis que l'utilisation de Mongodb a permis de stocker de manière efficace les informations générales. Le développement de ce projet a permis de mettre en avant les nombreuses possibilités offertes par la technologie blockchain et les NFTs, et a contribué à l'essor de ce marché en pleine croissance.
