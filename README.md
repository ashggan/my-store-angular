# MyStore Project Overview

MyStore is Angular application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.

## Getting Started

To use these files, simply merge the folders into the root directory of your scaffolded Angular application.

## Project Instructions

#### Project introduction: MyStore

You've completed the course! You know how to create a single-page application to offer a rich, dynamic experience on the web.

![MyStore shopping flow](shoppingflow.gif)

To showcase your new skills, you'll build an e-commerce website – an application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.

### install and setup

#### Install dependencies and run the server

`npm install && npm run start`

#### Project features

Your application reflects the same user experience as that of a real-world e-commerce website, including a(n):

- **Product list** page, which displays the available products for the user to choose and add to their cart (in various quantities)
- **Product details** page, which displays more information about any particular product
- **Shopping cart**, which includes the products that the user has added to their cart
- **Checkout form**, which collects information about the user (e.g., name, address, payment details, etc.)
- **Order confirmation page**, which shows the outcome after the user completes the checkout process (i.e., submits the checkout form)

#### Development strategy

Feel free to use this overview and the rubric specifications to create this project. You are always welcome to design and implement your own workflow, but if you are stuck or could use some inspiration, we've included the following walkthrough the help you get up and running.

1. **Scaffold your project** using the Angular CLI, and install any dependencies.
2. **Generate the product list component**. Having the product list as the "main" page is a great start for your users.
3. **Begin building the component logic and template** What is the function of the product list? What logic is included in the TypeScript component, and how does its HTML template function? Does this component collect any user input? If so, how does information entered by the user relate to properties in the TypeScript component?
4. **Consider the hierarchy of components**. Which other components do you anticipate you'll need to build in this application? Which component(s) should render other components? Which components should represent a parent-child relationship? Feel free to draw out this hierarchy as a chart to help you visualize the relationships between components.
5. **Create the TypeScript model** for products in the app. Any available product should be of this type, rather than an ordinary object.
6. **Generate the service(s)**. Which service(s) make the most sense? For any particular service, what is its function? Hint: You may want to create a service to handle any asynchronous data.
7. **Fetch data** from the API (or included `data.json` file) and render products in your product list.
8. **Generate and create other components**. How do these components interact, if at all, with the component you first created? How can we facilitate sharing information between them?
9. **Create routing** between components. Which components are linked by the router? How is the app routing module set up and configured to make sure the page doesn't reload during navigation?
10. **Ensure that inputs are validated** in the client. For example, your checkout form needs to collect information from the user in order for them to complete the checkout process. How do you ensure that you are collecting accurate information from the user?
