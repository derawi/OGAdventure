/******************************************************************************
 **	@Author:				Rarity Extended
 **	@Twitter:				@RXtended
 **	@Date:					Tuesday August 31st 2021
 **	@Filename:				_app.js
 ******************************************************************************/
/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { Toaster } from "react-hot-toast";
import { Web3ReactProvider } from "@web3-react-fork/core";
import { ethers } from "ethers";
import useWeb3, { Web3ContextApp } from "contexts/useWeb3";
import useRarity, { RarityContextApp } from "contexts/useRarity";
import { InventoryContextApp } from "contexts/useInventory";
import { DungeonsContextApp } from "contexts/useDungeons";
import { UIContextApp } from "contexts/useUI";
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import SectionNoAdventurer from "components/sections/SectionNoAdventurer";
import SectionNoWallet from "components/sections/SectionNoWallet";
import useWindowInFocus from "hooks/useWindowInFocus";
import useClientEffect from "hooks/useClientEffect";

import "style/Default.css";

const GameWrapper = React.memo(function GameWrapper({ Component }) {
  const { switchChain, active, chainID } = useWeb3();
  const { isLoaded, currentAdventurer } = useRarity();

  if (!isLoaded) {
    return (
      <div className={"absolute inset-0 backdrop-blur-3xl pointer-events-none"}>
        <div className={"loader"} />
        <div className={"flex absolute inset-0 mt-32 w-full flex-center"}>
          <p className={"z-40 text-center text-white"}>{"Retrieving your adventurers..."}</p>
        </div>
      </div>
    );
  }

  if (!active) {
    return <SectionNoWallet />;
  }

  if (!currentAdventurer) {
    return <SectionNoAdventurer />;
  }

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <div className={"relative z-10 pb-24 mb-0 md:mb-24"}>
      {chainID >= 0 && chainID !== 250 && chainID !== 1337 ? (
        <div
          aria-label={"switchchain"}
          className={"flex justify-center w-full text-lg text-center"}
          onClick={switchChain}>
          {"PLEASE SWITCH TO SHIMMER NETWORK"}
        </div>
      ) : null}
      {getLayout(<Component />)}
    </div>
  );
});

function AppWrapper(props) {
  const { switchChain, chainID } = useWeb3();
  const windowInFocus = useWindowInFocus();

  useClientEffect(() => {
    if (windowInFocus && Number(chainID) > 0 && Number(chainID) !== 250 && Number(chainID) !== 1337) {
      switchChain();
    }
  }, [chainID, windowInFocus, switchChain]);

  return (
    <>
      <Head>
        <title>{"OG Adventure"}</title>
        <link
          rel={"icon"}
          href={
            "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏹</text></svg>"
          }
        />
        <meta httpEquiv={"X-UA-Compatible"} content={"IE=edge"} />
        <meta name={"viewport"} content={"width=device-width, initial-scale=1"} />
        <meta name={"description"} content={"OG Adventure"} />
        <meta name={"msapplication-TileColor"} content={"#9fcc2e"} />
        <meta name={"theme-color"} content={"#ffffff"} />
        <meta charSet={"utf-8"} />

        <meta name={"robots"} content={"index,nofollow"} />
        <meta name={"googlebot"} content={"index,nofollow"} />
        <meta charSet={"utf-8"} />
      </Head>
      <DefaultSeo
        title={"OG Adventure"}
        defaultTitle={"OG Adventure"}
        description={"An On-Chain Adventure based on rarity extended"}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: process.env.WEBSITE_URI,
          site_name: "OG Adventure",
          title: "OG Adventure",
          description: "An On-Chain Adventure based on rarity extended",
          images: [
            {
              url: `${process.env.WEBSITE_URI}og.png`,
              width: 1200,
              height: 675,
              alt: "Rarity",
            },
          ],
        }}
        twitter={{
          handle: "@RXtended",
          site: "@RXtended",
          cardType: "summary_large_image",
        }}
      />
      <main
        id={"app"}
        className={
          "overflow-x-hidden relative p-4 font-story bg-light-background dark:bg-dark-600 md:overflow-x-auto text-plain scrollbar-none"
        }
        style={{ minHeight: "100vh" }}>
        <Toaster
          position={"bottom-right"}
          toastOptions={{
            className:
              "text-xs border-4 border-black dark:border-dark-100 text-plain bg-white dark:bg-dark-600 noBr shadow-xl",
          }}
        />
        <Navbar />
        <GameWrapper {...props} />
        <Footer />
      </main>
    </>
  );
}

const getLibrary = (provider) => {
  return new ethers.providers.Web3Provider(provider, "any");
};

function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <UIContextApp>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ContextApp>
          <RarityContextApp>
            <InventoryContextApp>
              <DungeonsContextApp>
                <AppWrapper Component={Component} pageProps={pageProps} element={props.element} router={props.router} />
              </DungeonsContextApp>
            </InventoryContextApp>
          </RarityContextApp>
        </Web3ContextApp>
      </Web3ReactProvider>
    </UIContextApp>
  );
}

export default MyApp;
