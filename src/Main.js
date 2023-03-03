import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

export default function Main() {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/R255-Max-Desktop_1400x.jpg?v=1677391790"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/R255-Max-Desktop_1400x.jpg?v=1677391790"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ezgif-4-e6f62730cc_1400x.gif?v=1677752123"
              alt=""
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
