import { BlockIconsHeader, BlockchainIconsHeader, CMSCards } from "@/components/CMS";
import { useState } from "react";

const BlockchainIcons = () => {
  return (
    <section className="section">
      <BlockchainIconsHeader />
      <div className="mt-8" />
      <BlockIconsHeader />
      <CMSCards />
    </section>
  )
}

export default BlockchainIcons