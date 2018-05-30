import React, { Component } from 'react';
import { classNames } from '../../utils';
import { Container } from '../../components';
import { NavProvider } from './components/Context';
import Brand from './components/Brand';
import Routes from './components/Routes';
import Search from './components/Search';
import Section from './components/Section';
import Toggle from './components/Toggle';

import * as styles from './Nav.scss';

class Nav extends Component {
  static Brand = Brand;
  static Routes = Routes;
  static Search = Search;
  static Section = Section;
  static Toggle = Toggle;

  render() {
    const { children, fixed } = this.props;
    const navClassName = classNames(
      styles.Nav,
      fixed && styles.fixedNav,
    );

    return (
      <NavProvider>
        <nav className={styles.Nav}>
          <Container>
            <div className={styles.wrapper}>{children}</div>
          </Container>
        </nav>
      </NavProvider>
    );
  }
}

export default Nav;

// import * as React from 'react';
// import { connect } from 'react-redux';
// import Link from 'next/link';
// import Router from 'next/router';
// import * as actions from '../../actions';
// import { classNames } from '../../utils';
// import * as styles from './Nav.scss';
// import { Container } from '../';

// class Nav extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       term: '',
//     };
//   }

//   onChange(event) {
//     this.setState({
//       term: event.currentTarget.value,
//     });
//   }

//   onSubmit(event) {
//     const { term } = this.state;
//     const { onSearch } = this.props;
//     const callback = () => {
//       Router.push('/search-results');
//     };

//     event.preventDefault();
//     onSearch(term, callback);
//   }

//   render() {
//     const { brand, routes, onSearch } = this.props;

//     const brandMarkup = brand && (
//       <Link href={brand.route}>
//         <a className={styles.brand}>{brand.title}</a>
//       </Link>
//     );

//     const xClassName = classNames(
//       styles.hamburger,
//       styles.toggler,
//     );

//     const xIconClassName = classNames(
//       styles.fa,
//       styles['fa-bars'],
//     );

//     const xMarkup = (
//       <div>
//         <label htmlFor="hamburger" className={xClassName}>
//           <i className={xIconClassName} />
//         </label>
//       </div>
//     );

//     const routerClassName = classNames(
//       styles['-material'],
//       styles['navbar-menu'],
//       styles.routerList,
//     );

//     const routeMarkup = routes && (
//       <ul className={routerClassName}>
//         {routes.map((route, idx) => {
//           const { name, to } = route;
//           return (
//             <li className={styles.routerItem} key={idx}>
//               <Link href={to}>
//                 <a className={styles.routerLink}>{name}</a>
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     );

//     const searchIconClassName = classNames(
//       styles.fa,
//       styles['fa-search'],
//       styles.searchIcon,
//     );

//     const searchMarkup = onSearch && (
//       <form
//         className={styles.search}
//         onSubmit={this.onSubmit.bind(this)}
//       >
//         <span
//           onClick={this.onSubmit.bind(this)}
//           className={searchIconClassName}
//         />
//         <input
//           className={styles.searchInput}
//           placeholder="Search term"
//           value={this.state.term}
//           onChange={this.onChange.bind(this)}
//         />
//       </form>
//     );

//     const navHeadingClassName = classNames;

//     return (
//       <header className={styles.nav}>
//         <Container>
//           <nav className={styles.container}>
//             <div className={styles['nav-heading']}>
//               {brandMarkup}
//               {xMarkup}
//             </div>
//             <div className={styles.test}>
//               <input
//                 type="checkbox"
//                 id="hamburger"
//                 role="button"
//               />
//               <div className={styles.menu}>
//                 {routeMarkup}
//                 <div className={styles.temp}>
//                   {searchMarkup}
//                 </div>
//               </div>
//             </div>
//           </nav>
//         </Container>
//       </header>
//     );
//   }
// }

// export default Nav;
