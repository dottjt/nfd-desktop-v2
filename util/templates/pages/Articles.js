const {
  RedditQuestionBanner,
  ShareButtons,
  // nextPrevious,
  PatreonLink
} = require('../component/componentTemplates');

const Articles = ({ article, articles }) => {
  return (
    <div>
      <div className="single__wrapper">

        <h1 className="single__title">Articles <img src="/images/logo.png" className="logo__square" alt="" style={{ marginRight: '1rem' }} /> <a href="/everything" className="link contact__form__title-thing"><p style="display: inline-block;">#need a link to all the website content, instead?</p></a></h2>

        <div className="single__content">
          <p>Here are a complete list of all of the contextual articles here on my amazingly useful website, NeverFap Deluxe!</p>
          <p>If instead if you're looking for a more structured approach towards addressing your porn addiction, then I recommend checking out our <a className="link" href="/courses">NeverFap Deluxe Courses</a> section!</p>
          <p>If however you were interested in browsing the complete list of mental health practices here on NeverFap Deluxe, please check out the suitably-named <a className="link" href="/practices">NeverFap Deluxe Practices</a> page.</p>
          <p>You may sort articles by latest or category.</p>
        </div>
      </div>

      <PatreonLink/>

      <div className="single__wrapper">
        <h3 className="popular__latest__options__title">Articles</h3>
        <div className="popular__latest__options">
          <h3 className="button__click button__on popular__latest__options--guide" id="articles_latest_plain_click">Latest (plain text)</h3>
          <h3 className="button__click button__off popular__latest__options--guide" id="articles_latest_click">Latest</h3>
          <h3 className="button__click button__off popular__latest__options--guide" id="articles_category_click">Category</h3>
        </div>

        <div className="posts__off posts--guide" id="articles_latest_posts">
          <%= partial "list/articles_latest.html", %{ items: @articles, tag_type: "context" } %>
        </div>

        <div className="posts__on posts--guide" id="articles_latest_plain_posts">
          <%= partial "list/articles_latest_plain_text.html", %{ items: @articles, tag_type: "context" } %>
        </div>

        <div className="posts__off posts--guide" id="articles_category_posts">
          <%= partial "list/articles_category.html", %{ items: @articles, tag_type: "context" } %>
        </div>
      </div>
      <%= partial "links/loginregister_top--without-mobile.html", assigns %>


      <script src='<%= Routes.static_path(@conn, "/js/articles.js") %>'></script>
    </div>
  )
}

export default Articles;
