// Will be using reselect library in order not run the reduce on every redux action & hence prevent
// re-rendering
import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
    console.log("state in selectCategoryReducer", state);
    return state.categories
};

const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => {
        console.log("category slice >>>>", categoriesSlice);
        return categoriesSlice.categoriesArray
    }
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => {
        console.log("selectCategories", selectCategories);
        console.log("inside categories selector in redux store");
        return categories.reduce(
            (acc, category) => {
                const { title, items } = category
                acc[title.toLowerCase()] = items;
                return acc;
            },
            {}
        )
    }
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)
