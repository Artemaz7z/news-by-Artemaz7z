import { useEffect, useState } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [keywords, setKeywords] = useState("");
  const debouncedKeywords = useDebounce(keywords, 1500);

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const response = await getNews({
        keywords: debouncedKeywords,
      });
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNews();
  }, [debouncedKeywords]);

  return (
    <main className={styles.main}>
      <div className={styles.columnBanner}>
        {news.length > 0 && !isLoading ? (
          <Search keywords={keywords} setKeywords={setKeywords} />
        ) : (
          "Loading..."
        )}
        {news.length > 0 && !isLoading ? (
          <NewsBanner item={news[0]} />
        ) : (
          <Skeleton type={"banner"} count={1} />
        )}
      </div>
      <div className={styles.columnItem}>
        {!isLoading ? (
          <NewsList news={news} />
        ) : (
          <Skeleton type={"item"} count={10} />
        )}
      </div>
    </main>
  );
};

export default Main;
