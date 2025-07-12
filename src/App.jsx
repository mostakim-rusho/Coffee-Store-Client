// App.jsx
 
import { Outlet, useLoaderData } from "react-router";
 
function App() {
  const coffees = useLoaderData();
  return (
      <>
   <div className="w-10/12 relative mx-auto my-10 overflow-visible h-[700px]">
      <svg
        viewBox="0 0 1122 686"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 z-0 overflow-visible"
      >
        <defs>
          <linearGradient id="shine-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="red" />
            <stop offset="100%" stopColor="red" />
          </linearGradient>
        </defs>

        {/* Folder fill */}
        <path
          d="M1092 686H30C13.4315 686 0 672.569 0 656V30C0 13.4315 13.4315 0 30 0H532.449C539.884 0 547.053 2.76046 552.568 7.74621L587.932 39.7172C593.447 44.7029 600.616 47.4634 608.051 47.4634H1092C1108.57 47.4634 1122 60.8948 1122 77.4634V656C1122 672.569 1108.57 686 1092 686Z"
          fill="#FFD233"
        />

        {/* Animated red shine, starting near the top edge */}
        <path
          d="M1092 686H30C13.4315 686 0 672.569 0 656V30C0 13.4315 13.4315 0 30 0H532.449C539.884 0 547.053 2.76046 552.568 7.74621L587.932 39.7172C593.447 44.7029 600.616 47.4634 608.051 47.4634H1092C1108.57 47.4634 1122 60.8948 1122 77.4634V656C1122 672.569 1108.57 686 1092 686Z"
          fill="none"
          stroke="#ff3308"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="180 3380"
          strokeDashoffset="-60"  // <<-- adjust this number to move the shine
          opacity="0.88"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="-480"
            to="-4040"  // -660 - 3380 = -4040 (full round trip)
            dur="10.8s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      <div className="relative z-10 p-10">
        <p className="text-2xl font-bold text-center">hello</p>
      </div>
    </div>

    <div>
      <h1>Available Coffees</h1>
      <ul>
        {coffees.map(coffee => (
          <li key={coffee._id}>{coffee.name}</li>
        ))}
      </ul>
    </div>
     
    <Outlet/>
    </>
  );
}

export default App;
