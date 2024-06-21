import { Card, Link, Typography } from '@mui/joy';
import React from 'react';
import { animated } from '@react-spring/web';
import { useMobileMode } from './Responsive';

export default function Copyright() {
  const mobile = useMobileMode();

  const isAuthorDomain = ['denis-tibah.vercel.app', 'www.denis-tibah.vercel.app'].includes(window.location.hostname);

  return isAuthorDomain ? null : (
    <Card
      component={animated.div}
      sx={(theme) => ({
        position: 'fixed',
        top: 'var(--nav-safe-area-inset-top, 0)',
        right: '0',
        width: mobile ? '100vw' : undefined,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 0,
        borderBottomLeftRadius: mobile ? undefined : '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: `color-mix(in srgb, ${theme.palette.background.body}, transparent 20%)`,
        backdropFilter: 'blur(10px)',
        overflow: 'auto',
      })}
    >
      <Typography
        level="body2"
        sx={{
          whiteSpace: 'nowrap',
        }}
      >
        Credit to
        {' '}
        <Link href="https://github.com/denis-tibah" target="_blank">
          Denis
        </Link>
        {' '}
        for the
        {' '}
        <Link href="https://denis-tibah.vercel.app/" target="_blank">
          original design
        </Link>
        {' '}
        and
        {' '}
        <Link href="https://github.com/denis-tibah/portfolio-frontend" target="_blank">
          code
        </Link>
        .
      </Typography>
    </Card>
  );
}
