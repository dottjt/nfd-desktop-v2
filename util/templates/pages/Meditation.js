const {
  RedditQuestionBanner,
  ShareButtons,
  // nextPrevious,
  PatreonLink
} = require('../component/componentTemplates');

const Meditation = (article, articles) => {
  return (
    <div>
      <div className="single__wrapper practices__wrapper">
        <h1 className="single__title"><%= @item["title"] %> <img src="/images/logo.png" className="logo__square" alt=""/></h1>
        <div style="margin-top: 1.4rem;">
          <%= raw @item["podcast_player"] %>
        </div>

        <h3 style="margin-bottom: 2rem;"><%= raw @item["content"] %></h3>
        <div className="podcast__item__bottom">
          <a className="link articles__link" href='<%= @item["podcast_url"] %>'>episode link</a>
        </div>
      </div>

      <div className="single__wrapper">
        <%= partial "share_buttons.html", %{permalink: @item["permalink"] } %>
        <%= partial "next_prev_buttons.html", %{nextArticle: @nextArticle, previousArticle: @previousArticle } %>
      </div>


      <%= partial "links/patreon.html", assigns %>

      <%= partial "reddit_question_banner.html", assigns %>

      <div style="margin-top: 5rem;"></div>
      <%= partial "links/loginregister.html", assigns %>
    </div>
  )
}

export default Meditation;
