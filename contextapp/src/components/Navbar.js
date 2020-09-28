import React, { Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {

    render() { 
        //were using the themecontext.consumer and this is consuming context: themecontext.  
        //using a function that takes context obj as a param, so we have access to the context obj 
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return(
                    <nav style={{background: theme.ui, color: theme.syntax}}>
                        <h1>Context App</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                )
            }}</ThemeContext.Consumer>
        );
    }
}
 
export default Navbar;