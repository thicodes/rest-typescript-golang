package model

import (
				"context"

				"go.mongodb.org/mongo-driver/mongo"
				"go.mongodb.org/mongo-driver/bson/primitive"
				"rest-typescript-golang/database"
)

type Article struct {
	ID primitive.ObjectID `json:"_id" bson:"_id"`
	Title string `json:"title" bson:"email"`
	Description string `json:"description" bson:"description`
}

func (m *Article) collection() *mongo.Collection {
	return database.MongoDB.Collection("article")
}

func (m *Article) InsertOne() error {
	m.ID = primitive.NewObjectID()
	_, err := m.collection.InsertOne(context.Background(), database.ConvertToBson(m))
	return err
}