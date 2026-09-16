import { useEffect, useState } from "react";
import "./textPrice.css";

const offers = [
  {
    text: "মায়াবতী ফ্লোরাল টপ + প্লাজু ( ১ সেটের কম্বো ) মাত্র -",
    price: "১০৫০ টাকা",
    mark: "circle",
  },
  {
    text: "মায়াবতী ফ্লোরাল টপ + প্লাজু ( ২ সেটের কম্বো ) মাত্র -",
    price: "১৯৫০ টাকা",
    mark: "wave",
  },
  {
    text: "মায়াবতী ফ্লোরাল টপ + প্লাজু ( ৩ সেটের কম্বো ) মাত্র -",
    price: "২৯৫০ টাকা",
    mark: "double",
  },
];

export default function TextPrice() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % offers.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="price-section">
      <div className="price-container">
        {offers.map((offer, index) => (
          <div className="offer-box" key={index}>
            <h1 className="offer-text">
              <span>{offer.text}</span>

              <span className={`price ${active === index ? "active" : ""}`}>
                {offer.price}

                {/* ১ম দাম - গোল মার্ক */}
                {offer.mark === "circle" && (
                  <span className="circle-mark"></span>
                )}

                {/* ২য় দাম - ঢেউ মার্ক */}
                {offer.mark === "wave" && (
                  <span className="wave-mark">〰〰〰</span>
                )}

                {/* ৩য় দাম - দুইটি দাগ */}
                {offer.mark === "double" && (
                  <span className="double-mark">
                    <span></span>
                    <span></span>
                  </span>
                )}
              </span>
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}
