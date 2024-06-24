# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > Your answer here

The code is within the same module, "Kids.js". The event listener looks for certain areas on the page, and executes a window alert. In this case in the data type "child" was embedded in the meta data so that only items with that data type will excecute the widow alert

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > Your answer here

The findCelebrityMatch() function imports the celebrity data into the Pairings function so that as you iterate through each of the kids, it will find the celebrity match corresponding to each kid.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > Your answer here

In the for..of loop the attribute for the celebrity's sport is already set. So, when the user clicks on a celebrity's name, it first looks to make sure that it has the celebrity type tag, and if it does then it'll display both the name and the sport of that celebrity.

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Your answer here

   1) At the beginning of the main module the Pairings, Celebrities, and Kids modules are imported. 
   2) To be honest, I'm not sure how to explain "const mainContainer = document.querySelector("#container")" and mainContainer.innerHTML = applicationHTML
   3) const "applicationHTML =" dictates the structure of the HTML for the webpage.
      1. Sets the first heading for the page “Make a Memory…”
      2. Next, it loads two articles, the first containing two          sections. The first article is given the class “details”, while the inner two sections are given the class of “detail–column” which allows the details.css module to dictate the structure of the 2 articles
      3. The 2 sections contain the headers of “Kids” and “Celebrities” and both contain the the functions ${Kids()} and ${Celebrities()} respectively that return the HTML that is generated in their modules

