import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import "./appTopBar.css";

interface HeaderProps {
  tabs: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function AppTopBar(props: HeaderProps) {
  const { tabs, title } = props;

  return (
    <React.Fragment>
      <Toolbar>
        <h1 className="title">{title}</h1>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className="toolbar"
      >
        {tabs.map((tab) => (
          <Link
            className="link"
            color="inherit"
            key={tab.title}
            href={tab.url}
          >
            {tab.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
