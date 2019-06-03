const {
  RedditQuestionBanner,
  ShareButtons,
  // nextPrevious,
  PatreonLink
} = require('../component/componentTemplates');

const Meditations = (article, articles) => {
  return (
    <div>
      <div className="single__wrapper">
        <h1 className="single__title">Guided Meditations <img src="/images/logo.png" className="logo__square" alt="" style="margin-right: 1rem;"/> <a href="/everything" className="link contact__form__title-thing"><p style="display: inline-block;">#need a link to all the website content, instead?</p></a></h2>

        <div className="single__content">
          <p>Here are a complete list of all of the guided meditations here on my amazingly useful website, NeverFap Deluxe!</p>
          <p>I produce them on a weekly basis and they can be downloaded as a podcast on iTunes, Castbox and Spotify. They are also avaliable on <a className="link" href="https://soundcloud.com/neverfapdeluxe">SoundCloud</a>.</p>
          <p>Before diving into these guided meditations however, it's best that you first read about what meditation actually is as a practice, as well as how it can benefit you. Article: <a href="/articles/the-importance-of-meditation-for-porn-addiction/"className="link">The Importance Of Meditation For Porn Addiction</a></p>
          <p>In addition, please read <a className="link" href="/practices/observe-your-senses">Observe Your Senses</a> in order to gain a better understanding of how to actually practice meditation.</p>

          <iframe src="https://castbox.fm/app/castbox/player/id2113294?v=4.1.190428&autoplay=0" frameborder="0" width="100%" height="300"></iframe>
        </div>
      </div>

      <%= partial "links/patreon.html", assigns %>

      <div className="single__wrapper">
        <h1 style="margin-bottom: 3rem;">Guided Meditation List</h1>
        <div className="podcast__item__container">
          <%= Enum.map(@meditations, fn(meditation) -> %>
            <div className="podcast__item">
              <a href='/meditation/<%= meditation["slug"] %>'><h1 style="margin-bottom: 0;"><%= meditation["title"] %></h1></a>
              <h3 style="margin-bottom: 1rem;"><%= raw meditation["content"] %></h3>
              <div className="podcast__item__bottom">
                <a className="link articles__link" href='<%= meditation["podcast_url"] %>'>episode link</a>
                <!-- <audio controls src='<%= meditation["podcast_url"] %>'>
                  Your browser does not support the <code>audio</code> element.
                </audio>   -->
              </div>
            </div>
          <% end ) %>
        </div>
      </div>

      <script src='<%= Routes.static_path(@conn, "/js/articles.js") %>'></script>
    </div>
  )
}

export default Meditations;
