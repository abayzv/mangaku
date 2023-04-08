export default defineEventHandler(() => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/komik");
    return response;
  };

  fetchData().then((response) => {
    console.log(response);
  });

  return {
    statusCode: 200,
  };
});
