import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../constants/routes';

class Header extends Component<Props> {
  this.state = {
    selectedTab: 'hello'
  }

  render() {
    return (
      <nav className="header">
        {/* <!-- <%#=/*  <a href="/" className="header__logo__wrapper">
          <h1 className="header__logo">NeverFap <span className="deluxe__font">Deluxe</span> <i className="em em-rainbow"></i></h1>
        </a>  %> --> */}
        <ul className="header__links">
          {/* <!-- HOME --> */}
          <Link id="link__home" className="header__link__wrapper" to="/">
            <li className="header__link">Home</li>
          </Link>
          <div className="header__sub header__banner__home">
            <div className="header__module" style={{ cursor: initial; }}>
              <div style={{ display: flex; align-items: flex-start; justify-content: space-between}}>
                <h3 className="h3__yus h3__header" style={{marginBottom: 1.1rem}}>NeverFap <span className="deluxe__font--only">Deluxe</span></h3>
                <h3 className="h3__reade h3__header">The Reade &copy;</h3>
              </div>
              <h2>The King Of Porn Addiction Recovery. <i className="em em-crown"></i></h2>
            </div>
            <div className="header__module" style={{cursor: initial}}>
              <p>NeverFap Deluxe is a porn addiction recovery process which focuses on the use of meditation and awareness in order to develop control over our minds.</p>
            </div>
          </div>

          {/* // <!-- Guide --> */}
          <Link id="link__guide" className="header__link__wrapper header__link__wrapper--main" to="/guide">
            <li className="header__link">Guide</li>
          </Link>
          <div className="header__sub header__banner__guide">
            <Link to="/guide" className="header__module header__module--flex">
              <h3 className="h3__yus">
                NeverFap Deluxe Guide
                <span className="h3__tiny">/guide</span>
              </h3>
            </Link>
            <Link to="/summary" className="header__module header__module--flex">
              <h3 className="h3__yus">
                NeverFap Deluxe Summary
                <span className="h3__tiny">/summary</span>
              </h3>
            </Link>
            <Link to="/seven-day-neverfap-deluxe-kickstarter/" className="header__module header__module--flex">
              <h3 className="h3__yus">
                7 Day NeverFap Deluxe Kickstarter
                <span className="h3__tiny">/seven-day-neverfap-deluxe-kickstarter</span>
              </h3>
            </Link>
          </div>


          {/* <!-- Articles --> */}
          <Link id="link__articles" className="header__link__wrapper" to="/articles">
            <li id='articles__click' className="header__link">Articles</li>
          </Link>

          {/* <!-- @conn.assigns.item --> */}
          <div className="header__sub header__banner__articles">
            <Link to="/articles" className="header__module header__module--flex">
              <h3 className="h3__yus">
                NeverFap Deluxe Articles
                <span className="h3__tiny">/articles</span>
              </h3>
            </Link>
            <Link to="/quotes" className="header__module header__module--flex">
              <h3 className="h3__yus">
                NeverFap Deluxe Quotes
                <span className="h3__tiny">/quotes</span>
              </h3>
            </Link>
          </div>


          {/* <!-- Practices --> */}
          <Link id="link__practices" className="header__link__wrapper header__link__wrapper--main" to="/practices">
            <li className="header__link">Practices</li>
          </Link>
          <div className="header__sub header__banner__practices">
            <Link to="/practices" className="header__module">
              <h3 className="h3__yus">
                NeverFap Deluxe Practices
                <span className="h3__tiny">/practices</span>
              </h3>
            </Link>
            <Link to="/meditation" className="header__module">
              <h3 className="h3__yus">
                NeverFap Deluxe Guided Meditations
                <span className="h3__tiny">/meditation</span>
              </h3>
            </Link>
          </div>

          {/* <!-- PODCAST --> */}
          <Link id="link__podcast" className="header__link__wrapper header__link__wrapper--disappear" to="/podcast">
            <li className="header__link">Podcast</li>
          </Link>
          <div className="header__sub header__banner__podcast">
            <a href="/podcast" className="header__module">
              <h3 className="h3__yus">
                NeverFap Deluxe Podcast
                <span className="h3__tiny">/podcast</span>
              </h3>
            </a>

            <div className="header__module" style={{cursor: initial}}>
              <p>Available on iTunes, Spotify and Castbox.</p>
            </div>
          </div>

          // <!-- COMMUNITY -->
          <a id="link__community" className="header__link__wrapper header__link__wrapper--disappear" href="/community">
            <li className="header__link">Community</li>
          </a>
          <div className="header__sub header__banner__community">
            <div className="header__module" style={{cursor: initial}}>
              <a className="header__discord__button" href="<%= Application.get_env(:nfd, :social_discord_url) %>"><img className="header__discord__button__logo" src="/images/discord__logo.png"/></a>
              <a className="header__discord__button" href="<%= Application.get_env(:nfd, :social_reddit_url) %>"><img className="header__reddit__button__logo" src="/images/reddit__logo.png" /></a>
              <a className="header__discord__button" href="<%= Application.get_env(:nfd, :social_instagram_url) %>"><img className="header__instagram__button__logo" src="/images/instagram__logo.png"/></a>
              <a className="header__discord__button" href="<%= Application.get_env(:nfd, :social_facebook_url) %>"><img className="header__facebook__button__logo" src="/images/facebook__logo.png"/></a>
              <a className="header__discord__button" href="<%= Application.get_env(:nfd, :social_twitter_url) %>"><img className="header__twitter__button__logo" src="/images/twitter__logo__blue.png" /></a>
              <a className="header__discord__button" href="<%= Application.get_env(:nfd, :social_patreon_url) %>"><img className="header__patreon__button__logo" src="/images/patreon__logo.jpg" /></a>
            </div>

            <a href="/accountability-program" className="header__module">
              <h3 className="h3__yus">
                #accountability program
                <span className="h3__tiny">/accountability-program</span>
              </h3>
            </a>
            <a href="/new-neverfapper-reddit-guidelines" className="header__module">
              <h3 className="h3__yus">
                r/NeverFapDeluxe
                <span className="h3__tiny">/new-neverfapper-reddit-guidelines</span>
              </h3>
            </a>
          </div>


          {/* <!-- ABOUT --> */}
          <a id="link__about" className="header__link__wrapper header__link__wrapper--disappear" href="/about">
            <li className="header__link">About</li>
          </a>
          <div className="header__sub header__banner__about">
            <a href="/about" className="header__module">
              <h3 className="h3__yus">
                About NeverFap Deluxe
                <span className="h3__tiny">/about</span>
              </h3>
            </a>
            <a href="/contact" className="header__module">
              <h3 className="h3__yus">
                Contact Daddy Reade
                <span className="h3__tiny">/contact</span>
              </h3>
            </a>
          </div>
        </ul>

        {/* <!-- "mobile_menu_overlay.html" --> */}
      </nav>
    );
  }

  // <script src='<%= Routes.static_path(@conn, "/js/header.js") %>'></script>
};

export default Header;