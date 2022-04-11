import React from "react";

export default function Footer() {
  return (
    <footer className="bottom-0 fixed w-full">
      <a
        href="https://twitter.com/getGoodCoffee"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center"
      >
        <svg
          className="fill-current text-brown cursor-pointer"
          width={20.5}
          height={15.5}
          viewBox="0 0 40 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4:1266)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M33.5816 8.09625V8.09255L37.0535 4.34662C37.1777 4.21248 37.2575 4.0433 37.2821 3.86214C37.3066 3.68097 37.2747 3.49665 37.1907 3.33428C37.1067 3.17191 36.9746 3.0394 36.8126 2.95481C36.6505 2.87022 36.4663 2.83767 36.285 2.86159L31.9336 3.4356C30.8188 2.0541 29.2449 1.11894 27.4986 0.800405C25.7522 0.481872 23.9495 0.801162 22.4188 1.70013C20.888 2.5991 19.7311 4.01794 19.1586 5.69829C18.5861 7.37864 18.6362 9.2087 19.2997 10.8552C13.7521 10.7256 7.81195 9.62758 4.80855 3.67632C4.43821 2.94121 3.37165 2.89862 3.13464 3.68743C0.960783 10.946 4.78633 20.3784 13.2133 22.9059C11.1098 24.9612 5.7066 25.5186 1.28482 25.1149C0.4238 25.0353 -0.116887 26.0167 0.549713 26.5666C4.25675 29.6404 9.39883 30.3125 14.1391 30.3125C26.1749 30.3125 34.5056 20.1302 33.5816 8.09625Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_4:1266">
              <rect
                width="38.885"
                height="29.6267"
                transform="translate(0.251709 0.686523)"
              />
            </clipPath>
          </defs>
        </svg>
      </a>
      <div className="text-gray-700 text-center p-4">
        By
        <a className="text-gray-800"> Cam Dressler</a>
      </div>
    </footer>
  );
}
