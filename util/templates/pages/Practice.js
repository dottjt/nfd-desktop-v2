const {
  RedditQuestionBanner,
  ShareButtons,
  // nextPrevious,
  PatreonLink
} = require('../component/componentTemplates');

const Practices = (practice, practices) => {

  return (
    <div>
      <div className="single__wrapper practices__wrapper">
        <h1 className="single__title">{practice.title} <img src="/images/logo.png" className="logo__square" alt=""/></h1>

        <div className="homepage__process single__homepage__process">
          <div className="homepage__process__title__container">
            <span><h3 className="homepage__process__title">tldr;</h3></span>
            <span><h3 className="homepage__process__subtitle">{practice.category}</h3></span>
          </div>

          {practice.what && <div className="homepage__process__text homepage__process__text--practice"><b>What</b><p>{practice.what}</p></div>}
          {practice.how && <div className="homepage__process__text homepage__process__text--practice"><b>How</b><p>{practice.how}</p></div>}
          {practice.when && <div className="homepage__process__text homepage__process__text--practice"><b>When</b><p>{practice.when}</p></div>}
          {practice.duration && <div className="homepage__process__text homepage__process__text--practice"><b>Duration</b><p>{practice.duration}</p></div>}

        </div>
        <span><span className="homepage__process__link">{practice.date}</span></span>
      </div>

      <PatreonLink/>

      <div className="single__wrapper">
        <div className="single__content">
          {practice.content}

          {/* partial "similar_practices.html", %{ practices: @practices, category: {
            practice.categories
          } } */}
        </div>
        <ShareButtons/>
      </div>

      <RedditQuestionBanner/>

      {/* <div className="single__wrapper">
        <div className="single__content">
          <h2 style={{marginBottom: 1.9rem}}>Latest Posts</h2>
          {latest_posts(practices)}

          <div className="button__wrapper">
            <a
              className="button"
              href="/practices"
              >Want More Practices?</a
            >
          </div>
        </div>
      </div> */}

      <div style={{marginTop: 5rem}}></div>
    </div>
  )
}
`;

module.exports = practicesTemplate;
