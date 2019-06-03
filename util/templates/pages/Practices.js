const {
  RedditQuestionBanner,
  ShareButtons,
  // nextPrevious,
  PatreonLink
} = require('../component/componentTemplates');

const Practices = (practice, practices) => {

  return (
    <div>
      <div className="single__wrapper">

        <h1 className="single__title">Practices <img src="/images/logo.png" className="logo__square" alt=""/><a href="/everything" className="link contact__form__title-thing"><p style="display: inline-block;">#need a link to all the website content, instead?</p></a></h2>

        <div className="single__content">
          <p>A complete list of all of the mental health practices here on NeverFap Deluxe. Yipee!</p>
          <p>If instead if you're looking for a more structured approach towards addressing your porn addiction, then I recommend checking out our <a href="/courses" className="link" >NeverFap Deluxe Courses</a> section!</p>
          <p>If however you were searching for a complete list of all our contextual articles on the website, please check out the impeccably arranged <a className="link"  href="/articles">NeverFap Deluxe Articles</a> page.</p>
          <p>You may sort practices by latest or category.</p>
        </div>
      </div>

      <%= partial "links/patreon.html", assigns %>

      <div className="single__wrapper">
        <h3 className="popular__latest__options__title">Practices</h3>
        <div className="popular__latest__options">
          <h3 className="button__click button__on popular__latest__options--guide" id="practices_latest_plain_click">Latest (plain text)</h3>
          <h3 className="button__click button__off popular__latest__options--guide" id="practices_latest_click">Latest</h3>
          <h3 className="button__click button__off popular__latest__options--guide" id="practices_category_click">Category</h3>
        </div>

        <div className="posts__off posts--guide" id="practices_latest_posts">
          <%= partial "list/articles_latest.html", %{ items: @practices, tag_type: "practice" } %>
        </div>

        <div className="posts__on posts--guide" id="practices_latest_plain_posts">
          <%= partial "list/articles_latest_plain_text.html", %{ items: @practices, tag_type: "practice" } %>
        </div>

        <div className="posts__off posts--guide" id="practices_category_posts">
          <%= partial "list/articles_category.html", %{ items: @practices, tag_type: "practice" } %>
        </div>
      </div>

      <%= partial "links/loginregister_top--without-mobile.html", assigns %>

      <script src='<%= Routes.static_path(@conn, "/js/practices.js") %>'></script>
    </div>
  )
}

export default Practices;
