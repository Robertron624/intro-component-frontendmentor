# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Receive an error message when the `form` is submitted if:
    -   Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
    -   The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

### Links

-   Solution URL: [Add solution URL here](https://github.com/Robertron624/intro-component-frontendmentor)
-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library
-   [Vite](https://vitejs.dev/guide/) - bundler tool
-   [Sass](https://sass-lang.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

With this project I kept improving my skills with React and Sass for styling. I also learned how to use the react-form-hook package to validate the form, it was way easier than handling the form manually, something I did before now.

I feel proud with the way I added the error messages and the error icon according to the design, I think it looks pretty good.
```js
<div className="input-container">
    <label hidden htmlFor="first_name">
        Email
    </label>
    <input
        className={`input ${firstNameErrors ? "input-error" : ""}`}
        required={false}
        id="first_name"
        type="text"
        placeholder={`${!firstNameErrors ? "First Name" : ""}`}
        {...register("first_name", { required: false })}
    />
    {firstNameErrors && (
        <div className="form-error">First Name cannot be empty</div>
    )}
    {firstNameErrors && <img src="/icon-error.svg" className="error-icon" />}
</div>
```
### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

-   [Writing Media Queries with Sass Mixins](https://itnext.io/writing-media-queries-with-sass-mixins-3ea591ea3ea4) - This helped me for using media queries with sass. I'd recommend it to anyone still learning this concept.
-   [How to Create Forms in React using react-hook-form](https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/) - This is an amazing article which helped me use the react-form-hook for handling the form.

## Author

-   Personal Website - [Robert Ramirez](https://robert-ramirez.netlify.app)
-   Frontend Mentor User- [@Robertron624](https://www.frontendmentor.io/profile/Robertron624)
-   Twitter - [@robertdowny](https://www.twitter.com/robertdowny)
