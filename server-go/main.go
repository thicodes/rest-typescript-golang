package main

import (
				"github.com/gin-gonic/gin"
				"rest-typescript-golang/modules/articles"
)

func main() {
	router := gin.Default()
	
	router.GET("/articles", articles.ArticlesGetAll)
	router.POST("/articles", articles.ArticlePost)
	// router.GET("/articlePost", articles.ArticlesPost)
	// r := gin.Default()
	// r.GET("/ping", func(c *gin.Context) {
	// 	c.JSON(200, gin.H{
	// 		"message": "posdsdng",
	// 	})
	// })
	router.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}