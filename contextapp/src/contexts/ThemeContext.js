import React, { createContext, Component } from 'react';

export const ThemeContext = createContext(); //this will create context for us and be stored in ThemeContext

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee'}, //props describing color of the theme
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
     } //this will be the shared data that we want to supply to different comps

    render() { 
        return ( 
//this is what is ultimately going to wrap the different Components so the data can be used inside Components
//this refers to the children that 'class ThemeContextProvider extends Component' will wrap, which is the Navbar and booklist
            <ThemeContext.Provider value={{...this.state}}> 
                {this.props.children}
            </ThemeContext.Provider>
         );
    }
}
 
export default ThemeContextProvider;