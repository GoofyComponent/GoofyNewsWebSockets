import { useQueryClient } from "react-query";
import CardArticle from "./components/CardArticle";
import NewArticleToast from "./components/NewArticleToast";
import { useGetArticles } from "./services/articles.service";
import { Article } from "./types/article.type";
import { useEffect, useState } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

function App() {
  const queryClient = useQueryClient();
  const { isLoading, isError, isSuccess, data } = useGetArticles();
  const [toastVisible, setToastVisible] = useState(false);

  const handleToastClick = () => {
    queryClient.invalidateQueries({ queryKey: ["articles"] });
    window.scrollTo({ top: 0, behavior: "smooth" });
    setToastVisible(false);
  };

  const handleRefreshToast = () => {
    queryClient.invalidateQueries(["articles"]);
    console.log("Articles refreshed!");
  };

  const sortedByDate = (a: Article, b: Article) =>
    new Date(b.published_at).getTime() - new Date(a.published_at).getTime();

  useEffect(() => {
    const echo = new Echo({
      broadcaster: "reverb",
      key: import.meta.env.VITE_REVERB_APP_KEY,
      wsHost: import.meta.env.VITE_REVERB_HOST,
      wsPort: import.meta.env.VITE_REVERB_PORT,
      wssPort: import.meta.env.VITE_REVERB_PORT,
      forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? "https") === "https",
      enabledTransports: ["ws", "wss"],
    });

    echo.channel("post-processed").listen("PostProcessed", () => {
      console.log("Post Processed event received");
      setToastVisible(true);

      setTimeout(() => {
        setToastVisible(false);
      }, 5000);
    });

    return () => {
      echo.leave("post-processed");
    };
  }, []);

  return (
    <main>
      <h1>GOOFY NEWS</h1>
      <section className="p-4">
        {toastVisible && (
          <NewArticleToast
            onClick={handleToastClick}
            onRefresh={handleRefreshToast}
          />
        )}

        {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {isSuccess && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.sort(sortedByDate).map((article, index) => (
              <CardArticle
                key={"article-" + article.user.name + index}
                article={article}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
