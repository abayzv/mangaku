import axios from "axios";
import * as cheerio from "cheerio";

export default defineEventHandler(async () => {
  let titleData = "";

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/komik");
    return response;
  };

  await fetchData().then((response) => {
    const $ = cheerio.load(response.data);
    const title = $("title").text();

    titleData = title;
  });

  return {
    statusCode: 200,
    body: titleData,
  };
});
