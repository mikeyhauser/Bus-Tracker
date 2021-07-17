// import React, { Component } from 'react';
// import { createMedia } from '@artsy/fresnel';
// import PropTypes from 'prop-types';
// import { 
//     Menu,
//     Segment, 
//     Button, 
//     Visibility, 
//     Container, 
//     Sidebar, 
//     Icon } from 'semantic-ui-react';
// import { NavLink, Link } from 'react-router-dom';
// ​
// const { MediaContextProvider, Media } = createMedia({
//     breakpoints: {
//       mobile: 320,
//       tablet: 768,
//       computer: 992,
//       largeScreen: 1024,
//       wideScreen: 1920
//     },
//   });
// ​
// export default class Navbar extends Component {
//     state = {};
//     // state = { activeItem: 'home' };
  
//     handleItemClick = (e, { name }) => this.setState({ activeItem: name });
// ​
//     hideFixedMenu = () => this.setState({ fixed: false });
//     showFixedMenu = () => this.setState({ fixed: true });
  
//     render() {
//         const { children } = this.props;
//         const { activeItem, fixed } = this.state;
  
//       return (
//         <Media greaterThan='mobile'>
//             <Visibility
//             once={false}
//             onBottomPassed={this.showFixedMenu}
//             onBottomPassedReverse={this.hideFixedMenu}
//             >
//             <Segment 
//             basic
//             inverted
//             textAlign='center'
//             padded='very'
//             style={{ minHeight: 125, padding: '2em 1em' }}
//             vertical>
//                 <Menu
//                     stackable
//                     fixed={fixed ? 'top' : null}
//                     inverted={!fixed}
//                     pointing={!fixed}
//                     secondary={!fixed}
//                     size='large'>
//                     <Menu.Item
//                         as={NavLink} to='/'
//                         name='home'
//                         active={activeItem === 'home'}
//                         onClick={this.handleItemClick}
//                     />
//                     <Menu.Item
//                         as={NavLink} to='/breakdown'
//                         name='breakdown'
//                         active={activeItem === 'breakdown'}
//                         onClick={this.handleItemClick}
//                     />
//                     <Menu.Item
//                         as={NavLink} to='/rosterStatus'
//                         name='rosterStatus'
//                         active={activeItem === 'rosterStatus'}
//                         onClick={this.handleItemClick}
//                     />
//                     <Menu.Item
//                         as={NavLink} to='/unassigned'                    name='unassigned'
//                         active={activeItem === 'unassigned'}
//                         onClick={this.handleItemClick}
//                     />
//                     <Menu.Item position='right'>
//                         <Button as={ Link } to='/Login' inverted={!fixed}>
//                             Log-in
//                         </Button>
//                         <Button as={ Link } to='/Signup' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
//                             Sign Up
//                         </Button>
//                     </Menu.Item>
//                 </Menu>
//             </Segment>
//             </Visibility>
//             {children}
//         </Media>
//       )
//     }
//   }
// ​
//   class MobileContainer extends Component {
//     state = {};
  
//     handleSidebarHide = () => this.setState({ sidebarOpened: false });
  
//     handleToggle = () => this.setState({ sidebarOpened: true });
  
//     render() {
//       const { children } = this.props;
//       const { sidebarOpened } = this.state;
//       const { activeItem } = this.state;
  
//       return (
//         <Media as={Sidebar.Pushable} at='mobile'>
//           <Sidebar.Pushable>
//             <Sidebar
//               as={Menu}
//               animation='overlay'
//               icon='labeled'
//               inverted
//               onHide={this.handleSidebarHide}
//               vertical
//               visible={sidebarOpened}
//               width='thin'
//             >
//                 <Menu.Item
//                     as={NavLink} to='/'
//                     name='home'
//                     active={activeItem === 'home'}
//                     onClick={this.handleItemClick}
//                 />
//                 <Menu.Item
//                     as={NavLink} to='/breakdown'
//                     name='breakdown'
//                     active={activeItem === 'breakdown'}
//                     onClick={this.handleItemClick}
//                 />
//                 <Menu.Item
//                     as={NavLink} to='/rosterStatus'
//                     name='rosterStatus'
//                     active={activeItem === 'rosterStatus'}
//                     onClick={this.handleItemClick}
//                 />
//                 <Menu.Item
//                     as={NavLink} to='/unassigned'                    name='unassigned'
//                     active={activeItem === 'unassigned'}
//                     onClick={this.handleItemClick}
//                 />
//             </Sidebar>
  
//             <Sidebar.Pusher dimmed={sidebarOpened}>
//               <Segment
//                 inverted
//                 textAlign='center'
//                 style={{ minHeight: 350, padding: '1em 0em' }}
//                 vertical
//               >
//                 <Container>
//                   <Menu inverted pointing secondary size='large'>
//                     <Menu.Item onClick={this.handleToggle}>
//                       <Icon name='sidebar' />
//                     </Menu.Item>
//                     <Menu.Item position='right'>
//                       <Button as= { Link } to='/Login' inverted>
//                         Log-in
//                       </Button>
//                       <Button as={ Link } to='/Signup' inverted style={{ marginLeft: '0.5em' }}>
//                         Sign Up
//                       </Button>
//                     </Menu.Item>
//                   </Menu>
//                 </Container>
//               </Segment>
  
//               {children}
//             </Sidebar.Pusher>
//           </Sidebar.Pushable>
//         </Media>
//       )
//     }
//   };
  
//   MobileContainer.propTypes = {
//     children: PropTypes.node,
//   };
  
//   const ResponsiveContainer = ({ children }) => (
//     /* Heads up!
//      * For large applications it may not be best option to put all page into these containers at
//      * they will be rendered twice for SSR.
//      */
//     <MediaContextProvider>
//       <MobileContainer>{children}</MobileContainer>
//     </MediaContextProvider>
//   );
  
//   ResponsiveContainer.propTypes = {
//     children: PropTypes.node,
//   };