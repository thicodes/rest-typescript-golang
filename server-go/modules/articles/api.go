package articles

import (
				"net/http"
				"github.com/gin-gonic/gin"
)

type Article struct {
	Title string `json:"title"`
	Description string `json:"description"`
}

var articles = []Article{
	{
		Title: "Article Test",
		Description: "Lorem ipsum...",
	},
}

func ArticlesGetAll(c *gin.Context) {
	c.JSON(http.StatusOK, articles)
}

func ArticlePost(c *gin.Context) {
	var json Article
	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	newArticle := append(articles, json)
	c.JSON(http.StatusOK, newArticle)
}