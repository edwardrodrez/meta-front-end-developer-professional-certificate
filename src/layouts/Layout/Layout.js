import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";


const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;