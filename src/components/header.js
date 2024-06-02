import * as React from "react"
import { Link } from "gatsby"
import avatar from '../images/avatar.png'
import './Header.css'


class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><button><img src={avatar} />Home</button></Link>
          <Link to="/portfolio"><button>Portfolio</button></Link>
          <Link to="/publications"><button>Publications</button></Link>
          <Link to="/resume"><button>Résumé</button></Link>
        </div>
      </div>
    )
  }
}

export default Header
