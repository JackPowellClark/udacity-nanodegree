# Website Performance Optimization

## PageSpeed Score

### Criteria: Critical Rendering Path
Simply go to: https://developers.google.com/speed/pagespeed/insights/?url=wise-range.surge.sh

### Optimisations Made
After running the given site through Page Speed Insights to measure the performance of a page for mobile devices and desktop devices, the following optimisations were made:
1. Optimised images and specified dimensions
2. Removed any unused CSS rules
3. Removed web font; replacing with system default
4. Inlined critical CSS

## Getting Rid of Jank

### Criteria: Frame Rate
To run: navigate to `./views` and open `pizza.html`

### Optimisations Made
1. Reduced the number of sliding pizzas generated when the page loads from 200, to 50
2. Replaced `querySelectorAll('.mover')` with `getElementsByClassName('mover')`
3. Replaced `style.left` with `style.transform`
4. Varible `phase` will only ever be 1 of 5 values, and the caluation is heavy: `phases.push(Math.sin((document.body.scrollTop / 1250) + (i % 5)))`. Set `phase` *outside* the `for` loop translating pizzas.

### Criteria: Computational Efficiency
To run: navigate to `./views` and open `pizza.html`

### Optimisations Made
1. Replaced `querySelectorAll("#mover")` with `getElementById("pizzaSize")`
2. Replaced `querySelectorAll(".randomPizzaContainer")` with `getElementsByClassName("randomPizzaContainer")`
3. Refactored function `changePizzaSizes`. Notably, removed the need to loop through all pizzas to determine a `dx` and `newwidth`. Instead, compute these values *once*, and then use this new width to loop through and set a new width for all pizzas.