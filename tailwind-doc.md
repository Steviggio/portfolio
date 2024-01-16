# Personal documentation for useful tailwind props :

  Here's a little documentation to reference the tailwind's props utilities to modify the display of your elements.

### Margin / Padding 

  Utilities to control margins : 

    m - margin
    mx  - margin-left-right
    my  - margin-top-bottom
    mt  - margin-top
    mr  - margin-right
    mb  - margin-bottom
    ml  - margin-left

  Utilities to control paddings : 

    p - margin
    px  - margin-left-right
    py  - margin-top-bottom
    pt  - margin-top
    pr  - margin-right
    pb  - margin-bottom
    pl  - margin-left


### Width / Height 

  Utilities to control width :

    

### Transition 



### Font-style


### Media queries 

Here are the default breakpoints usable with TailwindCSS :

```js
  'sm': '640px',
  // => @media (min-width: 640px) { ... }

  'md': '768px',
  // => @media (min-width: 768px) { ... }

  'lg': '1024px',
  // => @media (min-width: 1024px) { ... }

  'xl': '1280px',
  // => @media (min-width: 1280px) { ... }

  '2xl': '1536px',
  // => @media (min-width: 1536px) { ... }
```

### Display 



### Effects



### Custom Styles

  Custom your scrollbar style :

  To customise your scrollbar style, you need to put the style in your index.css and use these classes to personalize the aspect of the different elements composing the scrollbar :

    ```css
    ::-webkit-scrollbar {

    }

    ::-webkit-scrollbar-thumb {

    }

    ::-webkit-scrollbar-track {

    }
    ```


  Hover only one element from the same list :

    ``` css
    .skill-list .skill  {
      transition: opacity 0.4s ease-in-out ;
    }

    .skill:hover {
      opacity: 1;
    }

    .skill-list:hover .skill:not(:hover) {
      opacity: 0.4;
    }
    ```