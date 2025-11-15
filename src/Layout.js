import "./assets/css/main.css";
import anhlogo from "./assets/images//wp1.jpg";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Layout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <html>
      <header>
        <div id="divheader" class="header1">
          <div id="banner" class="banner1">
            <div id="topleft">
              <ul class="ul1">
                <li>
                  <a href="/#">HOME</a>
                </li>
                <li>
                  <a href="/trang1">PRODUCTS</a>
                </li>
                <li>
                  <a href="/admin/products">SIGN IN</a>
                </li>
              </ul>
            </div>
            <div id="logo" class="logo1">
              <img src={anhlogo} width="548" />
            </div>
            <div id="divtimkiem" style={{ width: "300px" }}>
             
            </div>
          </div>
          <div id="menubar" className="menubar">
            <div className="menubar-left">
              <a href="/menu1" className="menu-item">
               
              </a>
              <a href="/menu2" className="menu-item">
                
              </a>
              <a href="/menu3" className="menu-item">
                
              </a>
            </div>

            <div className="menubar-right">
              {user ? (
                <>
                  <span className="username">👤 {user.username}</span>
                  <button className="logout-btn" onClick={handleLogout}>
                    Đăng xuất
                  </button>
                </>
              ) : (
                <a href="/login" className="login-link">
                  Đăng nhập
                </a>
              )}
            </div>
          </div>
        </div>
      </header>
      <body>
        <div id="container" class="container">
          <Outlet />
        </div>
      </body>
      <footer></footer>
    </html>
  );
};

export default Layout;
