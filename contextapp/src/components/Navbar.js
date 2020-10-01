import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

// class Navbar extends Component {
//     render() { 
//         //were using the themecontext.consumer and this is consuming context: themecontext.  
//         //using a function that takes context obj as a param, so we have access to the context obj 
//         return (
//             <AuthContext.Consumer>{(authContext) => (
//                 <ThemeContext.Consumer>{(themeContext) => {
//                     const { isAuthenticated, toggleAuth } = authContext;
//                     const { isLightTheme, light, dark } = themeContext;
//                     const theme = isLightTheme ? light : dark;
//                     return(
//                         <nav style={{background: theme.ui, color: theme.syntax}}>
//                         <h1>Context App</h1>
//                         <div onClick={toggleAuth}>
//                         { isAuthenticated ? 'Logged In' : 'Logged Out' }
//                         </div>
//                         <ul>
//                             <li>Home</li>
//                             <li>About</li>
//                             <li>Contact</li>
//                         </ul>
//                     </nav> 
//                     )
//                 }}</ThemeContext.Consumer>
//             )}</AuthContext.Consumer>
//         );
//     }
// }
//now we have access to two different contexts inside of this components: AUTH & THEME

const Navbar = () => {
    
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    //destructure these props from useContext obj. we want to get all of these props from the ThemeContext 
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{background: theme.ui, color: theme.syntax}}>
        <h1>Context App</h1>
        <div onClick={toggleAuth}>
        { isAuthenticated ? 'Logged In' : 'Logged Out' }
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    );
}

export default Navbar;