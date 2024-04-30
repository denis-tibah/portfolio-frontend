/* eslint-disable react/no-danger */
import {
  Input,
  Select,
  Option,
  Stack,
  IconButton,
  Button,
  Typography,
  Avatar,
  Box,
  Divider,
} from '@mui/joy';
import React, { useEffect, useMemo, useState } from 'react';
import { IoIosClose, IoIosSearch, IoIosShuffle } from 'react-icons/io';
import { TfiHeartBroken } from 'react-icons/tfi';
import {
  Interaction,
  interactionDetails,
  Platform,
  platformDetails,
  Project,
  rank,
} from 'assets/Projects';
import {
  getDeviations,
  getFigmaFiles,
  getRepositories,
} from 'utils/Api';
import moment from 'moment';
import { FiCode, FiFile, FiPlay } from 'react-icons/fi';
import { useMobileMode } from 'components/Responsive';

function ProjectCard({
  project,
  open,
  onClick,
}: {
  project: Project;
  open: boolean;
  onClick: () => void;
}) {
  const mobile = useMobileMode();

  const footer = useMemo(
    () => `published to ${platformDetails[project.platform].label}${
      project.createdAt ? ` ${moment(project.createdAt).fromNow()}` : ''
    }${
      project.updatedAt ? `, updated ${moment(project.updatedAt).fromNow()}` : ''
    }`,
    [project],
  );

  return (
    <Stack
      id={project.title}
      direction={mobile ? 'column' : 'row'}
      padding={2}
      gap={2}
      onClick={() => onClick()}
      className={open ? 'open' : ''}
      alignItems="stretch"
      flexWrap="wrap"
      sx={(theme) => ({
        transition: 'all ease .2s',
        position: 'relative',
        cursor: 'pointer',
        borderRadius: '1rem',
        backgroundColor: theme.palette.background.body,
        border: '1px solid transparent',
        overflow: 'hidden',
        '&.open': {
          marginY: '1rem',
        },
        '&:hover, &.open': {
          zIndex: 1,
          border: `1px solid ${theme.palette.text.primary}`,
          filter: `drop-shadow(0 .4rem 0 ${theme.palette.text.primary})`,
          transform: 'translateY(-.4rem)',
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '-.4rem',
            left: 0,
            width: '100%',
            height: '.4rem',
            backgroundColor: 'transparent',
          },
          '& .illustration': {
            opacity: 1,
          },

          '& .icon': {
            backgroundColor: theme.palette.text.primary,
            color: theme.palette.background.level1,
          },

          '& + hr': {
            display: 'none',
          },
        },
      })}
    >
      <Stack
        direction={mobile ? 'row' : 'column'}
        gap={mobile ? 2 : 1}
      >
        <Avatar
          component="span"
          className="icon"
          variant="plain"
          size="md"
          sx={{ borderRadius: '.5rem', transition: 'all ease .2s', zIndex: 1 }}
        >
          {platformDetails[project.platform].icon({ size: '1.3rem' })}
        </Avatar>
        <Stack
          component="div"
          className={`interactions${open ? ' open' : ''}`}
          direction={mobile ? 'row' : 'column'}
          gap={mobile ? 2 : 1}
          sx={{
            transition: 'all ease .4s',
            opacity: 0,
            maxHeight: 0,
            transform: `${mobile ? 'translateX(-100%)' : 'translateY(-100%)'} scale(.8)`,
            '&.open': {
              opacity: 1,
              maxHeight: '100vmax',
              transform: `${mobile ? 'translateX(0)' : 'translateY(0)'} translateY(0) scale(1)`,
            },
          }}
        >
          {Object.entries(interactionDetails)
            .map(([key, item]) => (project.interactions !== undefined
            && Object.keys(project.interactions).includes(key) ? (
              <Stack
                direction={mobile ? 'row' : 'column'}
                key={key}
                alignItems="center"
              >
                <Stack
                  direction={mobile ? 'row' : 'column'}
                  alignItems="center"
                  gap={0.8}
                  sx={{
                    fontSize: mobile ? '1rem' : '0.8rem',
                    padding: '.3rem .1rem',
                    lineHeight: 0.9,
                  }}
                >
                  {item.icon({})}
                  <span style={{ fontSize: '0.9em' }}>
                    {project.interactions[key as Interaction]}
                  </span>
                </Stack>
              </Stack>
              ) : null))}
        </Stack>
      </Stack>

      <Stack
        zIndex={1}
        gap={0.5}
        flex={1}
        sx={{
          minWidth: 'min(100%, 20rem)',
        }}
      >
        <Typography level="h3" alignItems="baseline">
          {project.title}
          <Typography textColor="text.tertiary" fontWeight="300" marginLeft={1}>
            {platformDetails[project.platform].sublabel.toLocaleLowerCase()}
          </Typography>
        </Typography>
        <Typography
          level="body2"
          sx={{
            flex: 1,
            '& p': {
              margin: 0,
            },
          }}
        >
          <span
            dangerouslySetInnerHTML={{ __html: project.description || '' }}
          />
        </Typography>
        <Typography level="body3" marginTop={1}>
          {project.language ? (
            <>
              <Typography textColor="text.primary">
                {project.language}
              </Typography>
              {' project '}
            </>
          ) : 'Project '}
          {footer}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        zIndex={1}
        gap={1}
        alignItems="start"
        marginTop={mobile ? '.5rem' : 'initial'}
        justifyContent={mobile ? 'end' : 'initial'}
        width={mobile ? '100%' : 'initial'}
      >
        <Button
          component="a"
          href={project.source}
          target="_blank"
          size={mobile ? 'md' : 'sm'}
          color="neutral"
          variant="outlined"
          sx={(theme) => ({
            transition: 'all ease .2s, height ease .4s',
            borderRadius: '.5rem',
            width: 'fit-content',
            flexShrink: 0,
            padding: '1 2',
            background: theme.palette.background.body,

            '&:hover': {
              background: theme.palette.text.primary,
              color: theme.palette.background.level1,
              borderColor: theme.palette.text.primary,
            },
            '&:active': {
              transform: 'scale(.98)',
            },
          })}
          startDecorator={project.language !== undefined ? (<FiCode />) : (<FiFile />)}
        >
          {project.language !== undefined ? 'Explore source' : 'Show project'}
        </Button>
        {project.demo && (
          <Button
            component="a"
            href={project.demo}
            target="_blank"
            size={mobile ? 'md' : 'sm'}
            color="neutral"
            variant="outlined"
            sx={(theme) => ({
              transition: 'all ease .2s',
              borderRadius: '.5rem',
              width: 'fit-content',
              flexShrink: 0,
              padding: '1 2',

              borderColor: theme.palette.text.primary,
              background: theme.palette.text.primary,
              color: theme.palette.background.level1,
              '&:hover': {
                backgroundColor: theme.palette.background.body,
                color: theme.palette.text.primary,
              },
              '&:active': {
                transform: 'scale(.98)',
              },
            })}
            startDecorator={<FiPlay />}
          >
            Run demo
          </Button>
        )}
      </Stack>
      {project.thumbnail && (
        <Box
          component="img"
          src={project.thumbnail}
          alt={project.title}
          className="illustration"
          sx={{
            transition: 'all ease .2s',
            position: 'absolute',
            minHeight: '100%',
            minWidth: '61%',
            left: '40%',
            top: '50%',
            WebkitMaskImage:
              'linear-gradient(to left,black 10%,transparent 80%)',
            maskImage: 'linear-gradient(to left,black 10%,transparent 80%)',
            opacity: 0,
            filter: 'blur(2px) brightness(.8)',
            transform: 'translateY(-50%)',
          }}
        />
      )}
    </Stack>
  );
}

export default function Directory() {
  const [openProject, setOpenProject] = useState('');

  const mobile = useMobileMode();

  const [search, setSearch] = useState('');
  const [platform, setPlatform] = useState<string | null>(null);

  const [projects, setProjects] = useState([] as Project[]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    Promise.all([getRepositories('BSoDium'), getDeviations(), getFigmaFiles()])
      .then(([repositories, deviations, figmaFiles]) => {
        setProjects([
          ...repositories
            .filter((project) => project.topics.includes('featured'))
            .map(
              (repository) => ({
                title: repository.name,
                description: repository.description,
                source: repository.html_url,
                demo: repository.homepage,
                language: repository.language,
                platform: 'github',
                createdAt: repository.created_at,
                updatedAt: repository.updated_at,
                interactions: {
                  stars: repository.stargazers_count,
                  forks: repository.forks,
                },
              } as Project),
            ),
          ...deviations,
          ...figmaFiles,
        ]);
      })
      .catch(() => {
        setError(
          new Error('Failed to load projects, check your internet connection.'),
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Filter projects based on search and selected platform
  const filteredProjects = useMemo(() => projects.filter(
    (project) => (search === ''
          || project.title.toLowerCase().includes(search.toLowerCase())
          || (project.description
            && project.description
              .toLowerCase()
              .includes(search.toLowerCase())))
        && (platform === null || project.platform === platform),
  ), [projects, search, platform]);

  // Pick a random project from the list and open it, then scroll to it
  const randomize = () => {
    const randomIndex = Math.floor(Math.random() * projects.length);
    const randomProject = projects[randomIndex];
    setOpenProject(randomProject.title);
    document.getElementById(randomProject.title)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  return (
    <Stack paddingY={1} width="100%">
      <Stack direction="row" flexWrap="wrap" gap={1}>
        <Input
          size="lg"
          placeholder="Search for a project"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          startDecorator={<IoIosSearch />}
          sx={(theme) => ({
            transition: 'all ease .2s',
            width: mobile ? '100%' : 'min(100%, 30rem)',
            cursor: 'pointer',
            borderRadius: '0',
            outline: 'none',
            backgroundColor: theme.palette.background.body,
            '--Input-focusedHighlight': theme.palette.text.secondary,
            '&:before': {
              transition: 'all ease .2s',
            },

            '&:has(:focus)': {
              borderRadius: mobile ? '100vmax' : '100vmax 0 0 100vmax',
            },
          })}
        />
        <Select
          placeholder="Filter by platform"
          color="neutral"
          variant="outlined"
          sx={(theme) => ({
            transition: 'all ease .2s',
            borderRadius: '0',
            flex: mobile ? 1 : 'initial',
            backgroundColor: theme.palette.background.body,
            width: '12rem',
            '& + ul': {
              borderRadius: '0',
              padding: 0,
            },
          })}
          value={platform}
          onChange={(e, newValue) => setPlatform(newValue)}
          endDecorator={
            platform !== null && (
              <IconButton
                variant="plain"
                color="neutral"
                sx={{ fontSize: '1.5rem' }}
                onClick={() => setPlatform(null)}
              >
                <IoIosClose />
              </IconButton>
            )
          }
          indicator={platform !== null ? null : undefined}
          renderValue={(option) => {
            const details = platformDetails[option?.value as Platform];
            return (
              option
              && details && (
                <Stack direction="row" gap={1} alignItems="center">
                  <details.icon />
                  {option.label}
                </Stack>
              )
            );
          }}
        >
          {Object.entries(platformDetails).map(([key, item]) => (
            <Option
              color="neutral"
              component={Stack}
              key={key}
              value={key}
              direction="row"
              gap={1}
            >
              <item.icon />
              {item.label}
            </Option>
          ))}
        </Select>
        <Button
          size="lg"
          variant="outlined"
          color="neutral"
          startDecorator={<IoIosShuffle style={{ fontSize: '1.5rem' }} />}
          onClick={randomize}
          sx={(theme) => ({
            transition: 'all ease .2s',
            position: 'relative',
            borderRadius: '0',
            width: 'fit-content',
            flexShrink: 0,
            paddingInline: '1rem',

            borderColor: theme.palette.text.primary,
            background: theme.palette.text.primary,
            color: theme.palette.background.level1,
            '& > span > svg': {
              transition: 'all ease .2s',
            },
            '&:hover': {
              backgroundColor: theme.palette.background.body,
              color: theme.palette.text.primary,
              '& > span > svg': {
                transform: 'rotate3d(1, 0, 0, 540deg) scale(1.2)',
              },
            },
            '&:active': {
              transform: 'scale(.98)',
            },
          })}
        >
          Randomize
        </Button>
      </Stack>
      <Stack paddingBlockStart={4}>
        {filteredProjects
          .sort((a, b) => rank(b, filteredProjects) - rank(a, filteredProjects))
          .map((project, index) => (
            <>
              <ProjectCard
                key={project.title}
                project={project}
                open={openProject === project.title}
                onClick={() => (openProject === project.title ? setOpenProject('') : setOpenProject(project.title))}
              />
              {index < filteredProjects.length - 1 && (<Divider />)}
            </>
          ))}
        {filteredProjects.length === 0 && !loading && (
        <Stack direction="row" justifyContent="center" alignItems="center" gap={5} padding={15}>
          <TfiHeartBroken size="5rem" />
          <Stack direction="column" gap={1} maxWidth="25rem">
            <Typography level="h3">
              This usually never happens...
            </Typography>
            <Typography level="body2">
              We couldn&apos;t find any projects matching your search criteria. Try
              a different search term or platform.
            </Typography>
          </Stack>
        </Stack>
        )}
      </Stack>
    </Stack>
  );
}