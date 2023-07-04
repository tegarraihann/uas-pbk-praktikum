<template>
  <div class="news-widget">
    <h2>Berita Terbaru</h2>
    <div class="articles">
      <div v-for="(article, index) in articles" :key="index" class="article">
        <div class="image-container">
          <img :src="article.urlToImage" alt="Gambar Berita" />
        </div>
        <div class="content">
          <h3>{{ article.title }}</h3>
          <p class="description">{{ article.description }}</p>
          <a :href="article.url" target="_blank">Baca selengkapnya</a>
        </div>
      </div>
    </div>
    <button @click="refreshNews">Perbarui</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    };
  },
  created() {
    this.fetchNews();
  },
  methods: {
    fetchNews() {
      const apiKey = '9b2a90a0ee694dd391b5c61a774b2b22';
      const url = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.articles = data.articles;
        })
        .catch(error => {
          console.log('Error fetching news:', error);
        });
    },
    refreshNews() {
      this.fetchNews();
    }
  }
};
</script>

<style scoped>
.news-widget {
  /* CSS lainnya */
}

.articles {
  display: flex;
  flex-wrap: wrap;
}

.article {
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}

.image-container {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
}

.content {
  margin-top: 10px;
}

h3 {
  margin: 0;
  font-size: 18px;
}

.description {
  margin-top: 5px;
  color: #666;
}

a {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: blue;
}
</style>

