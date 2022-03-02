# Store-front 
### by Dario V

## Phase 1: Application Setup
- Create Basic React Application
- Introdce Redux State Management
- Implement State managed in memory
- Stylize Material UI Components


## Phase 2: Combined Reducers
In phase 2, we will be adding the “Add to Cart” feature to our application, which will allow users to not only browse items in the store, but also select them and have them persist in their shopping cart for later purchase.

> Add a new component to the page:

- Displays a short list (title only) of products in the cart
- This should be present at all times

> Home Page:

- When the user selects (clicks on) a category …
- Identify that category as selected
- Show a list of products associated with the category, that have a quantity > 0
- Add an “add to cart” button to each product

> When a user clicks the “add to cart” button add the item to their cart

- In the component, show a running list of the items in the cart (just the titles)
- Change the (0) indicator in the header to show the actual number of items in the cart

> Categories

- State should be a list of categories as well as the active one
  * Each category should have a normalized name, display name, and a description
- Create an action that will trigger the reducer to change the active category
- Update the active category in the reducer when this action is dispatched

> Products

- State should be a list of all products
  * Each product should have a category association, name, description, price, inventory count
- Create an action that will trigger the reducer to filter the product list when the active category is changed

> Create a reducer that will filter the products list based on the active category

> Create an action that will trigger the reducer to reduce the stock counter

> Create a reducer that reduces the # in stock when that action is dispatched

> Cart

- State should be an array of products that have been added (all product details)
- Create an action that will trigger the reducer to add the selected item to the cart

> Create a reducer that adds the product to the array of items in state