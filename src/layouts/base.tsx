import React from 'react';
import clsx from 'clsx';
// import { navigate } from 'gatsby';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import BackTop from '@comps/backtop';
import '@styles/layout.scss';

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
  title?: string;
}

export default function Layout(props: LayoutProps) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{props.title || `lencx's English `}</title>
        <meta name="description" content="" />
      </Helmet>
      <div className={clsx('container', props.className)}>
        <header>
          {/* <img
            className="imglogo"
            src={require('../static/logo.png').default}
            onClick={() => navigate(`/`)}
            alt="logo"
          /> */}
          logo
        </header>
        <main>
          <div className="content">{props.children}</div>
        </main>
        <footer>
          <div className="license">
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
              target="_blank"
            >
              <img
                style={{ width: 60, height: 21 }}
                src={require('@icons/license.svg').default}
                alt="License"
              />
            </a>
          </div>
          <div className="copyright">
            <span>Copyright © 2022-present</span>
            <a
              className="owner"
              href="https://github.com/lencx/english"
              target="_blank"
            >
              lencx/english
            </a>
            {'.'}
          </div>
        </footer>
      </div>
      <BackTop />
    </HelmetProvider>
  );
}
