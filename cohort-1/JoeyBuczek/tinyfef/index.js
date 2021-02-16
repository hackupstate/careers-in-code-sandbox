// When you have properly created the TinyFEF createElement and render methods,
// the below code should produce elements in the browser window.

function renderApp(){
  var homepageData = [
    {
      adj: "Simple",
      desc: "We like to keep everything we do simple, including our front-end solutions. You can take comfort in knowing that by using tinyFEF, you're not complicating the rest of your code base."
    },
    {
      adj: "Declarative",
      desc: "Tell tinyFEF what you want to display, and it'll make it happen. There's no need to directly manipulate the DOM step-by-step when we can take care of that for you."
    },
    {
      adj: "Tiny",
      desc: "It's in our name! No need to worry about code bloat, we've kept everything to the minimum. You can be confident that your users won't have to wait forever for your content to download."
    }
  ];
  var el = tinyfef.createElement;
  var app = el('div', { style: "padding-top:30px;" },
      el('div', { style: "display:flex;justify-content:center;" },
        el('img', { src: "tinyfef_lg.png" })
      ),
      el('div', { style: "text-align:center;margin-bottom:40px;" },
          el('h2', {}, 'A tiny front-end framework for displaying user interfaces.'),
          el('button', {
            style: "width:100px;height:40px;background-color:ghostwhite;border:2px solid steelblue;font-size:14px;",
            onclick: function(){ alert('You just got started!') }
          }, 'Get started!')
      ),
      el('div', { style: "display:flex;justify-content:space-between;padding:40px;background-color:ghostwhite;margin-bottom:20px;" },
        homepageData.map(function(data){
          return el('div', { style: "max-width:300px;min-width:100px;margin:0px 10px;" },
              el('h3', {}, data.adj),
              el('p', { style: "text-align:justify;" }, data.desc)
          );
        })
      ),
      el('div', { style: "display:flex;justify-content:center;" },
        el('form', { 
          onsubmit: function(){
            var email = document.querySelector('#email').value;
            if (email) alert('Subscribed with ' + email);
            return false; 
          }
        },
            el('input', { id: 'email', style: "margin-right:5px;" }),
            el('input', { type: 'submit', value: 'Subscribe' })
        )
      )
  );
  tinyfef.render(app, 'app');
}
typeof tinyfef === 'object' ? renderApp() : console.log('Not yet implemented');