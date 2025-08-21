import { Burger, Container, Group, Image, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChartBar, IconHome, IconLogin2, IconLogout2, IconUsers } from '@tabler/icons-react';
import { NavLink, useNavigate } from 'react-router';
import finTalkLogo from '../../assets/fin-talk-logo.png';
import classes from './Navbar.module.css';

type Item = {
    link: string,
    label: string,
    icon: any
}

const links: Item[] = [
    { link: '/', label: 'Dashboard', icon: <IconHome size={20} /> },
    { link: '/feed', label: 'Feed', icon: <IconUsers size={20} /> },
    { link: '/statistics', label: 'Statistics', icon: <IconChartBar size={20} /> },
    { link: '/login', label: 'Login', icon: <IconLogin2 size={20} /> },
    // { link: '/login', label: 'Logout', icon: <IconLogout2 size={20} /> },
];

export function Navbar() {

    const [opened, { toggle }] = useDisclosure(false);
    const navigate = useNavigate()

    const items = links.map((link) => (
        <NavLink
            key={link.label}
            to={link.link}
            className={({ isActive }) => 
                `${classes.link} ${isActive ? classes.linkActive : ''}`
            }
            onClick={() => {
                // Close mobile menu if open
                if (opened) toggle();
            }}
        >
            <span className={classes.itemContext}>
                {link.icon}
                {link.label}
            </span>
        </NavLink>
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
