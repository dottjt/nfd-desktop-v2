import React, { Component } from 'react';

const RedditQuestionBanner = () => {
  return (
    <React.Fragment>
      <div style={{ marginBottom: '1rem', marginTop: '1rem', height: '24px', background: rgba(255,46,182,1) }}></div>
      <div style={{ marginBottom: '1rem', marginTop: '1rem', height: '20px', background: rgba(255,46,182,1) }}></div>
      <div style={{ marginBottom: '1rem', marginTop: '1rem', height: '16px', background: rgba(255,46,182,1) }}></div>
      <div style={{ marginBottom: '1rem', marginTop: '1rem', height: '12px', background: rgba(255,46,182,1) }}></div>
      <div style={{ marginBottom: '1rem', marginTop: '1rem', height: '8px', background: rgba(255,46,182,1) }}></div>
      <div style={{ marginBottom: '1rem', marginTop: '1rem', height: '4px', background: rgba(255,46,182,1) }}></div>

      <div style={{ marginTop: '2.5rem', marginBottom: '2.5rem'}}>
        <div className="RedditQuestionBanner" style={{ marginBottom: '0.7rem'}}>
          <h2>Questions?</h2>
          <div className="RedditQuestionBanner__box">
            <p>Head on down to our NeverFap Deluxe subreddit or Discord channel where myself and others can help you with your questions.</p>
          </div>
        </div>

        <div className="account__buttons" style={{ flexDirection: 'row' }}>
          <a style={{ marginRight: '1.5rem'}} className="account__reddit__button__container" href="<%= Application.get_env(:nfd, :social_reddit_url) %>">
            <img className="account__reddit__button__logo" src="/images/reddit__logo.png" />
            <p className="account__reddit__button__text">NEVERFAP <span className="account__reddit__button__text--display">REDDIT</span></p>
          </a>
          <a className="account__discord__button__container" href="<%= Application.get_env(:nfd, :social_discord_url) %>">
            <img className="account__discord__button__logo" src="/images/discord__logo.png" />
            <p className="account__discord__button__text">DISCORD <span className="account__discord__button__text--display">CHANNEL</span></p>
          </a>
        </div>
      </div>

      <div style={{ marginBottom: '1rem', marginTop: '1rem', height: '4px', background: '#00ffee' }}></div>
      <div style={{ marginBottom: '1rem', marginTop: '1rem', height: '8px', background: '#00ffee' }}></div>
      <div style={{ marginBottom: '1rem', marginTop: '1rem', height: '12px', background: '#00ffee' }}></div>
      <div style={{ marginBottom: '1rem', marginTop: '1rem', height: '16px', background: '#00ffee' }}></div>
      <div style={{ marginBottom: '1rem', marginTop: '1rem', height: '20px', background: '#00ffee' }}></div>
      <div style={{ marginBottom: '1rem', marginTop: '1rem', height: '24px', background: '#00ffee' }}></div>
    </React.Fragment>
  )
};

// const nextPrevious = () => {
//   <div className="single__next__prev">
//     <%= if @previousArticle do %>
//       <%= if @previousArticle["title"] do %>
//         <div className="button__wrapper">
//           <a className="button button__black_and_white" href='<%= @previousArticle["permalink"] %>'>Previous Post | <span><%= @previousArticle["title"] %></span></a>
//         </div>
//       <% else %>
//         <div style={{width: '300px'}}></div>
//       <% end %>
//     <% end %>

//     <%= if @nextArticle do %>
//       <%= if @nextArticle["title"] do %>
//         <div className="button__wrapper">
//           <a className="button button__black_and_white" href='<%=@nextArticle["permalink"] %>'>Next Post | <span><%= @nextArticle["title"] %></span></a>
//         </div>
//       <% else %>
//         <div style={{width: '300px'}}></div>
//       <% end %>
//     <% end %>
//     </div>
//     <%= partial "next_prev_buttons.html", %{nextArticle: @nextArticle, previousArticle: @previousArticle } %>
//   </div>
// }


const ShareButtons = () => {

  return (
    <React.Fragment>
      <span style={{color: silver}}>Share on: </span><div id="share-buttons">
      <div className="facebook" title="Share this on Facebook" onClick="window.open('http://www.facebook.com/share.php?u=<%= @permalink %>')}}><svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"/></svg></div>
      <div className="twitter" title="Share this on Twitter" onClick="window.open('http://twitter.com/home?status=<%= @permalink %>')}}><svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"/></svg></div>
      <div className="linkedin" title="Share this on Linkedin" onClick="window.open('https://www.linkedin.com/shareArticle?mini=true&url=<%= @permalink %>&title=&summary=&source=')}}><svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"/></svg></div>
      <div className="gplus" title="Share this on Google Plus" onClick="window.open('https://plus.google.com/share?url=<%= @permalink %>')}}><svg viewBox="0 0 2304 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1437 913q0 208-87 370.5t-248 254-369 91.5q-149 0-285-58t-234-156-156-234-58-285 58-285 156-234 234-156 285-58q286 0 491 192l-199 191q-117-113-292-113-123 0-227.5 62t-165.5 168.5-61 232.5 61 232.5 165.5 168.5 227.5 62q83 0 152.5-23t114.5-57.5 78.5-78.5 49-83 21.5-74h-416v-252h692q12 63 12 122zm867-122v210h-209v209h-210v-209h-209v-210h209v-209h210v209h209z"/></svg></div>
      <div className="mail" title="Share this through Email" onClick="window.open('mailto:?&body=<%= @permalink %>')}}><svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"/></svg></div>
      </div>
    </React.Fragment>
  );
}


const PatreonLink = () => {
  return (
    <div className="account__info">
      <p className="account__info__title">Check out my Patreon for updates on NeverFap Deluxe!</p>
      <div className="account__buttons">

        <a className="account__patreon__button__container" href="https://patreon.com/NeverFapDeluxe">
          <img className="account__patreon__button__logo" src="/images/patreon__logo.jpg" />
          <p className="account__patreon__button__text"><span className="account__patreon__button__text--display">BECOME A </span>PATRON</p>
        </a>
      </div>
    </div>
  );
}


module.exports = {
  RedditQuestionBanner,
  ShareButtons,
  // nextPrevious,
  PatreonLink,
}