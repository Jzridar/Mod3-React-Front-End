
# Mod3-MERN-Front-End


[Project LIVE link](https://product-user-page.onrender.com)

[Frontend GIT Link](https://github.com/Jzridar/Mod3-React-Front-End)

[Frontend LIVE Link](https://product-user-page.onrender.com)

[Backend GIT Link](https://github.com/Jzridar/Mod3-MERN-BackEnd)

[Backend LIVE Link](https://product-api-252u.onrender.com/)




**Introduction:** This is a simple E-Commerce project with basic operations like CRUD.
Where customer can perform the basic CRUD activity.
For the front end I've used HTML,CSS,Javascript and react. For the backend MERN stack is used.

**Technologies Used:**
**FRONT END:** HTML,CSS,Javascript and react.

**Getting Started:**
**Installed some dependencies like:**

1. Using react-bootstrap for designing/styling

2. Axios to make API requests using "npm install axios"


**STEPS:**

I have started by creating a basic index.css and index.js by importing the app.js file.

**COMPONENTS**

**Header component:**
This is a basic header component with the shop name and all the css where done in here with the help of bootstrap with the "link container" tag of going to the main page when we click on the shop name

**Footer component:**
This is a basic footer component with the copyy right logo and all the css where done in here 

**AdminLinksComponent :** 
This is also a basic component that contains the products and the users link using react bootstrap's link container

**PAGES**
**pages\admins\components**
For ease of code maintanance - I've created the admin page as parent component and it's child component to display the actual html page elements like user, email etc...
 - Each admin page components will have the corresponding API call methods and these method will be passed to child component as props.

-----------------------------------------
 Admin page components && child components
 ---------------------------------------
 **AdminUsersPage           - UsersPageComponent:** 

**AdminEditUserPage          - EditUserPageComponent:**

**AdminProductsPage         - ProductsPageComponent:** 

**AdminCreateProductPage    - CreateProductPageComponent:**

**AdminEditProductPage      - EditProductPageComponent:**

**App.js file:**
I've started creating the routes for adminuser page,adminproducts page,adminedit user page,admin edit product page,admincreate product page and also imported the header and footer components

In the footer section Ive added the link to homepage and the cryptocurrencies page for easy navigation

**Index.css,Boot-strap:**
Main designs are done using Boot-strap components ,Did some very basic designing using CSS in the index.css.


**Future Enhancements:**
Sign up and login credentials will be added.Might add the seller login also for 
each seller to sell their own product,order,order tracking review page will be created.

**SPECIAL THANKS TO:**
Render,Youtube,Udemy,Google,Stackoverflow






