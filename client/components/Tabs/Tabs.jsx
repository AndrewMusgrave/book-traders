import React from 'react';
import Tab from './components/Tab';
import * as styles from './Tabs.scss';

function Tabs({ tabs, selected, onChange }) {
  let content;

  const tabsMarkup = tabs.map((tab, i) => {
    if (i === selected) {
      content = tab.content;
    }

    const active = i === selected;

    return (
      <Tab
        key={i}
        selected={active}
        location={i}
        onClick={onChange}
      >
        {tab.tab}
      </Tab>
    );
  });

  return (
    <>
      <div className={styles.Tabs}>{tabsMarkup}</div>
      {content}
    </>
  );
}

export default Tabs;
