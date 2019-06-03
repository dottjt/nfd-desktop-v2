const {
  RedditQuestionBanner,
  ShareButtons,
  // nextPrevious,
  PatreonLink
} = require('../component/componentTemplates');

const Podcast = (article, articles) => {
  return (
    <div>
      <div className="single__wrapper">
        <h1 className="single__title" style="margin-bottom: 1rem;">Podcast <img src="/images/logo.png" className="logo__square" alt=""/></h2>

        <div style="margin-top: 1.4rem;">
          <%= raw @item["podcast_player"] %>
        </div>

        <h3 style="margin-bottom: 2rem;"><%= raw @item["content"] %></h3>
        <div className="podcast__item__bottom">
          <a className="link articles__link" href='<%= @item["podcast_url"] %>'>episode link</a>
        </div>
      </div>

      <div className="single__wrapper">
        <ShareButtons permalink={} />
      </div>

      <PatreonLink/>
      <RedditQuestionBanner/>

      <div style="margin-top: 5rem;"></div>
    </div>
  )
}

export default Podcast;
