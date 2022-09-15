const main = async () => {
  try {
    const afroArtistContract = await hre.ethers.getContractFactory(
      "AfroArtist"
    );

    const nftContract = await afroArtistContract.deploy();

    await nftContract.deployed();

    console.log("Contract deployed to:", nftContract.address);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
