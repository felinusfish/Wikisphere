import { useState } from 'preact/hooks'
import './app.css'
import MarkdownEditor from './components/markdown-editor'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="page-container">
        <div class="content">
          <h1>
          Lorem Ipsum
          </h1>
          <h2>
          Dolor sit amet
          </h2>
          <p>
          <span style="font-weight:700">Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et <a href="https://www.myballs.com">dolore magna aliqua</a>.
          Ut enim ad minim veniam, quis knostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
          ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
          porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
          nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
          ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
          voluptate velit esse quam nihil molestiae consequatur, vel illum qui
          dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
          <MarkdownEditor value="" onChange={(value) => {}} />
        </div>
      </div>
    </>
  )
}
