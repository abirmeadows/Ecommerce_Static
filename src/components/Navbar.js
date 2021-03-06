import React from "react"
import { Link } from "react-router-dom"
import { ProductConsumer } from "../context"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/">
          <svg
            viewBox="0 0 35 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="27" fill="#C4C4C4" />
            <path
              d="M14.5078 16.6368L16.4648 5.93762H20.543L16.9219 23.0001H12.6562L10.3711 13.2736L8.13281 23.0001H3.87891L0.246094 5.93762H4.33594L6.29297 16.6368L8.63672 5.93762H12.1289L14.5078 16.6368Z"
              fill="black"
            />
            <path
              d="M30.4138 18.6993C30.4138 18.0978 30.1989 17.629 29.7692 17.2931C29.3474 16.9572 28.6013 16.6095 27.531 16.2501C26.4606 15.8907 25.5856 15.5431 24.906 15.2072C22.695 14.1212 21.5896 12.629 21.5896 10.7306C21.5896 9.78528 21.863 8.95324 22.4099 8.23449C22.9646 7.50793 23.7458 6.94543 24.7536 6.54699C25.7614 6.14074 26.8942 5.93762 28.1521 5.93762C29.3786 5.93762 30.4763 6.15637 31.445 6.59387C32.4216 7.03137 33.1794 7.65637 33.7185 8.46887C34.2575 9.27356 34.0739 12.4298 34.0739 13.4689L30.4255 11.2345C30.4255 10.5392 30.2106 10.0001 29.781 9.61731C29.3591 9.23449 28.7849 9.04309 28.0583 9.04309C27.3239 9.04309 26.7419 9.20715 26.3122 9.53528C25.8903 9.85559 25.6794 10.2657 25.6794 10.7657C25.6794 11.2032 25.9138 11.6017 26.3825 11.9611C26.8513 12.3126 27.6755 12.6798 28.8552 13.0626C30.0349 13.4376 31.0036 13.8439 31.7614 14.2814C33.6052 15.3439 34.5271 16.8087 34.5271 18.6759C34.5271 20.1681 33.9646 21.34 32.8396 22.1915C31.7146 23.0431 30.1716 23.4689 28.2106 23.4689C26.8278 23.4689 25.5739 23.2228 24.4489 22.7306C23.3317 22.2306 22.488 21.5509 21.9177 20.6915C21.3552 19.8243 21.9177 16.3322 21.9177 15.2072L25.1989 17.7032C25.1989 18.6173 25.4333 19.2931 25.9021 19.7306C26.3786 20.1603 27.1481 20.3751 28.2106 20.3751C28.8903 20.3751 29.4255 20.2306 29.8161 19.9415C30.2146 19.6447 30.4138 19.2306 30.4138 18.6993Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/store">store</Link>
        <Link to="/cart">
          <button>
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <ProductConsumer>
              {value => {
                if (value.cart.length === 0) {
                  return null
                } else {
                  return <span className="item-no">{value.cart.length}</span>
                }
              }}
            </ProductConsumer>
          </button>
        </Link>
      </div>
    </div>
  )
}
