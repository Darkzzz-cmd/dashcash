// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const productResponse = await fetch(
    `https://api.sellpass.io/v2/public/shops/dashncash.sellpass.io/listings?time=${Date.now()}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  let products = await productResponse.json();

  res.status(200).json(products);
}
