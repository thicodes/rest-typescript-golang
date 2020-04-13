package articles

import (
				"net/http"
				"github.com/gin-gonic/gin"
)

func ArticlesGet(c *gin.Context) {
	c.JSON(http.statusOK, gin.H{
		"message": "pong",
	})
}

func ArticlePost(c *gin.Context) {
	c.JSON(200, gin)
}