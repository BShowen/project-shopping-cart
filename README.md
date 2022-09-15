## Project: Shopping cart
I am building and testing a small e-commerce website.

#### View this app live [here](https://bshowen.github.io/project-shopping-cart/)
## Project goal: Learn more React!
I have been reading up on React router, and React testing with Jest. I am also very new to React hooks. So in this project I am creating a small e-commerce website, with a focus on Hooks, Tests, and React router. I also want this website to be mobile friendly, so I am using bootstrap for my layout.  

# 🧠 What I learned in this project
- I learned a whole lot about testing React. This turned out to be more complicated than I anticipated. Testing async functionality can be very tricky, especially when that functionality is nested in a custom hook. For example, I have a custom hook which fetches data from an API in the useEffect hook. Testing this was super tricky. Do I mock fetch with Jest? Do I let the test actually hit the API? Should I use a third party library for this? I ended up going with a small library called MSW. It's basically a service worker that intercepts network requests and responds with the data that you want it to respond with. This way my application can be tested and it doesn't know that it is receiving data from a service worker. This allowed me to test my code without refactoring my code just so it can be tested. Super cool!
- I also learned that @testing-library is just Jest under the hook with some extra functionality sprinkled on top for testing various UI frameworks such as React, Vue, etc. It took me some time for this to click and I struggled at first. Once I understood this it all became much easier to understand. 

# 📝 Notes for myself - These are some things that tripped me up...

- Testing a hook in isolation...I understand that you should be testing your application from the viewpoint of the customer or user, and ignore implementation. The user doesn't know, or care, if `isMenuOpen` is equal to true or false at a given instance. Don't test implementation details. Im stubborn. I want to, no I HAVE TO test my custom hook. For that you will reach for the `renderHook` method from `@testing-library/react`. It works like this...

1) you call `renderHook` with a callback that calls your hook. `renderHook` returns an object where one key is "current" and this points to the current render of your hook. 
2) You call some functionality that changes the state inside your custom hook. 
3) Now "current" points to the updated version of your hook. 

For example. 

```
 1 import { renderHook, act, waitFor } from "@testing-library/react";
 2 import { useCounter } from "./useCounter";
 3
 4 describe("The counter hook", () => {
 5  it("can be incremented", () => {
 6    const { result } = renderHook(() => useCartState());
 7
 8    act(() => {
 9      result.current.increment(); //update the state of the counter.
10    });
11 
12    expect(result.current.count).toBe(1); //assert that the count is correct. 
13
14 });
```

This works as you would expect. The problem that I had was that I was destructuring the result returned from `renderHook` and always referencing that variable in my assertions. This is bad because each time you change the state of your hook (in this case calling .increment()) then `renderHook` would re-render the hook and update the value stored at "current". This means I was referencing stale data and my assertions weren't working. For example. I'll take the same example and do it the WRONG way. 

```
 1 import { renderHook, act, waitFor } from "@testing-library/react";
 2 import { useCounter } from "./useCounter";
 3
 4 describe("The counter hook", () => {
 5  it("can be incremented", () => {
 6    const { result } = renderHook(() => useCartState());
 7
 8    //I am assigning the hook to a variable for easy reference (bad). 
 9    const counter = result.current;
10
11    act(() => {
12      //Notice that I reference the variable 'counter' and not 'result.current'
13      result.increment(); //update the state of the counter.
14    });
15
16    //Notice that I reference the variable 'counter' and not 'result.current'
17    expect(counter.count).toBe(1); 
18      // This will fail. count will still be zero because the reference to my hook is stale. The hook has been
19      // re-rendered with new state but my variable 'count' still points to the initially rendered hook with a count 
20      // of zero. 
21  });
22 });
```

Anytime you use `renderHook` you should always reference result.current and never assign the result to a variable. This is just something that tripped me up for a few hours and It took a lot of searching until I found a StackOverflow post where someone mentioned that result.current is a reference that gets updated on each render. 