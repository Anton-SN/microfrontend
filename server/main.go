package main

import (
"fmt"
"net/http"
"log"
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

    err := http.ListenAndServe(":8080", nil)

    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }
}
