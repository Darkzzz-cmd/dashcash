// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const ApiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5NzgzIiwiZXhwIjoxNzAzNDg4Njg2fQ.oI3q3xVuecan-iITqBYrfOdpW2NMlY1e-F6s3zqcEOA";

  const productResponse = await fetch(
    `https://api.sellpass.io/self/39572/announcements?time=${Date.now()}`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${ApiKey}`,
      },
    }
  );

  let products = await productResponse.json();

  //   console.log(products);
  res.status(200).json(products?.data[0]);
}
