const API_KEY = "52764669-8d4e096089f4bb2dc111f0b21";

export const fetchNaturePhotos = async (query = "nature", perPage = 50) => {
  try {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&per_page=${perPage}`;
    const response = await fetch(url);

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};
