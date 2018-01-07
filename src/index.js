import React from "react";
import { render } from "react-dom";
import { injectGlobal } from "styled-components";
import axios from "axios";

import Product from "./Product";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
  * {
    font-family: Roboto, Helvetica, system-ui, Tahoma;
    outline: none;
  }
  body {
    padding: 30px;
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentWillMount() {
    axios
      .get("https://5a523e6850dffb001256e0bf.mockapi.io/products")
      .then(({ data }) => {
        this.setState({
          products: data
        });
      });
  }

  render() {
    return (
      <div className="products">
        {this.state.products.map((product, i) => (
          <Product
            key={i}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
