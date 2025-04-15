export const pages = {
    home: `
      <div class="content">
        <div class="home">
          <div class="hero-image">
            <h1>Page Turner</h1>
            <p>Explore our book reviews and recommendations!</p>
          </div>
          <div class="text">
            <h2>Welcome to Page Turner</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit unde tempora</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad perferendis reprehenderit</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
          </div>
          <div class="images">
            <div class="book1">
              <img src="images/book1.jpeg" alt="Book 1" />
              <h3>Fiction</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
            </div>
            <div class="book2">
              <img src="images/book2.jpeg" alt="Book 2" />
              <h3>Non-Fiction</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
            </div>
            <div class="book3">
              <img src="images/book3.jpeg" alt="Book 3" />
              <h3>Mystery</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
            </div>
          </div>
        </div>
      </div>
    `,
  
    about: `
      <section>
        <div class="about-container">
          <h1>About Us</h1>
          ${[1, 2, 3].map(i => `
            <div class="about">
              <div class="pic">
                <img src="images/about${i}.jpeg" alt="About Us" />
              </div>
              <div class="text">
                <h2>${["Janet Smith", "Mary William", "Michael Tinkipar"][i-1]}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore molestias totam sint, est ipsam voluptatibus repudiandae maiores. Saepe, quidem doloribus nulla eligendi eaque vitae ipsam maiores sequi nemo soluta dolore.</p>
              </div>
            </div>`).join('')}
        </div>
      </section>
    `,
  
    review: `
      <section>
        <div class="review-container">
          <h1>Reviews</h1>
          ${[
            ["review1.jpg", "The Midnight Library", "Matt Haig"],
            ["review2.jpg", "The Silent Patient", "Alex Michaelides"],
            ["review3.jpg", "It Ends With Us", "Colleen Hoover"],
            ["review4.jpg", "The Seven Husbands of Evelyn Hugo", "Taylor Jenkins Reid"]
          ].map(([img, title, author]) => `
            <div class="review">
              <div class="pic">
                <img src="images/${img}" alt="Review" />
              </div>
              <div class="text">
                <h2>${title}</h2>
                <h5>${author}</h5>
                <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                          molestias totam sint, est ipsam voluptatibus repudiandae maiores.
                          Saepe, quidem doloribus nulla eligendi eaque vitae ipsam maiores
                          sequi nemo soluta dolore.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita facilis, ex repellat obcaecati voluptas voluptates libero dignissimos magni officiis quibusdam exercitationem tempore inventore, et dolorum dolorem beatae aut modi soluta.</p>
              </div>
            </div>`).join('')}
        </div>
      </section>
    `,
  
    bestseller: `
      <section>
        <div class="best-container">
          <h1>Bestseller</h1>
          ${[
            ["best1.jpg", "Forth Wing", "Rebecca Yarros"],
            ["best2.jpg", "Atomic Habits", "James Clear"],
            ["best3.jpg", "The House of Eve", "Matt Haig"],
            ["best4.jpg", "Spare", "Prince Harry"]
          ].map(([img, title, author]) => `
            <div class="best">
              <div class="pic">
                <img src="images/${img}" alt="Bestseller" />
              </div>
              <div class="text">
                <h2>${title}</h2>
                <h5>${author}</h5>
                <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                          molestias totam sint, est ipsam voluptatibus repudiandae maiores.
                          Saepe, quidem doloribus nulla eligendi eaque vitae ipsam maiores
                          sequi nemo soluta dolore.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita facilis, ex repellat obcaecati voluptas voluptates libero dignissimos magni officiis quibusdam exercitationem tempore inventore, et dolorum dolorem beatae aut modi soluta.</p>
              </div>
            </div>`).join('')}
        </div>
      </section>
    `
  };
  