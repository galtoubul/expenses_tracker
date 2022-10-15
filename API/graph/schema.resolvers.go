package graph

import (
	"api/graph/generated"
	"api/graph/model"
	"context"
	"fmt"
)

// CreateIncome is the resolver for the createIncome field.
func (r *mutationResolver) CreateIncome(ctx context.Context, input model.NewIncomeInput) (*model.Income, error) {
	panic(fmt.Errorf("not implemented: CreateOutcome - createOutcome"))

}

// CreateOutcome is the resolver for the createOutcome field.
func (r *mutationResolver) CreateOutcome(ctx context.Context, input model.NewOutcomeInput) (*model.Outcome, error) {
	panic(fmt.Errorf("not implemented: CreateOutcome - createOutcome"))
}

// Incomes is the resolver for the incomes field.
func (r *queryResolver) Incomes(ctx context.Context, userID *string) ([]*model.Income, error) {
	salary := int(17500)
	other := int(250)
	user := model.User{ID: "1", Name: "Gal"}
	income := model.Income{
		ID:     "3",
		Month:  "01/01/2022",
		Salary: &salary,
		Other:  &other,
		User:   &user}
	var incomes []*model.Income
	incomes = append(incomes, &income)
	return incomes, nil
}

// Outcomes is the resolver for the outcomes field.
func (r *queryResolver) Outcomes(ctx context.Context, userID *string) ([]*model.Outcome, error) {
	panic(fmt.Errorf("not implemented: Outcomes - outcomes"))
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
