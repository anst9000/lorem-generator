import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { MdContentCopy } from 'react-icons/md'
import data from './data'
import shuffleArray from './utils'

function App() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])
  const [isCreated, setIsCreated] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const MIN_SIZE = 1
  const MAX_SIZE = data.length

  const handleSubmit = e => {
    e.preventDefault()
    let amount = parseInt(count)

    if (amount < 1) {
      amount = 1
    } else if (amount > data.length) {
      amount = data.length
    }

    shuffleArray(data)
    setText(data.slice(0, amount))
    setIsCreated(true)
  }

  const onCopyText = () => {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2500)
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min={MIN_SIZE}
          max={MAX_SIZE}
          value={count}
          onChange={e => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>

      {isCreated && (
        <CopyToClipboard
          style={{ cursor: 'pointer', marginRight: '1rem' }}
          text={text}
          onCopy={onCopyText}
        >
          <span>
            Copy to clipboard <MdContentCopy />
          </span>
        </CopyToClipboard>
      )}

      <span
        style={{ color: 'red', visibility: isCopied ? 'visible' : 'hidden' }}
      >
        Copied.
      </span>

      <article className='lorem-text' style={{ marginTop: '1rem' }}>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
