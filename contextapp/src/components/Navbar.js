import React, { Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
    //whatever context we want to consume INSIDE this componet
    static contextType = ThemeContext;
    //look up the cmonp tree, the first time it finds a provider for this context.
    render() { 
        console.log(this.context)
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <nav style={{background: theme.ui, color: theme.syntax}}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
          );
    }
}
 
export default Navbar;