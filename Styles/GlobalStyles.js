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
  --color-white-400: #f9f9f9;

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
  overflow-x: hidden;
  background-color:var(--color-white-400);
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
.chart {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.chart li {
  position: relative;
  display: flex;
  height: 17rem;
}
.chart span {
  margin: 0 1.5rem;
  display: block;
  align-self: flex-end;
  width: 3rem;
  border-radius: 1rem;
  background: rgba(225, 190, 231,0.3)
}
.chart span:before {
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  padding: 1rem 1rem 0;
  display: block;
  text-align: center;
  content: attr(title);
  word-wrap: break-word;
}

.container{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 4rem;
}


.donut{
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 20rem;
  border-radius:70%;
  background: radial-gradient(var(--color-white) 40% ,transparent 40%),conic-gradient(#EC407A 0 40%,#3F51B5 0,60%, #B39DDB 0 100%);
}
.donut::before{
  display: block;
  content: '';
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.03);
  width: 26rem;
  padding-bottom: 26rem;
  z-index: -2;
}
.textContainer{
  text-align: center;
}

@media (max-width:44em){
  .chart span {
    margin: 0 1.4rem;
    display: block;
    align-self: flex-end;
    width: 3rem;
    border-radius: 1rem;
    background: rgba(225, 190, 231,0.3);
  }
  .chart {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50rem;
  }
}

@media (max-width:34em){
  .chart {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width:80rem;
  }
}
  @media (max-width:44em){
    .chart {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 70rem;
    }
  
}

::-webkit-scrollbar {
    height: 12px;
    width: 12px;
    background: #F5F5F5;
}

::-webkit-scrollbar-thumb {
    background: #7986CB;
    -webkit-border-radius: 1ex;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
}



`
export default GlobalStyles;