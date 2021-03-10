import "tailwindcss/tailwind.css"
import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sprout</title>
      </Head>

      <main style={{ width: "900px" }}>

        <div className="bg-white w-full flex flex-col items-center rounded-3xl shadow-2xl">
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Sprout Logo" className="mt-8" style={{width: "500px" }} />
          </a>
        </Link>

        {/* <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}

        <p className="description">
          Try out some of our hand-designed algorithms.
        </p>

        <div className="grid">
          <a className="card">
            <h3>Diagnose <svg className="w-6 float-right inline relative top-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
</svg></h3>
            <p>Take a picture of your plant to find out if your plant is growing alright.</p>
          </a>

          <Link href="/recommendation">
            <a className="card">
              <h3>Recommendation <svg className="w-6 float-right inline relative top-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg></h3>
              <p>Learn what plants grow especially well in your local area!</p>
            </a>
          </Link>

          {/* <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with 🤍 by the Sprout Team.
        </a>
      </footer>

      <style jsx>{`
        .container {
          // min-height: fit-content;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #dddddd;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #32bc5f;
        }

        * {
          box-sizing: border-box;
        }

        // body {
        //     background: linear-gradient(270deg, #32bc5f, #59b1be, #c374cd);
        //     background-size: 600% 600%;
        
        //     -webkit-animation: ColorChangingAnimation 30s ease infinite;
        //     -moz-animation: ColorChangingAnimation 30s ease infinite;
        //     animation: ColorChangingAnimation 30s ease infinite;
        // }
        
        // @-webkit-keyframes ColorChangingAnimation {
        //     0%{background-position:0% 50%}
        //     50%{background-position:100% 50%}
        //     100%{background-position:0% 50%}
        // }
        // @-moz-keyframes ColorChangingAnimation {
        //     0%{background-position:0% 50%}
        //     50%{background-position:100% 50%}
        //     100%{background-position:0% 50%}
        // }
        // @keyframes ColorChangingAnimation {
        //     0%{background-position:0% 50%}
        //     50%{background-position:100% 50%}
        //     100%{background-position:0% 50%}
        // }
      `}</style>
    </div>
  )
}
