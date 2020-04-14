package api

import (
				"net/http"
				// "go.mongodb.org/mongo-driver/bson/primitive"
				"github.com/gin-gonic/gin"
				"rest-typescript-golang/model"
)

// type Article struct {
// 	Id int `json:"id"`
// 	Title string `json:"title"`
// 	Description string `json:"description"`
// }


// var data = []Article{
// 	{
// 		Id: 1,
// 		Title: "Article Test",
// 		Description: "Lorem ipsum...",
// 	},
// }

// func ArticlesGetAll(c *gin.Context) {
// 	c.JSON(http.StatusOK, data)
// }

func ArticlePost(c *gin.Context) {
	// article := model.Article{
	// 	ID: primitive.NewObjectID(),
	// 	Title: "teste",
	// 	Description: "teste",
	// }

	// var article = &model.Article{
	// 	Title: "dasdasd"
	// }

	// if err := c.ShouldBind(&article); err == nil {
	// 	if result := model.ArticleModel({
	// 		ID: 1
	// 	}); result != nil {
	// 		c.JSON(201, result)
	// 	} else {
	// 		c.AbortWithError(500, errors.New("CreatePost error"))
	// 	}
	// } else {
	// 	c.AbortWithError(500, errors.New("ShouldBind error"))
	// }

	c.JSON(http.StatusOK, "asd")
	// var newArticle Article
	// if err := c.ShouldBindJSON(&newArticle); err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	// 	return
	// }
	// newArticle.Id = 2
	// articles := append(data, newArticle)
	// c.JSON(http.StatusOK, articles)
}

// func ArticleDelete(c *gin.Context) {
// 	for i, value := range 
// }