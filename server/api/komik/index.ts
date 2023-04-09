import axios from "axios";
import * as cheerio from "cheerio";

interface Data {
  [key: string]: any;
}

export default defineEventHandler(async (event) => {
  let titleData = "";
  const data: Data = {};
  const query = getQuery(event);

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3000/komik`, {
      params: query,
    });
    return response;
  };

  await fetchData().then((response) => {
    const $ = cheerio.load(response.data);
    const title = $("title").text();

    titleData = title;

    // get class film-list
    const filmList = $(".film-list");

    // get all class animepost from class film-list
    const animepost = filmList.find(".animepost");

    // foreach animepost get class animposx
    animepost.each((i, el) => {
      const animposx = $(el).find(".animposx");

      // get all a tag from class animposx
      const aTag = animposx.find("a");

      // get rating from animposx
      const rating = animposx.find(".rating").find("i").text();

      //  get url
      const url = aTag.attr("href")?.replace("https://komikcast.net/", "/api/");

      const scrapeData = {
        title: aTag.attr("title"),
        url,
        img: aTag.find("img").attr("src"),
        rating,
      };

      data[i] = scrapeData;
    });
  });

  return {
    message: titleData,
    data,
  };
});
