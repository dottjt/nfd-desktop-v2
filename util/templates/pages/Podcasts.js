const {
  RedditQuestionBanner,
  ShareButtons,
  // nextPrevious,
  PatreonLink
} = require('../component/componentTemplates');

const Podcasts = (article, articles) => {

  return (
    <div>
      <div className="single__wrapper">
        <h1 className="single__title">NeverFap Deluxe Podcast <img src="/images/logo.png" className="logo__square" alt=""/></h2>

        <div className="single__content">
          <p>The NeverFap Deluxe Podcast is a fornightly podcast about porn addiction recovery. It aims to be informative, silly and somewhat hopelessly chic.</p>
          <p>It's a light-hearted take on what you can do to help yourself overcome porn addiction, as I offer hilariously inappropriate advice based on my own experiences with the fap.</p>
          <p>It's available on iTunes, Castbox and Spotify.</p>
        </div>

        <iframe src="https://castbox.fm/app/castbox/player/id2045024?v=4.1.0&autoplay=0" frameborder="0" width="100%" height="300"></iframe>
      </div>

      <div className="links__mobile__margin">
        <PatreonLink/>
      </div>

      <div className="single__wrapper">
        <h1 style="margin-bottom: 3rem;">Episode List</h1>
        <div className="podcast__item__container">
          <%= Enum.map(@podcasts, fn(podcast) -> %>
            <div className="podcast__item">
              <a href='/podcast/<%= podcast["slug"] %>'><h1 style="margin-bottom: 0;"><%= podcast["title"] %></h1></a>
              <h3 style="margin-bottom: 1rem;"><%= raw podcast["content"] %></h3>
              <div className="podcast__item__bottom">
                <a className="link articles__link" href='<%= podcast["podcast_url"] %>'>episode link</a>
                <!-- <audio controls src='<%= podcast["podcast_url"] %>'>
                  Your browser does not support the <code>audio</code> element.
                </audio>   -->
              </div>
            </div>
          <% end ) %>
        </div>
      </div>
    </div>
  )
}

export default Podcasts;
