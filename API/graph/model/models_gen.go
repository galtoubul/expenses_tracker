// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type Income struct {
	ID     string `json:"id"`
	Month  string `json:"month"`
	Salary *int   `json:"salary"`
	Other  *int   `json:"other"`
	User   *User  `json:"user"`
}

type NewIncomeInput struct {
	ID     string `json:"id"`
	Month  string `json:"month"`
	Salary *int   `json:"salary"`
	Other  *int   `json:"other"`
	User   string `json:"user"`
}

type NewOutcomeInput struct {
	ID           string `json:"id"`
	Month        string `json:"month"`
	BuildingFees *int   `json:"buildingFees"`
	Electricity  *int   `json:"electricity"`
	Gas          *int   `json:"gas"`
	CityFees     *int   `json:"cityFees"`
	Water        *int   `json:"water"`
	Partner      *int   `json:"partner"`
	Groceries    *int   `json:"groceries"`
	Other        *int   `json:"other"`
	User         string `json:"user"`
}

type Outcome struct {
	ID           string `json:"id"`
	Month        string `json:"month"`
	BuildingFees *int   `json:"buildingFees"`
	Electricity  *int   `json:"electricity"`
	Gas          *int   `json:"gas"`
	CityFees     *int   `json:"cityFees"`
	Water        *int   `json:"water"`
	Partner      *int   `json:"partner"`
	Groceries    *int   `json:"groceries"`
	Other        *int   `json:"other"`
	User         *User  `json:"user"`
}

type User struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}
