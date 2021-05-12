import Calculator from '../Calculator/component'
const Home = () => (
  <>
    <style global jsx>
      {`
        .calculator {
          display: flex;
          max-width: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        .input-wrapper {
          display: flex;
          align-items: center;
          width: 60%;
          margin: 12px;
        }
        label,
        input {
          font-size: 18px;
        }
        label {
          width: 40%;
        }

        input {
          width: 60%;
          flex-grow: 2;
        }
        .roiWrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}
    </style>

    <Calculator />
  </>
)

export default Home
