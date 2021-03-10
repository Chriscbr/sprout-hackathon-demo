# sprout hackathon demo

Web app with a small "plant recommendation" feature where you enter your
zipcode, and it produces a list of plants that would probably be safe to plant
there based on USDA [Hardiness
Zone](https://en.wikipedia.org/wiki/Hardiness_zone) data.

We also wanted to include an in-browser ML model that infers if your plant has
any nutritional deficiencies given a photo, but that fell out of our time
constraints. Though it'd be fun to try deploying this sometime.

Built for a hackathon (https://digitalag21.splashthat.com/).

## commentary

This has to easily be some of the scrappiest code I've ever written, hands down.

- Next.js - Kind of a big hammer for a two page web app.
- CSS - Lots of mixing non-global embedded CSS style sheets, with tailwind CSS
  styles
- Duplicate code between `index.js` and `recommendation.js`
- React - Outside of one hook for user input, I basically deferred the issue of
  state management and just relied on timeouts and CSS classes to hide and show
  different divs (didn't bother to break things down into smaller components).
- Data retrieval - I wanted the app to work without any server-side
  interactions, so I bundled all of the data in the app. The list of USDA
  Hardiness Zones corresponding to zip codes is a very long CSV file, so I
  decided to include it as a base64 string and then parse it at ru