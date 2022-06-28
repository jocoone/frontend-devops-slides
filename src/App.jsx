import Reveal from 'reveal.js'
import './App.scss'
import Slide from './Slide'
import { useEffect } from 'react'
import Speaker from 'reveal.js/plugin/notes/notes.esm'

import devops from './assets/devops.svg'
import cicd from './assets/cicd.png'
import testing from './assets/testing.jpg'
import database from './assets/database.webp'
import verdaccio from './assets/verdaccio.svg'
import jfrog from './assets/jfrog.png'
import nexus from './assets/nexus.png'
import npm from './assets/npm.png'

function App() {
  useEffect(() => {
    setTimeout(() => {
      new Reveal({
        plugins: [Speaker],
      }).initialize({
        width: '100%',
        height: '100%',
        margin: 0,
      })
      console.log('loaded')
    }, 600)
  }, [])

  return (
    <div className="slides">
      <Slide background="/title.jpeg">
        <h1 style={{ textAlign: 'left', color: 'white' }}>Frontend Devops</h1>
        <h4 style={{ textAlign: 'left', color: 'white' }}>
          Yes, we also need it
        </h4>
      </Slide>
      <Slide
        notes={
          <ul>
            <li>What is devops?</li>
            <li>
              Role they give to people/teams that do development and has to
              handle deployments/releases/...
            </li>
            <li>2 parts: DEV and OPS</li>
            <li>Difficult point is the crossover</li>
            <li>Many kinds and flavours</li>
            <li>No focus on DEV today</li>
          </ul>
        }
      >
        <h1>
          What is <span className="fragment highlight-red">dev</span>
          <span className="fragment highlight-blue">ops</span>?
        </h1>
        <p className="fragment">
          <img src={devops} alt="devops" />
        </p>
      </Slide>
      <Slide
        notes={
          <ul>
            <li>Lots of companies claim to do devops</li>
            <li>Requires a lot of technial/functional setup</li>
            <li>Requires cooperation between teammembers</li>
            <li>Requires automated testing</li>
            <li>Also many flavors and differences</li>
          </ul>
        }
      >
        <h3>What comes after?</h3>
        <p className="fragment">
          <img src={cicd} alt="cicd" />
        </p>
      </Slide>
      <Slide>
        <h2 style={{ textAlign: 'left' }}>
          <span className="highlight">Testing</span> is extremely important
        </h2>
        <p style={{ textAlign: 'left' }}>
          <ul>
            <li className="fragment">Unit testing</li>
            <li className="fragment">Component testing</li>
            <li className="fragment">Manual testing</li>
            <li className="fragment">
              <span className="fragment highlight-red">E2E testing</span>
            </li>
          </ul>
        </p>
      </Slide>
      <Slide
        notes={
          <ul>
            <li>E2E testing is a wide topic</li>
            <li>Acceptance testing</li>
            <li>Snapshot testing</li>
            <li>Performance testing</li>
            <li>...</li>
          </ul>
        }
      >
        <p>
          <img src={testing} alt="testing" />
        </p>
      </Slide>
      <Slide
        notes={
          <ul>
            <li>Major: Breaking changes</li>
            <li>Minor: New features</li>
            <li>Patch: Bug fixes</li>
          </ul>
        }
      >
        <h2>Releasing</h2>
        <h3 className="fragment">Semantic Versioning</h3>
        <h1 className="fragment">
          <span className="fragment highlight-red">1</span>.
          <span className="fragment highlight-red">2</span>.
          <span className="fragment highlight-red">3</span>
        </h1>
        <h1 className="fragment">
          <span className="fragment fade-in highlight-red">Major</span>.
          <span className="fragment highlight-red">Minor</span>.
          <span className="fragment highlight-red">Patch</span>
        </h1>
      </Slide>
      <Slide>
        <h2 style={{ textAlign: 'left' }}>Difference Apps vs Libraries</h2>
        <h3 style={{ textAlign: 'left' }}>More or less the same</h3>
        <h4 style={{ textAlign: 'left' }}>Difference in "Deploying"</h4>
        <p style={{ textAlign: 'left' }}>
          <ul>
            <li className="fragment">
              Releasing: Build might be a little different{' '}
              <code className="highlight">npm run build</code>
            </li>
            <li className="fragment">
              Libraries: <span className="fragment strike">Deploying</span>
            </li>
            <li className="fragment">
              Releasing: <code className="highlight">npm publish</code> vs
              building (more in a second)
            </li>
          </ul>
        </p>
      </Slide>
      <Slide>
        <h2>Releasing Libraries</h2>
        <h3>npm registry</h3>
        <p className="fragment">
          <img style={{ height: '30vh' }} src={database} alt="database" />
        </p>
      </Slide>
      <Slide>
        <h2>npm registry</h2>
        <p className="r-stack">
          <img
            className="fragment fade-out"
            style={{ height: '30vh' }}
            src={database}
            alt="database"
          />
          <img
            className="fragment current-visible"
            style={{ height: '30vh' }}
            src={npm}
            alt="npm"
          />
          <img
            className="fragment current-visible"
            style={{ height: '30vh' }}
            src={verdaccio}
            alt="verdaccio"
          />
          <img
            className="fragment current-visible"
            style={{ height: '30vh' }}
            src={jfrog}
            alt="jfrog"
          />
          <img
            className="fragment"
            style={{ height: '30vh' }}
            src={nexus}
            alt="nexus"
          />
        </p>
      </Slide>
    </div>
  )
}

export default App
