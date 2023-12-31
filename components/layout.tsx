import Footer from './footer';
import Header from './header';
import Meta from './meta';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="pt-10 pb-10 max-w-4xl m-auto">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
