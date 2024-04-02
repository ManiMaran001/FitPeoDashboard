import { createGlobalStyle } from 'styled-components';



const GlobalStyles=createGlobalStyle`

:root {
  --color-grey-100:#FAFAFA;
  --color-grey-0:#FAFAFA;
  --color-grey-500:#B0BEC5;
  --color-grey-700: #374151;
  --color-grey-300:#E0E0E0;
  --color-indigo-700: #1A237E;
  --color-indigo-light:rgba(140, 151, 199,0.4);
  --color-black:#000;
  --color-green-400:#26A69A;
  --color-purple-200:#CE93D8;
  --color-cyan-200:#80DEEA;
  --color-pink-200:#F48FB1;
  --color-pink-light:rgba(233, 30, 99,0.2);
  --color-white:#fff;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
  --shadow-sm:0 1px 2px rgba(0,0,0,0.04);
  --shadow-md:0 0.3rem 1rem 1rem rgba(0,0,0,0.03);
}

*,
::after,
::before{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html{
  /* 1rem is 16px so 10/16 */
  font-size: 62.5%;
  @media (max-width: 34em) {
      font-size: 75%;
    }
}

body{
  font-family: 'Poppins',sans-serif;
  line-height: 1.5;
  font-size: 1.6rem;
  height:100%;
  width: 100%;
  color: var(--color-grey-700);
}


button{
  font: inherit;
  color: inherit;
}



a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

img{
  max-width: 100%;
}
`
export default GlobalStyles;