import { useState } from 'react';

const Module = () => {
  // states
  const [length, setLength] = useState('');
  const [password, setPassword] = useState('');
  const [useLetters, setUseLetters] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);

  // functions

  const parsedValue = parseInt(length);
  if (!isNaN(parsedValue) && parsedValue !== length) {
    setLength(parsedValue);
  }

  var clickEvent = () => {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmopqrstuvwxyz';
    const symbols = '!£$%&^?()_';

    let validChars = '';

    if (useLetters) {
      validChars += letters;
    }
    if (useNumbers) {
      validChars += numbers;
    }
    if (useSymbols) {
      validChars += symbols;
    }
    console.log('STEP_1 ' + validChars);
    let generatedPassword = '';

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    setPassword(generatedPassword);
  };

  const onChangeInput = (event) => {
    var userinput = event.target.value;
    setLength(userinput);
  };

  var clickUseLetters = () => {
    setUseLetters(!useLetters);
  };
  var clickUseNumbers = () => {
    setUseNumbers(!useNumbers);
  };
  var clickUseSymbols = () => {
    setUseSymbols(!useSymbols);
  };
  return (
    <div>
      <div className="field">
        <label>Enter length</label>
        <input
          className="input"
          value={length}
          onChange={(e) => {
            onChangeInput(e);
          }}
        />
      </div>

      <div className="field">
        <div class="control">
          <label className="checkbox">
            <input onChange={clickUseLetters} type="checkbox" />
            Use letters
          </label>
        </div>
      </div>

      <div className="field">
        <div class="control">
          <label className="checkbox">
            <input onChange={clickUseNumbers} type="checkbox" />
            Use numbers
          </label>
        </div>
      </div>

      <div className="field">
        <div class="control">
          <label className="checkbox">
            <input onChange={clickUseSymbols} type="checkbox" />
            Use symbols
          </label>
        </div>
      </div>

      <div className="field">
        <button
          className="button is-link is-fullwidth"
          disabled={!(length && (useLetters || useNumbers || useSymbols))}
          onClick={clickEvent}
        >
          Generate!
        </button>
      </div>
      {password !== '' && (
        <div className="box">
          <label>Your password</label>
          <input className="input" value={password} />
        </div>
      )}
    </div>
  );
};

export default Module;
