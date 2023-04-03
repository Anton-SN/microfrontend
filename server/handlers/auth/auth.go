package auth

import (
	"fmt"
	"net/http"
)

func Login(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Привет! LOGIN")
}

func SignUp(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Привет! SIGNUP")
}
