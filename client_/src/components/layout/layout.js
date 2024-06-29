import React from "react";
import Footer from "./footer";
import Header from "./header";
import {Helmet} from "react-helmet";
import {Toaster} from "react-hot-toast";
  import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
             <div>
              <meta name="description" content={description} />
              <meta name="keywords" content={keywords} />
              <meta name="author" content={author} />
            </div>

                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}> <Toaster/>{children} </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Techinfoyt",
};


export default Layout;