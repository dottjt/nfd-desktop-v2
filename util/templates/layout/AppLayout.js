const Head = './Head';
const Header = './Header';
const Footer = './Footer';

const AppLayout = (content) => {
  return (
    <div>
      <Head/>
      <div>
        <div id="mobile__menu__overlay__background__id" className="mobile__menu__overlay__background"></div>
        <Header/>
        <main role="main" className="main" id="content">
          ${content}
        </main>
        <Footer/>
      </div>
    </div>
  )
};

export default AppLayout;
