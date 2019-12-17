import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import News from "./components/News";
import Form from "./components/Form";

class App extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    this.checkNews();
  }

  checkNews = async (category = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=498a197fe48a438fa5f31b41b180cba4`;

    const response = await fetch(url);
    const news = await response.json();

    this.setState({
      news: news.articles
    });
  };

  render() {
    return(
      <Fragment>
        <Header title="API React News"/>

        <div className="container white contenedor-noticias">
          <Form 
            checkNews = {this.checkNews}
          />
          <News 
            news = {this.state.news}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
