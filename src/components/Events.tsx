/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const BgSvg = () => (
  <div
    css={css`
      padding-top: 10px;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;

      svg {
        position: absolute;
        z-index: -1;
      }
    `}
  >
    <svg
      css={css`
        stroke: var(--d-blue);
      `}
      width="86"
      height="157"
      viewBox="0 0 86 157"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42.5394 0V56.0068C60.1029 57.1664 91.5107 68.5996 76.6333 105.056C82.947 109.579 91.7862 123.563 76.6333 143.322C66.0723 152.134 37.9247 164.472 9.82304 143.322C3.16497 136.248 -6.15633 118.693 9.82304 105.056C2.93538 91.4894 -0.921699 62.6859 38.7512 56.0068C44.7205 62.2684 52.7332 79.1053 37.0293 96.3595C36.9145 98.7946 35.3763 103.595 30.1416 103.317C24.907 103.039 22.9096 98.5627 22.5652 96.3595C22.2208 92.8809 23.254 86.1322 30.1416 86.9671C32.4375 86.8511 37.0293 88.0107 37.0293 93.5766C37.0293 99.1425 44.8353 95.8957 48.7383 93.5766C48.8531 90.9096 50.598 85.8539 56.6591 86.9671C62.7203 88.0803 63.7764 93.6926 63.5468 96.3595C63.2024 98.6787 61.3427 103.317 56.6591 103.317C50.8046 103.317 50.1159 100.534 48.7383 96.3595C47.6363 93.02 55.3964 116.536 59.4142 128.711L70.0901 122.798C60.4473 130.799 36.065 142 15.6776 122.798"
        strokeWidth="2"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="132"
      height="634"
      viewBox="0 -34 132 634"
      fill="none"
    >
      <path
        d="M26.2151 73.9085C25.2914 75.1733 22.474 76.9439 18.5945 73.9085C13.745 70.1144 10.9738 53.5581 14.7842 49.0741C16.1697 44.5902 20.8806 37.5537 28.6398 45.28L36.6068 65.9753C32.2192 54.9378 28.9169 32.3109 50.8089 30.1034C54.6192 30.1034 63.3482 32.3109 67.782 41.1409C69.9759 37.0019 76.0954 28.9997 83.0233 30.1034C92.0295 30.5633 107.686 38.3816 98.2645 65.9753C101.036 59.0769 106.647 45.28 106.924 45.28C107.271 45.28 107.617 42.5206 112.12 41.1409C114.199 40.4511 119.048 41.072 121.819 49.0741C123.32 54.8228 124.59 67.8379 117.662 73.9085C116.392 75.0583 113.159 77.0128 110.388 75.6331C112.813 87.8204 108.102 112.954 69.8604 115.989V126.5C46.7403 127.167 0.700007 115.4 1.50001 63C2.30001 10.6 46.0214 0.499997 67.782 2C89.8547 1.16666 133.2 12.2 130 63C126.8 113.8 88.5736 128.833 69.8604 130V439.5L48.5 446.5C48 446.5 46.9 447.2 46.5 450C46.1 452.8 42.3333 488.833 40.5 506.5C40.3333 507.167 40.5 508.6 42.5 509C44.5 509.4 88.3333 509.167 110 509C111 508.5 113.1 506.7 113.5 503.5C113.9 500.3 117.667 452.5 119.5 429L113.5 432L50 450L45 494.5L110 489.5L113.5 434H117L112 494.5L71.5 498V502C70.5 502.833 69 504.6 71 505C73 505.4 79.5 507.5 82.5 508.5C83.5 510 85 514.3 83 519.5C83 520 82.2 521.1 79 521.5C75.8 521.9 67.3333 523 63.5 523.5V527.5L58 531C57.5 531.333 57.2 532 60 532H64.5L66 527.5C72.3333 525.5 85.4 523.1 87 529.5L84 532H66C69.8333 530 78.6 526.5 83 528.5C87.4 530.5 88.1667 527 88 525C93.1667 524.833 103.3 523.5 102.5 519.5C101.7 515.5 100.5 511.833 100 510.5H113.5C114.667 510 117 508.2 117 505C117 501.8 120 451.667 121.5 427C120.667 426.333 117.9 425.4 113.5 427L73.5 438.5C67.5 446.333 57.1 465.6 63.5 480C71.5 498 81.7208 538.5 69.8604 556.5C58 574.5 69.8604 523 69.8604 566C69.8604 600.4 69.8604 625.667 69.8604 634"
        stroke="url(#paint0_linear_48_77)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_48_77"
          x1="65.8288"
          y1="1.86191"
          x2="65.8288"
          y2="634"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--d-blue)" />
          <stop offset="1" stopColor="#00FFFF" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)

const Card = () => {
  return (
    <div
      css={css`
        margin-top: 220px;
        position: relative;

        min-width: 250px;
        max-width: 400px;
        padding-left: 50px;
        background-color: var(--white);
        padding: 30px 0 30px 50px;
      `}
    >
      <span
        css={css`
          position: absolute;
          left: 0;
          top: 25px;

          font-family: var(--font-sans);
          display: flex;
          flex-direction: column;
        `}
      >
        <span
          css={css`
            &:after {
              content: '';
              display: block;
              height: 1px;
              width: 100%;
              background-color: var(--black);
              margin: 2px 0;
            }
          `}
        >
          01
        </span>
        <span>12</span>
      </span>
      <h3
        css={css`
          font-family: var(--font-sans);
          font-size: 20px;
          margin-bottom: 15px;
        `}
      >
        Monkey Typing
      </h3>
      <p
        css={css`
          margin-bottom: 25px;
          font-size: 16px;
        `}
      >
        Put your typing speed to the test. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
      <div
        css={css`
          border: 1px solid var(--d-blue);
          display: inline-block;
          background-color: var(--d-blue);
          border-radius: 12px;

          &:hover {
            background-color: var(--white);

            a {
              color: var(--d-blue);
            }
          }
        `}
      >
        <a
          href="#"
          css={css`
            font-family: var(--font-serif);
            text-decoration: none;
            color: var(--white);
            display: block;
            padding: 5px 12px;
          `}
        >
          Learn More
        </a>
      </div>
    </div>
  )
}

const Events = () => {
  return (
    <section
      css={css`
        width: 100%;
        height: 130vh;
        padding: 40px 50px 0 50px;
        color: var(--black);

        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <h3
        css={css`
          font-family: var(--font-sans);
          font-size: 24px;
          display: inline-block;

          &:after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background-color: var(--orange);
            margin-top: 5px;
          }
        `}
      >
        Events
      </h3>
      <BgSvg />
      <Card />
    </section>
  )
}

export default Events
