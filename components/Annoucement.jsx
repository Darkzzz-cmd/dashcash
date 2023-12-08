import Link from "next/link";
import React, { useEffect, useState } from "react";

const Annoucement = () => {
  const [AnnoucementObject, setAnnoucementObject] = useState(null);

  useEffect(() => {
    (async () => {
      // Annoucement
      const announce = await fetch("/api/getAnnoucement", {
        method: "GET",
      });

      // Annoucement Data
      const announceData = await announce.json();

      // Annoucement
      setAnnoucementObject(announceData);
    })();
  }, []);

  return (
    <div className="bg-[#00ff33] flex flex-row items-center justify-center text-white">
      {AnnoucementObject && (
        <div className="py-1.5 flex flex-row items-center justify-between sm:justify-center w-full px-1 text-sm sm:text-base">
          <div className="flex flex-col sm:flex-row">
            {/* Annoucement Title */}
            <div className="annouce_text_shadow font-bold">{`${AnnoucementObject?.title} :`}</div>
            {/* Annoucement Description */}
            <div className="annouce_text_shadow after:font-bold sm:ml-1">{`${AnnoucementObject?.description}`}</div>
          </div>
          {/* Accoucement Button */}
          <Link href={`${AnnoucementObject?.buttonLink}`} target="_blank">
            <div className="bg-black h-full px-2 py-1 text-sm text-white rounded-[4px] mx-2">{`${AnnoucementObject?.buttonText}`}</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Annoucement;
