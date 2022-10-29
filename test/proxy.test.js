const { ethers } = require("hardhat")
const { expect } = require("chai")
const hre = require("hardhat")

describe("Upgrade ERC721 with proxy", () => {
    it("Should deploy an upfraded ERC721", async () => {
        const nftContractFactory = await ethers.getContractFactory("NFTex")
        const nft2ContractFactory = await ethers.getContractFactory("NFTex2")

        let proxyContract = await hre.upgrades.deployProxy(nftContractFactory, { kind: "uups" })
        const [owner] = await ethers.getSigners()
        const ownerOfToken1 = await proxyContract.ownerOf("1")

        expect(ownerOfToken1).to.equal(owner.address)

        proxyContract = await hre.upgrades.upgradeProxy(proxyContract, nft2ContractFactory)
        expect(await proxyContract.test()).to.equal("upgraded")
    })
})
