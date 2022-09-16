import React, { useState } from "react";

export default function Home() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  function calculate(operator = "/") {
    let list = [];

    if (number1) list.push(number1);
    if (number2) list.push(number2);

    if (list.length === 0) {
      setResult("Please select fields");
      return;
    }

    let total = list[0];
    for (let idx = 1; idx < list.length; idx++) {
      if (operator === "/") total = number1 / number2;
    }

    setResult(total);
  }

  return (
    <div style={{ backgroundColor: "#EAEEF3" }}>
      <main>
        <div>
          <br />
          <br />
          <h3
            style={{ textAlign: "center", maxWidth: "470px", margin: "0 auto" }}
          >
            Flexible payment structures designed for your business.
          </h3>
          <br />
          <br />
          <div
            style={{
              margin: "50px auto",
              backgroundColor: "white",
              maxWidth: "726px",
              display: "flex",
              padding: "21px 35px",
              justifyContent: "space-around",
            }}
          >
            <div>
              <div>
                <label htmlFor="number1">Amount to finance</label>
              </div>
              <input
                type="number"
                value={number1}
                onChange={(e) => setNumber1(+e.target.value)}
                placeholder="$5000"
              />
            </div>

            <div>
              <div>
                <label htmlFor="number2">Term length</label>
              </div>
              <input
                type="number"
                value={number2}
                onChange={(e) => setNumber2(+e.target.value)}
                placeholder="12 months"
              />
            </div>
            <div>
              <p
                style={{
                  marginTop: "-5px",
                  fontSize: "16px",
                  marginBottom: "10px",
                }}
              >
                Estimated Payment
              </p>
              <h5 style={{ marginTop: "-5px" }}>{result}</h5>
            </div>
          </div>
          <div style={{ margin: "20px auto", width: "50px" }}>
            <button
              style={{ alignSelf: "center" }}
              type="button"
              onClick={() => {
                calculate("/");
              }}
            >
              result
            </button>
          </div>
        </div>
      </main>

      <style jsx global>{`
        html,
        body {
          background: rgba(234, 238, 243, 1);
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        input {
          margin-top: 13px;
          border: none;
        }
      `}</style>
    </div>
  );
}
