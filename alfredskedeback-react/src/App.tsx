import './App.scss'
import AsLink from './components/as-link';

function App() {
  return (
    <>
      <header>
        <div>
          <a className="ml-10" href="/">React</a>
          <a className="ml-10" href={import.meta.env.VITE_VUELINK as string}>Vue</a>
          <a className="ml-10" href={import.meta.env.VITE_ANGULARLINK as string}>Angular</a>
        </div>
      </header>
      <main>
        <h1>Hello.</h1>
        <h2>My name is Alfred Skedebäck.</h2>
        <p>I'm an independent software developer. I've worked as an programming consultant for 3+ years and currently work at <AsLink href="https://umain.com/">UMAIN</AsLink> as Web developer. You can find some of my work, including this portfolio, over at <AsLink href="https://github.com/alfredskeden/">Github</AsLink>. Add me on <AsLink href="https://se.linkedin.com/in/alfred-skedeb%C3%A4ck-09650970">LinkedIn</AsLink>.</p>
        <p>This page is created using <AsLink href="https://reactjs.org/">React</AsLink> with <AsLink href="https://vitejs.dev/">Vite</AsLink>. This shows some of the technologies that I use, on this page:</p>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>SCSS</li>
          <li>Node.js</li>
          <li>Linux</li>
          <li>Nginx</li>
        </ul>
        <p>Outside of programming and helping my girlfriend take care of our dog, I enjoy computer games, sushi and solving Rubik's cubes.</p>
      </main>
      <footer></footer>
    </>
  )
}

export default App
