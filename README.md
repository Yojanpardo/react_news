# React News 
Para este proyecto vamos a utilizar una API de noticias llamada [News API](https://newsapi.org/).  
La idea es poder comprender como consumir una API con un proyecto de React clásico.

## Registro en la API
Primero que todo debemos crear una cuenta en [News API](https://newsapi.org/) para obtener la llave con la cual vamos a conectar nuestra aplicación.  
El llamado de una API en React es recomendable hacerlo en el estado ComponetnDidMount de la siguiente manera 

~~~js
componentDidMount(){
    this.checkNews();
}

checkNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=498a197fe48a438fa5f31b41b180cba4`;

    const response = await fetch(url);
    const news = await response.json();

    this.setState({
      news : news.articles
    });
}
~~~