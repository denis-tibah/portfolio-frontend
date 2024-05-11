import React, { useEffect, useMemo, useState } from 'react';

import {
  Avatar, Button, Stack, Typography,
  useColorScheme,
} from '@mui/joy';
import { RiArrowRightSLine } from 'react-icons/ri';
import { IoReaderOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import greeting from 'utils/Greeting';
import { ATypography } from 'App';
import details from 'assets/Details';
import { useMobileMode } from './Responsive';
import TypeWriter from './TypeWriter';

export const visitors = [
  'stranger',
  'collaborator',
  'fellow developer',
  'fellow human',
  'visitor',
  'friend',
];

export default function Header() {
  const mobile = useMobileMode();
  const [visitor, setVisitor] = useState(visitors[0]);
  const [greetingLine, setGreetingLine] = useState(greeting());

  const { colorScheme } = useColorScheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dark = useMemo(() => colorScheme === 'dark', [colorScheme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitor((prev) => {
        const nextIndex = (visitors.indexOf(prev) + 1) % visitors.length;
        return visitors[nextIndex];
      });
      setGreetingLine(greeting());
    }, 3000);
    return () => { clearInterval(interval); };
  }, [mobile]);

  const currentCompany = useMemo(() => details.experience.find((experience) => experience.end === 'Present') || undefined, []);

  return (
    <Stack
      gap="20px"
      height={mobile ? '25rem' : '18rem'}
      alignItems={mobile ? 'center' : 'flex-start'}
      sx={(theme) => ({
        position: 'relative',
        '&::before': mobile ? {} : {
          content: '""',
          position: 'absolute',
          top: 'calc(70px + 33px)',
          left: '-50px',
          height: 'calc(100% + 80px - 70px - 33px)',
          width: '2px',
          background: `linear-gradient(to bottom, color-mix(in srgb, ${theme.palette.primary[500]}, transparent 30%), ${theme.palette.primary[500]} 30%)`,
        },
      })}
    >
      <Button
        size="lg"
        component={Link}
        variant="outlined"
        to="/resume"
        startDecorator={(
          <Avatar size="lg" color="primary" sx={(theme) => ({ border: `1px solid rgba(${theme.palette.primary.mainChannel} / 0.4)` })}>
            <IoReaderOutline />
          </Avatar>
          )}
        endDecorator={(
          <RiArrowRightSLine size="1.3em" />
          )}
        sx={(theme) => ({
          '&:not(:hover)': {
            backgroundColor: `color-mix(in srgb, ${theme.palette.primary.softBg}, transparent 50%)`,
          },
          '&:hover, &:active': {
            boxShadow: `0 0 40px 5px rgba(${theme.vars.palette.primary.mainChannel} / 0.2)`,
            '& > span > svg': {
              transform: 'translateX(.6rem) scale(1.2)',
              filter: `drop-shadow(-.3rem 0 0 rgba(${theme.vars.palette.primary.mainChannel} / 0.7)) drop-shadow(-.3rem 0 0 rgba(${theme.vars.palette.primary.mainChannel} / 0.7))`,
            },
          },
          '&:active > span > svg': {
            transform: 'translateX(.6rem) scale(1.1)',
          },
          '& > span > svg': {
            transition: 'all ease .2s',
          },
          position: 'relative',
          borderColor: `color-mix(in srgb, ${theme.palette.primary[500]}, transparent 30%)`,
          borderWidth: '2px',
          borderRadius: '100px',
          width: 'fit-content',
          backdropFilter: 'blur(5px)',
          transition: 'all ease .2s',
          flexShrink: 0,
          padding: 1,
          paddingRight: 2,
          '&::before': mobile ? {} : {
            position: 'absolute',
            content: '""',
            top: '50%',
            left: '-50px',
            width: '50px',
            height: '70px',
            marginLeft: '-2px',
            border: `2px solid color-mix(in srgb, ${theme.palette.primary[500]}, transparent 30%)`,
            borderBottom: 'none',
            borderRight: 'none',
            borderTopLeftRadius: '50px',
          },
        })}
      >
        <Stack alignItems="flex-start" sx={{ textAlign: 'left' }}>
          <Typography level="body1" textColor="inherit" fontWeight="lg" lineHeight="1.2em">
            Access online resume
          </Typography>
          <Typography level="body2" textColor="inherit" fontWeight="sm" sx={{ opacity: 0.8 }}>
            Dynamic, interactive, and up-to-date
          </Typography>
        </Stack>
      </Button>
      <Typography
        level={mobile ? 'h2' : 'display2'}
        fontWeight="md"
        display="flex"
        justifyContent={mobile ? 'center' : 'initial'}
        textColor={dark ? 'text.primary' : '#051825'}
        textAlign={mobile ? 'center' : 'initial'}
        fontFamily="'Fira Code', monospace"
        flexWrap="wrap"
      >
        <TypeWriter
          typeInterval={20}
        >
          {`${greetingLine} ${visitor}`}
        </TypeWriter>
      </Typography>
      <Typography
        level={mobile ? 'h5' : 'h4'}
        textColor={dark ? 'text.tertiary' : '#3c617b'}
        sx={{
          position: 'relative',
          padding: mobile ? '0 1rem' : 0,
          textAlign: mobile ? 'center' : 'left',
        }}
      >
        The name&apos;s
        {' '}
        <ATypography textColor="primary.plainColor" href="https://www.linkedin.com/in/bsodium/">
          Elliot Négrel-Jerzy
        </ATypography>
        {' '}
        , but you can call me
        {' '}
        <ATypography href="https://github.com/BSoDium">
          BSoDium
        </ATypography>
        . I&apos;m a
        {' '}
        <Typography textColor="text.primary">
          Software engineer
        </Typography>
            &nbsp;
        {currentCompany ? (
          <>
            {'at '}
            <ATypography textColor="text.primary" href={currentCompany.url}>
              {currentCompany.company}
            </ATypography>
            &nbsp;
          </>
        ) : null}
        and an
        {' '}
        <Typography textColor="text.primary">
          Open-source
        </Typography>
        {' '}
        enthusiast.
      </Typography>
    </Stack>
  );
}
