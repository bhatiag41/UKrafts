import React from "react";
import { Link } from "react-router-dom";
import Data from "../data";

export default function Home() {
  return (
    <div>
      <div class="overlay" data-overlay></div>
      <div class="modal" data-modal>
        <div class="modal-close-overlay" data-modal-overlay></div>

        <div class="modal-content">
          <button class="modal-close-btn" data-modal-close>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div class="newsletter-img">
            <img
              src="assets/newsletter.png"
              alt="subscribe newsletter"
              width="400"
              height="400"
            />
          </div>

          <div class="newsletter">
            <form action="#">
              <div class="newsletter-header">
                <h3 class="newsletter-title">Subscribe Newsletter.</h3>

                <p class="newsletter-desc">
                  Subscribe the <b>Anon</b> to get latest products and discount
                  update.
                </p>
              </div>

              <input
                type="email"
                name="email"
                class="email-field"
                placeholder="Email Address"
                required
              />

              <button type="submit" class="btn-newsletter">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="notification-toast" data-toast>
        <button class="toast-close-btn" data-toast-close>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div class="toast-banner">
          <img
            src="assets/products/jewellery-1.jpg"
            alt="Rose Gold Earrings"
            width="80"
            height="70"
          />
        </div>

        <div class="toast-detail">
          <p class="toast-message">Someone in new just bought</p>

          <p class="toast-title">Rose Gold Earrings</p>

          <p class="toast-meta">
            <time datetime="PT2M">2 Minutes</time> ago
          </p>
        </div>
      </div>

      <header>
        <div class="header-top">
          <div class="container">
            <ul class="header-social-container">
              <li>
                <a href="/" class="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/" class="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/" class="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/" class="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>

            {/* <div class="header-alert-news">
              <p>
                <b>Free Shipping</b>
                This Week Order Over - $55
              </p>
            </div> */}

            <button>Login</button>
          </div>
        </div>

        <div class="header-main">
          <div class="container">
            <a href="/" class="header-logo">
              <img
                src="assets/logo/UKRAFTS.png"
                alt="Anon's logo"
                width="150"
                height="36"
              />
            </a>

            <div class="header-search-container">
              <input
                type="search"
                name="search"
                class="search-field"
                placeholder="Enter your product name..."
              />

              <button class="search-btn">
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </div>

            <div class="header-user-actions">
              {/* <button class="action-btn">
                <ion-icon name="person-outline"></ion-icon>
              </button>

              <button class="action-btn">
                <ion-icon name="heart-outline"></ion-icon>
                <span class="count">0</span>
              </button> */}

              <button class="action-btn">
                <Link to="/Cart">
                  <ion-icon name="bag-handle-outline"></ion-icon>
                  <span class="count">0</span>
                </Link>
              </button>
            </div>
          </div>
        </div>

        <nav class="desktop-navigation-menu">
          <div class="container">
            <ul class="desktop-menu-category-list">
              <li class="menu-category">
                <a href="/" class="menu-title">
                  Home
                </a>
              </li>

              <li class="menu-category">
                <a href="/" class="menu-title">
                  Categories
                </a>

                <div class="dropdown-panel">
                  <ul class="dropdown-panel-list">
                    <li class="menu-title">
                      <a href="/">Aipan</a>
                    </li>

                    <li class="menu-title">
                      <a href="/">Pahadi topi</a>
                    </li>

                    <li class="menu-title">
                      <a href="/">Pichora</a>
                    </li>

                    <li class="menu-title">
                       <a href="/">Ranikhet woolens: Handspun</a>
                    </li>

                    <li class="menu-title">
                      <a href="/">Kumaoni Pottery</a>
                    </li>

                    <li class="menu-title">
                      <a href="/">Garhwali Jewellery</a>
                    </li>

                    <li class="menu-title">
                      <a href="/">Pithoragarh Painting</a>
                    </li>

                    <li class="menu-title">
                      <a href="/">Nainital Woodwork</a>
                    </li>

                    <li class="menu-title">
                      <a href="/">Paper Bags and Jute Bags</a>
                    </li>

                     <li class="menu-title">
                       <a href="/">Pine Cone</a>
                     </li>

                     <li class="menu-title">
                       <a href="/">Penstand</a>
                     </li>

                     <li class="menu-title">
                       <a href="/">Pooja Aasan and Choki</a>
                     </li>

                     <li class="menu-title">
                       <a href="/">Cushion Covers</a>
                     </li>

                     <li class="menu-title">
                       <a href="/">Table cloth and Sofa Cover Set</a>
                     </li>

                     <li class="menu-title">
                       <a href="/">Door Mat</a>
                     </li>
                  </ul>

                  
                
                </div>
              </li>

              <li class="menu-category">
                <a href="/" class="menu-title">
                  Gift Items
                </a>

              </li>

              <li class="menu-category">
                <a href="/" class="menu-title">
                  Home Decor
                </a>

                {/* <ul class="dropdown-list">
                  <li class="dropdown-item">
                    <a href="/">Dress & Frock</a>
                  </li>

                  <li class="dropdown-item">
                    <a href="/">Earrings</a>
                  </li>

                  <li class="dropdown-item">
                    <a href="/">Necklace</a>
                  </li>

                  <li class="dropdown-item">
                    <a href="/">Makeup Kit</a>
                  </li>
                </ul> */}
              </li>

              <li class="menu-category">
                <a href="/" class="menu-title">
                  Jewelry
                </a>

                <ul class="dropdown-list">
                  <li class="dropdown-item">
                    <a href="/">Earrings</a>
                  </li>

                  <li class="dropdown-item">
                    <a href="/">Couple Rings</a>
                  </li>

                  <li class="dropdown-item">
                    <a href="/">Necklace</a>
                  </li>

                  <li class="dropdown-item">
                    <a href="/">Bracelets</a>
                  </li>
                </ul>
              </li>

              <li class="menu-category">
                <a href="/" class="menu-title">
                 Pooja Items
                </a>

                <ul class="dropdown-list">
                  <li class="dropdown-item">
                    <a href="/">Clothes Perfume</a>
                  </li>

                  <li class="dropdown-item">
                    <a href="/">Deodorant</a>
                  </li>

                  <li class="dropdown-item">
                    <a href="/">Flower Fragrance</a>
                  </li>

                  <li class="dropdown-item">
                    <a href="/">Air Freshener</a>
                  </li>
                </ul>
              </li>

              <li class="menu-category">
                <a href="/" class="menu-title">
                  Clothing
                </a>
              </li>

              <li class="menu-category">
                <a href="/" class="menu-title">
                  Car and Bike Decor
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="mobile-bottom-navigation">
          <button class="action-btn" data-mobile-menu-open-btn>
            <ion-icon name="menu-outline"></ion-icon>
          </button>

          <button class="action-btn">
            <ion-icon name="bag-handle-outline"></ion-icon>

            <span class="count">0</span>
          </button>

          <button class="action-btn">
            <ion-icon name="home-outline"></ion-icon>
          </button>

          <button class="action-btn">
            <ion-icon name="heart-outline"></ion-icon>

            <span class="count">0</span>
          </button>

          <button class="action-btn" data-mobile-menu-open-btn>
            <ion-icon name="grid-outline"></ion-icon>
          </button>
        </div>

        <nav class="mobile-navigation-menu  has-scrollbar" data-mobile-menu>
          <div class="menu-top">
            <h2 class="menu-title">Menu</h2>

            <button class="menu-close-btn" data-mobile-menu-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul class="mobile-menu-category-list">
            <li class="menu-category">
              <a href="/" class="menu-title">
                Home
              </a>
            </li>

            <li class="menu-category">
              <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">Men's</p>

                <div>
                  <ion-icon name="add-outline" class="add-icon"></ion-icon>
                  <ion-icon
                    name="remove-outline"
                    class="remove-icon"
                  ></ion-icon>
                </div>
              </button>

              <ul class="submenu-category-list" data-accordion>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Shirt
                  </a>
                </li>

                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Shorts & Jeans
                  </a>
                </li>

                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Safety Shoes
                  </a>
                </li>

                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Wallet
                  </a>
                </li>
              </ul>
            </li>

            <li class="menu-category">
              <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">Women's</p>

                <div>
                  <ion-icon name="add-outline" class="add-icon"></ion-icon>
                  <ion-icon
                    name="remove-outline"
                    class="remove-icon"
                  ></ion-icon>
                </div>
              </button>

              <ul class="submenu-category-list" data-accordion>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Dress & Frock
                  </a>
                </li>

                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Earrings
                  </a>
                </li>

                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Necklace
                  </a>
                </li>

                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Makeup Kit
                  </a>
                </li>
              </ul>
            </li>

            <li class="menu-category">
              <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">Jewelry</p>

                <div>
                  <ion-icon name="add-outline" class="add-icon"></ion-icon>
                  <ion-icon
                    name="remove-outline"
                    class="remove-icon"
                  ></ion-icon>
                </div>
              </button>

              <ul class="submenu-category-list" data-accordion>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Earrings
                  </a>
                </li>

                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Couple Rings
                  </a>
                </li>

                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Necklace
                  </a>
                </li>

                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Bracelets
                  </a>
                </li>
              </ul>
            </li>

            <li class="menu-category">
              <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">Perfume</p>

                <div>
                  <ion-icon name="add-outline" class="add-icon"></ion-icon>
                  <ion-icon
                    name="remove-outline"
                    class="remove-icon"
                  ></ion-icon>
                </div>
              </button>

              <ul class="submenu-category-list" data-accordion>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Clothes Perfume
                  </a>
                </li>

                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Deodorant
                  </a>
                </li>

                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Flower Fragrance
                  </a>
                </li>

                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Air Freshener
                  </a>
                </li>
              </ul>
            </li>

            <li class="menu-category">
              <a href="/" class="menu-title">
                Blog
              </a>
            </li>

            <li class="menu-category">
              <a href="/" class="menu-title">
                Hot Offers
              </a>
            </li>
          </ul>

          <div class="menu-bottom">
            <ul class="menu-category-list">
              <li class="menu-category">
                <button class="accordion-menu" data-accordion-btn>
                  <p class="menu-title">Language</p>

                  <ion-icon
                    name="caret-back-outline"
                    class="caret-back"
                  ></ion-icon>
                </button>

                <ul class="submenu-category-list" data-accordion>
                  <li class="submenu-category">
                    <a href="/" class="submenu-title">
                      English
                    </a>
                  </li>

                  <li class="submenu-category">
                    <a href="/" class="submenu-title">
                      Espa&ntilde;ol
                    </a>
                  </li>

                  <li class="submenu-category">
                    <a href="/" class="submenu-title">
                      Fren&ccedil;h
                    </a>
                  </li>
                </ul>
              </li>

              <li class="menu-category">
                <button class="accordion-menu" data-accordion-btn>
                  <p class="menu-title">Currency</p>
                  <ion-icon
                    name="caret-back-outline"
                    class="caret-back"
                  ></ion-icon>
                </button>

                <ul class="submenu-category-list" data-accordion>
                  <li class="submenu-category">
                    <a href="/" class="submenu-title">
                      USD &dollar;
                    </a>
                  </li>

                  <li class="submenu-category">
                    <a href="/" class="submenu-title">
                      EUR &euro;
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul class="menu-social-container">
              <li>
                <a href="/" class="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/" class="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/" class="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/" class="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <div class="banner">
          <div class="container">
            <div class="slider-container has-scrollbar">
              <div class="slider-item">
                <img
                  src="assets/banner-1.jpg"
                  alt="women's latest fashion sale"
                  class="banner-img"
                />

                <div class="banner-content">
                  <p class="banner-subtitle">Trending item</p>

                  <h2 class="banner-title">Handmade Basket</h2>

                  <p class="banner-text">
                    starting at ₹ <b>200</b>.00
                  </p>

                  <a href="/" class="banner-btn">
                    Shop now
                  </a>
                </div>
              </div>

              <div class="slider-item">
                <img
                  src="assets/banner-2.jpg"
                  alt="modern sunglasses"
                  class="banner-img"
                />

                <div class="banner-content">
                  <p class="banner-subtitle">Trending accessories</p>

                  <h2 class="banner-title">Garhwali Jewellery</h2>

                  <p class="banner-text">
                    starting at ₹<b>150</b>.00
                  </p>

                  <a href="/" class="banner-btn">
                    Shop now
                  </a>
                </div>
              </div>

            
            </div>
          </div>
        </div>

        {/* <div class="category">

          <div class="container">

            <div class="category-item-container has-scrollbar">

              <div class="category-item">

                <div class="category-img-box">
                  <img src="assets/icons/dress.svg" alt="dress & frock" width="30"/>
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">Dress & frock</h3>

                    <p class="category-item-amount">(53)</p>
                  </div>

                  <a href="/" class="category-btn">Show all</a>

                </div>

              </div>

              <div class="category-item">

                <div class="category-img-box">
                  <img src="assets/icons/coat.svg" alt="winter wear" width="30"/>
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">Winter wear</h3>

                    <p class="category-item-amount">(58)</p>
                  </div>

                  <a href="/" class="category-btn">Show all</a>

                </div>

              </div>

              <div class="category-item">

                <div class="category-img-box">
                  <img src="assets/icons/glasses.svg" alt="glasses & lens" width="30"/>
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">Glasses & lens</h3>

                    <p class="category-item-amount">(68)</p>
                  </div>

                  <a href="/" class="category-btn">Show all</a>

                </div>

              </div>

              <div class="category-item">

                <div class="category-img-box">
                  <img src="assets/icons/shorts.svg" alt="shorts & jeans" width="30"/>
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">Shorts & jeans</h3>

                    <p class="category-item-amount">(84)</p>
                  </div>

                  <a href="/" class="category-btn">Show all</a>

                </div>

              </div>

              <div class="category-item">

                <div class="category-img-box">
                  <img src="assets/icons/tee.svg" alt="t-shirts" width="30"/>
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">T-shirts</h3>

                    <p class="category-item-amount">(35)</p>
                  </div>

                  <a href="/" class="category-btn">Show all</a>

                </div>

              </div>

              <div class="category-item">

                <div class="category-img-box">
                  <img src="assets/icons/jacket.svg" alt="jacket" width="30"/>
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">Jacket</h3>

                    <p class="category-item-amount">(16)</p>
                  </div>

                  <a href="/" class="category-btn">Show all</a>

                </div>

              </div>

              <div class="category-item">

                <div class="category-img-box">
                  <img src="assets/icons/watch.svg" alt="watch" width="30"/>
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">Watch</h3>

                    <p class="category-item-amount">(27)</p>
                  </div>

                  <a href="/" class="category-btn">Show all</a>

                </div>

              </div>

              <div class="category-item">

                <div class="category-img-box">
                  <img src="assets/icons/hat.svg" alt="hat & caps" width="30"/>
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">Hat & caps</h3>

                    <p class="category-item-amount">(39)</p>
                  </div>

                  <a href="/" class="category-btn">Show all</a>

                </div>

              </div>

            </div>

          </div>

        </div> */}

        <div class="product-container">
          <div class="container">
            <div class="sidebar  has-scrollbar" data-mobile-menu>
              <div class="sidebar-category">
                <div class="sidebar-top">
                  <h2 class="sidebar-title">Categoriess</h2>

                  <button class="sidebar-close-btn" data-mobile-menu-close-btn>
                    <ion-icon name="close-outline"></ion-icon>
                  </button>
                </div>

                <ul class="sidebar-menu-category-list">
                  <li class="sidebar-menu-category">
                    <button class="sidebar-accordion-menu" data-accordion-btn>
                      <div class="menu-title-flex">
                        <img
                          src="assets/icons/dress.svg"
                          alt="clothes"
                          width="20"
                          height="20"
                          class="menu-title-img"
                        />

                        <p class="menu-title">Gift Items</p>
                      </div>
                    </button>

                    <ul class="sidebar-submenu-category-list" data-accordion>
                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Shirt</p>
                          <data
                            value="300"
                            class="stock"
                            title="Available Stock"
                          >
                            300
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">shorts & jeans</p>
                          <data
                            value="60"
                            class="stock"
                            title="Available Stock"
                          >
                            60
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">jacket</p>
                          <data
                            value="50"
                            class="stock"
                            title="Available Stock"
                          >
                            50
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">dress & frock</p>
                          <data
                            value="87"
                            class="stock"
                            title="Available Stock"
                          >
                            87
                          </data>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="sidebar-menu-category">
                    <button class="sidebar-accordion-menu" data-accordion-btn>
                      <div class="menu-title-flex">
                        <img
                          src="assets/icons/shoes.svg"
                          alt="footwear"
                          class="menu-title-img"
                          width="20"
                          height="20"
                        />

                        <p class="menu-title">Home Decor</p>
                      </div>
                    </button>

                    <ul class="sidebar-submenu-category-list" data-accordion>
                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Sports</p>
                          <data
                            value="45"
                            class="stock"
                            title="Available Stock"
                          >
                            45
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Formal</p>
                          <data
                            value="75"
                            class="stock"
                            title="Available Stock"
                          >
                            75
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Casual</p>
                          <data
                            value="35"
                            class="stock"
                            title="Available Stock"
                          >
                            35
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Safety Shoes</p>
                          <data
                            value="26"
                            class="stock"
                            title="Available Stock"
                          >
                            26
                          </data>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="sidebar-menu-category">
                    <button class="sidebar-accordion-menu" data-accordion-btn>
                      <div class="menu-title-flex">
                        <img
                          src="assets/icons/jewelry.svg"
                          alt="clothes"
                          class="menu-title-img"
                          width="20"
                          height="20"
                        />

                        <p class="menu-title">Jewelry</p>
                      </div>
                    </button>

                    <ul class="sidebar-submenu-category-list" data-accordion>
                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Earrings</p>
                          <data
                            value="46"
                            class="stock"
                            title="Available Stock"
                          >
                            46
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Couple Rings</p>
                          <data
                            value="73"
                            class="stock"
                            title="Available Stock"
                          >
                            73
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Necklace</p>
                          <data
                            value="61"
                            class="stock"
                            title="Available Stock"
                          >
                            61
                          </data>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="sidebar-menu-category">
                    <button class="sidebar-accordion-menu" data-accordion-btn>
                      <div class="menu-title-flex">
                        <img
                          src="assets/icons/perfume.svg"
                          alt="perfume"
                          class="menu-title-img"
                          width="20"
                          height="20"
                        />

                        <p class="menu-title">Pooja Items</p>
                      </div>
                    </button>

                    <ul class="sidebar-submenu-category-list" data-accordion>
                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Clothes Perfume</p>
                          <data
                            value="12"
                            class="stock"
                            title="Available Stock"
                          >
                            12 pcs
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Deodorant</p>
                          <data
                            value="60"
                            class="stock"
                            title="Available Stock"
                          >
                            60 pcs
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">jacket</p>
                          <data
                            value="50"
                            class="stock"
                            title="Available Stock"
                          >
                            50 pcs
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">dress & frock</p>
                          <data
                            value="87"
                            class="stock"
                            title="Available Stock"
                          >
                            87 pcs
                          </data>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="sidebar-menu-category">
                    <button class="sidebar-accordion-menu" data-accordion-btn>
                      <div class="menu-title-flex">
                        <img
                          src="assets/icons/cosmetics.svg"
                          alt="cosmetics"
                          class="menu-title-img"
                          width="20"
                          height="20"
                        />

                        <p class="menu-title">Clothing</p>
                      </div>
                    </button>

                    <ul class="sidebar-submenu-category-list" data-accordion>
                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Shampoo</p>
                          <data
                            value="68"
                            class="stock"
                            title="Available Stock"
                          >
                            68
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Sunscreen</p>
                          <data
                            value="46"
                            class="stock"
                            title="Available Stock"
                          >
                            46
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Body Wash</p>
                          <data
                            value="79"
                            class="stock"
                            title="Available Stock"
                          >
                            79
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Makeup Kit</p>
                          <data
                            value="23"
                            class="stock"
                            title="Available Stock"
                          >
                            23
                          </data>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="sidebar-menu-category">
                    <button class="sidebar-accordion-menu" data-accordion-btn>
                      <div class="menu-title-flex">
                        <img
                          src="assets/icons/glasses.svg"
                          alt="glasses"
                          class="menu-title-img"
                          width="20"
                          height="20"
                        />

                        <p class="menu-title">Car and Bike Decor</p>
                      </div>
                    </button>

                    <ul class="sidebar-submenu-category-list" data-accordion>
                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Sunglasses</p>
                          <data
                            value="50"
                            class="stock"
                            title="Available Stock"
                          >
                            50
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Lenses</p>
                          <data
                            value="48"
                            class="stock"
                            title="Available Stock"
                          >
                            48
                          </data>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="sidebar-menu-category">
                    <button class="sidebar-accordion-menu" data-accordion-btn>
                      <div class="menu-title-flex">

                      </div>
                    </button>

                    <ul class="sidebar-submenu-category-list" data-accordion>
                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Shopping Bag</p>
                          <data
                            value="62"
                            class="stock"
                            title="Available Stock"
                          >
                            62
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Gym Backpack</p>
                          <data
                            value="35"
                            class="stock"
                            title="Available Stock"
                          >
                            35
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Purse</p>
                          <data
                            value="80"
                            class="stock"
                            title="Available Stock"
                          >
                            80
                          </data>
                        </a>
                      </li>

                      <li class="sidebar-submenu-category">
                        <a href="/" class="sidebar-submenu-title">
                          <p class="product-name">Wallet</p>
                          <data
                            value="75"
                            class="stock"
                            title="Available Stock"
                          >
                            75
                          </data>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* <div class="product-showcase">
                <h3 class="showcase-heading">best sellers</h3>

                <div class="showcase-wrapper">
                  <div class="showcase-container">
                    <div class="showcase">
                      <a href="/" class="showcase-img-box">
                        <img
                          src="assets/products/1.jpg"
                          alt="baby fabric shoes"
                          width="75"
                          height="75"
                          class="showcase-img"
                        />
                      </a>

                      <div class="showcase-content">
                        <a href="/">
                          <h4 class="showcase-title">baby fabric shoes</h4>
                        </a>

                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>

                        <div class="price-box">
                          <del>$5.00</del>
                          <p class="price">$4.00</p>
                        </div>
                      </div>
                    </div>

                    <div class="showcase">
                      <a href="/" class="showcase-img-box">
                        <img
                          src="assets/products/2.jpg"
                          alt="men's hoodies t-shirt"
                          class="showcase-img"
                          width="75"
                          height="75"
                        />
                      </a>

                      <div class="showcase-content">
                        <a href="/">
                          <h4 class="showcase-title">men's hoodies t-shirt</h4>
                        </a>
                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-half-outline"></ion-icon>
                        </div>

                        <div class="price-box">
                          <del>$17.00</del>
                          <p class="price">$7.00</p>
                        </div>
                      </div>
                    </div>

                    <div class="showcase">
                      <a href="/" class="showcase-img-box">
                        <img
                          src="assets/products/3.jpg"
                          alt="girls t-shirt"
                          class="showcase-img"
                          width="75"
                          height="75"
                        />
                      </a>

                      <div class="showcase-content">
                        <a href="/">
                          <h4 class="showcase-title">girls t-shirt</h4>
                        </a>
                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-half-outline"></ion-icon>
                        </div>

                        <div class="price-box">
                          <del>$5.00</del>
                          <p class="price">$3.00</p>
                        </div>
                      </div>
                    </div>

                    <div class="showcase">
                      <a href="/" class="showcase-img-box">
                        <img
                          src="assets/products/4.jpg"
                          alt="woolen hat for men"
                          class="showcase-img"
                          width="75"
                          height="75"
                        />
                      </a>

                      <div class="showcase-content">
                        <a href="/">
                          <h4 class="showcase-title">woolen hat for men</h4>
                        </a>
                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>

                        <div class="price-box">
                          <del>$15.00</del>
                          <p class="price">$12.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <div class="product-box">
              <div class="product-minimal">
                {/* <div class="product-showcase">

                  <h2 class="title">New Arrivals</h2>

                  <div class="showcase-wrapper has-scrollbar">

                    <div class="showcase-container">

                      <div class="showcase">

                        <a href="/" class="showcase-img-box">
                          <img src="assets/products/clothes-1.jpg" alt="relaxed short full sleeve t-shirt" width="70" class="showcase-img"/>
                        </a>

                        <div class="showcase-content">

                          <a href="/">
                            <h4 class="showcase-title">Relaxed Short full Sleeve T-Shirt</h4>
                          </a>

                          <a href="/" class="showcase-category">Clothes</a>

                          <div class="price-box">
                            <p class="price">$45.00</p>
                            <del>$12.00</del>
                          </div>

                        </div>

                      </div>

                      <div class="showcase">

                        <a href="/" class="showcase-img-box">
                          <img src="assets/products/clothes-2.jpg" alt="girls pink embro design top" class="showcase-img" width="70"/>
                        </a>

                        <div class="showcase-content">

                          <a href="/">
                            <h4 class="showcase-title">Girls pnk Embro design Top</h4>
                          </a>

                          <a href="/" class="showcase-category">Clothes</a>

                          <div class="price-box">
                            <p class="price">$61.00</p>
                            <del>$9.00</del>
                          </div>

                        </div>

                      </div>

                      <div class="showcase">

                        <a href="/" class="showcase-img-box">
                          <img src="assets/products/clothes-3.jpg" alt="black floral wrap midi skirt" class="showcase-img"
                            width="70"/>
                        </a>

                        <div class="showcase-content">

                          <a href="/">
                            <h4 class="showcase-title">Black Floral Wrap Midi Skirt</h4>
                          </a>

                          <a href="/" class="showcase-category">Clothes</a>

                          <div class="price-box">
                            <p class="price">$76.00</p>
                            <del>$25.00</del>
                          </div>

                        </div>

                      </div>

                      <div class="showcase">

                        <a href="/" class="showcase-img-box">
                          <img src="assets/products/shirt-1.jpg" alt="pure garment dyed cotton shirt" class="showcase-img"
                            width="70"/>
                        </a>

                        <div class="showcase-content">

                          <a href="/">
                            <h4 class="showcase-title">Pure Garment Dyed Cotton Shirt</h4>
                          </a>

                          <a href="/" class="showcase-category">Mens Fashion</a>

                          <div class="price-box">
                            <p class="price">$68.00</p>
                            <del>$31.00</del>
                          </div>

                        </div>

                      </div>

                    </div>

                    <div class="showcase-container">

                      <div class="showcase">

                        <a href="/" class="showcase-img-box">
                          <img src="assets/products/jacket-5.jpg" alt="men yarn fleece full-zip jacket" class="showcase-img"
                            width="70"/>
                        </a>

                        <div class="showcase-content">

                          <a href="/">
                            <h4 class="showcase-title">MEN Yarn Fleece Full-Zip Jacket</h4>
                          </a>

                          <a href="/" class="showcase-category">Winter wear</a>

                          <div class="price-box">
                            <p class="price">$61.00</p>
                            <del>$11.00</del>
                          </div>

                        </div>

                      </div>

                      <div class="showcase">

                        <a href="/" class="showcase-img-box">
                          <img src="assets/products/jacket-1.jpg" alt="mens winter leathers jackets" class="showcase-img"
                            width="70"/>
                        </a>

                        <div class="showcase-content">

                          <a href="/">
                            <h4 class="showcase-title">Mens Winter Leathers Jackets</h4>
                          </a>

                          <a href="/" class="showcase-category">Winter wear</a>

                          <div class="price-box">
                            <p class="price">$32.00</p>
                            <del>$20.00</del>
                          </div>

                        </div>

                      </div>

                      <div class="showcase">

                        <a href="/" class="showcase-img-box">
                          <img src="assets/products/jacket-3.jpg" alt="mens winter leathers jackets" class="showcase-img"
                            width="70"/>
                        </a>

                        <div class="showcase-content">

                          <a href="/">
                            <h4 class="showcase-title">Mens Winter Leathers Jackets</h4>
                          </a>

                          <a href="/" class="showcase-category">Jackets</a>

                          <div class="price-box">
                            <p class="price">$50.00</p>
                            <del>$25.00</del>
                          </div>

                        </div>

                      </div>

                      <div class="showcase">

                        <a href="/" class="showcase-img-box">
                          <img src="assets/products/shorts-1.jpg" alt="better basics french terry sweatshorts" class="showcase-img"
                            width="70"/>
                        </a>

                        <div class="showcase-content">

                          <a href="/">
                            <h4 class="showcase-title">Better Basics French Terry Sweatshorts</h4>
                          </a>

                          <a href="/" class="showcase-category">Shorts</a>

                          <div class="price-box">
                            <p class="price">$20.00</p>
                            <del>$10.00</del>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div> */}
              </div>

              <div class="product-featured">
                <h2 class="title">Deal of the day</h2>

                <div class="showcase-wrapper has-scrollbar">
                  <div class="showcase-container">
                    <div class="showcase">
                      <div class="showcase-banner">
                        <img
                          src="assets/cushion.jpg"
                          alt="ss"
                          class="showcase-img"
                        />
                      </div>

                      <div class="showcase-content">
                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                        </div>

                        <a href="/">
                          <h3 class="showcase-title">
                            Cushion with Aipan Design
                          </h3>
                        </a>

                        <p class="showcase-desc">
                        </p>

                        <div class="price-box">
                          <p class="price">₹350.00</p>

                          <del>₹500.00</del>
                        </div>

                        <button class="add-cart-btn">add to cart</button>

                        <div class="showcase-status">
                          <div class="wrapper">
                            <p>
                              already sold: <b>20</b>
                            </p>

                            <p>
                              available: <b>40</b>
                            </p>
                          </div>

                          <div class="showcase-status-bar"></div>
                        </div>

                        <div class="countdown-box">
                          <p class="countdown-desc">Hurry Up! Offer ends in:</p>

                          <div class="countdown">
                            <div class="countdown-content">
                              <p class="display-number">0</p>

                              <p class="display-text">Days</p>
                            </div>

                            <div class="countdown-content">
                              <p class="display-number">24</p>
                              <p class="display-text">Hours</p>
                            </div>

                            <div class="countdown-content">
                              <p class="display-number">59</p>
                              <p class="display-text">Min</p>
                            </div>

                            <div class="countdown-content">
                              <p class="display-number">00</p>
                              <p class="display-text">Sec</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="showcase-container">
                    <div class="showcase">
                      <div class="showcase-banner">
                        <img
                          src="assets/products/jewellery-1.jpg"
                          alt="Rose Gold diamonds Earring"
                          class="showcase-img"
                        />
                      </div>

                      <div class="showcase-content">
                        <div class="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                        </div>

                        <h3 class="showcase-title">
                          <a href="/" class="showcase-title">
                            Rose Gold diamonds Earring
                          </a>
                        </h3>

                        <p class="showcase-desc">
                          Lorem ipsum dolor sit amet consectetur Lorem ipsum
                          dolor dolor sit amet consectetur Lorem ipsum dolor
                        </p>

                        <div class="price-box">
                          <p class="price">$1990.00</p>
                          <del>$2000.00</del>
                        </div>

                        <button class="add-cart-btn">add to cart</button>

                        <div class="showcase-status">
                          <div class="wrapper">
                            <p>
                              {" "}
                              already sold: <b>15</b>{" "}
                            </p>

                            <p>
                              {" "}
                              available: <b>40</b>{" "}
                            </p>
                          </div>

                          <div class="showcase-status-bar"></div>
                        </div>

                        <div class="countdown-box">
                          <p class="countdown-desc">Hurry Up! Offer ends in:</p>

                          <div class="countdown">
                            <div class="countdown-content">
                              <p class="display-number">360</p>
                              <p class="display-text">Days</p>
                            </div>

                            <div class="countdown-content">
                              <p class="display-number">24</p>
                              <p class="display-text">Hours</p>
                            </div>

                            <div class="countdown-content">
                              <p class="display-number">59</p>
                              <p class="display-text">Min</p>
                            </div>

                            <div class="countdown-content">
                              <p class="display-number">00</p>
                              <p class="display-text">Sec</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="product-main">
                <h2 class="title">Our Products</h2>

                <div class="product-grid">
                  {Data.map((product) => {
                    return (
                      <div class="showcase">
                        <div class="showcase-banner">
                          <img
                            src={product.img}
                            alt={product.title}
                            class="product-img default"
                            height="300"
                          />
                          <img
                            src="assets/products/shoe-2_1.jpg"
                            alt={product.title}
                            class="product-img hover"
                            width="300"
                          />
                          {/* <p class="showcase-badge">15%</p> */}
                          {/* <p class="showcase-badge angle black">sale</p> */}
                          {/* <p class="showcase-badge angle pink">new</p> */}

                          <div class="showcase-actions">
                            <button class="btn-action">
                              <ion-icon name="heart-outline"></ion-icon>
                            </button>

                            <button class="btn-action">
                              <ion-icon name="eye-outline"></ion-icon>
                            </button>

                            <button class="btn-action">
                              <ion-icon name="repeat-outline"></ion-icon>
                            </button>

                            <button class="btn-action">
                              <ion-icon name="bag-add-outline"></ion-icon>
                            </button>
                          </div>
                        </div>

                        <div class="showcase-content">
                          <Link to="/ProductDetails" class="showcase-category">
                            {product.title}
                          </Link>

                          <h3>
                            <Link to="/ProductDetails" class="showcase-title">
                              {product.description}
                            </Link>
                          </h3>

                          <div class="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                          </div>

                          <div class="price-box">
                            <p class="price">₹{product.price}</p>
                            <del>₹{product.price+200}</del>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div class="footer-nav">
          <div class="container">
            <ul class="footer-nav-list">
              <li class="footer-nav-item">
                <h2 class="nav-title">Popular Categories</h2>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  Fashion
                </a>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  Electronic
                </a>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  Cosmetic
                </a>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  Health
                </a>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  Watches
                </a>
              </li>
            </ul>

            <ul class="footer-nav-list">
              <li class="footer-nav-item">
                <h2 class="nav-title">Products</h2>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  Prices drop
                </a>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  New products
                </a>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  Best sales
                </a>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  Contact us
                </a>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  Sitemap
                </a>
              </li>
            </ul>

            <ul class="footer-nav-list">
              <li class="footer-nav-item">
                <h2 class="nav-title">Our Company</h2>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  Delivery
                </a>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  Legal Notice
                </a>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  Terms and conditions
                </a>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  About us
                </a>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  Secure payment
                </a>
              </li>
            </ul>

            <ul class="footer-nav-list">
              <li class="footer-nav-item">
                <h2 class="nav-title">Services</h2>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  Prices drop
                </a>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  New products
                </a>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  Best sales
                </a>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  Contact us
                </a>
              </li>

              <li class="footer-nav-item">
                <a href="/" class="footer-nav-link">
                  Sitemap
                </a>
              </li>
            </ul>

            <ul class="footer-nav-list">
              <li class="footer-nav-item">
                <h2 class="nav-title">Contact</h2>
              </li>

              <li class="footer-nav-item flex">
                <div class="icon-box">
                  <ion-icon name="location-outline"></ion-icon>
                </div>

                <address class="content">
                  419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
                </address>
              </li>

              <li class="footer-nav-item flex">
                <div class="icon-box">
                  <ion-icon name="call-outline"></ion-icon>
                </div>

                <a href="tel:+607936-8058" class="footer-nav-link">
                  (607) 936-8058
                </a>
              </li>

              <li class="footer-nav-item flex">
                <div class="icon-box">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>

                <a href="mailto:example@gmail.com" class="footer-nav-link">
                  example@gmail.com
                </a>
              </li>
            </ul>

            <ul class="footer-nav-list">
              <li class="footer-nav-item">
                <h2 class="nav-title">Follow Us</h2>
              </li>

              <li>
                <ul class="social-link">
                  <li class="footer-nav-item">
                    <a href="/" class="footer-nav-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li class="footer-nav-item">
                    <a href="/" class="footer-nav-link">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li class="footer-nav-item">
                    <a href="/" class="footer-nav-link">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </li>

                  <li class="footer-nav-item">
                    <a href="/" class="footer-nav-link">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">
            <img
              src="assets/payment.png"
              alt="payment method"
              class="payment-img"
            />

            <p class="copyright">
              Copyright &copy; <a href="/">Anon</a> all rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
