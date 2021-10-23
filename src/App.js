import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import queryString from "query-string";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./components/Main/Product";
import HomePage from "./components/Main/HomePage";
import Login from "./components/Login/Login";
import Cart from "./components/Main/Cart";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [listCart, setListCart] = useState(
    JSON.parse(localStorage.getItem("listCart")) || []
  );
  const [query, setQuery] = useState({
    name: "all",
    price: "all",
    search: "",
    city: "all",
    district: "all",
  });
  const [mapList] = useState([
    {
      id: 1,
      address: "Phúc Long Lê Văn Sỹ - 350 Lê Văn Sỹ, quận 3, Hồ Chí Minh",
    },
    {
      id: 2,
      address:
        "Phúc Long 188 Trần Hưng Đạo - 188 Trần Hưng Đạo, quận 5, Hồ Chí Minh",
    },
    {
      id: 3,
      address:
        "Phúc Long Kiosk Nguyễn Thị Lưu - 338-340 Nguyễn Thị Lưu, phường Ngô Quyền, thành phố Bắc Giang, Bắc Giang",
    },
    {
      id: 4,
      address:
        "Phúc Long Trần Phú Nha Trang - 78-80 Trần Phú, phường Lộc Thọ, thành phố Nha Trang, Khánh Hòa",
    },
  ]);
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 8,
  });
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    async function getJsonAPI() {
      const param = queryString.stringify(filter);
      const getAPI = `https://js-api-phuclong.herokuapp.com/product?${param}`;
      const response = await fetch(getAPI);
      const product = await response.json();
      setProductList(product);
    }
    getJsonAPI();
  }, [filter]);

  const HandleNewPage = (newPage) => {
    console.log(newPage);
    setFilter({
      ...filter,
      _page: newPage,
    });
  };

  const HandleChangeName = (e) => {
    setQuery({
      ...query,
      name: e.target.value,
    });
  };

  const HandleChangeSearch = (e) => {
    setQuery({
      ...query,
      search: e.target.value,
    });
  };

  const HandleChangePrice = (e) => {
    setQuery({
      ...query,
      price: e.target.value,
    });
  };

  const HandleChangCity = (e) => {
    setQuery({
      ...query,
      city: e.target.value,
    });
  };

  const HandleChangDistrict = (e) => {
    setQuery({
      ...query,
      district: e.target.value,
    });
    console.log(query.district);
  };

  const filterCity = mapList
    .filter((item) => {
      if (query.city === "all") {
        return true;
      } else {
        if (item.address.toLowerCase().includes(query.city.toLowerCase())) {
          return true;
        }
        return false;
      }
    })
    .filter((item) => {
      if (query.district === "all") {
        return true;
      } else {
        if (item.address.toLowerCase().includes(query.district.toLowerCase())) {
          return true;
        }
        return false;
      }
    });

  const filterSort = productList
    .filter((item) => {
      if (query.name === "all") {
        return true;
      } else {
        if (item.name.toLowerCase().includes(query.name.toLowerCase())) {
          return true;
        }
        return false;
      }
    })
    .filter((item) => {
      return item.name.toLowerCase().includes(query.search.toLowerCase());
    })
    .sort((a, b) => {
      if (query.price === "all") {
        return true;
      } else {
        if (query.price === "1") {
          return a.price - b.price;
        }
        return b.price - a.price;
      }
    });

  const clickProduct = (id) => {
    const findIDProduct = listCart.find((item) => item.id === id);
    if (findIDProduct) {
      const newItemProduct = listCart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setListCart(newItemProduct);
    } else {
      const addCart = productList.find((item) => item.id === id);
      const newCart = [...listCart, addCart];
      setListCart(newCart);
    }
  };

  const clickRemoveProduct = (id) => {
    const removeItem = listCart.filter((item) => item.id !== id);
    setListCart(removeItem);
  };

  const getTotalListCart = () => {
    let sum = 0;
    for (let i = 0; i < listCart.length; i++) {
      sum += listCart[i].price * listCart[i].quantity;
    }
    return sum;
  };

  const totalQuantity = () => {
    let total = 0;
    listCart.forEach((e) => {
      total += e.quantity;
    });
    return total;
  };

  const handleChangeQuantityIn = (id) => {
    let newList = listCart.map((item) => {
      if (item.id === id && item.quantity < 5) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setListCart(newList);
  };

  const handleChangeQuantityDe = (id) => {
    let newList = listCart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setListCart(newList);
  };

  useEffect(() => {
    localStorage.setItem("listCart", JSON.stringify(listCart));
  }, [listCart]);

  useEffect(() => {
    const ScrollTop = () => {
      // if (window.pageYOffset > 100) {
      //   setScroll(true);
      // } else {
      //   setScroll(false);
      // }
      setScroll(window.pageYOffset > 100)
    };
    window.addEventListener("scroll", ScrollTop);
  }, []);

  const clickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <Router>
      <div className="Wrapper">
        <Header
          listCart={listCart}
          getTotalListCart={getTotalListCart}
          clickRemoveProduct={clickRemoveProduct}
          totalQuantity={totalQuantity}
        />
        <Switch>
          <Route exact path="/">
            <HomePage
              onChangCity={HandleChangCity}
              onChangDistrict={HandleChangDistrict}
              mapList={filterCity}
            />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/product">
            <Product
              productList={filterSort}
              onChangeName={HandleChangeName}
              onSortPrice={HandleChangePrice}
              onChangeSearch={HandleChangeSearch}
              clickProduct={clickProduct}
              totalQuantity={totalQuantity}
              getTotalListCart={getTotalListCart}
              filter={filter}
              onPageChange={HandleNewPage}
            />
          </Route>
          <Route path="/cart">
            <Cart
              listCart={listCart}
              getTotalListCart={getTotalListCart}
              onChangeQuantityIn={handleChangeQuantityIn}
              onChangeQuantityDe={handleChangeQuantityDe}
              clickRemoveProduct={clickRemoveProduct}
            />
          </Route>
        </Switch>
        <Footer />
        {scroll && (
          <div className="scrollTop" onClick={clickToTop}>
            <i className="fas fa-arrow-up"></i>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
