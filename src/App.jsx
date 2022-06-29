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
        fragmentInURL: true,
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
        <h2 style={{ textAlign: 'left' }}>
          Difference <span className="highlight">Apps</span> vs{' '}
          <span className="highlight">Libraries</span>
        </h2>
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
        <h3>
          <code className="highlight">npm set registry</code>{' '}
          <code>https://registry.npmjs.org/</code>
        </h3>
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
      <Slide>
        <h2>npm registry</h2>
        <h3>
          <code className="highlight">npm set registry</code>{' '}
          <code>http://my-internal-registry.local</code>
        </h3>
      </Slide>
      <Slide>
        <h2>npm registry</h2>
        <p>
          <img style={{ width: '60vw' }} src="/npmproxy.png" alt="proxy" />
        </p>
      </Slide>
      <Slide>
        <h2>Releasing Libraries</h2>
        <h3>locally</h3>
        <ul>
          <li>
            <code className="highlight">npm link</code>
          </li>
          <li>
            <code className="highlight">npm set registry</code>{' '}
            <code>http://localhost:[port]</code>
          </li>
          <li>
            <code className="highlight">npm pack</code> &{' '}
            <code className="highlight">npm install</code>{' '}
            <code>[local tar file]</code>
          </li>
        </ul>
      </Slide>
      <Slide>
        <h2>Hands on!</h2>
        <h3>let's fork 🍴</h3>
        <h4>
          <a href="https://github.com/sh33dafi/workshop-devops-fe-angular">
            https://github.com/sh33dafi/workshop-devops-fe-angular
          </a>
        </h4>
        <h4>
          <a href="https://github.com/sh33dafi/workshop-devops-fe-react">
            https://github.com/sh33dafi/workshop-devops-fe-react
          </a>
        </h4>
        <h4>
          <a href="https://github.com/sh33dafi/workshop-devops-fe-vue">
            https://github.com/sh33dafi/workshop-devops-fe-vue
          </a>
        </h4>
      </Slide>

      <Slide>
        <h2>Deploying</h2>
        <h3>Millions of options</h3>
        <h4>What do you know?</h4>
        <div
          className="categories"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '55px',
          }}
        >
          <div
            className="fragment"
            style={{
              maxWidth: '25vw',
            }}
          >
            <h5 className="highlight">Through backend web MVC Framework</h5>
            <div
              style={{
                fontSize: '.5em',
              }}
            >
              (Spring, Node/Express, .NET core, ...)
            </div>
            <div
              style={{
                fontSize: '.5em',
              }}
            >
              (Also deployed on a webserver)
            </div>
          </div>
          <div
            className="fragment"
            style={{
              maxWidth: '25vw',
            }}
          >
            <h5 className="highlight">Static webserver (FTP)</h5>
          </div>
          <div
            className="fragment"
            style={{
              maxWidth: '25vw',
            }}
          >
            <h5 className="highlight">Hosted on platform</h5>
            <div
              style={{
                fontSize: '.5em',
              }}
            >
              (Github pages, Azure, AWS, Vercel, Netlify, Firebase, ...)
            </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <h2>Webserver</h2>
        <p className="fragment">
          <img style={{ width: '60vw' }} src="/webserver.png" alt="webserver" />
        </p>
      </Slide>
      <Slide>
        <h2>Docker</h2>
        <p>
          <img style={{ width: '60vw' }} src="/docker.png" alt="docker" />
        </p>
      </Slide>
      <Slide>
        <h2>Docker</h2>
        <h3>Containerization</h3>
        <p>
          <img
            style={{ width: '35vw' }}
            src="/docker_explained.png"
            alt="docker"
          />
        </p>
      </Slide>
      <Slide>
        <h2>Docker</h2>
        <h3>Containerization</h3>
        <h4>Container vs Images</h4>
      </Slide>
      <Slide>
        <h2>Docker</h2>
        <h3>nginx</h3>
        <h4>Containerized static webserver</h4>
      </Slide>
      <Slide>
        <h2>Docker nginx</h2>
        <h5>
          <a href="https://www.nginx.com/">nginx.com</a>
        </h5>
        <ol>
          <li className="fragment">
            Create <code>nginx-location.conf</code>
          </li>
          <li className="fragment">
            Create <code>Dockerfile</code>
          </li>
          <li>
            <code>npm run build</code>
          </li>
          <li className="fragment">
            <code className="highlight">
              docker build . -t workshop/angular{' '}
            </code>
          </li>
          <li className="fragment">
            <code className="highlight">
              docker run -d -p 80:80 workshop/angular
            </code>
          </li>
          <li className="fragment">
            <a
              href="http://localhost"
              target="_blank"
              rel="noopener noreferrer"
            >
              localhost
            </a>
          </li>
        </ol>
      </Slide>
      <Slide>
        <h2>Project builds</h2>
        <h3>
          <code>Anti pattern</code> to do multiple builds for different
          environments
        </h3>
        <pre>
          <code className="highlight">COPY config.json /a/path/to/serve</code>
        </pre>
        <h3>Better to work with config</h3>
        <p>
          <img
            style={{ width: '60vw' }}
            src="/volumes-shared-storage.svg"
            alt="docker"
          />
        </p>
      </Slide>
      <Slide>
        <h2>Docker builds</h2>
        <h3>Publish docker containers (in same registry providers)</h3>
        <p>
          <img style={{ height: '30vh' }} src={database} alt="database" />
        </p>
      </Slide>
      <Slide>
        <h2>Shared memory</h2>
        <h3>Task: Create config folder somewhere on your PC</h3>
        <p>
          <h4>
            Change docker start command with{' '}
            <code className="highlight">-v</code> option
          </h4>
        </p>
      </Slide>
      <Slide>
        <h2>Shared memory</h2>
        <h3>Task: Create feature toggle read from the shared config</h3>
      </Slide>
      <Slide>
        <h2>Docker compose</h2>
        <h3>
          Task: Create a dummy backend with rest call and build into docker
          container
        </h3>
        <h4>example: node/express backend</h4>
      </Slide>
      <Slide>
        <h1>Pipelines</h1>
      </Slide>
    </div>
  )
}

export default App
