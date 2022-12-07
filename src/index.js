window.onload = function() {
    const a = document.querySelector("#content");
const b = document.createElement('div');
b.innerHTML = `<header>
<h1>Darling's Diner</h1>
</header>
<nav>
<h3 id="homeBTN">Home</h3>
<h3 id="menuBTN">Menu</h3>
<h3 id="contactBTN">Contact Us</h3>
</nav>`; 
a.appendChild(b);

const main = document.createElement('div');
main.className = "main"; 
main.innerHTML = `<main>
<div class="aboutUs">
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus in deleniti quibusdam est harum iste sequi asperiores doloribus repellendus. Corrupti laborum molestias eos dolorum sunt! Vero veritatis provident dolor rerum facere voluptate veniam sapiente ipsa recusandae harum nulla in necessitatibus alias dolore ex, minus nemo, impedit corporis placeat voluptatum consectetur.</p>
</div>
<div class="findUs">
    <h3>Where To Find Us</h3>
    <p>Street Address Here</p>
</div>
<div class="hours">
    <h3>Hours</h3>
    <p>
        Sunday: CLOSED <br>
        Monday: 10am - 10pm <br>
        Tuesday:  10am - 10pm <br>
        Wednesday: 10am - 10pm <br>
        Thursday: 10am - 10pm <br>
        Friday: 10am - 11pm <br>
        Saturday: 10am - 11pm
    </p>
</div>
<div class="socials">
    <h4>Our Social Media</h4>
    <p>
        FaceBook <br>
        Instagram <br>
    </p>
</div>
</main>`;
a.appendChild(main);

const footer = document.createElement('div');
footer.className = "footer"; 
footer.innerHTML = `<footer>
<p>
    Copyright 2022 <a href="https://github.com/SylasB" target="blank">Sylas Boniek</a>
</p>
</footer>`;
a.appendChild(footer);

const homeBTN = document.querySelector('#homeBTN');
homeBTN.addEventListener("click", () => {
    main.innerHTML =  `<main>
    <div class="aboutUs">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus in deleniti quibusdam est harum iste sequi asperiores doloribus repellendus. Corrupti laborum molestias eos dolorum sunt! Vero veritatis provident dolor rerum facere voluptate veniam sapiente ipsa recusandae harum nulla in necessitatibus alias dolore ex, minus nemo, impedit corporis placeat voluptatum consectetur.</p>
    </div>
    <div class="findUs">
        <h3>Where To Find Us</h3>
        <p>Street Address Here</p>
    </div>
    <div class="hours">
        <h3>Hours</h3>
        <p>
            Sunday: CLOSED <br>
            Monday: 10am - 10pm <br>
            Tuesday:  10am - 10pm <br>
            Wednesday: 10am - 10pm <br>
            Thursday: 10am - 10pm <br>
            Friday: 10am - 11pm <br>
            Saturday: 10am - 11pm
        </p>
    </div>
    <div class="socials">
        <h4>Our Social Media</h4>
        <p>
            FaceBook <br>
            Instagram <br>
        </p>
    </div>
    </main>`
});

const menuBTN = document.querySelector('#menuBTN');
menuBTN.addEventListener("click", () => {
    main.innerHTML = `
<ul class="menuNav">
    <li><h3>Menu Items: </h3></li>
    <li class="menuNav1"><a href="#drinks">Drinks</a></li>
    <li class="menuNav2"><a href="#appetizers">Appetizers</a></li>
    <li class="menuNav3"><a href="#lunch">Lunch</a></li>
    <li class="menuNav4"><a href="#dinner"> Dinner</a></li>
</ul>
<div id="drinks">
    <div>
        <h3>Drinks</h3>
        <ul class="drinkList">
            <li class="drink1">
                <p class="bold">Water</p>
                <p>Delicious and free.</p>
                <p>$0</p>
            </li>
            <li class="drink2">
                <p class="bold">Lemonade</p>
                <p>House Lemonade fresh made daily.</p>
                <p>$2</p>
            </li>
            <li class="drink3">
                <p class="bold">Cola</p>
                <p>Your favorite brand of cola.</p>
                <p>$2</p>
            </li>
        </ul>
    </div>

</div>
<div id="appetizers">
    <div>
        <h3>Appetizers</h3>
        <ul class="appetizersList">
            <li class="appetizer1">
                <p class="bold">Chips and Dip</p>
                <p>Tortilla chips with your choice of salsa, artichoke dip, or guacamole.</p>
                <p>$3</p>
            </li>
            <li class="appetizer2"> 
                <p class="bold">Mozzerella sticks</p>
                <p>This classic appetizer consists of sticks of mozzarella cheese that are coated in seasoned Italian breadcrumbs, then deep fried until golden brown.</p>
                <p>$4</p>
            </li>
            <li class="appetizer3"> 
                <p class="bold">French Fries</p>
                <p>deep-fried potatoes that have been cut into thin strips.</p>
                <p>$3</p>
            </li>
        </ul>
    </div>
</div>
<div id="lunch">
    <div>
            <h3>Lunch</h3>
        <ul class="lunchList">
            <li class="lunch1">
                <p class="bold">Ham Sandwhich</p>
                <p>
                    A sandwhcih made from two slices of whole grain bread, mayo, lettuce, tomatoes, and slices of ham.
                </p>
                <p>$7</p>
            </li>
            <li class="lunch2">
                <p class="bold">Grilled Cheese</p>
                <p>
                    A warm sandwhich made from two slices of bread and your choice of either cheddar, mozzarella, or pepperjack cheese. Add tomatoe soup for $1.
                </p>
                <p>$6</p>
            </li>
            <li class="lunch3">
                <p class="bold">Tuna Sandwhich</p>
                <p>
                    Homemade tuna salad served on two slices of bread with lettuce and tomatoes.
                </p>
                <p>$7</p>
            </li>
            <li class="lunch4">
                <p class="bold">Spicy Chicken Wrap</p>
                <p>
                    Homemade Tortilla filled with spicy chicken, lettuce, tomatoes, and mayo.
                </p>
                <p>$7</p>
            </li>
            <li class="lunch5">
                <p class="bold">Fish and Chips</p>
                <p>
                    Breaded and deep-fried cod served with french-fries and vinegar.
                </p>
                <p>$7</p>
            </li>
            <li class="lunch6">
                <p class="bold">Chicken Salad</p>
                <p>
                    A romaine salad served with grilled chicken.
                </p>
                <p>$6</p>
            </li>
        </ul>
    </div>
</div>
<div id="dinner">
    <div>
        <h3>Dinner</h3>
        <ul class="dinnerList">
            <li class="dinner1">
                <p class="bold">Chicken Fingers</p>
                <p>Chicken breast dipped in breading and then deep-fried</p>
                <p>$9</p>
            </li>
            <li class="dinner2">
                <p class="bold">Rib-Eye Steak</p>
                <p>This steak is rich, juicy and full-flavored with generous marbling throughout.</p>
                <p>$14</p>
            </li>
            <li class="dinner3">
                <p class="bold">Cajun Shrimp and Chicken Pasta</p>
                <p>Cajun parmesan sauce that smothers tender pan-fried chicken and shrimp.</p>
                <p>$12</p>
            </li>
            <li class="dinner4">
                <p class="bold"> 1/4lbs Cheese Burger</p>
                <p>A 1/4lbs patty seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty American cheese on a sesame seed bun.</p>
                <p>$11</p>
            </li>
            <li class="dinner5">
                <p class="bold">Chicken Alfredo</p>
                <p>A creamy white sauce, long strands of pasta mixed with tender pieces of chicken thigh.</p>
                <p>$11</p>
            </li>
            <li class="dinner6">
                <p class="bold">Chicken Sandwhich</p>
                <p>A boneless breast of chicken seasoned to perfection, freshly breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun.</p>
                <p>$10</p>
            </li>
        </ul>
    </div>
</div>`
});

const contactBTN = document.querySelector('#contactBTN');
contactBTN.addEventListener("click", () => {
    main.innerHTML =  `<div class="contactPage">
    <div>
        <div>
            <h3>Contact Us</h3>
            <p>We would love to hear your feedback and suggestions! <br> (555)555-5555 <br> sudgestions@email.com</p>
        </div>
        <div class="contactLocation">
            <div>
                <h3>Location</h3>
                <p>1234 E 1st Lane, SomeWhere, USA</p>
            </div>
        </div>
    </div>
</div>`;
});

};