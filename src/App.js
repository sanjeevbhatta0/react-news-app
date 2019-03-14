import React from "react";
import axios from "axios";
import Header from "./components/header";
import Attribution from "./components/attribution";
import NewsCards from "./components/newsCards";

export default class App extends React.Component {
  state = {
    news: []
  };

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
          process.env.REACT_APP_SECRET
        }`
      )
      .then(res => {
        const news = res.data.articles;
        this.setState({ news });
        //console.log(news);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const newsData = this.state.news.map((article, id) => (
      <NewsCards
        key={id}
        image={article.urlToImage}
        title={article.title}
        description={article.description}
        url={article.url}
      />
    ));

    return (
      <div>
        <div className="container">
          <Header />
          <div className="row">{newsData}</div>
        </div>
        <Attribution />
      </div>
    );
  }
}
