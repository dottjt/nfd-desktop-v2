const {
  RedditQuestionBanner,
  ShareButtons,
  // nextPrevious,
  PatreonLink
} = require('../component/componentTemplates');

const Article = ({ article, articles }) => {
  return (
    <div>
      <div className='single__wrapper practices__wrapper'>
        <h1 className='single__title'>{article.title} <img src='/images/logo.png' className='logo__square' alt=''/></h1>

        <div className='homepage__process single__homepage__process'>
          <span><h3 className='homepage__process__title'>
            tldr;
          </h3></span>

          {article.tldr1 && <p className='homepage__process__text homepage__process__text--practice'>{article.tldr1}</p>}
          {article.tldr2 && <p className='homepage__process__text homepage__process__text--practice'>{article.tldr2}</p>}
          {article.tldr3 && <p className='homepage__process__text homepage__process__text--practice'>{article.tldr3}</p>}
          {article.tldr4 && <p className='homepage__process__text homepage__process__text--practice'>{article.tldr4}</p>}
          {article.tldr5 && <p className='homepage__process__text homepage__process__text--practice'>{article.tldr5}</p>}
        </div>
        <span><span className='homepage__process__link'>{article.date}</span></span>
      </div>

      <PatreonLink/>

      <div className='single__wrapper'>
        <div className='single__content'>
          {article.content}
        </div>
        <ShareButtons/>
      </div>

      <RedditQuestionBanner/>

      {/*
      <div className='single__wrapper'>
        <div className='single__content'>

          <h2 style={{ marginBottom: '1.9rem' }}>Latest Posts</h2>
          {latest_posts(articles)}

          <div className='button__wrapper'>
            <a
              className='button'
              href='/articles'
              >Want More Articles?</a
            >
          </div>
        </div>
      </div>
      */}
      <div style={{marginTop: 5rem}}></div>
    </div>
  )
}


exports.default articlesTemplate;
