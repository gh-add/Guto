import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`

  :root{
    --bs-lavender-purple: #8c67ccff;
    --bs-parchment: #f7f4edff;
    --bs-periwinkle: #b6cdf6ff;
    --bs-dusk-blue: #2d5692ff;
    --bs-dusk-blue-2: #254779ff;
    --bs-deep-space-blue: #2c3d55ff;
    --bs-space-indigo: #252e4dff;
    --bs-link-color: #2d5692ff;
    --bs-link-hover-color: #252e4dff;
    --bs-font-primary: "Geomini", sans-serif;
    --bs-font-secondary: "Exo 2", sans-serif;
  }

  body{
    background-color: var(--bs-deep-space-blue);
  }
  
  p{
    font-family: var(--bs-font-primary);
    font-weight: thin;
    color: var(--bs-periwinkle);
  }

  .container{
    margin: 0;
    padding: 0;
  }
`
export default Style;
