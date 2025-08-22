import { Burger, Container, Group, Image, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChartBar, IconHome, IconLogin2, IconLogout2, IconUsers } from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import finTalkLogo from '../../assets/fin-talk-logo.png';
import { profileStore } from '../../stores/ProfileStore';
import { CustomNavLink } from './CustomNavLink';
import classes from './Navbar.module.css';

export type Item = {
    link: string,
    label: string,
    icon: any
}

const links: Item[] = [
    { link: '/', label: 'Dashboard', icon: <IconHome size={20} /> },
    { link: '/feed', label: 'Feed', icon: <IconUsers size={20} /> },
    { link: '/statistics', label: 'Statistics', icon: <IconChartBar size={20} /> },
];

const loginItem = { link: '/login', label: 'Login', icon: <IconLogin2 size={20} /> }
const logoutItem = { link: '/login', label: 'Logout', icon: <IconLogout2 size={20} /> }

export function Navbar() {

    const [opened, { toggle }] = useDisclosure(false);
    const navigate = useNavigate()

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
                    {links.map((link) => (
                        <CustomNavLink
                            key={link.label}
                            item={link}
                            opened={opened} toggle={toggle} />
                    ))}
                    {profileStore.loggedInUser
                        ? <div onClick={() => profileStore.setUserLoggedOut()}>
                            <CustomNavLink item={logoutItem} opened={opened} toggle={toggle} />
                        </div>
                        : <CustomNavLink item={loginItem} opened={opened} toggle={toggle} />
                    }
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
                        {profileStore.loggedInUser
                                ?<Menu.Item
                                    key={logoutItem.label}
                                    leftSection={logoutItem.icon}
                                    onClick={() => {
                                        toggle();
                                        profileStore.setUserLoggedOut()
                                        navigate(logoutItem.link)
                                    }}
                                >
                                    {logoutItem.label}
                                </Menu.Item>
                                :<Menu.Item
                                    key={loginItem.label}
                                    leftSection={loginItem.icon}
                                    onClick={() => {
                                        toggle();
                                        navigate(loginItem.link)
                                    }}
                                >
                                    {loginItem.label}
                                </Menu.Item>
                        }
                    </Menu.Dropdown>
                </Menu>
            </Container >
        </header >
    );
}
