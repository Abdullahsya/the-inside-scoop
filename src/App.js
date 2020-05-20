import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const headStyle = css`
  display: block;
  margin: 0;
  padding: 0;
  color: #222222;
  font-family: Helvetica;
  font-size: 40px;
  font-style: normal;
  font-weight: bold;
  line-height: 150%;
  letter-spacing: normal;
  text-align: center;
  box-sizing: border-box !important;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  word-break: break-word;
  box-sizing: border-box;
`;

const spanStyle = css`
  font-family: playfair display, georgia, times new roman, serif;
  box-sizing: border-box !important;
  font-style: italic;
  color: #008080;
  font-size: 40px;
  font-weight: bold;
  line-height: 150%;
  letter-spacing: normal;
  text-align: center;
  word-break: break-word;
  box-sizing: border-box;
`;

const mcnImageBlock = css`
  padding: 9px;
  box-sizing: border-box !important;
  display: block;
  box-sizing: border-box;
`;
const mcnImageConten = css`
  padding: 9px;
  box-sizing: border-box !important;
  display: block;
  box-sizing: border-box;
`;

const imgStyle = css`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

const firstDivStyle = css`
  padding: 0px 9px 9px;
  line-height: 150%;
  word-break: break-word;
  flex-flow: column;
  color: #808080;
  font-family: Helvetica;
  font-size: 16px;
  text-align: left;
  box-sizing: border-box !important;
  display: block;
  box-sizing: border-box;
`;

const textStyle = css`
  font-family: playfair display, georgia, times new roman, serif;
  box-sizing: border-box !important;
  font-size: 24px;
  font-weight: bold;
  color: #008080;
  text-align: center;
  line-height: 150%;
  word-break: break-word;
  box-sizing: border-box;
  display: flex;
  padding: 9px;
  display: table;
  clear: both;
  display: block;
`;

const forStyle = css`
  font-family: playfair display, georgia, times new roman, serif;
  font-weight: bold;
  color: #f68b8b;
  font-size: 24px;
  text-align: center;
  word-break: break-word;
`;
const howStyle = css`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const liStyle = css`
  text-align: left;
  margin: 10px 0;
  padding: 0;
  color: #808080;
  font-family: Helvetica;
  font-size: 16px;
  line-height: 150%;
  box-sizing: border-box !important;
  direction: ltr;
  unicode-bidi: isolate;
  display: list-item;
  color: #006666;
  font-family: Helvetica;
  font-size: 16px;
  line-height: 150%;
  box-sizing: border-box;
  text-align: left;
  list-style-type: disc;
`;

const theseStyle = css`
  font-family: playfair display, georgia, times new roman, serif;
  box-sizing: border-box !important;
  text-align: center;
  color: #808080;
  font-family: Helvetica;
  font-size: 16px;
  line-height: 150%;
`;

const signStyle = css`
  box-sizing: border-box !important;
  font-weight: bold;
  font-family: playfair display, georgia, times new roman, serif;
  color: #f68b8b;
  font-size: 24px;
  text-align: center;
`;

const divEmailStyle = css`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding-top: 18px;
  padding-right: 18px;
  padding-bottom: 9px;
  padding-left: 18px;
  box-sizing: border-box !important;
`;

const firstBox = css`
  display: flex;
  padding: 9px;
  display: table;
  clear: both;
  box-sizing: border-box;
`;

function App() {
  return (
    <div
      css={css`
        height: auto;
        min-height: 100vh;
        box-sizing: border-box !important;
        display: block;
        box-sizing: border-box;
        background-color: #d7f1e7;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-shrink: 0;
          justify-content: center;
          padding-right: 0px;
          padding-left: 0px;
          background-image: none;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          border-top: 0;
          border-bottom: 0;
          padding-top: 30px;
          padding-bottom: 0;
          box-sizing: border-box !important;
        `}
        class="templateSection templateHeader"
      ></div>

      <div
        css={css`
          max-width: 780px;
          width: 100%;
          flex: 0 0 auto;
          background-image: none;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          border-top: 0;
          border-bottom: 0;
          padding-top: 18px;
          padding-bottom: 18px;
          box-shadow: none;
          box-sizing: border-box !important;
        `}
        class="headerContainer contentContainer"
      ></div>

      <div css={firstBox} class="mcnTextBlockInner"></div>

      <h1 css={headStyle} css={spanStyle}>
        You're invited to ...
      </h1>

      <div css={mcnImageBlock} class="mcnImageBlock mcnImageBlockInner"></div>
      <div css={mcnImageConten} class="mcnImageContent">
        {' '}
      </div>

      <img
        css={imgStyle}
        src="https://eep.io/mc-gallery/f541cc7ca6febb0c5b4340ddc/images/8f560abd-6573-4134-80fa-4626ff6641a7.gif"
        alt="middle"
      />

      <div css={firstDivStyle} class="mcnTextContent"></div>

      <p css={textStyle}>
        A free 5-day livestream event where I’ll take you on a behind-the-scenes
        tour of my most successful passion projects!
      </p>
      <hr></hr>
      <h1 css={forStyle}>For each project I’ll share...</h1>
      <u1 css={howStyle}>
        <li css={liStyle}>
          <strong>How I came up with each idea </strong> (plus how much time +
          money it took to bring it to life)
        </li>
        <li css={liStyle}>
          <strong>The EXACT tangible outcomes each project led to </strong>{' '}
          (income, clients, followers, book deal, etc.)
        </li>
        <li css={liStyle}>
          <strong>
            {' '}
            What lessons I learned and what I’d do differently now{' '}
          </strong>{' '}
          (so you can learn from my mistakes)
        </li>
      </u1>

      <p css={theseStyle}>
        <strong>
          {' '}
          These videos will only be available to watch for *1 week* after
          recording unless you register for this event via email, so don’t
          delay!
        </strong>
        If you register, you'll receive a link with lifetime access to the video
        playbacks, so you'll always have the inside scoop on my creative
        marketing strategies.
      </p>

      <h2 css={signStyle}>Sign up to receive reminders & video playbacks!</h2>

      <div
        css={css`
          width: 80%;
          margin: 0 auto;
          padding: 20px;
          word-break: break-word;
          flex-flow: column;
          color: #808080;
          font-family: Helvetica;
          font-size: 16px;
          line-height: 150%;
          text-align: left;
        `}
      >
        <div css={divEmailStyle}>
          <label
            css={css`
              color: rgb(246, 139, 139);
            `}
            for="mc-EMAIL"
          >
            Email Address
          </label>
          <input
            type="text"
            name="EMAIL"
            value=""
            id="mc-EMAIL"
            class="invalid"
          ></input>
          <label
            css={css`
              color: rgb(246, 139, 139);
            `}
            for="mc-FNAME"
          >
            First Name
          </label>
          <input
            type="text"
            name="FNAME"
            value=""
            id="mc-FNAME"
            class="invalid"
          ></input>
          <input
            class="button"
            type="submit"
            value="Sign me up for the scoop!"
            data-dojo-attach-point="submitButton"
          ></input>
        </div>

        <div class="content_button"> </div>
      </div>
    </div>
  );
}

export default App;
