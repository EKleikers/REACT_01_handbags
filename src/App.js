import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";
import bag_1 from "./assets/bag_1.png"
import bag_2 from "./assets/bag_2.png"
import bag_3 from "./assets/bag_3.png"
import bag_4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import story from "./assets/our_story.png"

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
            <Button
                title="to the collection"
            />
            <Button
                title="shop all bags"
            />
            <Button
                disabled={true}
                title="pre-orders"
            />
        </nav>
        <main>
            <Product
                image={bag_1}
                title="The handy bag"
                price="€400,-"
            />
            <Product
                image={bag_2}
                title="The stylish bag"
                price="€250,-"
            />
            <Product
                image={bag_3}
                title="The simple bag"
                price="€300,-"
            />
            <Product
                image={bag_4}
                title="The trendy bag"
                price="€150,-"
            />
        </main>
        <footer>
            <Tile
                title="THE BRAND"
            >
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </Tile>
            <Tile
                image={brand}
                alt="the brand"
            />
            <Tile
                image={story}
                alt="our story"
            />
            <Tile
                title="OUR STORY"
            >
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </Tile>
        </footer>
      </>
  );
}

export default App;



