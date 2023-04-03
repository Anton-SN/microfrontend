package main

import (
	"fmt"
	"log"
	"net/http"
	"microfronted/server/handlers/auth"
)

func sayHi(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Привет!")
}

func sayHi2(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Привет! МИР")
}

func main() {
	http.HandleFunc("/", sayHi)
	http.HandleFunc("/h2", sayHi2)
	http.HandleFunc("/auth/login", auth.Login)
	http.HandleFunc("/auth/signup", auth.SignUp)

	log.Println("Starting server....")

	err := http.ListenAndServe(":8080", nil)

	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}

	defer log.Println("Close server....")
}
