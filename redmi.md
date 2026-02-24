1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answer:
1-getElementById: Selects a single element by its unique ID. Fastest method.

2-getElementsByClassName: Selects all elements with a specific class. Returns an HTMLCollection (live list).

3-querySelector: Selects the first element that matches a CSS selector (ID, class, or tag).

4-querySelectorAll: Selects all matching elements and returns a NodeList (static list).

2. How do you create and insert a new element into the DOM?

answer :
1.Create: Use document.createElement('tagName').

2.Modify: Add text or classes using .innerText or .classList.

3.Insert: Use .appendChild(element) or .append(element) to add it to a parent in the DOM.

3. What is Event Bubbling? And how does it work?

answer :
Event Bubbling is a process where an event starts from the target element (the one clicked) and propagates upwards through its ancestors in the DOM tree until it reaches the window object.

4. What is Event Delegation in JavaScript? Why is it useful?
answer :
Event Delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners to each child.

Why useful?: It saves memory and works automatically for newly added elements (dynamic content) without needing to re-bind listeners.

5. 5. What is the difference between preventDefault() and stopPropagation() methods?

answer:

preventDefault(): Stops the default action of the browser (e.g., stops a link from opening a URL or a form from refreshing the page).

stopPropagation(): Stops the event from bubbling up the DOM tree, preventing parent handlers from being triggered.