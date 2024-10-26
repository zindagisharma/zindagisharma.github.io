function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/
    React.createElement(SocialLinks, null))));

};

/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "Zindagi", /*#__PURE__*/
    React.createElement("strong", null, "")), /*#__PURE__*/
    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/
    React.createElement("span", null))))));

};

/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "I do"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "data analytics"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "&"), " code.")), /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "get in touch")))));

};

/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Who's this girl?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/
    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "My name is Zindagi."), /*#__PURE__*/
    React.createElement("p", null, "       I am a web developer and data analyst based in the beautiful City of Sydney."), /*#__PURE__*/
    React.createElement("p", null, "I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more, the better. I also love cooking, a hobby I'm taking along since I've been living all by myself since age 17.")), /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "What does she do?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/
    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "I'm a programmer."), /*#__PURE__*/
    React.createElement("p", null, "For the front-end, I typically work with JavaScript, either on its own or alongside popular frameworks like ReactJS and VueJS. I enhance the visual appeal by using Sass and CSS, and whenever necessary, I incorporate libraries such as Bootstrap, Bulma and others. On the back-end, I also utilize JavaScript (NodeJS, Express, MongoDB,etc.). However, when a project calls for PHP, I'm equally proficient in it, working with tools like WordPress, Laravel, and more. ")), /*#__PURE__*/
    
    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Also a data analyst."), /*#__PURE__*/
    React.createElement("p", null, "I'm proficient with a wide range of tools in data analytics like Excel, SQL, Python, Knimw and Tableau are essential parts of my toolkit, and I enjoy leveraging them for data-driven insights. However, I'm not limited to these - tools such as Power Bi and Knime and even open-source platform like Jupyter Notebook and Google Data Studio are also valuable assets that I work with comfortably."))))));

} 

/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Want to ", /*#__PURE__*/
    React.createElement("br", null), "contact me?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '', /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "zindagisharma65", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-at at" }), "gmail", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")), /*#__PURE__*/
    React.createElement(SocialLinks, null)), /*#__PURE__*/
    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));

};

/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Zindagi"), /*#__PURE__*/
    React.createElement(SocialLinks, null))));

};

/***********************
  Social Links Component
 ***********************/

  const SocialLinks = props => {
    return /*#__PURE__*/(
      React.createElement("div", { className: "social" }, 
      // LinkedIn
      React.createElement("a", {
        href: "https://www.linkedin.com/in/zindagisharma",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's LinkedIn profile"
      }, ' ', React.createElement("i", { className: "fab fa-linkedin" })),
      
      // Facebook
      React.createElement("a", {
        href: "https://www.facebook.com/profile.php?id=100095437931056",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's Facebook profile"
      }, ' ', React.createElement("i", { className: "fab fa-facebook" })),
  
      // Instagram
      React.createElement("a", {
        href: "https://www.instagram.com/ziindagiiiiiii/",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's Instagram profile"
      }, ' ', React.createElement("i", { className: "fab fa-instagram" })))
    );
  };
  
/***********************
  Main Component
 ***********************/

class App extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", { menuState: false });
    _defineProperty(this, "toggleMenu", () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive'
      }));
    });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));

  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';
      else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
      else navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          });
        }
      }
    })();
  }
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
