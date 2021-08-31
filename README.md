<h1 align="center">Popular More Popular</h1>
<h1 align="center"><img src="./assets/img/readme/responsive.JPG" /></h1>

:point_right: <a href="#">Live Website</a> :point_left:

:point_right: <a href="https://github.com/szomoru/MP2_popular-more-popular">Github Repository</a> :point_left:
 
 ## About

This website is a game website. The idea is comming from my 12years old son, who likes playing with the Higher or Lower game.   

 


## Table of Contents

[User Experience (UX)](#UX)

[Features](#features)

[Technologies Used](#technologies)

[Testing](#testing)

[Note about Search Volumes](#commits)

[Deployment](#deployment)

[Credits](#credits)


<a name="UX"></a>

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand the content of the webpage and the game rules. I also would like to make a fast decision if this website interesting for me enough.
        2. As a First Time Visitor, I want to be able to easily navigate through the site and get an overal picture about the site structure.
        3. As a First Time Visitor, I want to see their social media availability, where i can get more information about the site or organisation / person behind that.
        4. As a first Time Visitor i want to find the possibility how to contact the person or organization behind the site. 

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to see that the gam,e is dynamic. So the comparization pairs are not repeated or if they are repeated the result is not necessarily the same.
        2. As a Returning Visitor, I want to see a contact form where i can ask questions or share my thoughts and comments.
        3. As a Returning Visitor, I want to find community links.

    -   #### Frequent User Goals
        1. As a Frequent User, I want to see if there are more type of games or more versions of the existing one.
        2. As a Frequent User, I want to sign up to a Newsletter so never miss any updates or news about the website and the topic.

-   ### Design

    -   #### Colour Scheme
        I tried to make the colour scheme as simple as possible to avoid disturbing color layouts. 
        I have used 4 main colors:
        - Light grey (Hex: #ab000d) <img src="./assets/img/readme/mp2_light_grey.JPG" height="20px" /> 
        - Dark grey (Hex: #212121) <img src="./assets/img/readme/mp2_dark_grey.JPG" height="20px" />
        - Orange (Hex: #ab000d) <img src="./assets/img/readme/mp2_orange.JPG" height="20px" /> 
        - Red (Hex: #212121) <img src="./assets/img/readme/mp2_red.JPG" height="20px" />     
        The color combination was selected on the Material Design website (https://material.io/). I tried to select color combination which is not disturbing and do not bother the visitor, so they stay longer on the site if they wish.
        I also use basic warning or highlighter colors for their main usual meanings (red: not correct, green: correct, orange: selected etc ...) 


    -   #### Typography
        - There are two font families used on the site. Fredoka One and Montserrat. This font combination was selected on the googlefonts website (https://fonts.google.com/).
        There are fallback font families in those cases when the main fonts cannot be loaded for some reason. Cursive is the fallback font in the case of Fredoka One and Sans Serif for Montserrat. Both font families are representing very well the style of the webpage. They seems playfull and happy.      
        Fredoka One is used mainly for headings and titles or in the navigation menu, while Montserrat is used more in the texts and descriptions.
    
    -   #### Imagery
        -   Since the main topic of this website is to focus on images and comparing them, i wanted to keep the surroundings without any picture. I wanted to keep it neutral for the visitor to keep a good focus on the images for comparisation.

*   ### Wireframes

    -   There were several design change during the development process, but the final site looks very familiar with the wirframe. 

    -   Mobile Wireframe - [View](./assets/wireframes/)

        <img src="./assets/img/readme/.PNG" height="400px" />


    -   Ipad Pro Wireframe - [View](./assets/wireframes/)

        <img src="./assets/img/readme/.PNG" height="400px" />


    -   Desktop Wireframe - [View](./assets/wireframes/)

        <img src="./assets/img/readme/.PNG" height="400px" />

    ## Features

    ### Present Features

    #### Features accross all Pages

    -   The website was designed to have the same structure on every pages. On this way the visitor feel comfortable and find her/his way on every page.
        The layout is the following:
        - On the top section there is the Header with Navigation links
        - The middel section is the largest "main" section on every page, which contains the main information.
        - The page is closed with the Footer, which in this case contains only a Copyright text. 

    - [x] **Header**
        - The header can be divided into 2 main section. The first one is the name of the site ("Popular more Popular") without any link, it is just a decoration element. 
        - The second main section is the "navigation" section with 3 navigation items:
            -   About the Game
            -   Game
            -   Contact
    - [x] **Main section**
        - The main section contains the page specific information on every page.
    - [x] **Footer**
        - Always located as the last element of the page. In this project it does not contain any important information not to steal the focus of the visitor.        

    #### Features specific to Pages

    - [x] **Landing page**
        - Hero imnage set to the background, which clearly represents the type of the webpage
        - A smaller window floating over the background, which highlight some topic of the content od the page and call to action
        - If the visitor accept the invitation and take action after clicking the "Learn more" button, gets to the Home page.
    - [x] **About the Game page**
        - This page is the first page, that is shown after the landing page. By seeing this page the visitor gets a short description about the game itslef.
        - The visitor also can see screenshots from the game, so when she/he starts to play they are already familiar with the layout.
        - As a last element on this page the visitor can click on a button, which takes her/him to the Game page and start the game
    - [x] **Game page**
        This Game page is the soul of this site. Visually it is divided into 3 sections:
        - Header element with a question
        - "Start New Game" button, which can be a pushed anytime during the game
        - Score area where the visitor can follow up how many question is used from the total 10 questions and also how many correct and wrong answer has the visitor.
        
        At the end of the game (after answering the 10th question), there are 2 modals can be shown:
        - "Winner" modal:
            This modal is shown if the number of the correct answers larger or equal than the number of the wrong answers. 
        - "Loser" modal: 
            This modal is shown if the number of the correct answers smaller than the number of the wrong answers.
        The modal window also contains text and Smile icons to visulaize if the final result is positiv or negative.
        There is also a section which shows the statistics of the game (number of correct and wrong answers).
    - [x] **Contact page**
        This is the main page for the visitor if she/he wants to contact to the website developer.
        This page is divided into 2 main sections:
        - left side of the section contains a description in which cases the visitor can contact to the developer and also contains:
         - address
         - phone number
         - social media links
         of the developer. 
        - right section contins a contact form, where the visitor can leave her/his name/e-mail and the message.
         this feature is fully set up through the email.js website 
        

    ### Future Features
    This website and game is full of potential for future develpments and adding new features. Here are some possible future developments:
    - Adding a feature where the visitor can define the number of the questions her-/himself. 
    - Separate page with a form to uploding data into the database.
    - After a certain number of the database it makes sense to have the possibility to play games based on professions of people.  


<a name="technologies"></a>

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript] (https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.1.3:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the Social Media icons in the footer and on all cards and menu items to highlight and scale while being hovered over them.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Fredoka' and 'Montserrat' fonts into the style.css file which is used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap 
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Adobe XD:](https://www.adobe.com/se/products/xd.html)
    - Adobe XD free version was used to create [wireframes](./assets/wireframes/) during the design process.
1. [Beautify:]
    - To beautify my codes i have used the Bootstrap inbuilt beautify feature and Format Document feature.