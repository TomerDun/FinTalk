import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChartBar, IconHome, IconUsers } from '@tabler/icons-react';
import { useState } from 'react';
import classes from './Navbar.module.css';

const links = [
    { link: '/dashboard', label: 'Dashboard', icon: <IconHome size={20} /> },
    { link: '/feed', label: 'Feed', icon: <IconUsers size={20} /> },
    { link: '/statistics', label: 'Statistics', icon: <IconChartBar size={20} /> },
];

export function Navbar() {

    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <a
            key={link.label}
            // href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
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
                <h1>FinTalk Logo</h1>
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}
