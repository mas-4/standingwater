import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import styled, { ThemeProvider } from 'styled-components';
import { breakpoints } from "../global/breakpoints";

import Header from './header';
import Footer from './footer';
import meta from '../assets/data/meta';
import theme from '../global/theme';

import '../assets/css/reset.css';
import '../assets/css/style.css';
import '../assets/css/animations.css';

const Body = styled.main`
  width: 60%;
  margin: 0 auto;
  font-family: ${(props) => props.theme.fonts.Text};
  ${breakpoints.vp10} { width: 80%; }
  ${breakpoints.vp7} { width: 90%; }
  ${breakpoints.vp3} { width: 95%; }
`

const Layout = ({ children }) => {
  const content = (
    <ThemeProvider theme={theme}>
      <Body>
        <Header />
        <div style={{ clear: "both" }}>{children}</div>
        <Footer />
      </Body>
    </ThemeProvider>
  )

  return (
    <StaticQuery
      query={graphql`query SiteTitleQuery { site { siteMetadata { title } } }`}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={meta}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}
export default Layout;
