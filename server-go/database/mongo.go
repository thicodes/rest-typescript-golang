package database

import (
				"context"
				"log"

				"go.mongodb.org/mongo-driver/mongo"
				"go.mongodb.org/mongo-driver/bson"
				"go.mongodb.org/mongo-driver/mongo/options"
)

var MongoDB *mongo.Database

func ConnectMongo() {
	// clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
	// client, err := mongo.NewClient(clientOptions)
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// err = client.Connect(context.Background())
	// if err != nil {
	// 	log.Fatal(err)
	// }

	// MongoDB = client.Database("teste")
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")

	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	if err = client.Ping(context.TODO(), nil); err != nil {
		log.Fatal(err)
	}

	MongoDB = client.Database("teste")
}

func ConvertToBson(d interface{}) bson.M {
	val, _ := bson.Marshal(d)
	data := new(bson.M)
	bson.Unmarshal(val, data)
	return *data
}