export const AlarmsStatsChart = () => {
  return (
    <div>
      <svg
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="278.51"
        height="349.381"
        viewBox="0 0 278.51 289.381"
      >
        <g id="ringProgress" transform="translate(-2.855 35.768) rotate(-8)">
          <path
            id="Path_1941"
            data-name="Path 1941"
            d="M144.922,277.614A117.919,117.919,0,1,0,48,63.892L71.649,104.7A70.751,70.751,0,1,1,129.8,232.936Z"
            transform="translate(10.831 -27.728)"
            fill="#c9c9c9"
          />
          <path
            id="Path_1942"
            data-name="Path 1942"
            d="M150.355,222.766A139.055,139.055,0,0,0,38.032,29.777L29,110.411a57.917,57.917,0,0,1,46.783,80.38Z"
            transform="translate(95.4 -29.777)"
            fill="#ed4b3e"
          />
          <path
            id="Path_1944"
            data-name="Path 1944"
            d="M251.255,48.745a117.919,117.919,0,0,0-27.578,234.216,121.828,121.828,0,0,0,52.928-5.317l-15.085-44.69a74.694,74.694,0,0,1-32.106,3.19A70.751,70.751,0,0,1,245.96,95.615Z"
            transform="translate(-120.066 -27.728)"
            fill="#3cd860"
          />
          <text
            id="_28_"
            data-name="28%"
            transform="translate(212.686 100.666) rotate(8)"
            fill="#fff"
            fontSize="13"
            fontFamily="Poppins-SemiBold, Poppins"
            fontWeight="600"
          >
            <tspan x="-26.598" y="0">
              28%
            </tspan>
          </text>
        </g>
      </svg>
      <ul className="flex flex-wrap gap-y-4 mt-6 mb-4 ml-8">
        <li className="text-md font-medium w-1/2 items-center flex">
          <span className="block w-4 h-4 bg-red-500 mr-5"></span>
          <span>Critical</span>
        </li>
        <li className="text-md font-medium w-1/2 items-center flex">
          <span className="block w-4 h-4 bg-green-500 mr-5"></span>
          <span>Activated</span>
        </li>
        <li className="text-md font-medium w-1/2 items-center flex">
          <span className="block w-4 h-4 bg-gray-300 mr-5"></span>
          <span>Deactivated</span>
        </li>
      </ul>
    </div>
  );
};
