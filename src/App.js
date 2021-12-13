import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from "react-icons/md";
import data from './data';

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  const [isCreated, setIsCreated] = useState(false)
  const [copiedText, setCopiedText] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count)

    if (amount < 1) {
      amount = 1
    } else if (amount > data.length) {
      amount = data.length
    }

    setText(data.slice(0, amount))
    setIsCreated(true)
  }

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value) } />
        <button type="submit" className='btn'>generate</button>
      </form>

      {
        isCreated &&
        <CopyToClipboard style={{cursor: 'pointer'}} text={text} onCopy={onCopyText}>
          <span>Copy to clipboard <MdContentCopy /></span>
        </CopyToClipboard>
      }

      {isCopied ? <span style={{color: 'red'}}>Copied.</span> : <span style={{color: 'red', visibility: 'hidden'}}>Copied.</span>}

        {/* <CopyToClipboard text={text}
          onCopy={onCopyText}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard> */}


      <article className="lorem-text" style={{marginTop: '1rem'}} >
        {
          text.map((item, index) => {
            return <p key={index}>{item}</p>
          })
        }
      </article>
    </section>
  )
}

export default App;

