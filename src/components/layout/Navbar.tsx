import { Burger, Container, Group, Image, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChartBar, IconHome, IconUsers } from '@tabler/icons-react';
import { useState } from 'react';
import finTalkLogo from '../../assets/fin-talk-logo.png';
import classes from './Navbar.module.css';
import { useNavigate } from 'react-router';

type Item = {
    link: string,
    label: string,
    icon: any
}

const links: Item[] = [
    { link: '/', label: 'Dashboard', icon: <IconHome size={20} /> },
    // { link: '/dashboard', label: 'Dashboard', icon: <IconHome size={20} /> },
    { link: '/feed', label: 'Feed', icon: <IconUsers size={20} /> },
    // { link: '/', label: 'Feed', icon: <IconUsers size={20} /> },
    { link: '/statistics', label: 'Statistics', icon: <IconChartBar size={20} /> },
];

export function Navbar() {

    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const navigate = useNavigate()

    const items = links.map((link) => (
        <a
            key={link.label}
            // href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
                navigate(link.link);
            }}
        >
            <span className={classes.itemContext}>
                {link.icon}
                {link.label}
            </span>
        </a>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Image
                    src={finTalkLogo}
                    alt="FinTalk Logo"
                    h={40}
                    w="auto"
                    fit="contain"
                    radius="50%"
                />
                {/* full size menu */}
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>

                {/* burger menu */}
                <Menu
                    shadow="md"
                    opened={opened}
                    onChange={toggle}
                    onClose={() => opened && toggle()}
                >
                    <Menu.Target>
                        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" title='navigate' />
                    </Menu.Target>
                    <Menu.Dropdown>
                        {links.map(link => (
                            <Menu.Item
                                key={link.label}
                                leftSection={link.icon}
                                onClick={() => {
                                    setActive(link.link);
                                    toggle();
                                    navigate(link.link)
                                }}
                            >
                                {link.label}
                            </Menu.Item>))}
                    </Menu.Dropdown>
                </Menu>
            </Container>
        </header >
    );
}
