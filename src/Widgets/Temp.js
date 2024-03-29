import React from "react";

const Temp = ({ tempInfo }) => {
  const {
    temp,
    humidity,
    pressure,
    weatherMood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  let date = new Date(sunset * 1000);
  let SunSet = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className="px-2">
      <div className=" lg:mx-72  bg-white rounded-lg py-3">
        <div className="flex justify-center">
          <svg
            fill="#000000"
            width="140px"
            height="140px"
            viewBox="0 0 56 56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M 36.0607 9.1791 C 36.9284 9.1791 37.6614 8.4463 37.6614 7.5785 L 37.6614 3.4131 C 37.6614 2.5260 36.9284 1.8128 36.0607 1.8128 C 35.1736 1.8128 34.4408 2.5260 34.4408 3.4131 L 34.4408 7.5785 C 34.4408 8.4463 35.1736 9.1791 36.0607 9.1791 Z M 24.8568 12.9008 C 25.4931 13.5372 26.5538 13.5179 27.1515 12.9008 C 27.7301 12.2837 27.7493 11.2810 27.1515 10.6639 L 24.1626 7.6749 C 23.5455 7.0578 22.5427 7.0771 21.9256 7.6749 C 21.3086 8.2920 21.3086 9.3141 21.9256 9.9504 Z M 44.9696 12.9008 C 45.5675 13.5179 46.6089 13.5372 47.2452 12.9008 L 50.1763 9.9504 C 50.7936 9.3141 50.7936 8.2920 50.1763 7.6749 C 49.5595 7.0771 48.5563 7.0578 47.9394 7.6749 L 44.9696 10.6639 C 44.3527 11.2810 44.3720 12.2837 44.9696 12.9008 Z M 8.1763 40.7466 L 29.0413 40.7466 C 34.6143 40.7466 38.9338 36.5427 38.9338 31.1047 C 38.9338 31.0468 38.9338 30.9890 38.9338 30.9311 C 42.8294 29.6777 45.5868 26.0716 45.5868 21.8099 C 45.5868 16.5069 41.3445 12.2452 36.0607 12.2452 C 31.7604 12.2452 28.1736 15.0413 26.9587 18.8980 C 24.6447 16.2755 21.4050 14.7328 17.7411 14.7328 C 11.3581 14.7328 6.0165 19.6694 5.3802 25.9945 C 2.1598 26.9972 0 29.7934 0 33.2837 C 0 37.6419 3.2590 40.7466 8.1763 40.7466 Z M 36.0607 15.0799 C 39.8208 15.0799 42.7520 18.0303 42.7520 21.8099 C 42.7520 24.7025 41.0167 27.1129 38.4710 28.1157 C 37.2368 24.4132 33.7466 21.8292 29.3499 21.5785 C 29.4656 17.8953 32.3775 15.0799 36.0607 15.0799 Z M 8.0992 37.6612 C 4.8210 37.6612 3.0854 35.7906 3.0854 33.3609 C 3.0854 31.3361 4.2810 29.5234 7.1157 28.7713 C 8.0413 28.5207 8.3885 28.0964 8.4656 27.1322 C 8.9091 21.7135 12.9201 17.8182 17.7411 17.8182 C 21.4821 17.8182 24.3940 19.8815 26.1873 23.4876 C 26.5923 24.3168 27.0744 24.5868 28.0579 24.5868 C 33.0331 24.5868 35.8485 27.5950 35.8485 31.1818 C 35.8485 34.7879 32.9174 37.6612 29.0992 37.6612 Z M 50.2534 23.4105 L 54.4187 23.4105 C 55.2864 23.4105 56.0000 22.6970 56.0000 21.8099 C 56.0000 20.9229 55.2864 20.2093 54.4187 20.2093 L 50.2534 20.2093 C 49.3857 20.2093 48.6531 20.9229 48.6531 21.8099 C 48.6531 22.6970 49.3857 23.4105 50.2534 23.4105 Z M 47.9394 35.9642 C 48.5563 36.5813 49.5595 36.5620 50.1763 35.9449 C 50.7936 35.3278 50.7936 34.3058 50.1763 33.7080 L 47.2065 30.7383 C 46.5896 30.1405 45.5868 30.1212 44.9696 30.7383 C 44.3527 31.3554 44.3527 32.3967 44.9696 33.0138 Z M 23.1984 49.7907 L 25.7052 45.4325 C 26.0524 44.8347 25.8595 44.1598 25.2810 43.8320 C 24.7025 43.4849 24.0468 43.6777 23.6997 44.2755 L 21.1736 48.6529 C 20.8457 49.2121 21.0000 49.8871 21.5978 50.2342 C 22.1763 50.5427 22.8705 50.3499 23.1984 49.7907 Z M 7.8485 49.8099 L 10.3554 45.4518 C 10.7218 44.8540 10.5289 44.1791 9.9504 43.8512 C 9.3719 43.5041 8.6970 43.6970 8.3499 44.2948 L 5.8237 48.6722 C 5.4959 49.2314 5.6694 49.9064 6.2672 50.2535 C 6.8265 50.5620 7.5207 50.3691 7.8485 49.8099 Z M 29.2342 55.2094 L 31.7411 50.8706 C 32.0882 50.2727 31.8954 49.5978 31.3168 49.2507 C 30.7383 48.9229 30.0827 49.1157 29.7356 49.6942 L 27.1901 54.0909 C 26.8815 54.6309 27.0358 55.3058 27.6336 55.6529 C 28.2122 55.9807 28.9064 55.7879 29.2342 55.2094 Z M 13.8843 55.2287 L 16.3912 50.8898 C 16.7383 50.2920 16.5648 49.6171 15.9863 49.2700 C 15.3885 48.9421 14.7328 49.1350 14.3857 49.7135 L 11.8595 54.1102 C 11.5317 54.6502 11.7052 55.3251 12.2838 55.6722 C 12.8623 56 13.5565 55.8072 13.8843 55.2287 Z"></path>
            </g>
          </svg>
        </div>
        <div className="flex text-white  mt-4">
          <div className="bg-black flex items-center   p-5 -space-x-2  ">
            <div className=" ">
              <h2 className="text-4xl md:mx-9">{temp}&deg;</h2>
              <h3 className="text-xl md:px-9 uppercase">{weatherMood}</h3>
            </div>
            <h5 className="md:mx-16 ">
              {name},{" " + country}
            </h5>
          </div>
          <div className="bg-[#28c0c3] md:py-12 py-8 p-5   items-center md:px-32 text-lg">
            <h3>{new Date().toLocaleString()}</h3>
          </div>
        </div>
        <div className="flex justify-evenly items-center mt-3 p-2">
          <div className="items-center flex flex-col justify-center ">
            <svg
              fill="#28c0c3"
              height="40px"
              width="40px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 215.388 215.388"
              xmlSpace="preserve"
              stroke="#28c0c3"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  <path d="M211.884,107.231c-3.507-2.207-7.132-4.489-10.966-6.196c-9.087-4.044-17.049-4.045-26.138,0 c-2.701,1.202-5.294,2.695-7.822,4.243c-3.989-29.149-29.037-51.685-59.264-51.685c-30.227,0-55.274,22.535-59.264,51.684 c-2.526-1.547-5.12-3.04-7.822-4.243c-9.088-4.044-17.05-4.044-26.138,0c-3.834,1.707-7.459,3.989-10.966,6.196 c-3.505,2.207-4.558,6.837-2.351,10.343c2.206,3.506,6.838,4.558,10.343,2.352c3.199-2.015,6.222-3.917,9.073-5.187 c2.584-1.15,4.863-1.709,6.97-1.709c2.105,0,4.385,0.559,6.969,1.708c2.852,1.27,5.874,3.172,9.082,5.192 c3.505,2.206,7.129,4.487,10.957,6.19c9.09,4.045,17.049,4.045,26.139,0c3.824-1.702,7.444-3.98,10.965-6.196 c3.199-2.015,6.222-3.917,9.073-5.187c2.584-1.15,4.863-1.709,6.97-1.709s4.386,0.559,6.97,1.708 c2.852,1.27,5.874,3.172,9.092,5.199c3.502,2.204,7.122,4.482,10.946,6.184c4.545,2.022,8.819,3.005,13.069,3.005 s8.524-0.983,13.069-3.005c3.828-1.704,7.452-3.984,10.966-6.196c3.199-2.015,6.222-3.917,9.073-5.187 c2.584-1.15,4.863-1.709,6.969-1.709c2.106,0,4.386,0.559,6.97,1.708c2.852,1.27,5.874,3.172,9.073,5.187 c3.506,2.207,8.137,1.154,10.343-2.352C216.441,114.068,215.389,109.438,211.884,107.231z M140.802,112.417 c-2.844-1.265-5.861-3.165-9.072-5.186c-3.507-2.207-7.132-4.489-10.966-6.196c-9.088-4.044-17.051-4.044-26.139,0 c-3.834,1.707-7.459,3.989-10.982,6.207c-3.194,2.011-6.212,3.91-9.056,5.175c-2.584,1.15-4.864,1.709-6.97,1.709 c-1.48,0-3.054-0.293-4.752-0.857c0.085-24.649,20.161-44.677,44.829-44.677s44.744,20.028,44.829,44.677 c-1.698,0.564-3.272,0.857-4.752,0.857C145.666,114.126,143.386,113.567,140.802,112.417z"></path>{" "}
                  <path d="M194.547,141.294c-2.938-1.85-5.976-3.762-9.231-5.212c-3.873-1.723-7.687-2.597-11.336-2.597 c-3.65,0-7.464,0.874-11.335,2.597c-3.257,1.449-6.294,3.362-9.231,5.211c-2.606,1.641-5.069,3.19-7.34,4.201 c-1.967,0.875-3.68,1.301-5.236,1.301s-3.269-0.425-5.235-1.301c-2.272-1.011-4.734-2.561-7.34-4.201 c-2.938-1.85-5.976-3.762-9.231-5.212c-3.873-1.723-7.687-2.597-11.336-2.597s-7.463,0.874-11.336,2.598 c-3.256,1.449-6.294,3.362-9.23,5.211c-2.606,1.641-5.068,3.19-7.342,4.202c-1.966,0.875-3.678,1.301-5.234,1.301 s-3.27-0.426-5.235-1.301c-2.271-1.011-4.734-2.561-7.34-4.201c-2.938-1.85-5.976-3.763-9.231-5.211 c-3.872-1.724-7.686-2.598-11.336-2.598c-3.649,0-7.463,0.874-11.337,2.598c-3.255,1.449-6.293,3.362-9.23,5.211 c-3.505,2.207-4.558,6.837-2.351,10.343c2.208,3.506,6.839,4.557,10.343,2.351c2.605-1.64,5.066-3.189,7.339-4.201 c1.967-0.875,3.68-1.301,5.236-1.301s3.269,0.426,5.235,1.301c2.274,1.012,4.735,2.561,7.341,4.202 c2.938,1.85,5.978,3.763,9.23,5.211c3.873,1.723,7.687,2.597,11.336,2.597c3.65,0,7.464-0.874,11.335-2.597 c3.253-1.448,6.292-3.361,9.232-5.211c2.605-1.64,5.066-3.189,7.339-4.201c1.967-0.875,3.68-1.301,5.236-1.301 s3.27,0.426,5.235,1.301c2.273,1.012,4.734,2.562,7.341,4.202c2.939,1.85,5.979,3.763,9.23,5.21 c3.872,1.724,7.686,2.598,11.336,2.598c3.649,0,7.463-0.874,11.337-2.598c3.252-1.448,6.291-3.36,9.23-5.211 c2.604-1.64,5.065-3.189,7.341-4.202c1.966-0.875,3.678-1.301,5.234-1.301s3.27,0.426,5.235,1.301 c2.273,1.012,4.734,2.562,7.34,4.202c3.505,2.208,8.136,1.156,10.343-2.351C199.104,148.131,198.052,143.5,194.547,141.294z"></path>{" "}
                </g>{" "}
              </g>
            </svg>

            <div className=" flex flex-col items-center justify-center">
              <p>Sunset</p>
              <p>{SunSet}PM</p>
            </div>
          </div>

          <div className="items-center flex flex-col justify-center mx-2">
            <svg
              fill="none"
              width="40px"
              height="40px"
              viewBox="0 0 64 64"
              version="1.1"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              // xmlnsSerif="http://www.serif.com/"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              stroke="#28c0c3"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Expanded">
                  {" "}
                  <path d="M35.776,53.677c-0.547,-1.558 -2.032,-2.677 -3.776,-2.677c-2.208,-0 -4,1.792 -4,4c0,2.208 1.792,4 4,4c1.977,0 3.621,-1.437 3.943,-3.323c11.373,-1.884 20.057,-11.774 20.057,-23.677c0,-2.546 -0.398,-5.001 -1.134,-7.304c-0.168,-0.526 -0.731,-0.817 -1.257,-0.649c-0.526,0.168 -0.816,0.732 -0.648,1.257c0.675,2.112 1.039,4.362 1.039,6.696c0,10.856 -7.879,19.886 -18.224,21.677Zm-27.76,-20.799c0.375,10.42 7.408,19.156 16.968,22.078c0.528,0.162 1.087,-0.136 1.249,-0.664c0.161,-0.528 -0.137,-1.087 -0.664,-1.248c-8.744,-2.673 -15.181,-10.651 -15.552,-20.175c1.716,-0.45 2.983,-2.013 2.983,-3.869c0,-2.208 -1.792,-4 -4,-4c-2.208,-0 -4,1.792 -4,4c0,1.868 1.283,3.439 3.016,3.878Zm27.915,10.299c0.696,0.21 1.434,0.323 2.199,0.323c4.203,-0 7.615,-3.413 7.615,-7.616c0,-5.628 -3.413,-10.753 -6.876,-14.557c-0.301,-0.331 -0.786,-0.422 -1.186,-0.222c-0.401,0.201 -0.62,0.642 -0.536,1.082c0.45,2.362 -0.346,4.008 -1.469,5.42c-1.749,-3.673 -4.272,-6.993 -6.809,-9.78c-0.301,-0.331 -0.786,-0.422 -1.186,-0.222c-0.401,0.201 -0.62,0.642 -0.536,1.082c0.813,4.265 -1.282,6.855 -3.517,9.228c-1.252,1.328 -2.557,2.593 -3.552,3.985c-1.092,1.525 -1.823,3.198 -1.823,5.225c-0,5.45 4.424,9.875 9.875,9.875c3.17,0 5.993,-1.497 7.801,-3.823Zm-7.629,-10.87l-2.376,8.868c-0.143,0.533 0.174,1.082 0.707,1.225c0.533,0.143 1.082,-0.174 1.225,-0.707l2.376,-8.868c0.143,-0.533 -0.174,-1.082 -0.707,-1.225c-0.533,-0.143 -1.082,0.174 -1.225,0.707Zm8.734,9.086c0.353,0.07 0.719,0.107 1.094,0.107c3.099,-0 5.615,-2.516 5.615,-5.616c0,-4.145 -2.094,-7.961 -4.563,-11.1c-0.322,1.968 -1.385,3.49 -2.625,4.875c0.903,2.379 1.448,4.882 1.448,7.466c-0,1.528 -0.348,2.976 -0.969,4.268Zm-13.446,-0.303c0.878,0 1.591,-0.712 1.591,-1.59c-0,-0.878 -0.713,-1.59 -1.591,-1.59c-0.877,-0 -1.59,0.712 -1.59,1.59c0,0.878 0.713,1.59 1.59,1.59Zm8.91,-4.5c0.878,0 1.59,-0.712 1.59,-1.59c0,-0.878 -0.712,-1.59 -1.59,-1.59c-0.878,-0 -1.59,0.712 -1.59,1.59c-0,0.878 0.712,1.59 1.59,1.59Zm15.259,-19.934c-0.477,0.659 -0.759,1.469 -0.759,2.344c0,2.208 1.792,4 4,4c2.208,0 4,-1.792 4,-4c0,-2.208 -1.792,-4 -4,-4c-0.606,-0 -1.181,0.135 -1.695,0.377c-4.368,-4.546 -10.509,-7.377 -17.305,-7.377c-9.914,-0 -18.432,6.024 -22.09,14.608c-0.216,0.508 0.021,1.096 0.528,1.312c0.508,0.216 1.096,-0.02 1.312,-0.528c3.354,-7.869 11.162,-13.392 20.25,-13.392c6.177,-0 11.762,2.551 15.759,6.656Z"></path>{" "}
                </g>{" "}
              </g>
            </svg>

            <div className=" flex flex-col items-center justify-center">
              <p>Humidity</p>
              <p>{humidity}</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mx-2">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16.6097 19.9999C17.9497 20.0099 19.2397 19.5099 20.2297 18.6099C23.4997 15.7499 21.7497 10.0099 17.4397 9.46995C15.8997 0.129949 2.42973 3.66995 5.61973 12.5599"
                  stroke="#28c0c3"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M7.27938 12.9698C6.74938 12.6998 6.15938 12.5598 5.56938 12.5698C0.909376 12.8998 0.919376 19.6798 5.56938 20.0098"
                  stroke="#28c0c3"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M15.8203 9.88998C16.3403 9.62998 16.9003 9.48998 17.4803 9.47998"
                  stroke="#28c0c3"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  opacity="0.4"
                  d="M9.9707 20L7.9707 22"
                  stroke="#28c0c3"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  opacity="0.4"
                  d="M13.9707 20L11.9707 22"
                  stroke="#28c0c3"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  opacity="0.4"
                  d="M13.9707 16L11.9707 18"
                  stroke="#28c0c3"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  opacity="0.4"
                  d="M9.9707 16L7.9707 18"
                  stroke="#28c0c3"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>

            <div className=" flex flex-col items-center justify-center">
              <p>Pressure</p>
              <p>{pressure}MM</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mx-2">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M18.5 22.75C16.16 22.75 14.25 20.84 14.25 18.5V18C14.25 17.59 14.59 17.25 15 17.25C15.41 17.25 15.75 17.59 15.75 18V18.5C15.75 20.02 16.98 21.25 18.5 21.25C20.02 21.25 21.25 20.02 21.25 18.5C21.25 16.98 20.02 15.75 18.5 15.75H2C1.59 15.75 1.25 15.41 1.25 15C1.25 14.59 1.59 14.25 2 14.25H18.5C20.84 14.25 22.75 16.16 22.75 18.5C22.75 20.84 20.84 22.75 18.5 22.75Z"
                  fill="#28c0c3"
                ></path>{" "}
                <path
                  opacity="0.4"
                  d="M18.5 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H18.5C20.02 11.25 21.25 10.02 21.25 8.5C21.25 6.98 20.02 5.75 18.5 5.75C16.98 5.75 15.75 6.98 15.75 8.5V9C15.75 9.41 15.41 9.75 15 9.75C14.59 9.75 14.25 9.41 14.25 9V8.5C14.25 6.16 16.16 4.25 18.5 4.25C20.84 4.25 22.75 6.16 22.75 8.5C22.75 10.84 20.84 12.75 18.5 12.75Z"
                  fill="#28c0c3"
                ></path>{" "}
                <path
                  d="M9.31 9.75012H2C1.59 9.75012 1.25 9.41012 1.25 9.00012C1.25 8.59012 1.59 8.25012 2 8.25012H9.31C10.38 8.25012 11.25 7.38012 11.25 6.31012C11.25 5.24012 10.38 4.37012 9.31 4.37012C8.24 4.37012 7.37 5.24012 7.37 6.31012V6.69012C7.37 7.10012 7.03 7.44012 6.62 7.44012C6.21 7.44012 5.87 7.11012 5.87 6.69012V6.31012C5.87 4.41012 7.41 2.87012 9.31 2.87012C11.21 2.87012 12.75 4.41012 12.75 6.31012C12.75 8.21012 11.21 9.75012 9.31 9.75012Z"
                  fill="#28c0c3"
                ></path>{" "}
              </g>
            </svg>

            <div className=" flex flex-col items-center justify-center">
              <p>Wind</p>
              <p>{speed}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp;
